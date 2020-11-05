var Blockly = require('./lib/blockly_compressed_browser');

Blockly.setLocale = function(locale) {
    Blockly.Msg = Object.assign(locale, Blockly.Msg);
    Blockly.Msg = Blockly.Msg();
}

Blockly.utils.getMessageArray_ = function () {
    return Blockly.Msg
}
try {
    var file = window.location.toString()
    var re = new RegExp('.*\.([a-z]{2})\.html');
    console.log(file)
    var language = file.match(re)[1];
    if (!language) {
        language = 'ar'; // arabic should be the default language
        // if (window.navigator.languages) {
        //     language = window.navigator.languages[0];
        // } else {
        //     language = window.navigator.userLanguage || window.navigator.language;
        // }
        // language = language.substring(0, 2);
    }

    if(language == 'de')
        Blockly.setLocale(require('./lib/i18n/de'))
    else if(language == 'fr')
        Blockly.setLocale(require('./lib/i18n/fr'))
    else if(language == 'es')
        Blockly.setLocale(require('./lib/i18n/es'))
    else if(language == 'it')
        Blockly.setLocale(require('./lib/i18n/it'))
	else if(language == 'pl')
        Blockly.setLocale(require('./lib/i18n/pl'))
	else if(language == 'en')
        Blockly.setLocale(require('./lib/i18n/en'))
    else
        Blockly.setLocale(require('./lib/i18n/ar'))
}
catch(e) {
    Blockly.setLocale(require('./lib/i18n/ar'))
}

Blockly.Blocks = Object.assign(Blockly.Blocks, require('./lib/blocks_compressed_browser')(Blockly));

Blockly.AESL = require('./lib/aesl_compressed')(Blockly);
Blockly.JavaScript = require('./lib/javascript_compressed')(Blockly);
// Blockly.Dart = require('./lib/dart_compressed')(Blockly);
// Blockly.PHP = require('./lib/php_compressed')(Blockly);
// Blockly.Python = require('./lib/python_compressed')(Blockly);

module.exports = Blockly;
