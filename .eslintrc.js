module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "prettier",
    "plugin:jest/recommended",
    "plugin:cypress/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: ["cypress/**/*"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["tests/**/*.test.ts", "src/**/*.test.ts", "src/**/*.test.tsx"],
      env: {
        jest: true,
      },
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
