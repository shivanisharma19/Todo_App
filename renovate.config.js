module.exports = {
  platform: 'bitbucket',
  gitAuthor: 'shivanisharma19 <shivanisharma1941995@gmail.com>',
  repositories: ['shivanisharma19/Todo_App'],
  username: 'shivanisharma19',
  onboardingConfig: {
    extends: ['config:base'],
  },
  baseBranches: ['development'],
  packageRules: [
    {
        matchUpdateType: ["*"],
        automerge: false,
    },
  ],

}