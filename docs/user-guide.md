# User Guide

All information for developers using `vapjs-format` should consult this document.

## Install

```
npm install --save vapjs-format
```

## Usage

```js
const format = require('vapjs-format');

const inputPayload = format.formatInputs('vap_sendTransaction', [{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": new BigNumber("30400"), // 30400,
  "gasPrice": "10000000000000", // 10000000000000
  "value": 2441406250, // 2441406250
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]);

/* result

[{
  from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
  to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
  gas: '0x76c0',
  gasPrice: '0x9184e72a000',
  value: '0x9184e72a',
  data: '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675'
}]
*/

const outputPayload = format.formatOutputs('vap_sendTransaction', "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331");

// result "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
```

## Encoding/Decoding

`vapjs-format` mainly helps in the process of handling and encoding things like quantities (i.e numbers) either before or after payload transport.

### Quantities

  Will encode quantities such as: `BigNumber`, `'string nums'`, `numbers` into hex. Decodes hex numbers into `BigNumber` objects. Very much like web3.js.

### Data

  Will very carefully prefix unprefixed data such as `{data: ''}` to `{data: '0x'}` for encoding. Otherwise does nothing to DATA typed fields in or out. 32 and 20 byte data requirements are enforced across all incoming and outgoing payloads, however `0x` empty data is allowed.

### Objects

  Will encode complex RPC objects like the `vap_sendTransaction` input object structure `{from: ..., data: ..., gas: ...}` for RPC payloads. For complex objects, it also enforces by `throw` required fields such as `from` and `data` for the `vap_sendTransaction` input object.

  ```js
  const format = require('vapjs-format');

  const inputPayload = format.formatInputs('vap_sendTransaction', [{
    "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
    "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
    "gas": new BigNumber("30400"), // 30400,
    "gasPrice": "10000000000000", // 10000000000000
    "value": 2441406250, // 2441406250
    "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
  }]);

  /* result

  [{
    from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
    to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
    gas: '0x76c0',
    gasPrice: '0x9184e72a000',
    value: '0x9184e72a',
    data: '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675'
  }]
  */

  const outputPayload = format.formatOutputs('vap_sendTransaction', "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331");

  // result "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
  ```


## Supported RPC Methods

We support all available Vapory spec RPC methods.

```
web3_clientVersion
web3_sha3
net_version
net_peerCount
net_listening
vap_protocolVersion
vap_syncing
vap_coinbase
vap_mining
vap_hashrate
vap_gasPrice
vap_accounts
vap_blockNumber
vap_getBalance
vap_getStorageAt
vap_getTransactionCount
vap_getBlockTransactionCountByHash
vap_getBlockTransactionCountByNumber
vap_getUncleCountByBlockHash
vap_getUncleCountByBlockNumber
vap_getCode
vap_sign
vap_sendTransaction
vap_sendRawTransaction
vap_call
vap_estimateGas
vap_getBlockByHash
vap_getBlockByNumber
vap_getTransactionByHash
vap_getTransactionByBlockHashAndIndex
vap_getTransactionByBlockNumberAndIndex
vap_getTransactionReceipt
vap_getUncleByBlockHashAndIndex
vap_getUncleByBlockNumberAndIndex
vap_getCompilers
vap_compileLLL
vap_compileSolidity
vap_compileSerpent
vap_newFilter
vap_newBlockFilter
vap_newPendingTransactionFilter
vap_uninstallFilter
vap_getFilterChanges
vap_getFilterLogs
vap_getLogs
vap_getWork
vap_submitWork
vap_submitHashrate
db_putString
db_getString
db_putHex
db_getHex
shh_post
shh_version
shh_newIdentity
shh_hasIdentity
shh_newGroup
shh_addToGroup
shh_newFilter
shh_uninstallFilter
shh_getFilterChanges
shh_getMessages
```

Read the full spec here:

https://github.com/vaporyco/wiki/wiki/JSON-RPC

## Why BN.js?

`vapjs` has made a policy of using `BN.js` across all of its repositories. Here are some of the reasons why:

  1. lighter than alternatives (BigNumber.js)
  2. faster than most alternatives, see [benchmarks](https://github.com/indutny/bn.js/issues/89)
  3. used by the Vapory foundation across all [`vaporyjs`](https://github.com/vaporyjs) repositories
  4. is already used by a critical JS dependency of many vapory packages, see package [`elliptic`](https://github.com/indutny/elliptic)
  5. purposefully **does not support decimals or floats numbers** (for greater precision), remember, the Vapory blockchain cannot and will not support float values or decimal numbers.

## Browser Builds

`vapjs` provides production distributions for all of its modules that are ready for use in the browser right away. Simply include either `dist/vapjs-format.js` or `dist/vapjs-format.min.js` directly into an HTML file to start using this module. Note, an `vapFormat` object is made available globally.

```html
<script type="text/javascript" src="vapjs-format.min.js"></script>
<script type="text/javascript">
vapFormat(...);
</script>
```

Note, even though `vapjs` should have transformed and polyfilled most of the requirements to run this module across most modern browsers. You may want to look at an additional polyfill for extra support.

Use a polyfill service such as `Polyfill.io` to ensure complete cross-browser support:
https://polyfill.io/

## Other Awesome Modules, Tools and Frameworks

 - [web3.js](https://github.com/vaporyco/web3.js) -- the original Vapory swiss army knife **Vapory Foundation**
 - [vaporyjs](https://github.com/vaporyjs) -- critical vaporyjs infrastructure **Vapory Foundation**
 - [browser-solidity](https://ethereum.github.io/browser-solidity) -- an in browser Solidity IDE **Vapory Foundation**
 - [wafr](https://github.com/silentcicero/wafr) -- a super simple Solidity testing framework
 - [truffle](https://github.com/ConsenSys/truffle) -- a solidity/js dApp framework
 - [embark](https://github.com/iurimatias/embark-framework) -- a solidity/js dApp framework
 - [dapple](https://github.com/nexusdev/dapple) -- a solidity dApp framework
 - [chaitherium](https://github.com/SafeMarket/chaithereum) -- a JS web3 unit testing framework
 - [contest](https://github.com/DigixGlobal/contest) -- a JS testing framework for contracts

## Our Relationship with Vapory & VaporyJS

 We would like to mention that we are not in any way affiliated with the Vapory Foundation or `vaporyjs`. However, we love the work they do and work with them often to make Vapory great! Our aim is to support the Vapory ecosystem with a policy of diversity, modularity, simplicity, transparency, clarity, optimization and extensibility.

 Many of our modules use code from `web3.js` and the `vaporyjs-` repositories. We thank the authors where we can in the relevant repositories. We use their code carefully, and make sure all test coverage is ported over and where possible, expanded on.
