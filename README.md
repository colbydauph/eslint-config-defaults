Opinionated ESLint Configs

Focuses on being strict, and idiomatic.

#### 1. Install
```shell
$ npm i -D github:colbydauph/eslint-config-defaults#1.1.0
```

#### 2. Extend
```yaml
# .eslintrc.yml
extends: defaults/node
```

### Configs

| config | extends | with |
|---|---|---|
| `browser` | `defaults/node` | `browser` |
| `node` | `eslint:recommended` |  practical settings for [`node@latest`](https://hub.docker.com/_/node) |
| `node-cli` | `defaults/node` |  | 
| `node-test` | `defaults/node` | `mocha` | 
| `react` | `defaults/browser` | `react`, `jsx` |
| `react-test` | `defaults/react` | `mocha`, `jest` |