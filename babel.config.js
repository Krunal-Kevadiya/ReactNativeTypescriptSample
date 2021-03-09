const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: [
      '.ios.js',
      '.android.js',
      '.ios.ts',
      '.android.ts',
      '.ios.tsx',
      '.android.tsx',
      '.js',
      '.ts',
      '.tsx',
      '.json'
    ],
    root: ['./'],
    alias: {
      '@assets': './src/assets',
      '@components': './src/components',
      '@config': './src/config',
      '@constants': './src/constants',
      '@models': './src/datas/models',
      '@reduxs': './src/datas/reduxs',
      '@schemas': './src/datas/schemas',
      '@services': './src/datas/services',
      '@hooks': './src/hooks',
      '@modules': './src/modules',
      '@navigations': './src/navigations',
      '@theme': './src/theme',
      '@utils': './src/utils'
    }
  }
];
module.exports = {
  plugins: ['react-native-reanimated/plugin', MODULE_RESOLVER],
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['ignite-ignore-reactotron', 'react-native-reanimated/plugin', MODULE_RESOLVER]
    }
  }
};
