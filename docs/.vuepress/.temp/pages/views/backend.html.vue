<template><div><h1 id="java-springboot" tabindex="-1"><a class="header-anchor" href="#java-springboot"><span>Java, springboot</span></a></h1>
<h2 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>Java</span></a></h2>
<p>javaSE：标准版(桌面开发，控制台开发)</p>
<p>javaME：嵌入式开发(手机，家电)</p>
<p>javaEE：E企业级开发(web端，服务器开发)</p>
<p>JDK：java development kit</p>
<p>JRE：java runtime environment</p>
<p>JVM：java virtual machine</p>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h3>
<p><strong>基本类型(primitive type)</strong></p>
<ol>
<li>数值类型</li>
</ol>
<ul>
<li>整数类型<br>
byte占一个字节范围： -128 —127<br>
short占两个字节范围：-32768 — 32767<br>
int占4个字节范围：-2147483648 — 2147483647<br>
long占8个字节范围<br></li>
<li>浮点类型(有限，离散，舍入误差， 避免使用浮点数比较)<br>
float占四个字节<br>
double占8个字节<br>
字符类型(char占两个字节)<br></li>
</ul>
<ol start="2">
<li>boolean类型(占一位只有true和flase)</li>
</ol>
<p><strong>引用类型(reference type)</strong></p>
<ul>
<li>类</li>
<li>接口</li>
<li>数组</li>
</ul>
<h4 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换</span></a></h4>
<p>byte, short, char -&gt; int -&gt; long -&gt; float -&gt; double<br></p>
<ul>
<li><strong>强制转换</strong> (类型)变量名 高-低</li>
<li><strong>字段转换</strong> 低到高</li>
</ul>
<blockquote>
<p>不能对布尔值进行转换<br>
不能把对象类型转换为不相干的类型<br>
在把高容量转换到低容量的时候强制转换<br>
转换的时候可能存在内存溢出或精度丢失<br></p>
</blockquote>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3>
<p>1.类变量  2.实例变量  3.局部变量</p>
<div class="language-java" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">public</span> calss <span class="token class-name">Variable</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token comment">// 常量</span></span>
<span class="line"> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.13</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token comment">// 变量</span></span>
<span class="line"> <span class="token keyword">static</span> <span class="token keyword">int</span> allClick <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 类变量</span></span>
<span class="line"> <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"hello"</span> <span class="token comment">//实例变量</span></span>
<span class="line"> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//局部变量</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h4 id="成员变量or局部变量" tabindex="-1"><a class="header-anchor" href="#成员变量or局部变量"><span>成员变量or局部变量</span></a></h4>
<p>成员变量声明在类中，不赋值默认有值</p>
<p>局部变量在方便体中，默认无值</p>
<h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h3>
<div class="language-java" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token comment">// 算数运算符：</span></span>
<span class="line"><span class="token operator">+</span> <span class="token operator">-</span> <span class="token operator">*</span> <span class="token operator">/</span> <span class="token operator">%</span> <span class="token operator">++</span> <span class="token operator">--</span></span>
<span class="line"><span class="token comment">// 赋值运算符：</span></span>
<span class="line"><span class="token operator">=</span></span>
<span class="line"><span class="token comment">// 关系运算符：</span></span>
<span class="line"><span class="token operator">></span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token punctuation">></span></span><span class="token operator">=</span> <span class="token operator">&lt;=</span> <span class="token operator">==</span> <span class="token operator">!=</span><span class="token keyword">instanceof</span></span>
<span class="line"><span class="token comment">// 逻辑运算符：</span></span>
<span class="line"><span class="token operator">&amp;&amp;</span> <span class="token operator">||</span> ！</span>
<span class="line"><span class="token comment">// 位运算符：</span></span>
<span class="line"><span class="token operator">&amp;</span> <span class="token operator">|</span> <span class="token operator">^</span> <span class="token operator">~</span> <span class="token operator">>></span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&lt;</span> <span class="token punctuation">></span><span class="token punctuation">></span></span><span class="token operator">>></span></span>
<span class="line"><span class="token comment">// 条件运算符：</span></span>
<span class="line">？ ：</span>
<span class="line"><span class="token comment">// 扩展赋值运算符：</span></span>
<span class="line"><span class="token operator">+=</span> <span class="token operator">-=</span> <span class="token operator">*=</span> <span class="token operator">/=</span></span>
<span class="line"></span></code></pre>
</div><h3 id="内存" tabindex="-1"><a class="header-anchor" href="#内存"><span>内存</span></a></h3>
<p>堆(Heap)：存放new的对象实例和数组，线程共享，由GC进行内存回收管理，运行时动态分配</p>
<p>栈(Stack)：存放局部变量表、操作数栈、动态链接、方法出口等，每个线程都有自己的私有栈空间，基本数据类型和对象引用</p>
<p>方法区(Method Area)：线程共享，储存所有的class信息和static变量还有常量</p>
<h3 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象"><span>面向对象</span></a></h3>
<p><strong>以类的方式组织代码，以对象的组织封装数据</strong></p>
<p>面向过程：步骤清晰简单，逐步完成</p>
<p>面向对象：分类思想，对具体问题进行分类，适合解决复杂的问题</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>对描述复杂事物宏观上的分析需要面向对象，微观操作需要面向过程去处理</p>
</div>
<h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装"><span>封装</span></a></h3>
<p><strong>属性私有化</strong>，主要指的是将数据（属性或字段）与操作这些数据的方法绑定在一起，并且尽可能地隐藏对象的内部实现细节，只暴露必要的接口给外部使用</p>
<div class="language-java" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 私有字段</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 公共构造函数</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Getter 方法</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Setter 方法</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h4 id="权限修饰符" tabindex="-1"><a class="header-anchor" href="#权限修饰符"><span>权限修饰符</span></a></h4>
<ol>
<li>public 公开：同包同类不同包子类不同包的非子类使用</li>
<li>private 私有：同一个类使用</li>
<li>default 不写默认：同类同包使用</li>
<li>protected 受保护的：同类同包不同包子类使用</li>
<li>final 最终态：修饰成员方法、变量、类，被修饰的变量不能修改，必须初始化值，不能重写继承</li>
<li>static 静态：类直接访问，实例共享</li>
<li>abstract 抽象：抽象类方法，无法实现，只能继承</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>私有方法不可被重写</p>
</div>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h3>
<ol>
<li>方法名必须相同</li>
<li>参数列表必须相同</li>
<li>修饰符：范围可以扩大但不能缩小 <Badge type="danger" text="public > protected > default > private" vertical="middle" /></li>
<li>抛出的异常：范围，可以被缩小但不能扩大</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>父类：也被称为基类、超类</p>
<p>子类：也被称为派生类</p>
</div>
<h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态"><span>多态</span></a></h3>
<ol>
<li>有继承或者实现的关系</li>
<li>方法的重写</li>
<li>父类的引用指向我们的子类</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>成员变量：编译看左边，执行看左边</p>
<p>成员方法：编译看左边，执行看右边</p>
</div>
<p>一个方法根据发送对象的不同而采用多种不同的行为,一个对象的实际类型是确定的，但是可以指向对象的引用的类型有很多</p>
<h3 id="抽象" tabindex="-1"><a class="header-anchor" href="#抽象"><span>抽象</span></a></h3>
<ol>
<li>方法、类在前面加上abstract进行修饰</li>
<li>一个抽象类中有多个抽象方法，抽象类中可以定义非抽象方法</li>
<li>子类继承抽象类必须重写所有抽象方法，没有重写则此类也是抽象类，继承父类的抽象方法</li>
<li>抽象类不能实例化，不能与private、final、static共存，因为子类无法重写</li>
</ol>
<h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h3>
<p>接口定义的数据会默认public static final 进行修饰，jdk8可以定义非抽象方法 用default关键字修饰</p>
<h4 id="接口和抽象类的区别" tabindex="-1"><a class="header-anchor" href="#接口和抽象类的区别"><span>接口和抽象类的区别</span></a></h4>
<p>类是继承关系，只能单继承。接口是实现，可以多实现，还可以继承一个类的同时实现多个接口，接口和接口可以多继承</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>抽象类和接口可以通过匿名内部类new出实例，底层实现就是idea自动创建了一个名null的类继承或实现抽象类或接口</p>
</div>
<h3 id="lambda表达式" tabindex="-1"><a class="header-anchor" href="#lambda表达式"><span>Lambda表达式</span></a></h3>
<div class="language-java" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token class-name">Class</span> instance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>方法引入、 方法参数列表、 返回类型和函数接口参数列表与返回类型必须保持一致</p>
<ol>
<li>静态方法： 类名::(静态)方法名称</li>
<li>对象方法： 类名::实例方法名称</li>
<li>实例方法： new对象 对象实例::方法引入</li>
<li>构造函数： 类名::new</li>
</ol>
<h3 id="stream" tabindex="-1"><a class="header-anchor" href="#stream"><span>Stream</span></a></h3>
<p>执行程序的实例就叫做进程，线程是程序执行的最小单位，一个进程中可以有多个线程</p>
<ul>
<li>并行：多线程</li>
<li>串行：单线程</li>
</ul>
<h4 id="多线程cpu调度" tabindex="-1"><a class="header-anchor" href="#多线程cpu调度"><span>多线程CPU调度</span></a></h4>
<p>程序会把前一个任务cpu上下文（也就是<strong>cpu寄存器和程序计数器</strong>）保持起来，然后加载新任务的上下文到这些寄存器和程序计数器，最后在跳转到程序计数器所指的新位置运行新任务，线程状态会从<strong>就绪状态</strong>切换到<strong>运行状态</strong></p>
<p>程序计数器是用于存放下一条指令所在单元的</p>
<p><strong>同步和异步</strong></p>
<ul>
<li>
<p>同步：就是代码从上向下执行</p>
</li>
<li>
<p>异步：单独分支执行，相互之间没有任何影响</p>
</li>
</ul>
<h3 id="反射和注解" tabindex="-1"><a class="header-anchor" href="#反射和注解"><span>反射和注解</span></a></h3>
<ul>
<li>反射（Reflection）:</li>
</ul>
<p>反射是一种在运行时动态获取类信息以及操作对象的能力。通过反射，可以在程序执行期间检查或“自省”类、方法、字段等结构，并且能够调用这些成员，即使它们是私有的</p>
<ul>
<li>注解（Annotations）</li>
</ul>
<p>注解是Java 5引入的一种元数据形式，用来为程序元素（如类、方法、变量等）提供额外的信息。它们本身并不直接影响程序逻辑，但可以被其他工具或库读取并在特定时刻采取行动。</p>
<p><strong>SpringBoot or SpringCloud</strong></p>
<ul>
<li>springClod 微服务解决框架，微服务技术解决方案</li>
<li>SpringCloud RPC远程调用接口 <Badge type="tip" text="Feign" vertical="middle" /> 客户端，接口协议采用HTTP协议</li>
<li>SpringCloud 依赖于Springboot默认情况下已经整合好SpringMVC</li>
</ul>
<h3 id="filter-or-interceptor" tabindex="-1"><a class="header-anchor" href="#filter-or-interceptor"><span>Filter or Interceptor</span></a></h3>
<ul>
<li>接口规范不对，过滤器需要实现filter接口，而拦截器需要实现handleinterceptor接口</li>
<li>拦截范围不同：过滤器Filter会拦截所有资源，而interceptor 只会拦截spring环境中的资源</li>
</ul>
<h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h3>
<p>开始事务(start transaction) - 提交事务(commit) - 回滚事务(rollback)</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><strong>@Transactional(rollbackFor = Exception.class)</strong> 可以是对类或者方法启动注解，Exception.class表示所有错误都回滚</p>
<p><strong>开启事务管理日志</strong>: <em>logging: level: org.springframework.jdbc.support.jdbcTransactionManage: debug</em></p>
</div>
<h3 id="aop" tabindex="-1"><a class="header-anchor" href="#aop"><span>AOP</span></a></h3>
<p>Aspect Oriented Programming(面向切片编程)</p>
<p>安装（spring-boot-starter-aop）依赖</p>
<p><strong>AOP核心概念</strong></p>
<ol>
<li>连接点： JoinPoint，可以被AOP控制的方法（暗含方法执行时的相关信息）</li>
<li>通知：Advice，指哪些重复的逻辑，也就是共性功能（最终体现为一个方法）</li>
<li>切入点：PointCut，匹配连接点的条件，通知仅会在切入点方法执行时被应用</li>
<li>切面：Aspect，描述通知和切入点的对应关系（通知+切入点）</li>
<li>目标对象：Target，通知所应用的对象</li>
</ol>
<div class="language-java" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Component</span></span>
<span class="line"><span class="token annotation punctuation">@Aspect</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TimeAspect</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// execution(访问修饰符? 返回值 包名.类命.?方法名(方法参数) throws 异常?)</span></span>
<span class="line">	<span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">"execution(* com.pack.service.*.*(..))"</span><span class="token punctuation">)</span> <span class="token comment">//切入表达式</span></span>
<span class="line">	<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">recordTime</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> proceedingJoinPoint<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">long</span> begin <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">Object</span> object <span class="token operator">=</span> proceedingJoinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用原始方法</span></span>
<span class="line">            <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"耗时："</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> begin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> object<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="bean" tabindex="-1"><a class="header-anchor" href="#bean"><span>Bean</span></a></h3>
<p>Bean的获取</p>
<div class="language-java" data-highlighter="prismjs" data-ext="java" data-title="Bean的获取"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Autowired</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext</span>
<span class="line"><span class="token class-name">DController</span> bean1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DController</span><span class="token punctuation">)</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"DController"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token class-name">DController</span> bean2 <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">DeptControl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token class-name">DController</span> bean3 <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"DController"</span><span class="token punctuation">,</span> <span class="token class-name">DeptControl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>声明第三方bean</p>
<div class="language-java" data-highlighter="prismjs" data-ext="java" data-title="Bean的获取"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Configuration</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonConfig</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token annotation punctuation">@Bean</span></span>
<span class="line">	<span class="token keyword">public</span> <span class="token class-name">SReader</span> <span class="token function">sReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SReader</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven"><span>Maven</span></a></h3>
<p><strong>分模块设计</strong></p>
<ol>
<li>父子嵌套层级
parent-project</li>
</ol>
<p>-- module-a</p>
<p>-- module-b</p>
<ol start="2">
<li>父子同级
parent-project</li>
</ol>
<p>module-a</p>
<p>module-b</p>
<hr>
<p>依赖管理： &lt;dependencyManagement&gt; 集中管理版本号</p>
<p>插件管理：&lt;pluginManagement&gt; 统一配置插件</p>
<p>继承：&lt;parent&gt; 需要继承的父组件</p>
<p>聚合：&lt;modules&gt; 定义需要聚合的子模块，根目录运行会构建modules包含的所有子目录</p>
<p>通用配置：&lt;properties&gt; 配置变量，方便对版本统一管理(==${}==)</p>
<h3 id="spring-boot-项目搭建" tabindex="-1"><a class="header-anchor" href="#spring-boot-项目搭建"><span>Spring boot 项目搭建</span></a></h3>
<p>在线搭建网址：<a href="https://start.aliyun.com/" target="_blank" rel="noopener noreferrer">https://start.aliyun.com/</a></p>
<p>安装依赖：</p>
<ul>
<li>spring boot </li>
<li>spring-boot-starter-web</li>
<li>MyBatis Framework</li>
<li>MySql Driver</li>
<li>Lombok</li>
</ul>
<p>SSM框架 Spring SpringMvc mybatis xml方式配置</p>
<ol>
<li>去除xml配置</li>
<li>全部采用注解化的方式配置</li>
<li>内嵌入Tomcat</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>默认情况下spring-boot-starter-wen已经整合完毕，底层封装Maven依赖实现</p>
</div>
</div></template>


