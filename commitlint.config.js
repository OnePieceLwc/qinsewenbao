module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'refactor',
        'style',
        'test',
        'chore',
        'build',
        'ci',
      ],
    ],
    'subject-empty': [2, 'never'], // 允许提交信息为空
    'subject-case': [0, 'never'], // 不要强制要求提交信息使用特定的格式
  },
};
