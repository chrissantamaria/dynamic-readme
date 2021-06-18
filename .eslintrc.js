module.exports = {
  extends: ['preact', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.jsx', '*.js'],
    },
  ],
  globals: {
    WEATHER_API_KEY: 'readonly',
  },
};
