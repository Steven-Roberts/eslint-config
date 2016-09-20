# ESLint config

[![Build Status](https://travis-ci.org/Steven-Roberts/eslint-config.svg?branch=master)](https://travis-ci.org/Steven-Roberts/eslint-config)

The JavaScript lint configuration used for my projects

## Install
```shell
$ npm install --save-dev eslint Steven-Roberts/eslint-config
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
$ npm test
```
