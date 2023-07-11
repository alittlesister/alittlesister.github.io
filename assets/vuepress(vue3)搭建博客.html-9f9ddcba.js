import{_ as l,M as o,p as d,q as c,R as e,N as s,V as p,t as n,a1 as i}from"./framework-943286ea.js";const r={},u=e("h1",{id:"使用-vuepress-搭建个人博客",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-vuepress-搭建个人博客","aria-hidden":"true"},"#"),n(" 使用 VuePress 搭建个人博客")],-1),v={href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"},b=i('<ul><li>基于 Markdown 语法生成网页</li><li>可以使用 Vue 开发的组件</li></ul><p>使用 VuePress 搭建个人博客：</p><ul><li><a href="#%E4%BD%BF%E7%94%A8-vuepress-%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2">使用 VuePress 搭建个人博客</a><ul><li><a href="#%E5%88%9B%E5%BB%BA%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93">创建远程仓库</a></li><li><a href="#%E6%9C%AC%E5%9C%B0%E5%8D%9A%E5%AE%A2%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA">本地博客项目搭建</a><ul><li><a href="#%E7%9B%AE%E5%BD%95%E9%85%8D%E7%BD%AE">目录配置</a></li><li><a href="#%E7%94%9F%E6%88%90%E7%AE%80%E5%8D%95%E4%B8%BB%E9%A1%B5">生成简单主页</a></li><li><a href="#navbar-%E5%AF%BC%E8%88%AA%E6%A0%8F">Navbar 导航栏</a></li><li><a href="#%E5%85%B6%E5%AE%83">其它</a></li></ul></li></ul></li></ul><h2 id="创建远程仓库" tabindex="-1"><a class="header-anchor" href="#创建远程仓库" aria-hidden="true">#</a> <a href="#%E5%88%9B%E5%BB%BA%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93">创建远程仓库</a></h2>',4),k={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[n("没有用户的话先注册。新建一个仓库： 点左边的"),e("code",null,"New"),n("或右上角加号里面的"),e("code",null,"New repository")],-1),h=e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/img_convert/3135b896a70945eab8206bfcd6cfae48.png",alt:""}),e("img",{src:"https://img-blog.csdnimg.cn/img_convert/7827f66729ed2e83311a1b0e3b73e67a.png",alt:""})],-1),E=e("p",null,[n("填写仓库名，点"),e("code",null,"Create repository"),n("完成创建。")],-1),f=e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/img_convert/6c45c7f763a6c144697c0bedf6a31809.png",alt:""})],-1),q=i(`<li><p>clone 到本地，然后开始开发</p><p>刚才建的仓库，地址就是<code>https://github.com/CoderMonkie/v-blog.git</code>了。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> [进入工作的目录] 在 VSCode 的 terminal 中执行：</span>

git clone https://github.com/CoderMonkie/v-blog.git
cd v-blog

<span class="token title important"><span class="token punctuation">#</span> 全局安装 vuepress</span>

npm install -g vuepress

<span class="token title important"><span class="token punctuation">#</span> 写个文件来个 HelloWorld 试试吧</span>

echo # Hello world &gt; readme.txt
vuepress dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令就让我们的 blog 启动起来了。HelloWorld：</p><p><img src="https://img-blog.csdnimg.cn/img_convert/09b946f683ce6c3d32e73c0c98fdb199.png" alt=""></p></li>`,1),_=i(`<h2 id="本地博客项目搭建" tabindex="-1"><a class="header-anchor" href="#本地博客项目搭建" aria-hidden="true">#</a> <a href="#%E6%9C%AC%E5%9C%B0%E5%8D%9A%E5%AE%A2%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA">本地博客项目搭建</a></h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 初始化工程目录 v-blog</span>

npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化会生成<code>package.json</code>文件。</p><h3 id="目录配置" tabindex="-1"><a class="header-anchor" href="#目录配置" aria-hidden="true">#</a> 目录配置</h3><p>极简基本结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>/v-blog/</code></p></blockquote><p>新建<code>docs</code>文件夹（在根目录 v-blog 下），这里存放所有的博客内容。</p><blockquote><p><code>/v-blog/docs/</code></p></blockquote><p><code>docs</code>文件夹下新建<code>README.md</code>，这个文件就是首页。</p><p><code>docs</code>文件夹下新建<code>.vuepress</code>文件夹，该目录存放<code>vuepress</code>的所有配置。</p><blockquote><p><code>/v-blog/docs/.vuepress/</code></p></blockquote><p><code>.vuepress</code>文件夹下，新建<code>config.js</code>文件，作为<code>vuepress</code>的配置入口文件。</p><p>当内容多时，<code>config.js</code>中的配置项可以抽出单独的 js 文件。</p><p>以上，最基本的结构就完成了，让我们生成个主页试试。</p><h3 id="生成简单主页" tabindex="-1"><a class="header-anchor" href="#生成简单主页" aria-hidden="true">#</a> 生成简单主页</h3><blockquote><p><code>/v-blog/docs/.vuepress/config.js</code></p></blockquote><p>在 config.js 中编辑如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&quot;./theme&quot;</span><span class="token punctuation">;</span> <span class="token comment">//自定义主题，可参考官网使用默认主题</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  theme<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>/v-blog/docs/README.md</code></p></blockquote><p>在 README.md 文件中编辑如下：</p><p>(上面说了，这个是首页内容。注意<code>---</code>是 markdown 语法。)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
home: true
actionText: 我要学习 ➡
actionLink: /senior-js/
features:
- title: JavaScript进阶
  details: 夯实高级开发所需基础，提升编程技能及代码设计能力，学会阅读分析源码，建立健全技术知识体系，平滑过渡高级前端开发工程师。
- title: 单页应用开发
  details: 全方位分析前端主流框架React、Vue在项目中的应用、剖析核心源码以及内核机制、核心技术点、架构设计思想等，从根源解决开发难题。
- title: 移动端APP开发
  details: 了解移动端适配常见难点，学习Dart语法，掌握控件、布局、动画、操作手势、传感器、线程网络以及交互等核心技能。
- title: Node开发
  details: 掌握Node项目部署、发布流程，打通全栈，完成产品的自主研发上线。
footer: MIT Licensed | © 2019-present 码路工人
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动起来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vuepress dev docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者在 package.json 文件里配置一个命令：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.60&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;js-md5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.7.3&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以用以下命令启动：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>npm run start

<span class="token title important"><span class="token punctuation">#</span> 或</span>

npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>config.js</code> 中的配置对应下图中的 ①</p></li><li><p><code>README.md</code> 中的配置对应下图中的 ②</p></li></ul><p><img src="https://img-blog.csdnimg.cn/img_convert/d662bb402c821a8b9da53f2ae218a2e5.png" alt=""></p><p>好了，简单主页出来了。下面我们要添加的是<code>Navbar</code>导航栏以及<code>sidebar</code>侧边栏。</p><h3 id="navbar-导航栏" tabindex="-1"><a class="header-anchor" href="#navbar-导航栏" aria-hidden="true">#</a> Navbar 导航栏</h3><p>编辑<code>/v-blog/docs/.vuepress/config.js</code>文件，配置<code>themeConfig.nav</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defaultTheme } from &quot;vuepress&quot;;

export default defaultTheme({
  logo: &quot;/images/logo.png&quot;,
  navbar: [
    {
      text: &quot;网络通信&quot;,
      link: &quot;/net&quot;,
    }
  ]
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导航栏里面链接条目可以嵌套（层级可设）</li><li>内部链接两头斜线：<code>link: &#39;/route-path-here/&#39;</code></li><li>外部链接直接填上网址，如上面的 Github</li></ul><h3 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h3><ul><li><p>博客发布静态网站到 Github 上</p></li><li><p>可以在<code>head</code>中添加<code>CSS</code>和<code>js</code>的引用</p></li><li><p>博客可以自定义主题</p></li><li><p>添加评论功能</p></li></ul><p>等内容，一起探索起来吧~</p>`,39);function B(A,x){const t=o("RouterLink"),a=o("ExternalLinkIcon");return d(),c("div",null,[e("p",null,[s(t,{to:"/front/engineer/"},{default:p(()=>[n("<返回上一页")]),_:1})]),u,e("blockquote",null,[e("p",null,[e("a",v,[n("VuePress"),s(a)]),n(" 是一个基于 Vue 的静态网站生成器。其中主要用到：Vue，VueRouter，Webpack。 类似的工具："),e("a",m,[n("hexo"),s(a)])])]),b,e("ol",null,[e("li",null,[e("p",null,[n("来到 "),e("a",k,[n("Github"),s(a)]),n("，创建仓库")]),g,h,E,f]),q]),_])}const j=l(r,[["render",B],["__file","vuepress(vue3)搭建博客.html.vue"]]);export{j as default};
