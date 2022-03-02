"use strict";

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@nossbigg/eslint-plugin-clean-code-react"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@nossbigg/clean-code-react/max-jsx-lines": [2, { maxLines: 2 }],
    "@nossbigg/clean-code-react/max-jsx-expression-lines": [2],
  },
};
