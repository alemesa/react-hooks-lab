# react-hooks-lab

> Repository for public react hooks

[![NPM](https://img.shields.io/npm/v/react-hooks-lab.svg)](https://www.npmjs.com/package/react-hooks-lab) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Hooks List

- `use-intersection-observer`: Observes a DOM Element
- `use-mouse-position`: Mouse Position [ {x , y} ]
- `use-on-hover`: Detects hover events and accepts two callbacks for in & out
- `use-scroll-direction`: Scroll direction [top | up | down]
- `use-scroll-progress`: Scroll Progress [0-100]
- `use-scroll-to-top`: Scrolls To Top [fn]
- `use-window-size`: Window Size [ {innerHeight , innerWidth} ]

## Install

[![NPM](https://nodei.co/npm/react-hooks-lab.png)](https://nodei.co/npm/react-hooks-lab/)

```bash
npm install react-hooks-lab
yarn add react-hooks-lab
```

## Usage

Sample Usage for one of the hooks

```jsx
import React from "react";
import { useMousePosition } from "react-hooks-lab";

const Component = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      Mouse position x: {x}
      <br />
      Mouse position y: {y}
    </div>
  );
};
```

For more information, please refer to [Usage](https://react-hooks-lab.netlify.com/) in our documentation.

## Release

Steps:

1. `git checkout master; git pull origin master`
2. Document the changelog and bump the package.json version
3. `npm run build`
4. `npm publish`

By pushing `master`, Netlify will run `npm run deploy` and it will re-deply the docs [here](https://react-hooks-lab.netlify.com/)

## Contributing

Please make sure to read the [contributing guide](CONTRIBUTING.md) before making a pull request.

## Changelog

Detailed changes for each release are documented in the [release notes](CHANGELOG.md).

# What next

- Automate new hooks creation and publishing
- Improve docs and examples
- Typescript support
- SSR Support
- Conventional Commit Specifications

## License

MIT © [alemesa](https://github.com/alemesa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
