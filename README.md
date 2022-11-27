[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) [![Maintainability](https://api.codeclimate.com/v1/badges/6852c86afad0232b9c3d/maintainability)](https://codeclimate.com/github/Ligalaiz/hike/maintainability) [![Netlify Status](https://api.netlify.com/api/v1/badges/3aed10c2-4ad3-465a-af39-f6c839f52105/deploy-status)](https://app.netlify.com/sites/hiking-ligalaiz/deploys)

# Cart

Hiking tools. Demo: [link](https://hiking-ligalaiz.netlify.app/hike.html/)

## Tech Stack

JS, CSS

## Run Locally

Clone the project

```js
  gh repo clone Ligalaiz/hike
```

Go to the project directory

```bash
  cd hike
```

Install dependencies

```bash
  npm install
```

Start the server and client

```bash
  npm run start:client
```

## Running Tests

To run tests, run the following command

```js
  npm run test
```

## Running Lint

To run lint, run the following command

```js
  npm run lint
```

## Deployment

To run deploy, run the following command

```js
  npm run build
```

## Project structure

```
├── src/                             # Исходники
│   ├── assets/                      # Подключаемые ресурсы
│   │   ├── fonts/                   # Шрифты используемые в проекте
│   │   ├── img/                     # Изображения используемые в проекте
│   │   └── styles/                  # Стили
│   │       ├── global/              # Папка с глобальнымистилями
│   │       │   ├── _global.scss     # Файл с глобальными стилями
│   │       │   └── _fonts.scss      # Файл с подлючаемыми шрифтами
│   │       └── internals/           # Дополнения
│   │          ├── _mixins.scss      # Файл с миксинами
│   │          └── _variables.scss   # Файл с переменными
│   ├── data/                        # Папка с моками данных и state
│   ├── internals/                   # Дополнения
│   ├── pages/                       # Папка страниц проекта
│   └── utils/                       # Папка с утилитами
├── config/                          # Конфигурация Webpack
|    ├── webpack.common.js           # Базовая конфигурация Webpack.js
|    ├── webpack.dev.js              # Конфигурация для dev сборки
|    └── webpack.prod.js             # Конфигурация для production сборки
├── .browserslistrc                  # Конфигурация Browserslist
├── .editorconfig                    # Конфигурация IDE
├── .env                             # Environment Variables
├── .eslintignore                    # Список исключённых файлов из ESLint
├── .eslintrc.js                     # Конфигурация проверки JS в ESLint
├── .gitignore                       # Список исключённых файлов из Git
├── .gitattributes                   # Конфигурация GIT по отношению к путям
├── .npmrc                           # Конфигурация npm
├── .prettierignore                  # Список исключённых файлов из Prettier
├── .projections.json                # Конфигурация отношений между файлами
├── babel.config.js                  # Конфигурация компиляции Javascript в es5
├── jest.config.js                   # Конфигурация Jest
├── LICENSE                          # Файл лицензии
├── package.json                     # Список модулей и прочей информации
├── postcss.config.js                # Конфигурация компиляции стилей
├── prettier.config.js               # Конфигурация форматирования кода
└── README.md                        # Файл описания проекта
```
