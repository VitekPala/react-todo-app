module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:json/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "eslint-plugin-json-files", "jsx", "json-files"],
  ignorePatterns: ["./node_modules"],
  rules: {
    quotes: [2, "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "jsx/mark-used-vars": 1,
    "jsx/no-undef": 1,
    indent: ["error", 2],
  },
};
