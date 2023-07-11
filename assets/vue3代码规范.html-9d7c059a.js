import{_ as s,M as a,p as t,q as p,R as e,N as o,V as i,t as l,a1 as c}from"./framework-943286ea.js";const u={},r=c(`<h2 id="vue3-代码规范" tabindex="-1"><a class="header-anchor" href="#vue3-代码规范" aria-hidden="true">#</a> vue3 代码规范</h2><h3 id="一、eslint" tabindex="-1"><a class="header-anchor" href="#一、eslint" aria-hidden="true">#</a> 一、eslint</h3><p>1、创建项目 2、yarn add eslint -D 3、yarn eslint --init</p><p><img src="https://img-blog.csdnimg.cn/edb411d7efc549458e97f769124e3230.png" alt="在这里插入图片描述"></p><p>自动生成.eslintrc.js 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 parser: &#39;vue-eslint-parser&#39;,使用 vue-eslint，配置 parserOptions 在 vue 文件中使用@typescript-eslint/parser； 添加&quot;node&quot;: true，加入 node 引入环境检查</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:vue/vue3-essential&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;vue-eslint-parser&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json 的 scripts 中设置 lint 规则：</p><p>&quot;lint&quot;: &quot;eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix&quot;,</p><p><img src="https://img-blog.csdnimg.cn/f42734cd08464cf5bc547bde57381283.png" alt="在这里插入图片描述"> 执行 yarn lint 可检查代码问题</p><p>给 vscode 的 setting.json 文件添加配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token comment">// 开启自动修复</span>
    <span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、prettier" tabindex="-1"><a class="header-anchor" href="#二、prettier" aria-hidden="true">#</a> 二、prettier</h3><p>安装 prettier: yarn add prettier -D</p><p>添加.prettierrc.js 文件【.prettierrc.cjs】</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一行的字符数，如果超过会进行换行，默认为80</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token comment">// 一个tab代表几个空格数，默认为80</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否使用tab进行缩进，默认为false，表示用空格进行缩减</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 字符串是否使用单引号，默认为false，使用双引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 行位是否使用分号，默认为true</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否使用尾逗号，有三个可选值&quot;&lt;none|es5|all&gt;&quot;</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json 的 scripts 中设置 lint 规则：</p><p>&quot;format&quot;: &quot;prettier --write &quot;./*<em>/</em>.{html,vue,ts,js,json,md,scss,css}&quot;&quot;,</p><p><img src="https://img-blog.csdnimg.cn/a0c73d1d5a7b47b4ba6e72284a9c2f7e.png" alt="在这里插入图片描述"></p><p>在.vscode/settings.json 中添加一下规则</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token comment">// 保存的时候自动格式化</span>
    <span class="token string-property property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认格式化工具选择prettier</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、eslint-与-prettier-的冲突问题" tabindex="-1"><a class="header-anchor" href="#三、eslint-与-prettier-的冲突问题" aria-hidden="true">#</a> 三、eslint 与 prettier 的冲突问题</h3><p>yarn add eslint-config-prettier eslint-plugin-prettier -D</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 新增，必须放在最后面</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 vscode</p><h3 id="四、配置-stylelint" tabindex="-1"><a class="header-anchor" href="#四、配置-stylelint" aria-hidden="true">#</a> 四、配置 stylelint</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn add stylelint postcss postcss<span class="token operator">-</span>scss postcss<span class="token operator">-</span>html stylelint<span class="token operator">-</span>config<span class="token operator">-</span>prettier stylelint<span class="token operator">-</span>config<span class="token operator">-</span>recommended<span class="token operator">-</span>scss stylelint<span class="token operator">-</span>config<span class="token operator">-</span>standard stylelint<span class="token operator">-</span>config<span class="token operator">-</span>standard<span class="token operator">-</span>vue stylelint<span class="token operator">-</span>scss stylelint<span class="token operator">-</span>order <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>增加配置文件 .stylelintrc.js【stylelintrc.cjs】</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-prettier&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-recommended-scss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-standard-vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;stylelint-config-tailwindcss/scss&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-order&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 不同格式的文件指定自定义语法</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/*.(scss|css|vue|html)&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customSyntax</span><span class="token operator">:</span> <span class="token string">&quot;postcss-scss&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/*.(html|vue)&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customSyntax</span><span class="token operator">:</span> <span class="token string">&quot;postcss-html&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ignoreFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;**/*.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.tsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.json&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.md&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/*.yaml&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignoreAtRules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;tailwind&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;layer&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;apply&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;variants&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;responsive&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;screen&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-descending-specificity&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器</span>
    <span class="token string-property property">&quot;selector-pseudo-element-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoElements</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;v-deep&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tailwind&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;selector-pseudo-class-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;deep&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定样式的排序</span>
    <span class="token string-property property">&quot;order/properties-order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;position&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;bottom&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;z-index&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;display&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;justify-content&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;align-items&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;float&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;clear&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;overflow&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;overflow-x&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;overflow-y&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;padding&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;padding-top&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;padding-right&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;padding-bottom&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;padding-left&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin-top&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin-right&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin-bottom&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin-left&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;min-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;max-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;min-height&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;max-height&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;font-size&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;font-family&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-align&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-justify&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-indent&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-overflow&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-decoration&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;white-space&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;background&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;background-position&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;background-repeat&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;background-size&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;background-clip&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-top-style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-top-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-top-color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-right-style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-right-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-right-color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-bottom-style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-bottom-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-bottom-color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-left-style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-left-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-left-color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-radius&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;opacity&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;filter&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;list-style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;outline&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;visibility&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;box-shadow&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-shadow&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;transition&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json 的 scripts 中设置 lint 规则：</p><p>&quot;lint:style&quot;: &quot;stylelint &quot;./*<em>/</em>.{css,less,vue,html}&quot; --fix&quot;</p><p><img src="https://img-blog.csdnimg.cn/eb4aaabf8efa473b89bb6990cdf22ae6.png" alt="在这里插入图片描述"></p><p>安装 vscode 的 Stylelint 插件，在.vscode/settings.json 中添加一下规则，安装 stylelint-config-tailwindcss 添加 stylelint 的 tailwindcss 检查</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 开启自动修复</span>
  <span class="token string-property property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;source.fixAll&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;source.fixAll.stylelint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 保存的时候自动格式化</span>
  <span class="token string-property property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 默认格式化工具选择prettier</span>
  <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置该项，新建文件时默认就是space：2</span>
  <span class="token string-property property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// stylelint校验的文件格式</span>
  <span class="token string-property property">&quot;stylelint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;scss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;stylelint.config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;ignoreAtRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;tailwind&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;layer&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;apply&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;variants&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;responsive&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;screen&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;css.lint.unknownAtRules&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint.vscode-stylelint&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、配置-husky" tabindex="-1"><a class="header-anchor" href="#五、配置-husky" aria-hidden="true">#</a> 五、配置 husky</h3><p>yarn add husky -D</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>pnpm husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>pre<span class="token operator">-</span>commit <span class="token string">&quot;pnpm lint &amp;&amp; pnpm format &amp;&amp; pnpm lint:style&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tailwindcss 引入改成</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;tailwindcss/base&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;tailwindcss/components&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;tailwindcss/utilities&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yarn add lint-staged @commitlint/cli @commitlint/config-conventional -D</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@commitlint/config-conventional&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//0为disable，1为warning，2为error</span>
    <span class="token comment">//always|never</span>
    <span class="token comment">//第三位该rule的值</span>
    <span class="token string-property property">&quot;type-enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>
        <span class="token string">&quot;feature&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;fixbug&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;refactor&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;optimize&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;chore&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;merge&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;subject-full-stop&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;subject-case&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npx husky add <span class="token punctuation">.</span>husky<span class="token operator">/</span>commit<span class="token operator">-</span>msg <span class="token string">&#39;npx --no -- commitlint --edit &quot;$1&quot;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>pre-commit 文件改成</p><p><img src="https://img-blog.csdnimg.cn/b727e05eb4bb40a7a09703e24500b6f2.png" alt="在这里插入图片描述"><img src="https://img-blog.csdnimg.cn/daa3933f672b4453bf26f53cc92a6d1c.png" alt="在这里插入图片描述"></p>`,47);function d(k,v){const n=a("RouterLink");return t(),p("div",null,[e("p",null,[o(n,{to:"/front/engineer/"},{default:i(()=>[l("<返回上一页")]),_:1})]),r])}const b=s(u,[["render",d],["__file","vue3代码规范.html.vue"]]);export{b as default};
