"use strict";

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@nossbigg/eslint-plugin-clean-code-react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "@nossbigg/clean-code-react/max-jsx-lines": ["error", { maxJsxLines: 50 }],
    "@nossbigg/clean-code-react/max-jsx-expression-lines": "error",
    "@nossbigg/clean-code-react/max-jsx-props": "error",
    "@nossbigg/clean-code-react/component-prop-typedef-name": "error",
    "@nossbigg/clean-code-react/no-component-prop-inline-typedef": "error",
    "@nossbigg/clean-code-react/no-other-component-in-large-component-file":
      "error",
    "@nossbigg/clean-code-react/no-typedefs-in-large-component-file": "error",
    "@nossbigg/clean-code-react/max-hooks-in-custom-hook": "error",
    "@nossbigg/clean-code-react/no-external-fn-definition-in-large-component-file":
      "error",
    "@nossbigg/clean-code-react/no-jsx-inline-style-prop": "error",
  },
  settings: {
    "@nossbigg/eslint-plugin-clean-code-react": {
      largeComponentLength: 40,
    },
  },
};
