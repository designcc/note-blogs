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
</div><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h3>
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
</div></template>


