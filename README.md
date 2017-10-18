# eslint-config-defaults
Opinionated ESLint Configs

#### 1. Install
```shell
$ npm install --save-dev colbydauph/eslint-config-defaults
```

#### 2. Extend
```yaml
# .eslintrc
# https://eslint.org/docs/user-guide/configuring
extends: defaults/node
```

### Configs

| config | extends | with |
|---|---|---|
| `browser` | `defaults/node` | `browser` |
| `node` | `eslint:recommended` |  practical settings for [`node@latest`](https://hub.docker.com/_/node) |
| `node-test` | `defaults/node` | `mocha` | 
| `react` | `defaults/browser` | `react`, `jsx` |
| `react-test` | `defaults/react` | `mocha`, `jest` |