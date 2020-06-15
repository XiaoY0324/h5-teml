module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 结果为：设计稿元素尺寸 / 37.5，比如元素宽 750px, 最终到页面会换算成 20rem
      propList: ['*']
    }
  }
}