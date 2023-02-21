module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
