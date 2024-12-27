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
<ul>
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
</ul>
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
<h2 id="chrome-devtools" tabindex="-1"><a class="header-anchor" href="#chrome-devtools"><span>chrome devtools</span></a></h2>
<p>ctrl+[ ]: 切换工具面板</p>
<p>元素：h可以快速切换显示和隐藏 ctrl+↑ ↓移动元素</p>
<p>monitor(function): 监听函数</p>
<p>monitorEvents(event): 监听事件</p>
<h2 id="terminal-command" tabindex="-1"><a class="header-anchor" href="#terminal-command"><span>Terminal command</span></a></h2>
<h3 id="powershell" tabindex="-1"><a class="header-anchor" href="#powershell"><span>powershell</span></a></h3>
<p>D: //进入D盘</p>
<p>cd .. //跳转上一层目录</p>
<p>dir: // 查看目录下的文件 类似于linux的ls</p>
<p>ipconfig: 查看 ip信息</p>
<p>help: 获取帮助</p>
<p>命令 /?（cd /?）：查询帮助信息和基本用法</p>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3>
<p>clear(cls)：清屏</p>
<p>ls(list):：查看列表 cmd用dir</p>
<p>cd：切换目录 cd.. 切换到上级目录</p>
<p>mkdir(md)：创建文件夹</p>
<p>rmdir(rd)：删除文件夹</p>
<p>del: 删除文件</p>
<p>cd rm rd mkdir touch del echo</p>
<p>del: 仅仅删除文件或者文件夹，不能递归删除子文件夹。 rd 或者 rmdir 专门用于递归的删除一个文件夹以及子文件夹的，不支持指定一个文件名。 rm -rf node_modules -r: 递归删除整个文件 -f: 强制删除不提示</p>
<p>md: //创建目录</p>
<p>rd: //删除目录</p>
<p>echo：在终端中输出变量或内容，（echo text &gt; test.txt 将text内容通过重定向符号 &gt; 将输出内容写入文件**)**</p>
<h2 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>GIT</span></a></h2>
<p>GIT object</p>
<ul>
<li>BLOB 文件内容</li>
<li>tree 目录结构，文件权限，文件名</li>
<li>commit 上一个commit，对应快照，作者，提交信息</li>
<li>refs HEAD、分支、tag</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><strong>不可篡改</strong> git和区块链的数据结构非常相识，两者都是基于哈希树和分布式</p>
</div>
<h3 id="git文件标识" tabindex="-1"><a class="header-anchor" href="#git文件标识"><span>GIT文件标识</span></a></h3>
<p>未跟踪 untrack ( &lt;- git rm) -&gt; 未修改unmodified ( &lt;- git checkout)-&gt; 已修改modified( &lt;- git reset) -&gt; 已暂存staged</p>
<p>A: 增加的文件</p>
<p>C：文件的一个新拷贝</p>
<p>D：删除的一个文件</p>
<p>M：文件的内容或者mode被修改 model file 修改 黄色</p>
<p>R：文件名被修改</p>
<p>T：文件的类型被修改</p>
<p>U：文件没有被合并（需要完成合并才能提交）unTracked 未跟踪 蓝色</p>
<p>X：未知状态</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>#HEAD 表示当前版本 HEAD^代表上一个版本</p>
</div>
<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3>
<p>where git 查看git安装目录 Linux(which git)</p>
<p>git config --global --list 查看全局配置</p>
<p>git init 创建空仓库</p>
<p>git remote add origin https:github.git 本地仓库连接远程仓库</p>
<p>git pull origin master 拉取远程源master资源</p>
<p>git push -u origin master 推送远程的源 prigin 的 master 不是第一次不需要-u</p>
<p>git remote remove &lt;name&gt; 删除远程仓库的关联</p>
<p>git remote -v(verbose) 查看当前配置有那些远程仓库</p>
<p>git branch -avv 查看本地和远程分支的详细信息</p>
<p>git fetch --all 拉取所以远端分支</p>
<p>git restore . 用于丢弃工作区的修改或恢复文件的内容</p>
<p><strong>文件管理</strong></p>
<p>git rm &lt;file&gt; 把文件从工作区和暂存区同时删除</p>
<p>git rm --cached &lt;file&gt; 把文件从暂存区删除，但保留在当前工作区</p>
<p>git rm -r * 递归删除某个目录下的所有子目录和文件</p>
<h2 id="vim" tabindex="-1"><a class="header-anchor" href="#vim"><span>Vim</span></a></h2>
<p><strong>模式： normal模式 &gt; i 键切换到insert模式</strong>
s
-动词：operator(操作符) -名词：Motion(动作) - Text object(文本对象)</p>
<p><strong>移动</strong>
K：往上移动 J：往下移动 H：往左移动 L：往右移动</p>
<p>zc: 关闭代码折叠 --- zo打开代码折叠</p>
<p>%：匹配一对呈现的如() {} []</p>
<p>*：查找光标所单词的下一个 --- #查找光标所单词的上一个</p>
<p>w：跳到单词开头 b：跳到本单词或上一个单词开头 e：跳到本单词或下一个单词的结尾 ge：跳到上一个单词结尾</p>
<p>f{char}：光标跳转同行到下一个{char}位置 -- F{char}</p>
<p>t{char}：光标跳转到同行下一个char一个字符位置 -- T{char}*</p>
<p>; 反复上次的字符查找操作 -- , 反向查找上次的查找命令*</p>
<p>0 跳到行首 $跳到行尾 ^跳到非空行首</p>
<p>x：向后删除一个单词 --- X向前删除一个单词</p>
<p>r：替换当前单词</p>
<p>R：替换模式</p>
<p>c：删除并进入插入模式</p>
<p>s：删除光标再进去插入模式</p>
<p>=G：格式化文档 --- =3：格式化三行 --- =&gt;&gt;：向右缩进</p>
<p>J：合并行</p>
<p>~：切换大小写</p>
<p>.：重复上一次命令</p>
<p><strong>操作</strong></p>
<p>d(delete) 删除</p>
<p>dd：删除一行</p>
<p>c(change) 修改</p>
<p>cc：删除并进入写入模式</p>
<p>y(yank) 复制</p>
<p>yy：复制一行</p>
<p>v(visual) 选中并进入visual模式</p>
<p>p：复制一行</p>
<p>u：撤销操作</p>
<p><strong>动作</strong></p>
<p>i(inner)：i&quot; -&gt; &quot;foo&quot; iw -&gt; foo i( -&gt; (foo)</p>
<p>a(around)：i&quot; -&gt; &quot;foo&quot; iw -&gt; foo i( -&gt; (foo)</p>
<p><strong>insert模式：用于文本输入</strong></p>
<p>esc / ctrl+[：退出insert模式</p>
<p><strong>Visual模式：用于文本选择</strong></p>
<p>v: 进去选择模式</p>
<p>u：大小写转换 --- U</p>
<p>vi&quot;：选中&quot;xxx &quot;内的内容</p>
<p>vip：选中一段内容</p>
<p><strong>Command模式：用于执行命令</strong></p>
<p>/{pattern}：向前搜索 ---- ?{pattern}：向后搜索</p>
<p>/ 进去查询模式</p>
<p>/进去搜索模式 输入查找字符回车</p>
<p>n匹配下一个结果 --- N上一个结果</p>
<p>进去正则替换模式</p>
<p>:：进入输入模式 😒/search/replace 当前行替换第一个 😒/search/replace/g g匹配当前行符合的所有 i区分大小写</p>
<p>:10,20s/search/replace 10-20表示10行到20行 :%s/search/replace %s表示当前文件全部匹配 😒/&lt;search&gt;/replace</p>
<p>gd: 转到定义</p>
<p>gh：鼠标hover效果</p>
<p>ctrl+]：查看定义</p>
<p>gt：切换标签页</p>
<p>ctrl+0：切换到文件面板</p>
<p>i：光标前插入</p>
<p>a：光标后插入</p>
<p>:wq：保存并退出</p>
<p>:q!：强制退出</p>
</div></template>


