import{_ as s,M as a,p as t,q as p,R as e,N as o,V as i,t as l,a1 as c}from"./framework-943286ea.js";const u={},r=c(`<h2 id="react-代码规范" tabindex="-1"><a class="header-anchor" href="#react-代码规范" aria-hidden="true">#</a> react 代码规范</h2><p>这篇文章相当于是上一篇文章的补充，这里搭建项目使用的是 vite+react 搭建的项目 和上一篇文章：vue3 代码规范差不多，略有不同的是在 stylelint 处的配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn add stylelint  stylelint<span class="token operator">-</span>config<span class="token operator">-</span>prettier stylelint<span class="token operator">-</span>config<span class="token operator">-</span>standard stylelint<span class="token operator">-</span>order postcss<span class="token operator">-</span>scss scss <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.stylelintignore 的配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>node_modules<span class="token comment">/*

/test/
/build/
/lib/

# 其他类型文件
*.js
*.json
*.png
*.eot
*.ttf
*.woff
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.stylelintrc.cjs 的配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-order&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-config-prettier&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/*.{css,scss}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">customSyntax</span><span class="token operator">:</span> <span class="token string">&quot;postcss-scss&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 命名规范</span>
    <span class="token string-property property">&quot;selector-class-pattern&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;^([a-z][a-z0-9]*)(-[a-z0-9]+)*$&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Expected class selector to be kebab-case&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;string-quotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 单引号</span>
    <span class="token string-property property">&quot;at-rule-empty-line-before&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignoreAtRules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;tailwind&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;apply&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;variants&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;responsive&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;screen&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;declaration-block-trailing-semicolon&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;no-descending-specificity&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;at-rule-name-case&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lower&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定@规则名的大小写</span>
    <span class="token string-property property">&quot;length-zero-no-unit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 禁止零长度的单位（可自动修复）</span>
    <span class="token string-property property">&quot;shorthand-property-no-redundant-values&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 简写属性</span>
    <span class="token string-property property">&quot;number-leading-zero&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 小数不带0</span>
    <span class="token string-property property">&quot;declaration-block-no-duplicate-properties&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止声明快重复属性</span>
    <span class="token string-property property">&quot;no-descending-specificity&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。</span>
    <span class="token string-property property">&quot;selector-max-id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 限制一个选择器中 ID 选择器的数量</span>
    <span class="token string-property property">&quot;max-nesting-depth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token literal-property property">indentation</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 指定缩进  warning 提醒</span>
        <span class="token literal-property property">severity</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 规则顺序</span>
    <span class="token string-property property">&quot;order/properties-order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;position&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;bottom&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;z-index&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;display&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;float&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;max-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;max-height&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;min-width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;min-height&quot;</span><span class="token punctuation">,</span>
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
      <span class="token string">&quot;margin-collapse&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin-top-collapse&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin-right-collapse&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin-bottom-collapse&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;margin-left-collapse&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;overflow&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;overflow-x&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;overflow-y&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;clip&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;clear&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;font&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;font-family&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;font-size&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;font-smoothing&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;osx-font-smoothing&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;font-style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;font-weight&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;line-height&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;letter-spacing&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;word-spacing&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-align&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-decoration&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-indent&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-overflow&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-rendering&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-size-adjust&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-shadow&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;text-transform&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;word-break&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;word-wrap&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;white-space&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;vertical-align&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;list-style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;list-style-type&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;list-style-position&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;list-style-image&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;pointer-events&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;cursor&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;background&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;border-radius&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;outline&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;outline-offset&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;opacity&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;filter&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;visibility&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;transform&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若引入 tailwindcss，则和 tailwindcss 的官网 vue+vite 的配置相同，因为都是使用的 vite 脚手架搭建的项目，tailwindcss 的引入规则是基于 vite 的配置</p>`,8);function d(k,v){const n=a("RouterLink");return t(),p("div",null,[e("p",null,[o(n,{to:"/front/engineer/"},{default:i(()=>[l("<返回上一页")]),_:1})]),r])}const q=s(u,[["render",d],["__file","react代码规范.html.vue"]]);export{q as default};
