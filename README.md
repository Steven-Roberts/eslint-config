# ESLint Config

[![Build Status](https://travis-ci.org/Steven-Roberts/eslint-config.svg?branch=master)](https://travis-ci.org/Steven-Roberts/eslint-config)
[![devDependencies Status](https://david-dm.org/Steven-Roberts/eslint-config/dev-status.svg)](https://david-dm.org/Steven-Roberts/eslint-config?type=dev)
[![peerDependencies Status](https://david-dm.org/Steven-Roberts/eslint-config/peer-status.svg)](https://david-dm.org/Steven-Roberts/eslint-config?type=peer)
[![Maintainability](https://api.codeclimate.com/v1/badges/f1a307d19c460b1e877f/maintainability)](https://codeclimate.com/github/Steven-Roberts/eslint-config/maintainability)

The [ESlint](https://eslint.org/) configuration used for my projects

## Install

```shell
npm install --save-dev eslint Steven-Roberts/eslint-config
```

## Usage

The rules can be extended and overridden as follows

```json
{
    "extends": "steven-roberts",
    "rules": {
        "ruleToOverride": "..."
    }
}
```

## Test

```shell
npm test
```
