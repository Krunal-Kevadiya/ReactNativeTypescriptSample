module.exports = {
  root: true,

  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
    'react-native/react-native': true
  },

  //parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    extraFileExtensions: ['.json']
  },

  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'airbnb',
    'plugin:react-native/all',
    'plugin:prettier/recommended', // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],

  plugins: ['eslint-comments', 'react', 'react-hooks', 'react-native', '@react-native-community', 'prettier', 'jest'],

  settings: {
    'import/resolver': {
      'babel-module': {
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
    },
    react: {
      version: require('./package.json').dependencies.react
    }
  },

  // Map from global var to bool specifying if it can be redefined
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    window: false,
    XMLHttpRequest: false
  },

  rules: {
    //'prettier/prettier': 2,

    // General
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        }
      }
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    // general
    'global-require': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    // note you must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['off'],
    'no-bitwise': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|disableYellowBox|tron)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    eqeqeq: ['error', 'always'],
    // react
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '"', '}'] }],
    'react/prop-types': ['error', { ignore: ['action', 'dispatch', 'nav', 'navigation'] }],
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: true
      }
    ],
    'react/jsx-pascal-case': 'error',
    'react/no-children-prop': 'off',
    // react-native specific rules
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'error',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }]
  }
};
