// https://cn.eslint.org/docs/rules/
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],


  // add your custom rules here
  // 首个参数 0 = off, 1 = warn, 2 = error
  rules: {
    // 数组内间距
    'array-bracket-spacing': [2, 'never'],
    // 禁止使用拖尾逗号
    'comma-dangle': 0,
    // 强制在逗号周围使用空格
    'comma-spacing': 0,
    // 禁止逗号前后有换行符
    'comma-style': [2, 'last'],
    // 使用类型安全的 === 和 !== 操作符代替 == 和 != 操作符
    eqeqeq: [2, 'always'],
    // 缩进
    indent: 0,
    // 对象 key/value 间 空格
    'key-spacing': [2, { afterColon: true }],
    // 关键字周围空格
    'keyword-spacing': [2, { after: true }],
    // 禁止直接使用 Object.prototypes 的内置属性
    'no-prototype-builtins': [0],
    // 使用单引号
    quotes: [0, 'single'],
    // 禁止使用分号
    semi: 0,
    // 函数圆括号之前有一个空格
    'space-before-function-paren': 0,
    // 操作符周围空格
    'space-infix-ops': [2],
    // 注释空格
    'spaced-comment': 0,
    eqeqeq: ['OFF'],


    // vue eslint
    // html 缩进
    'vue/html-indent': [0, 0],
    // script 缩进
    'vue/script-indent': [0, 2, { baseIndent: 1, switchCase: 1 }],
    // 单行元素的内容前后需要换行符
    'vue/singleline-html-element-content-newline': [0],
    // 禁用 v-html 指令
    'vue/no-v-html': [0],
    // 解析错误
    'vue/no-parsing-error': [2],
    'vue/max-attributes-per-line': ['off'],
    'vue/html-self-closing': ['off'],
    'vue/attributes-order': ['off'],
    'vue/attribute-hyphenation': ['off'],
    'vue/mustache-interpolation-spacing': ['off'],
    'vue/order-in-components': ['off'],
    'no-debugger': 0
  },
  overrides: [
    {
      // 关闭 vue 文件中的 indent 的默认检查
      // 使用 vue/script-indent 缩进规则
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}