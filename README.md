# Blockly for Node.js and Browser via CommonJS module

![Build](https://travis-ci.org/Mobsya/node-blockly.svg?branch=master)

Supports the `AESL` generator.

This fork adds AESL support for Thymio (and uses an older blockly version).

## Install
```
npm i @mobsya-association/node-blockly
```
## Usage

**Browser**

All generators
```js
var Blockly = require('@mobsya-association/node-blockly/browser');
```

## Internationalization

```js
import Blockly from '@mobsya/node-blockly/browser';
import De from '@mobsya/node-blockly/lib/i18n/de';
Blockly.setLocale(De)
```

Dynamic imports also works but Blockly doesn't re-render workspace. You must [re-render it manually after locale loaded](https://github.com/Mobsya/Mobsya.github.io/blob/master/blockly/index.js#L6)

## Generate the @mobsya-association/node-blockly npm package

In order to generate and publish the @mobsya-association/node-blockly , you will first need to build the compressed resources in the blockly submodule. 

```bash
cd blockly
python build.py
```

After that this script has been succesfully executed, from the root directory you can launch

```bash
cd .. # if still under the blockly directory
npm publish
```

### Workaround build-break 31/01/2020 

**Problem**: In order to generate the ****_compressed.js files, build.py uses the online version of the closure compiler. 
Sometime in December 2019 some functions that are used by the blockly source have been removed from the closure libraries.
The online compiler is always aligned with the latest version of this libraries, so trying to compile the thymio-blocly-standalone project generates an error ( caused by the removal of this libraries ).

**Proper fix**: The best fix would be to manually replace all the references to this funcitons from the blockly source code.

**Workaround**: The fix involves a lot of lines of code, temporarly we will just inject the old definition of this libraries inside blockly_compressed.js .
The code to inject is :

```js
goog.isDef=function(a){return void 0!==a};goog.isString=function(a){return"string"==typeof a};goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};
```

This must be placed in:

```js
var $jscomp=$jscomp||{};$jscomp.scope={};var COMPILED=!0,goog=goog||{};goog.global=this||self;
/* inject here */
goog.exportPath_=function(a,b,c) ....
```







