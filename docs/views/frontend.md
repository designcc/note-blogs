# JavaScript 核心概念笔记

## 闭包(closure)
闭包是由函数以及声明该函数的词法环境(lexical environment)组合而成的，闭包允许将函数与其所操作的数据（环境变量）所关联。
``` javascript:no-line-numbers
global.Closure // 全局闭包
global.[[Scopes]] // 全局作用域链
global.LE = {variable, function} // 全局词法环境中的全局变量(variable)和函数(function)
global(function).LE // 全局作用域中定义的函数内部词法环境
function.[[Scopes]] = [global.LE] // 函数作用域链
```
Window的顶层作用域 [window, Script] script不生产闭包对象，var声明的变量会成为window的属性，let和const声明的变量会放在Script作用域中。Node环境 [global, Script, Closure] Script作用域会创建闭包对象，每个模块文件都是一个独立的闭包

## 构造函数
通过new关键字调用构造函数用来创建对象实例，调用时会执行构造函数内部代码，并返回一个新创建的对象实例，每次调用都返回一个新的对象实例，通过new关键字调用时该函数才是构造函数。ES6引入Class类来定义构造函数，底层依然是基于原型。

## 原型和原型链
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

## 事件循环机制
事件循环机制是JavaScript运行时环境（如浏览器和Node.js）处理异步操作的核心概念。它使得JavaScript能够在单线程环境下有效地管理任务，包括执行代码、处理用户输入、网络请求等。

**调用栈**： 后进先出（LIFO, Last In First Out）的数据结构，调用栈中存放着要执行的代码，代码执行中遇到异步放进异步任务队列，遇到微任务放进微任务队列，每次调用栈中代码执行完毕清除完微任务队列。

**任务队列**：数据结构-先进先出，放着异步任务。
- 宏任务队列： setTimeout, setInterval, postMessage, MessageChannel, setImmediate, ajax，script脚本
- 微任务队列： promise.then() ，mutationObserver，微任务首次执行优与GUI渲染

*多线程：Web worker线程，可以执行js代码，但是不能访问呢DOM*

## 栈(Stack)和堆(Heap)
栈存放着基本数据类型，因为这些数据大小固定，可以直接在内存中分配空间。
堆存放着复杂数据类型如对象、数组、函数等，因为这些大小可能是动态的。声明一个对象时，会将对象的数据放在堆中，栈中会存放着对象数据的内存引用(指针)

## 模块化规范