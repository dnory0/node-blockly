# Blockly for Node.js and Browser via CommonJS module

This is a fork of @mobsya-association/node-blockly and its aim is to bring arabic support, the original @mobsya-association/node-blockly is itself a fork of @mo4islona/node-blockly as mentioned bellow.

Supports the `AESL` generator.

This fork adds AESL support for Thymio (and uses an older blockly version).

## Install
```
npm i ar-node-blockly
```
## Usage

**Browser**

All generators
```js
var Blockly = require('ar-node-blockly/browser');
```


## Generate the ar-node-blockly npm package

In order to generate and publish the ar-node-blockly , you will first need to build the compressed resources in the blockly submodule. 

```bash
cd blockly
python build.py
```

After that this script has been succesfully executed, from the root directory you can launch

```bash
cd .. # if still under the blockly directory
npm publish
```







