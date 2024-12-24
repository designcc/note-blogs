<template><div><h1 id="system、-terminal" tabindex="-1"><a class="header-anchor" href="#system、-terminal"><span>system、 terminal</span></a></h1>
<h2 id="计算器网络" tabindex="-1"><a class="header-anchor" href="#计算器网络"><span>计算器网络</span></a></h2>
<h3 id="计算机覆盖范围" tabindex="-1"><a class="header-anchor" href="#计算机覆盖范围"><span>计算机覆盖范围</span></a></h3>
<ul>
<li>WAN ： 广域网</li>
<li>MAN ： 城域网</li>
<li>LAN ： 广域网</li>
<li>PAN ： 个域网</li>
</ul>
<h3 id="tcp-ip协议" tabindex="-1"><a class="header-anchor" href="#tcp-ip协议"><span>TCP/IP协议</span></a></h3>
<p>应用层（http，telnet，ftp, email, DNS等协议）-&gt; 传输层（tcp,udp） -&gt; 网络层（ip,icmp,ARP,PARP,BOOTP等协议）-&gt; 网络接口层（设备驱动程序及接口卡）
<img src="@source/views/static/networkUnit.png" alt="networkUnit"></p>
<h3 id="网络协议体系结构" tabindex="-1"><a class="header-anchor" href="#网络协议体系结构"><span>网络协议体系结构</span></a></h3>
<ul>
<li>
<p>应用层： 解决通过应用进程的交互来实现特定网络应用的问题</p>
</li>
<li>
<p>运输层： 解决进程之间基于网络的通信问题</p>
</li>
<li>
<p>网络层： 解决数据包在多个网络之间传输和路由的问题</p>
</li>
<li>
<p>数据链路层： 解决数据包在一个网络或一段链路上传输的问题</p>
</li>
<li>
<p>物理层： 解决使用何种信号来表示0和1的问题
<img src="@source/views/static/networkingProtocol.png" alt="networkingProtocol">
<img src="@source/views/static/networkingProtocol1.png" alt="networkingProtocol1"></p>
</li>
<li>
<p>实体： 指任何可发送和接收信息的硬件或者软件进程</p>
</li>
<li>
<p>对等实体： 指通信双方相同层次中的实体</p>
</li>
<li>
<p>协议： 控制两个对等实体在“水平方向”经行“逻辑通信”的规则集合
<img src="@source/views/static/networkingProtocol2.png" alt="networkingProtocol2"></p>
</li>
</ul>
<h3 id="导引型传输媒体和非导引型传输媒体" tabindex="-1"><a class="header-anchor" href="#导引型传输媒体和非导引型传输媒体"><span>导引型传输媒体和非导引型传输媒体</span></a></h3>
<p>① 导向型传输媒体（固体媒体） 1.同轴电缆 2.双绞线 3.光纤</p>
<p>② 非导向型输出媒体（自由空间） 1.无线电波 2.微波 3.红外线 4.大气激光 5.可见光</p>
<h3 id="客户端和服务器建立连接" tabindex="-1"><a class="header-anchor" href="#客户端和服务器建立连接"><span>客户端和服务器建立连接</span></a></h3>
<p><strong>网址解析过程</strong></p>
<ol>
<li>DNS解析，获取网站的ip地址</li>
<li>浏览器需要和服务器建立连接(tcp/ip 协议族)三次握手</li>
<li>向服务器发送请求(http协议)</li>
<li>服务器处理请求，并返回相应(http协议)</li>
<li>浏览器将响应渲染</li>
<li>断开和服务器的连接(四次挥手)</li>
</ol>
<p><strong>三次握手和四次挥手</strong></p>
<ol>
<li>三次握手 - 建立连接
<ol>
<li>客户端向服务器发送连接请求 SYN</li>
<li>服务器收到连接请求，向客户端返回信息 SYN - ACK</li>
<li>客户端向服务器发送同意连接信息 ACK</li>
</ol>
</li>
<li>四次挥手 断开连接
<ol>
<li>客户端向服务器发送请求，通过服务器数据发送完毕，请求断开连接 FIN</li>
<li>服务器向客户端返回数据，知道了 ACK</li>
<li>服务器向客户端返回数据，收到了，可以断开连接 FIN - ACK</li>
<li>客户端向服务器发送数据，可以断开了 ACK</li>
</ol>
</li>
</ol>
<p><strong>报文</strong></p>
<p>🤖 浏览器向服务器直接通信是基于请求和响应</p>
<ul>
<li>浏览器向服务器发送请求（request）</li>
<li>服务器向浏览器返回响应（response）</li>
</ul>
<blockquote>
<p>HTTP协议就是对这个报文的格式进行规定</p>
</blockquote>
<p><strong>响应状态码</strong></p>
<ul>
<li>1xx 请求处理中</li>
<li>2xx 标识成功</li>
<li>3xx 请求重定向</li>
<li>4xx 客服端错误</li>
<li>5xx 服务器错误</li>
</ul>
</div></template>


