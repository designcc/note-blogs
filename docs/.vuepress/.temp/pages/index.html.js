import comp from "D:/programme/vuepress-blogs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/get-started.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"前端笔记\",\"details\":\"Javascript, CSS, HTML, Node.js, Vue, React, Webpack, ES6, AST\"},{\"title\":\"后端笔记\",\"details\":\"Java, springboot, Mybatis, Spring, SpringMVC, SpringBoot, MySQL\"},{\"title\":\"系统笔记\",\"details\":\"operating system, terminal, browser, git, vim\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present Fly note blog\"},\"headers\":[],\"git\":{\"updatedTime\":1733990166000,\"contributors\":[{\"name\":\"pengfeicai\",\"username\":\"pengfeicai\",\"email\":\"2218781313@qq.com\",\"commits\":2,\"url\":\"https://github.com/pengfeicai\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
