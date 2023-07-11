import{_ as s,M as a,p as t,q as p,R as e,N as o,V as c,t as l,a1 as i}from"./framework-943286ea.js";const u={},r=i(`<p><img src="https://img-blog.csdnimg.cn/eb708b1679f54dc0989bf9cab0b251f0.gif" alt="在这里插入图片描述"></p><h3 id="一-路由页面配置-tree-判断进入还是后退" tabindex="-1"><a class="header-anchor" href="#一-路由页面配置-tree-判断进入还是后退" aria-hidden="true">#</a> 一）路由页面配置 tree 判断进入还是后退</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">meta:</span> <span class="token punctuation">{</span>
  <span class="token property">tree</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-处理逻辑" tabindex="-1"><a class="header-anchor" href="#二-处理逻辑" aria-hidden="true">#</a> 二）处理逻辑</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>value<span class="token punctuation">.</span>meta<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newValue</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">oldValue</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>oldValue <span class="token operator">&amp;&amp;</span> oldValue<span class="token punctuation">.</span>tree<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>newValue <span class="token operator">&amp;&amp;</span> newValue<span class="token punctuation">.</span>tree<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldValue<span class="token punctuation">.</span>tree <span class="token operator">&gt;</span> newValue<span class="token punctuation">.</span>tree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        transitionName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;return&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        transitionName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;slide&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>newValue <span class="token operator">&amp;&amp;</span> newValue<span class="token punctuation">.</span>tree<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>oldValue <span class="token operator">&amp;&amp;</span> oldValue<span class="token punctuation">.</span>tree<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        transitionName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;slide&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>newValue <span class="token operator">&amp;&amp;</span> newValue<span class="token punctuation">.</span>tree<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>oldValue <span class="token operator">&amp;&amp;</span> oldValue<span class="token punctuation">.</span>tree<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        transitionName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;return&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        transitionName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;brother&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token operator">&lt;</span>router<span class="token operator">-</span>view v<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string">&quot;{Component, route}&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>transition <span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">&quot;transitionName&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;Component&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;route.path&quot;</span> mode<span class="token operator">=</span><span class="token string">&quot;out-in&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三-css-样式" tabindex="-1"><a class="header-anchor" href="#三-css-样式" aria-hidden="true">#</a> 三）css 样式</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 同页面跳转只要透明度过渡
.brother-enter-from</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.brother-enter-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.3s<span class="token punctuation">,</span> transform 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.brother-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.brother-leave-from</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.brother-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.3s<span class="token punctuation">,</span> transform 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.brother-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// 起始状态
.slide-enter-from</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.slide-enter-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.slide-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// 箭头返回页面效果
.return-enter-from</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.return-enter-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.return-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.return-leave-from</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.return-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上面的代码用 display:none 解决页面退出的动效会先显示上一级路由的页面然后再显示当前页面</strong></p>`,8);function k(d,v){const n=a("RouterLink");return t(),p("div",null,[e("p",null,[o(n,{to:"/front/frame/"},{default:c(()=>[l("<返回上一页")]),_:1})]),r])}const b=s(u,[["render",k],["__file","vue3页面路由动效切换效果.html.vue"]]);export{b as default};
