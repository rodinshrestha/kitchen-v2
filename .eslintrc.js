// basic .eslintrc.js compatible with react prettier and typescript
module.exports = {
    // Specifies the ESLint parser for TypeScript
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    plugins: ["@typescript-eslint", "react", "prettier"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      // Allows for the parsing of modern ECMAScript features
      ecmaVersion: 2018,
      // Allows for the use of imports
      sourceType: "module",
    },
    // rules: {
    //   // Disable prop-types as we use TypeScript for type checking
    //   "react/prop-types": "off",
    //   "@typescript-eslint/explicit-function-return-type": "off",
    //   // Enable prettier rules
    //   "prettier/prettier": "error",
    //   // interface start with capital I
    //   "@typescript-eslint/interface-name-prefix": "off",
    //   // allow "any" as type
    //   "@typescript-eslint/no-explicit-any": "off",
    //   // allow @ts-ignore for testing purposes
    //   "@typescript-eslint/ban-ts-ignore": "off",
    // },
    rules: {
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/self-closing-comp": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "import/order": [
      "error",
      {
        "warnOnUnassignedImports": false,
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "react",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "@/**",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"]
      }
    ]
  }
  };