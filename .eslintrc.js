module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    "implicit-arrow-linebreak": "off",
    "object-curly-newline": [
      "error", 
      {
        "ObjectExpression": { "multiline": true, "consistent": true },
        "ObjectPattern": { "multiline": true, "consistent": true },
        "ImportDeclaration": { "multiline": true, "consistent": true },
        "ExportDeclaration": { "multiline": true, "consistent": true }
      }
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "format": ["camelCase"]
      },
      {
        "selector": "function",
        "format": ["camelCase"]
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
    ]
  },
};
