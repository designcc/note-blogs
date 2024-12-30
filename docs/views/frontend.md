# JavaScript、NodeJs、TypeScript

## JavaScript
### 闭包(closure)
闭包是由函数以及声明该函数的词法环境(lexical environment)组合而成的，闭包允许将函数与其所操作的数据（环境变量）所关联。
``` javascript:no-line-numbers
global.Closure // 全局闭包
global.[[Scopes]] // 全局作用域链
global.LE = {variable, function} // 全局词法环境中的全局变量(variable)和函数(function)
global(function).LE // 全局作用域中定义的函数内部词法环境
function.[[Scopes]] = [global.LE] // 函数作用域链
```
Window的顶层作用域 [window, Script] script不生产闭包对象，var声明的变量会成为window的属性，let和const声明的变量会放在Script作用域中。Node环境 [global, Script, Closure] Script作用域会创建闭包对象，每个模块文件都是一个独立的闭包

### 构造函数
通过new关键字调用构造函数用来创建对象实例，调用时会执行构造函数内部代码，并返回一个新创建的对象实例，每次调用都返回一个新的对象实例，通过new关键字调用时该函数才是构造函数。ES6引入Class类来定义构造函数，底层依然是基于原型。

### 原型和原型链
在JavaScript中，几乎所有的对象都有一个特殊的内部属性，称为[[Prototype]]。这个属性指向另一个对象，即该对象的原型。每个函数都有一个prototype属性，默认情况下它是一个对象，包含了可以由该函数创建的所有实例共享的属性和方法。当通过构造函数使用new关键字创建对象时，新对象的[[Prototype]]会被设置为构造函数的prototype属性值。

当尝试访问一个对象的属性或方法时，JavaScript 引擎会首先检查该对象本身是否有这个属性或方法；如果找不到，它会沿着[[Prototype]]链向上查找，直到找到为止或者到达链的末端（通常是null）。

``` javascript:no-line-numbers
// 原型继承
Son.prototype.__proto__ = Event.prototype
Object.setPrototypeOf(Son.prototype, Event.prototype)
Son.prototype = Object.create(Event.prototype)

// 实例继承
function Child(name, age) {
  // 调用父类构造函数，并将 this 绑定到当前子类实例上
  Parent.call(this, name);
  this.age = age;
}
```

### 事件循环机制
事件循环机制是JavaScript运行时环境（如浏览器和Node.js）处理异步操作的核心概念。它使得JavaScript能够在单线程环境下有效地管理任务，包括执行代码、处理用户输入、网络请求等。

**调用栈**： 后进先出（LIFO, Last In First Out）的数据结构，调用栈中存放着要执行的代码，代码执行中遇到异步放进异步任务队列，遇到微任务放进微任务队列，每次调用栈中代码执行完毕清除完微任务队列。

**任务队列**：数据结构-先进先出，放着异步任务。
- 宏任务队列： setTimeout, setInterval, postMessage, MessageChannel, setImmediate, ajax，script脚本
- 微任务队列： promise.then() ，mutationObserver，微任务首次执行优与GUI渲染

*多线程：Web worker线程，可以执行js代码，但是不能访问呢DOM*

### 栈(Stack)和堆(Heap)
栈存放着基本数据类型，因为这些数据大小固定，可以直接在内存中分配空间。
堆存放着复杂数据类型如对象、数组、函数等，因为这些大小可能是动态的。声明一个对象时，会将对象的数据放在堆中，栈中会存放着对象数据的内存引用(指针)

### 模块化规范
- CommonJS：Node.js采用的模块化规范，同步加载模块，通过module.exports导出模块，通过require引入模块
- AMD：异步模块定义，用于浏览器环境，通过requirejs实现
- ES6 Module：ES6引入的模块化规范，通过export导出模块，通过import引入模块，编译时调用必须放在文件开头

|     | CommonJs(基于文件读写) | EsModule(基于请求) |
| --- | --- | --- |
| 导入方式 | require()动态加载模块，同步执行，在node环境中，它会立即读取并执行模块文件 | 静态导入使用import语法动态导入使用import函数，静态导入必须位于顶层作用域，动态可以按需加载 |
| 构建模块依赖关系 | require同步加载并执行模块文件，在实际运行中构建 | 编译阶段建立模块关联关系，预处理阶段分析模块依赖，执行阶段执行模块代码 |
| 输出的值 | 导出值时(string、number)是值的拷贝，如果是一个对象或者函数，则是对象或者函数的引用， | 输出是实时的只读引用，内部变化会影响外部，export和import创建了一种双向绑定机制 |

#### UMD规范（Universal Module Definition）
**JS通用模块规范UMD**主流的javascript模块规范：CommonJS，UMD(AMD，CMD:已经废弃，因为需要声明引入)，模块最终都是要导出一个对象，函数，或者变量，不同的规范导出这部分的定义不同
``` javascript:no-line-numbers
(function(root, factory) {
    if(typeof modele === 'object' && typeof module.exports === 'object') {
        // commonjs规范， nodejs环境
        var depModele = require('')
        module.exports = factory(depModule)
    }else if (typeof define === 'function' && define.amd) {
        // AMD规范，如require.js
        define(['depModule'], factory)
    }else if (typeof define === 'function' && define.cmd) {
        //CMD模块规范， 如sea.js
        define(function(require, exports, module) {
            var depModule = require('depModule')
            module.exports = factory(depModule)
        })
    }else {
        // 没有规范 直接挂全局对象
        root.undModule = factory(root, deppModule)
    }
})(this, function(depModeule) {
    return {
            standards: ''
    }
})
```
### 浏览器本地储存
**cookie**：浏览器和js-cookie可生成，可以设置过期时效，最大支持4K，每次请求携带在header里，字符串键值对在本地存储数据

**localStorage**：除非清除，则一直存在，不支持跨浏览器，最大支持5M，不参与请求，字符串键值对存储本地

**sessionStorage**：页面关闭清理，不支持跨页面，最大5M，不参与请求，字符串键值对存储本地

**indexedDB**：除非清理，则一直存在，不限制大小，不参与请求，非关系型数据库（不支持sql语句操作），提供接口查询，建立索引


  - 数据库：IDBDatabase 对象，数据库有版本概念，同一时刻只能有一个版本，每个域名可以建多个数据库
  - 对象仓库：IDBObjectStore 对象，类似于关系型数据库的表格
  - 索引： IDBIndex 对象，可以在对象仓库中，为不同的属性建立索引，主键建立默认索引
  - 事务： IDBTransaction 对象，增删改查都需要通过事务来完成，事务对象提供了error,abord,complete三个回调方法，监听操作结果
  - 操作请求：IDBRequest 对象
  - 指针： IDBCursor 对象
  - 主键集合：IDBKeyRange 对象，主键是默认建立索引的属性，可以取当前层级的某个属性，也可以指定下一层对象的属性，还可以是一个递增的整数

### Javascript遍历方法

#### 对象遍历
- for-in: 遍历对象自身和继承的可以枚举属性 不含Symbol
- Object.keys() Object.values() Object.entries()
- for-of: for(let value of Object.key（obj）){}
- Object.getOwnPropertyNames()
- Object.getOwnPropertySymbols()
- Reflect.ownKeys()

#### 数组遍历
- for: for (let i=0, i < arr.length, i++) {}
- while: while (i < arr.length) {}
- for-in: for (let i in arr) {}
- forEach: arr.forEach( (val, index, arr)=> {})，不支持处理异步函数，无法捕获函数中的错误，无法跳出中断执行，删除自身元素index不会被重置，函数签名中包含参数和上下文性能低
- map: arr.map() 需要配合return 完成返回值
- filter: arr.filter() return 返回操作满足条件的
- some: arr.some return 元素有一个符合条件结果返回true或者false
- every: arr.every() return 元素所以符合条件时返回true或者false
- reduce: arr.reduce((total, value, index, arr)=> {})
- ruduceRight: arr.ruduceRight()
- for-or: for(let val of arr){} 适合遍历数、数组对象、字符串、map、set、 等拥有迭代器对象的集合
- find: arr.find() 找到第一个符合条件的元素返回 没有返回undefined
- findIndex: arr.findIndex() 找到第一个符合元素的返回索引 没有返回-1
- includes: arr.includes() 判断数组中是否包含某元素 返回ture false

### 特性和问题
#### 异常
- SyntaxError: 语法错误
- ReferenceError: 引用错误
- RangeError: 范围错误
- Error: 异常基类
- InternalError: 内部错误
- TypeError: 类型错误
- EvalError: Eval方法错误
- URLError: url相关方法产生的错误

::: tip
调试技巧，元素右键保存到全局变量，控制台可以看到这个变量并使用他的属性，比如输入框可以看到 input.value元素面板里时间监听可以找到对应的事件绑定在代码多少行
:::

#### 请求参数类型
- query 查询参数是附加在 URL 后面的一系列键值对（?key1=value1&key2=value2）
- params 路径参数是直接嵌入到 URL 路径中的变量部分 (/resource/{id}/{name})
- body 请求体是在 HTTP 请求的消息体中发送的数据 (1.urlencode 2.json )

#### 精度丢失
当Number类型大于2^53-1就会出现精度丢失
```javascript:no-line-numbers
// 正则替换
axios({
  method,
  url,
  transformResponse: [function(data) {
    const convertedJsonString = data.replace(/"(\w+)":(\d{15,})/g,'"$1":"$2"')
    return JSON.parse(convertedJsonString)
  }]
})
// Json 序列化
axios({
  method,
  url,
  transformResponse: [function(data) {
    const JSONbigToString = JSONbig({storeAsString: true})
    return JSONbigToString(data)
  }]
})
```

#### 变量类型判断
```javascript:no-line-numbers
typeof //判断基础类型
instanceof //判断对象是谁的实例constructor
Object.prototype.toString.call //判断具体类型返回字符串
constructor //返回一个引用指向该实例对象的构造函数
```

## NodeJs
**语言特性**

同步和异步指的是被调用方，阻塞和非阻塞指的是调用方，java就是同步阻塞，需要等被调用方代码执行完成，JavaScript是异步非阻塞，代码可以正常执行等异步代码执行完毕回调通知

1. 异步编程的优势在于能够提高程序的执行效率，避免阻塞线程等待长时间的操作，使得程序能够更高效地利用系统资源。
2. 在Java和Python中，多线程可以解决异步编程问题，通过创建多个线程来执行不同的任务，从而避免阻塞主线程。
3. Node.js则通过异步编程方法来实现非阻塞的I/O操作，使得高并发的程序能够更好地利用系统资源。
4. 异步编程中，回调函数是解决异步操作返回结果的关键，回调函数可以指定在异步操作完成后执行的代码，从而使得异步操作能够更好地与主程序结合起来。
5. Promise是一种更先进的异步编程方法，它可以将异步操作包装成一个对象，并可以链式调用多个异步操作，使得代码更加简洁易读。

### 进程和线程
js的执行调用栈是单线程，它在一个进程内只有一个主线程运行，通过事件循环和回调函数实现非阻塞I/O和并发操作，*单核执行(CPU单核最高) + 多个IO线程(硬盘读取)*，异步：IO读取的时候cpu空闲，执行其它脚本，事件驱动和多线程的方式提高IO的效率

进程(厂房)程序运行的环境：进程(process)是程序运行的环境,指正在运行的一个程序，它包含了程序执行的代码和所需的资源，是程序运行的基本单位

线程(工人)线程是实际进行运算的代码: 线程(Thread)是进程中的一个执行流，用于执行任务JavaScript的主线程负责执行代码，处理事件等

#### I/O操作
文件系统 I/O: 使用fs模块进行同步或异步的文件读写操作
网络 I/O: HTTP、HTTPS、TCP 和 UDP
数据库 I/O: MySQL、PostgreSQL等数据库的操作和管理
::: tip
- 时间复杂度：O(n) n=函数执行次数
- 空间复杂度：O(n) n=栈中存有函数
:::

### Global属性
默认声明的参数不放在global上面，每个人文件都是一个模板，模块外面包着一个匿名函数(funciton(){})()

全局属性：global中的属性
- process: Node进程信息，可以获取进程环境信息，内存使用情况
- Buffer: 处理二进制数据，Buffer对象是固定长度的字节数组，用来表示原始数据
- platform: 返回操作系统的标识，window->win32  mac->'darwin'
- argv: 含命令行参数，默认两个参数，第一个是可执行文件路径，第二个是脚本文件的路径
- cwd: 当前工作目录，current working directory
- env: 环境变量，windows通过set设置，macos通过export的设置
- setInterval/setTimeout: 宏任务的定时器
- nextTicknode: 微任务

全局对象：
- module: 每个文件都视为一个模块，module对象包含了当前模块相关的有用信息和方法
- exports: 是module.exports的引用，用于导出模块的功能，可通过exports向其他模块暴露接口
- require: 用于加载模块，解释一个模块的标识符为参数，返回被请求模块的导出对象
- __dirname: 当前模块的目录名
- __filename: 当前模块的文件名(完整路径)

## TypeScript
TS可以视为一组具有共同点的值，因为类型只是集合，所以某个特定值可以同时属于多个集合，例如Number类型就是集合里包含所有的数值，Boolean集合只有两个元素，undefined和null分别只有一个元素，Object类型集合包含所有类对象数据结构，函数，日期，正则，对象等

### 集合之间的相等、交集、补集
- 交集 C∈A C∈B C是A和B集合的交集 C = A∩B
- 并集 A和B集合的所有元素合并 C = A∪B
- 补集 C集合不属于A集合的元素 C = A'

### 集合运算
- 幂等律: A∪A=A,A∩A=A
- 交换律: A∩B=B∩A,A∪B=B∪A
- 结合律: (A∪B)∪C=A∪(B∪C),(A∩B)∩C=A∩(B∩C)
- 分配律: A∪(B∩C)=(A∪B)∩(A∪C),A∩(B∪C)=(A∩B)∪(A∩C)

### Typescript9种运算方式
- 条件: T extends U ? X : Y
- 约束: extends
- 推导: infer
- 联合: |   // T | B 表示包含T或者C即可，也可以TB都有
- 交叉: &  // T | B 表示必须包含TB所有合并类型
- 索引查询: Keyof T
- 索引访问: T[K]
- 索引遍历: in
- 索引重映射: as

**:robot:子类型比父类型更加具体，父类型比子类型更宽泛**

### 访问修饰符
- +public: 公共修饰符，其属性和方法都是公有的
- -rivate: 私有修饰符，其修饰的属性和方法在class外不可见
- #protected:  受保护修饰符，其修饰的属性和方法在当前类和子类内部可以访问
- readonly: 只读修饰符
- static: 静态修饰符，类直接调用
```ts:no-line-numbers
// 类型断言
source as newType
<newType>source

// 加减修饰符
type T0<T> = {-readonly [P in keyof T]-?: T[P]}
type T1<T> = {-readonly [P in keyof T]+?: T[P]}
```

### 协变逆变
- co-variance: 协变指的是在某种结构中，如果 B 是 A 的子类型，那么含有 B 类型参数的泛型也是含有 A 类型参数的泛型的子类型。简单来说，就是子类型可以替换父类型。
- contra-variance: 逆变则相反，它逆转了子类型关系。也就是说，如果 B 是 A 的子类型，那么含有 B 类型参数的泛型是含有 A 类型参数的泛型的父类型。

### 运算套路
```typescript:no-line-numbers
// 模式匹配做提取
type GetParameters<Func extends Function> = Func extends (...args:infer Args) => unknown ? args : never
type ParamenterResult = GetParameters<(name:string) => string>
// 首先通过extends限制类型必须是Function
// 然后用extends为参数类型匹配公式，当满足公式时提取公式中的变量Args

// 重新解构做变换
type CapitalizeStr<Str extends string> = Str extends `${infer First}${infer Rest}`?`${Uppercase<First>}${Test}` : Str
type Capitalize = CapitalizeStr<'tang'>
// 限制输入的类型必须时字符串类型
// 用extends为参数类型匹配公式，提取公式中的变量First Rest,并通过Uppercase封装

// 递归复用做循环
type ReverseArr<Arr extends unKnown[]> = Arr extends [infer First, ...infer Rest] ? [...ReverseArr<Rest>,First]:Arr
type ReverseArrResult =ReverseArr<[1,2,3,4]>
// 限制必须是数组，用extends匹配公式，满足条件，则调用自身，否则直接返回

// 数组长度做计数
type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>
type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length']
type AddResult = Add<32,23>
// 首先通过递归创建一个可以生成任意长度的数组类型
// 然后创建一个加法类型，通过数组的长度来实现加法运算
```

## VueJs
声明式的、组件化的编程模型

### 组件的本质
组件配置 》vueComponent实例 》 render() 》virtual DOM 》 DOM

createComponent -> init -> new 组件().$mount()

*组件的本质是产生虚拟DOM*

**组件处理**
1. vue.extend 根据用户传入的对象生成一个组件的构造函数
2. 根据组件生成对应的虚拟节点 data： {hook：init}
3. 组件初始化 将我们的虚拟节点转化成真是节点(组件的init方法) new Sub().$mount()
```javascript:no-line-numbers
function render(createElement) {
  return createElement(
    tag: //标签名字
    data：// 传递数据
    children: //子节点数组
  )
}
// Example
render(h){
  return h( )
}
```

**new Vue**

render > template > el

// 初始化=》 根实例 =》 挂载 =》 执行render =》 Vdom =》 patch(vdom)  =》 dom =》 append
```javascript:no-line-numbers
this._init(options)  {
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm,'beforeCreate')
  initInjections(vm)
  initState(vm)
  initProvide(vm)
  callHook(vm,'created')
}
```

### 插件开发
插件开发必须暴露install方法，第一个参数是vue构造器，第二个参数是可选的选项对象
```javascript:no-line-numbers
const MyPlugin = {
    install(Vue, options){
        // 注册全局方法
        Vue.myGlobalMethod =  funtion () {}
        // 注册全局资源
        Vue.directiove('my-directive', {})
        // 注册全局混入
        Vue.mixin({})
        // 添加实例方法
        Vue.prototype.$myMethod = function(){}
    }
}
myPlugin.install = functions(vue,options){}
```

### 普通插槽 or 具名插槽
普通插槽：(渲染作用域在父组件中)

1. 解析组件的时候将组件的children放在componentOptions上作为虚拟节点的属性
2. 将childr取出放在组件的vm.$options._renderchildren中
3. 做出一个映射表放到vm.$slots上 》 将结果放在vm.$scopeSlots上 vm.$scopeslots = {a: fn, b:fn, default:fn}
4. 渲染组件调用_t方法 在vm.$scopeSlots找到对应的函数来渲染内容

具名插槽：(渲染作用域在子组件中)
1. 渲染插槽的作用域是子组件，不会作为children，将作用域插槽变成一个属性scopeSlots
2. 制作一个映射关系 $scopeslots = {default: fn:function({msg}){return _c('div,{},[_v(_s(msg))})}}
3. 渲染组件的模板会通过那么找到对应的函数，将数据传入函数中才渲染虚拟节点，用虚拟节点替换_t('default')

### Vue2.x生命周期
- beforeCreate: 实例初始化之后，数据观测和事件配置之前
- created: 实例已经创建完成，数据观测和事件配置完成，但是$el属性目前不可见
- beforeMount: 挂载开始之前被调用，相关的render函数首次被调用
- mounted: 实例已经挂载完成，数据渲染到页面
- beforeUpdate: 数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前
- updated: 数据更改导致虚拟DOM重新渲染和打补丁之后调用
- activated: 被keep-alive缓存的组件激活时调用
- deactivated: 被keep-alive缓存的组件停用时调用
- beforeDestroy: 实例销毁之前调用，实例仍然可用
- destroyed: 实例销毁之后调用，所有绑定都会被解绑

### Vue3.x生命周期
- onBeforeMount: 组件被挂载之前被调用
- onMounted: 组件挂载完成后执行
- onUpdated: 组件因为响应式状态变更而更新其 DOM 树之后调用
- onUnmounted: 组件实例被卸载之后调用
- onBeforeUpdate: 组件即将因为响应式状态变更而更新其 DOM 树之前调用
- onBeforeUnmount: 组件实例被卸载之前调用

::: tip
setup函数会在beforeCreate之前执行，setup函数相当于beforeCreate和created的功能，可以在setup中直接进行数据初始化和方法定义
:::

### Vue开发规范整理
1. 函数/变量采用蛇形命名  function add_number(){}   let number_object = {}
2. 组件/组件变量名/类型采用大驼峰命名 AddNumberTemplate
3. 全局Api/全局状态store 采用命名前缀api_
4. 多数组件状态应该使用reactive定义在一起，命名state
5. 结构优先，保证标签结构清晰的前提下表达更多信息，程序表达逻辑，结构表达信息。
6. 避免大量调用栈，比如按钮单一功能Js功能代码写在行内模板，无需定义函数
7. 避免嵌套除非无法避免
8. 避免使用标签选择器，class类名采用小写单词，中间用短横线连接
9. 选择器尽量保持一层，原则上不允许超过三层
10. css状态类名：active,disabled,selected,open,close,on,off
11. 尽量使用统一的export导出