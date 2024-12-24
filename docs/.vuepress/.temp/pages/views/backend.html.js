import comp from "D:/programme/vuepress-blogs/docs/.vuepress/.temp/pages/views/backend.html.vue"
const data = JSON.parse("{\"path\":\"/views/backend.html\",\"title\":\"Java, springboot\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Java\",\"slug\":\"java\",\"link\":\"#java\",\"children\":[{\"level\":3,\"title\":\"数据类型\",\"slug\":\"数据类型\",\"link\":\"#数据类型\",\"children\":[]},{\"level\":3,\"title\":\"变量\",\"slug\":\"变量\",\"link\":\"#变量\",\"children\":[]},{\"level\":3,\"title\":\"运算符\",\"slug\":\"运算符\",\"link\":\"#运算符\",\"children\":[]},{\"level\":3,\"title\":\"内存\",\"slug\":\"内存\",\"link\":\"#内存\",\"children\":[]}]}],\"git\":{\"updatedTime\":1735013218000,\"contributors\":[{\"name\":\"fly523\",\"username\":\"fly523\",\"email\":\"2218781313@qq.com\",\"commits\":1,\"url\":\"https://github.com/fly523\"}]},\"filePathRelative\":\"views/backend.md\",\"excerpt\":\"\\n<h2>Java</h2>\\n<p>javaSE：标准版(桌面开发，控制台开发)</p>\\n<p>javaME：嵌入式开发(手机，家电)</p>\\n<p>javaEE：E企业级开发(web端，服务器开发)</p>\\n<p>JDK：java development kit</p>\\n<p>JRE：java runtime environment</p>\\n<p>JVM：java virtual machine</p>\\n<h3>数据类型</h3>\\n<p><strong>基本类型(primitive type)</strong></p>\\n<ol>\\n<li>数值类型</li>\\n</ol>\\n<ul>\\n<li>整数类型<br>\\nbyte占一个字节范围： -128 —127<br>\\nshort占两个字节范围：-32768 — 32767<br>\\nint占4个字节范围：-2147483648 — 2147483647<br>\\nlong占8个字节范围<br></li>\\n<li>浮点类型(有限，离散，舍入误差， 避免使用浮点数比较)<br>\\nfloat占四个字节<br>\\ndouble占8个字节<br>\\n字符类型(char占两个字节)<br></li>\\n</ul>\"}")
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
