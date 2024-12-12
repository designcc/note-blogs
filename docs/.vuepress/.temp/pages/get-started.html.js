import comp from "D:/programme/vuepress-blogs/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"note blogs\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"前端笔记\",\"slug\":\"前端笔记\",\"link\":\"#前端笔记\",\"children\":[]},{\"level\":2,\"title\":\"后端笔记\",\"slug\":\"后端笔记\",\"link\":\"#后端笔记\",\"children\":[]},{\"level\":2,\"title\":\"系统笔记\",\"slug\":\"系统笔记\",\"link\":\"#系统笔记\",\"children\":[]}],\"git\":{\"updatedTime\":1733981395000,\"contributors\":[{\"name\":\"pengfeicai\",\"username\":\"pengfeicai\",\"email\":\"2218781313@qq.com\",\"commits\":1,\"url\":\"https://github.com/pengfeicai\"}]},\"filePathRelative\":\"get-started.md\",\"excerpt\":\"\\n<p>温故而知新，可以为师矣</p>\\n<h2>前端笔记</h2>\\n<p>Javascript, CSS, HTML, Node.js, Vue, React, Webpack, ES6, AST</p>\\n<p>See <a href=\\\"/\\\" target=\\\"_blank\\\">frontendUrl</a> for more details.</p>\\n<h2>后端笔记</h2>\\n<p>Java, springboot, Mybatis, Spring, SpringMVC, SpringBoot, MySQL</p>\\n<p>See <a href=\\\"/\\\" target=\\\"_blank\\\">backendUrl</a> for more details.</p>\"}")
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
