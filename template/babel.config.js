module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
    ],
    [
      'import',
      {
        libraryName: 'nat-plus',
        libraryDirectory: 'lib',
        style: false,
      },
      'nat-plus',
    ],
  ],
};
