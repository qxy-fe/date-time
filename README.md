# @qxy/date-time

[![CI](https://github.com/qxy-fe/date-time/workflows/CI/badge.svg)](https://github.com/qxy-fe/date-time/actions)
[![NPM VERSION](https://img.shields.io/npm/v/@qxy/date-time.svg)](https://www.npmjs.com/package/@qxy/date-time)
[![Coverage Status](https://coveralls.io/repos/github/qxy-fe/date-time/badge.svg?branch=main)](https://coveralls.io/github/qxy-fe/date-time?branch=main)
[![LICENSE](https://img.shields.io/github/license/qxy-fe/date-time.svg)](https://github.com/qxy-fe/date-time/blob/main/LICENSE)

:clock: Date time utils for OA projects.

## Install

```bash
npm -i @qxy/date-time dayjs -S
```

```bash
yarn add @qxy/date-time dayjs
```

```bash
pnpm add @qxy/date-time dayjs
```

## Usage

```ts
import { now } from '@qxy/date-time'

console.log(now()) // => 1684230041
```

## Functions

- [now](./src/now.ts)
- [formatTime](./src/formatTime.ts)
- [toTimestamp](./src/toTimestamp.ts)

## Features

- 📥 Prefer unix timestamp

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
