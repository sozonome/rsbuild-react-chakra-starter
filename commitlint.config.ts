import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const commitLintConfiguration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [RuleConfigSeverity.Error, 'always', 'kebab-case'],
  },
};

export default commitLintConfiguration;
