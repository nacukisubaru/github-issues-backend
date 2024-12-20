

## Description
	В рамках тестового задания было требование настроить линтер по airbnb что и было сделано но
	было отключено правило @typescript-eslint/camelcase и заменено правилом @typescript-eslint/naming-convention
	сделал так потому что @typescript-eslint/eslint-plugin не поддерживает это правило в более новых версиях
	правило camelCase в проекте функционирует в любом случае

	отключил implicit-arrow-linebreak потому что он конфликтует с prettier
	prettier сам управляет перносом и перенесет если строка слишком длинная если нет то все останется как есть

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```