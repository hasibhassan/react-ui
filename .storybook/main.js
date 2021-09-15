module.exports = {
  stories: ['../packages/**/*.stories.*'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    previewCsfV3: true,
  },
  webpackFinal: async (config) => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/'
    )

    // push custom rule for css modules support
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            // Key config
            modules: true,
          },
        },
      ],
    })

    // This is where we change the order of resolution of main fields
    config.resolve.mainFields = ['src', 'module', 'main']

    // Return the new config
    return config
  },
}
