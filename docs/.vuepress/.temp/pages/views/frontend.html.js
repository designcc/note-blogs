import comp from "D:/programme/vuepress-blogs/docs/.vuepress/.temp/pages/views/frontend.html.vue"
const data = JSON.parse("{\"path\":\"/views/frontend.html\",\"title\":\"JavaScript、NodeJs、TypeScript\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"JavaScript\",\"slug\":\"javascript\",\"link\":\"#javascript\",\"children\":[{\"level\":3,\"title\":\"闭包(closure)\",\"slug\":\"闭包-closure\",\"link\":\"#闭包-closure\",\"children\":[]},{\"level\":3,\"title\":\"构造函数\",\"slug\":\"构造函数\",\"link\":\"#构造函数\",\"children\":[]},{\"level\":3,\"title\":\"原型和原型链\",\"slug\":\"原型和原型链\",\"link\":\"#原型和原型链\",\"children\":[]},{\"level\":3,\"title\":\"事件循环机制\",\"slug\":\"事件循环机制\",\"link\":\"#事件循环机制\",\"children\":[]},{\"level\":3,\"title\":\"栈(Stack)和堆(Heap)\",\"slug\":\"栈-stack-和堆-heap\",\"link\":\"#栈-stack-和堆-heap\",\"children\":[]},{\"level\":3,\"title\":\"模块化规范\",\"slug\":\"模块化规范\",\"link\":\"#模块化规范\",\"children\":[]},{\"level\":3,\"title\":\"浏览器本地储存\",\"slug\":\"浏览器本地储存\",\"link\":\"#浏览器本地储存\",\"children\":[]},{\"level\":3,\"title\":\"Javascript遍历方法\",\"slug\":\"javascript遍历方法\",\"link\":\"#javascript遍历方法\",\"children\":[]},{\"level\":3,\"title\":\"特性和问题\",\"slug\":\"特性和问题\",\"link\":\"#特性和问题\",\"children\":[]}]},{\"level\":2,\"title\":\"NodeJs\",\"slug\":\"nodejs\",\"link\":\"#nodejs\",\"children\":[{\"level\":3,\"title\":\"进程和线程\",\"slug\":\"进程和线程\",\"link\":\"#进程和线程\",\"children\":[]},{\"level\":3,\"title\":\"Global属性\",\"slug\":\"global属性\",\"link\":\"#global属性\",\"children\":[]}]},{\"level\":2,\"title\":\"TypeScript\",\"slug\":\"typescript\",\"link\":\"#typescript\",\"children\":[{\"level\":3,\"title\":\"集合之间的相等、交集、补集\",\"slug\":\"集合之间的相等、交集、补集\",\"link\":\"#集合之间的相等、交集、补集\",\"children\":[]},{\"level\":3,\"title\":\"集合运算\",\"slug\":\"集合运算\",\"link\":\"#集合运算\",\"children\":[]},{\"level\":3,\"title\":\"Typescript9种运算方式\",\"slug\":\"typescript9种运算方式\",\"link\":\"#typescript9种运算方式\",\"children\":[]},{\"level\":3,\"title\":\"访问修饰符\",\"slug\":\"访问修饰符\",\"link\":\"#访问修饰符\",\"children\":[]},{\"level\":3,\"title\":\"协变逆变\",\"slug\":\"协变逆变\",\"link\":\"#协变逆变\",\"children\":[]},{\"level\":3,\"title\":\"运算套路\",\"slug\":\"运算套路\",\"link\":\"#运算套路\",\"children\":[]}]},{\"level\":2,\"title\":\"VueJs\",\"slug\":\"vuejs\",\"link\":\"#vuejs\",\"children\":[{\"level\":3,\"title\":\"组件的本质\",\"slug\":\"组件的本质\",\"link\":\"#组件的本质\",\"children\":[]},{\"level\":3,\"title\":\"插件开发\",\"slug\":\"插件开发\",\"link\":\"#插件开发\",\"children\":[]},{\"level\":3,\"title\":\"普通插槽 or 具名插槽\",\"slug\":\"普通插槽-or-具名插槽\",\"link\":\"#普通插槽-or-具名插槽\",\"children\":[]},{\"level\":3,\"title\":\"Vue2.x生命周期\",\"slug\":\"vue2-x生命周期\",\"link\":\"#vue2-x生命周期\",\"children\":[]},{\"level\":3,\"title\":\"Vue3.x生命周期\",\"slug\":\"vue3-x生命周期\",\"link\":\"#vue3-x生命周期\",\"children\":[]},{\"level\":3,\"title\":\"Vue开发规范整理\",\"slug\":\"vue开发规范整理\",\"link\":\"#vue开发规范整理\",\"children\":[]}]},{\"level\":2,\"title\":\"Rxjs(Reactive Extensions JS)\",\"slug\":\"rxjs-reactive-extensions-js\",\"link\":\"#rxjs-reactive-extensions-js\",\"children\":[{\"level\":3,\"title\":\"ReactiveX 五个基本概念\",\"slug\":\"reactivex-五个基本概念\",\"link\":\"#reactivex-五个基本概念\",\"children\":[]},{\"level\":3,\"title\":\"时间管理\",\"slug\":\"时间管理\",\"link\":\"#时间管理\",\"children\":[]}]}],\"git\":{\"updatedTime\":1735532077000,\"contributors\":[{\"name\":\"fly523\",\"username\":\"fly523\",\"email\":\"2218781313@qq.com\",\"commits\":6,\"url\":\"https://github.com/fly523\"}]},\"filePathRelative\":\"views/frontend.md\",\"excerpt\":\"\\n<h2>JavaScript</h2>\\n<h3>闭包(closure)</h3>\\n<p>闭包是由函数以及声明该函数的词法环境(lexical environment)组合而成的，闭包允许将函数与其所操作的数据（环境变量）所关联。</p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre><code><span class=\\\"line\\\">global<span class=\\\"token punctuation\\\">.</span>Closure <span class=\\\"token comment\\\">// 全局闭包</span></span>\\n<span class=\\\"line\\\">global<span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">[</span>Scopes<span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">]</span> <span class=\\\"token comment\\\">// 全局作用域链</span></span>\\n<span class=\\\"line\\\">global<span class=\\\"token punctuation\\\">.</span><span class=\\\"token constant\\\">LE</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>variable<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">}</span> <span class=\\\"token comment\\\">// 全局词法环境中的全局变量(variable)和函数(function)</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">global</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token constant\\\">LE</span> <span class=\\\"token comment\\\">// 全局作用域中定义的函数内部词法环境</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">[</span>Scopes<span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">]</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">[</span>global<span class=\\\"token punctuation\\\">.</span><span class=\\\"token constant\\\">LE</span><span class=\\\"token punctuation\\\">]</span> <span class=\\\"token comment\\\">// 函数作用域链</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n</div>\"}")
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
