"use strict";

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@nossbigg/eslint-plugin-clean-code-react"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@nossbigg/clean-code-react/max-jsx-lines": [2],
    "@nossbigg/clean-code-react/max-jsx-expression-lines": [2],
    "@nossbigg/clean-code-react/max-jsx-props": [2],
    "@nossbigg/clean-code-react/component-prop-typedef-name": [2],
    "@nossbigg/clean-code-react/no-component-prop-inline-typedef": [2],
    "@nossbigg/clean-code-react/no-other-component-in-large-component-file": [
      2,
    ],
    "@nossbigg/clean-code-react/no-typedefs-in-large-component-file": [2],
    "@nossbigg/clean-code-react/max-hooks-in-custom-hook": [2],
  },
};
