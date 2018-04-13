module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  env: {
    "atomtest": true,
    "browser": true,
    "node": true,
  },
  rules: {
    "no-console": "warn",
    "indent": ["error", 2],
  },
};