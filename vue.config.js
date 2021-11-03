module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          target: [
            {
              target: 'portable', // 'zip', 'nsis', 'portable'
              arch: ['x64'], // 'x64', 'ia32'
            },
          ],
        },
      }
    }
  }
}
