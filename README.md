

## Description
  Запуск:
  создать корне файл .development.env в нем прописать

  пример:

  GITHUB_API_URL=https://api.github.com
  PORT=5000
  MONGODB_URI=mongodb://localhost:27017/nacukisubaru

  тут монго, порт и апи урл порты и монго прописать свои

  запуск проекта npm run start:dev

  установить node_modules npm install --force так как
  "eslint-config-airbnb-typescript": "^18.0.0" конфликтует с другими пакетами, а нам нужно чтобы все правила были актуальные

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