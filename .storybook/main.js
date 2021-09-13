module.exports = {
  stories: ['../'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    previewCsfV3: true,
  },
  webpackFinal: async (config) => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/'
    )

    // push custom rule
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

    // Return the altered config
    return config
  },
}
