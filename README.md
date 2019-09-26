# react-hooks-lab

> Collection of useful hooks

[![NPM](https://img.shields.io/npm/v/react-hooks-lab.svg)](https://www.npmjs.com/package/react-hooks-lab) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hooks-lab
```

## Usage

```jsx
import React, { Component } from "react";

import { useMyHook } from "react-hooks-lab";

const Example = () => {
  const example = useMyHook();
  return <div>{example}</div>;
};
```

## License

MIT © [alemesa](https://github.com/alemesa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

## Contribution Guide

Easiest way to run this repo is to have the main package, the example and the docz running at the same time, you could skip the docz until you're ready to go

- Clone this repo
- cd on it and npm install
- cd /example and npm install
- run both at the same time
- to run docz inside example run npm run start-docz
