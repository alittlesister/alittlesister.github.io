window.onload = function(){
	//记录用户是否操作页面
	var staticimg = elem(".staticimg");
	var newTime = new Date().getTime();
	var oldTime = new Date().getTime();
	var outTime = 5*60*1000;//5*60*1000
	// 视频内容页面
	var videoBox = elem(".video");
	var video = elem(".video>video");
	video.volume = 0;
	// 图片内容页面
	var content = elem(".content");
	var contentArr = elem(".content>div");
	//视频控制
	var ul = elem(".videoulcontrol ul");
	var vSpan = elem(".vspan");
	// 视频播放器控制和内容控制
	var control = elem(".control");
	var cSpan = elem(".cspan");
	//内容选择器
	var contentcontrol = elem(".contentcontrol");
	var contentcontrolLi = elems(".contentcontrol>ul>li");
	//播放器控制
	var videoBtn = elem(".videocontrol>.play");
	var voice = elem(".voice");
	var bar = elem(".bar");
	var progress = elem(".progress");
	var barBtn = elem(".barbtn");
	var addSpec = elem(".addspec");
	var barWidth = bar.offsetWidth;
	var progressWidth = progress.offsetWidth;
	var totalLength = 1592;
	/*页面控制双向控制器*/
	video.onclick = function(){
		if(ul.className == "show"){
			ul.className = "";
			vSpan.style.background = "url(./img/right.png) no-repeat center";
			control.className = "control";
			cSpan.style.background = "url(./img/up.png) no-repeat center";
		}else{
			ul.className = "show";
			vSpan.style.background = "url(./img/left.png) no-repeat center";
			control.className = "control cshow";
			cSpan.style.background = "url(./img/down.png) no-repeat center";
		}
	}
	content.onclick = function(){
		if(ul.className == "show"){
			ul.className = "";
			vSpan.style.background = "url(./img/right.png) no-repeat center";
			control.className = "control";
			cSpan.style.background = "url(./img/up.png) no-repeat center";
		}else{
			ul.className = "show";
			vSpan.style.background = "url(./img/left.png) no-repeat center";
			control.className = "control cshow";
			cSpan.style.background = "url(./img/down.png) no-repeat center";
		}
	}
	//视频选择的显示隐藏
	vSpan.onclick = function(){
		if(ul.className == "show"){
			ul.className = "";
			vSpan.style.background = "url(./img/right.png) no-repeat center";
		}else{
			ul.className = "show";
			vSpan.style.background = "url(./img/left.png) no-repeat center";
		}
	}
	//视频选择
	for(var a=0;a<ul.children.length;a++){
		ul.children[a].index = a;
		ul.children[a].onclick = function(){
			videoBox.style.zIndex = 15;
			content.style.zIndex = 12;
			videoBtn.style.background = "url(./img/play.png) no-repeat center";
			videoBtn.style.backgroundSize = "cover";
			for(var l=0;l<a;l++){
				ul.children[l].className = "";
			}
			this.className = "choose";
			video.src = "./video/"+this.dataset.src;
		}
	}
	/*视频控制器跳转视频*/
	elem(".videocontrol").onclick = function(){
		videoBox.style.zIndex = 15;
		content.style.zIndex = 12;
	}
	//视频控制器和内容选择显示隐藏
	cSpan.onclick = function(){
		if(control.className == "control cshow"){
			control.className = "control";
			cSpan.style.background = "url(./img/up.png) no-repeat center";
		}else{
			control.className = "control cshow";
			cSpan.style.background = "url(./img/down.png) no-repeat center";
		}
	}
	// 大标题内容swiper内容滚动
    var swiper = new Swiper('.swiper-container',{
      freeMode : false,
	  freeModeMomentum : true,
	  freeModeMomentumRatio: 0.3,
	  freeModeMomentumBounce:false,
	  freeModeMomentumBounceRatio:1,
	  freeModeSticky:true,
	  resistance:true,
	  resistanceRatio:0,
      slidesPerView: 4,
	  direction:"horizontal",
	  autoplay: {
			delay: 6200,
			stopOnLastSlide: false,
			disableOnInteraction: false,
			waitForTransition: false,
			},
	  speed:6000
    });
	// 二级内容swiper内容滚动
	var swiper = new Swiper('.contentswiper1',{
	  speed:1500,
	  autoplay:false,
	  effect : 'cube',
	  loop:true,
	});
	var swiper = new Swiper('.contentswiper2',{
	  speed:1500,
	  autoplay:false,
	  effect : 'cube',
	  loop:true,
	});
	var swiper = new Swiper('.contentswiper3',{
	  speed:1500,
	  autoplay:false,
	  effect : 'cube',
	  loop:true,
	});
	var swiper = new Swiper('.contentswiper4',{
	  speed:1500,
	  autoplay:false,
	  effect : 'cube',
	  loop:true,
	});
	//视频控制器按钮
	videoBtn.onclick = function(){
		if(video.paused){
			video.play();
			videoBtn.style.background = "url(./img/play.png) no-repeat center";
			videoBtn.style.backgroundSize = "cover";
			playProgress(null);
		}else{
			videoBtn.style.background = "url(./img/pause.png) no-repeat center";
			videoBtn.style.backgroundSize = "cover";
			video.pause();
		}
	}
	//视频播放器显示时间
	video.oncanplay = function(){
		var dur = parseInt(video.duration);
		elem(".detail").innerHTML = "00:00:00/"+parseInt(dur/3600)+":"+parseInt(dur/60)+":"+parseInt(dur%60);
	}
	//快进
	addSpec.onclick = function(){
		video.currentTime += 1;
	}
	//点击跳转播放
	bar.onclick = function(e){
		var cposition = e.offsetX;
		playProgress(cposition);
	}
	//视频进度条
	function playProgress(target){
		var to = target/totalLength;
		if(target!=null){
			video.currentTime = video.duration*to;
			progress.style.width = target+"px";
			barBtn.style.left = target+"px";
		}
		var timer1 = setInterval(function(){
			var percent = video.currentTime/video.duration*totalLength;
			var dur = parseInt(video.duration);
			var cur = parseInt(video.currentTime);
			progress.style.width = percent+"px";
			barBtn.style.left = percent+"px";
			elem(".detail").innerHTML = 
			parseInt(cur/3600)+":"+parseInt(cur/60)+":"+parseInt(cur%60)
			+"/"+parseInt(dur/3600)+":"+parseInt(dur/60)+":"+parseInt(dur%60);
			if(video.duration == video.currentTime){
				progress.style.width = "0px";
				barBtn.style.left = "0px";
				percent = 0;
				videoBtn.style.background = "url(./img/pause.png) no-repeat center";
				videoBtn.style.backgroundSize = "cover";
				elem(".detail").innerHTML = "00:00:00/"+parseInt(dur/3600)+":"+parseInt(dur/60)+":"+parseInt(dur%60);
				clearInterval(timer1);
			}
		},1000/60);
	}
	
	//声音控制
	elem(".voice").onclick = function(){
		if(video.volume >= 0.5){
			video.volume = 0;
			elem(".voice").style.background = "url(./img/nonevioce.png) no-repeat center";
			elem(".voice").style.backgroundSize = "cover";
		}else{
			video.volume = 0.5;
			elem(".voice").style.background = "url(./img/voice.png) no-repeat center";
			elem(".voice").style.backgroundSize = "cover";
		}
	}
	//ul内容控制
	contentcontrol.onclick = function(e){
		videoBox.style.zIndex = 12;
		content.style.zIndex = 15;
		video.pause();
	}
	//ul>li内容控制
	for(var s=0;s<contentcontrolLi.length;s++){
		contentcontrolLi[s].index = s;
		contentcontrolLi[s].onclick = function(){
			videoBox.style.zIndex = 12;
			content.style.zIndex = 15;
			for(var i=0;i<contentcontrolLi.length;i++){
				content.children[i].dataset.index = "";
				contentcontrolLi[i].className = "swiper-slide";
			}
			if(this.index==0){
				content.children[2].dataset.index = "activeMove";
			}else{
				content.children[this.index-1].dataset.index = "activeMove";
			}
			// content.children[this.index].dataset.index = "active";
			contentcontrolLi[this.index].className = "swiper-slide active";
			content.children[this.index].dataset.index  = "active";
			console.log(this.index);
		}
	}
	//用户是否操作界面
	document.body.addEventListener("click",function(){
		oldTime = new Date().getTime();
	});
	window.setInterval(function(){
		newTime = new Date().getTime();
		if(newTime-oldTime>outTime){
			elem(".static").className = "static show";
			video.pause();
			cSpan.className = "cspan";
			vSpan.className = "cspan";
		}
	},4000);
	
	//静止界面播放视频
	for(var m=0;m<staticimg.children.length;m++){
		staticimg.children[m].onclick = function(){
			/*静止界面显示并播放视频*/
			elem(".static").className = "static";
			video.src = "./video/"+this.dataset.src;
			video.autoplay = true;
			/*控制器按钮*/
			cSpan.className = "cspan show";
			vSpan.className = "vspan show";
			/*播放暂停按钮*/
			videoBtn.style.background = "url(./img/play.png) no-repeat center";
			videoBtn.style.backgroundSize = "cover";
			/*声音*/
			video.volume = 0;
			elem(".voice").style.background = "url(./img/nonevioce.png) no-repeat center";
			/*进度条*/
			playProgress(null);
		}
	}
	//视频更新后跟随更新
	video.ontimeupdate = function(){
		if(video.ended){
			elem(".static").className = "static";
			cSpan.className = "cspan show";
			vSpan.className = "vspan show";
		}
	}
	//刷新和退出页面
	elem(".return").onclick = function(){
		location.reload(true);
	}
	elem(".return").ondblclick = function(){
		window.close();
	}


//获取单一元素
function elem(elem){
	return document.querySelector(elem);
}
//获取数组类型dom元素
function elems(elem){
	return document.querySelectorAll(elem);
}

}