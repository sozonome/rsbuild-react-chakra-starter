/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', 'kebab-case'],
  },
};

module.exports = CommitLintConfiguration;
