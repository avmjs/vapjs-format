## vapjs-format

<div>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/vapjs/vapjs-format">
    <img src="https://david-dm.org/vapjs/vapjs-format.svg"
    alt="Dependency Status" />
  </a>

  <!-- devDependency Status -->
  <a href="https://david-dm.org/vapjs/vapjs-format#info=devDependencies">
    <img src="https://david-dm.org/vapjs/vapjs-format/dev-status.svg" alt="devDependency Status" />
  </a>

  <!-- Build Status -->
  <a href="https://travis-ci.org/vapjs/vapjs-format">
    <img src="https://travis-ci.org/vapjs/vapjs-format.svg"
    alt="Build Status" />
  </a>

  <!-- NPM Version -->
  <a href="https://www.npmjs.org/package/vapjs-format">
    <img src="http://img.shields.io/npm/v/vapjs-format.svg"
    alt="NPM version" />
  </a>

  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/vapjs/vapjs-format">
    <img src="https://coveralls.io/repos/github/vapjs/vapjs-format/badge.svg" alt="Test Coverage" />
  </a>

  <!-- Javascript Style -->
  <a href="http://airbnb.io/javascript/">
    <img src="https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg" alt="js-airbnb-style" />
  </a>
</div>

<br />

A payload formatter for the Vapory RPC layer.

## Install

```
npm install --save vapjs-format
```

## Usage

```js
const format = require('vapjs-format');

const inputPayload = format.formatInputs('vap_getBalance', ["0x407d73d8a49eeb85d32cf465507dd71d507100c1", 405938494]);

// result ['0x407d73d8a49eeb85d32cf465507dd71d507100c1', '0x1832213E']

const outputPayload = format.formatOutputs('vap_getBalance', "0x0234c8a3397aab58");

// result <BigNumber ...>
// result outputPayload.toString(10) 158972490234375000
```

## About

A straight forward and complete RPC formatting layer for the Vapory RPC spec.

## Supported RPC Methods

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

## Contributing

Please help better the ecosystem by submitting issues and pull requests to `vapjs-format`. We need all the help we can get to build the absolute best linting standards and utilities. We follow the AirBNB linting standard and the unix philosophy.

## Guides

You'll find more detailed information on using `vapjs-format` and tailoring it to your needs in our guides:

- [User guide](docs/user-guide.md) - Usage, configuration, FAQ and complementary tools.
- [Developer guide](docs/developer-guide.md) - Contributing to `vapjs-format` and writing your own code and coverage.

## Help out

There is always a lot of work to do, and will have many rules to maintain. So please help out in any way that you can:

- Create, enhance, and debug vapjs rules (see our guide to ["Working on rules"](./github/CONTRIBUTING.md)).
- Improve documentation.
- Chime in on any open issue or pull request.
- Open new issues about your ideas for making `vapjs-format` better, and pull requests to show us how your idea works.
- Add new tests to *absolutely anything*.
- Create or contribute to ecosystem tools, like modules for encoding or contracts.
- Spread the word.

Please consult our [Code of Conduct](CODE_OF_CONDUCT.md) docs before helping out.

We communicate via [issues](https://github.com/vapjs/vapjs-format/issues) and [pull requests](https://github.com/vapjs/vapjs-format/pulls).

## Important documents

- [Changelog](CHANGELOG.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](https://raw.githubusercontent.com/vapjs/vapjs-format/master/LICENSE)

## Licence

This project is licensed under the MIT license, Copyright (c) 2016 Nick Dodson. For more information see LICENSE.md.

```
The MIT License

Copyright (c) 2016 Nick Dodson. nickdodson.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
