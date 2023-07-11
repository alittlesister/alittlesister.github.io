import{_ as t,p as n,q as i,a1 as e}from"./framework-943286ea.js";const l={},d=e(`<h1 id="js-小游戏-一条简单的贪吃蛇" tabindex="-1"><a class="header-anchor" href="#js-小游戏-一条简单的贪吃蛇" aria-hidden="true">#</a> js 小游戏 一条简单的贪吃蛇</h1><h3 id="代码复制可用" tabindex="-1"><a class="header-anchor" href="#代码复制可用" aria-hidden="true">#</a> 代码复制可用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;meta charset=&quot;utf-8&quot; /&gt;
		&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
		&lt;title&gt;贪吃蛇&lt;/title&gt;
		&lt;style&gt;
			body{
				display: flex;
				height: 100vh;
				margin: 0;
				padding: 0;
				justify-content: center;
				align-items: center;
			}
		&lt;/style&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;canvas id=&quot;can&quot; width=&quot;400&quot; height=&quot;400&quot; style=&quot;background: #000;&quot;&gt;对不起，你的浏览器不支持！&lt;/canvas&gt;
	&lt;script&gt;
		var snake=[41,40],
			direction=1,
			food=43,
			n,
			box=document.getElementById(&quot;can&quot;).getContext(&quot;2d&quot;);

		function draw(seat,color){
			box.fillStyle=color;
			box.fillRect(seat%20*20+1,~~(seat/20)*20+1,18,18);
		}
			document.onkeydown = function(evt){
				direction=snake[1]-snake[0]==(n=[-1,-20,1,20][(evt||event).keyCode-37]||direction)?direction:n;
			}
			!function(){
				snake.unshift(n=snake[0]+direction);
				if(snake.indexOf(n,1)&gt;0||n&lt;0||n&gt;399||direction==1&amp;&amp;n%20==0||direction==-1&amp;&amp;n%20==19){
				alert(&quot;game over!&quot;);
				}
				draw(n,&quot;lime&quot;);
				if(n==food){
					while(snake.indexOf(food=~~(Math.random()*400))&gt;0);
					draw(food,&quot;yellow&quot;);
				}else{
					draw(snake.pop(),&quot;black&quot;);
				}
				setTimeout(arguments.callee,150);
			}();









	&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),s=[d];function a(v,c){return n(),i("div",null,s)}const u=t(l,[["render",a],["__file","一个简单的贪吃蛇小游戏.html.vue"]]);export{u as default};
