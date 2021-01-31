## Description

[Nest](https://github.com/nestjs/nest) framework starter setup to increase developer productivity.

## Add TypeScript Restrictions

Add following to `tsconfig` => `compilerOptions`

```bash
"noUnusedLocals": true,
"noUnusedParameters": true
```

## Enrich your Linters

It takes 5 mins to setup linter and it guard your code and catch significant issue as you type.
Update [.eslintrc.js](https://github.com/ompandey13/AwesomeNodeJS/blob/master/initial_setups/nest/.eslintrc.js).

Add packages

```bash
## yarn
yarn add eslint-config-airbnb --dev
yarn add eslint-config-airbnb-base --dev
yarn add eslint-plugin-import --dev
## npm
npm install eslint-config-airbnb --save-dev
npm install eslint-config-airbnb-base --save-dev
npm install eslint-plugin-import --save-dev
```
