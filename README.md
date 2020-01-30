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






