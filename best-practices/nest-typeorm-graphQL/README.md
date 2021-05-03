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

## Pre-commit git hooks with Husky

Typescript code linting and Unit test should be passed before committing the code. It will be useful specially if you are going to use some sort of CI.

Install husky

```bash
##yarn
yarn add husky --dev
yarn add lint-staged --dev
## npm
npm install husky --save-dev
npm install lint-staged --save-dev
```

In Package.json

```bash
"scripts": {
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "pre-commit": "lint-staged",
},
"husky": {
    "hooks": {
        "pre-commit": "yarn pre-commit"
    }
}
```

Add [lint-staged.config.js](https://github.com/ompandey13/AwesomeNodeJS/blob/master/initial_setups/nest/lint-staged.config.js).

## TypeORM Migration

Create a migration file `yarn typeorm migration:create -n tableName -d src/migrations`
