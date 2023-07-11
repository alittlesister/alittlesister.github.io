window.onload = function(){
	var ul = elem("ul.points");
	var liArr = elems("ul.points>li");
	var content = elem(".content");
	var details = elem(".details");
	var close = elem(".close");
	var time = elems(".time");
	var timeBox = elems(".timeBox");
	var fingerMove = elem("#fingerMove");
	//记录用户是否操作页面
	var newTime = new Date().getTime();
	var oldTime = new Date().getTime();
	var outTime = 3*60*1000;//5*60*1000
	//用户是否操作界面
	document.body.addEventListener("click",function(){
		oldTime = new Date().getTime();
	});
	window.setInterval(function(){
		newTime = new Date().getTime();
		if(newTime-oldTime>outTime){
			location.reload(true);
		}
	},1000);
	
    //获取单一元素
    function elem(elem){
        return document.querySelector(elem);
    }
    //获取数组类型dom元素
    function elems(elem){
        return document.querySelectorAll(elem);
    }
    //创建xhr对象
    function createXhr(){
        var xhr = null;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject("Microsoft.XMLHttp");
        }
        return xhr;
    }
	// 隐藏退出按钮  刷新+退出
	elem(".return").onclick = function(){
		location.reload(true);
	}
	elem(".return").ondblclick = function(){
		window.close();
	}
//ajax封装函数
function ajax({type,url,data,dataType}){
	return new Promise(callback=>{
		var xhr = createXhr();
		if(type.toLowerCase()==="get"){
			data===""?xhr.open(type.toLowerCase(),url,true):xhr.open(type.toLowerCase(),url+'?'+data,true)
			xhr.send(null);
		}else if(type.toLowerCase()==="post"){
			xhr.open(type.toLowerCase(),url,true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(data);
		}
		xhr.onreadystatechange = ()=>{
			if(xhr.readyState===4&&xhr.status===200){
				var res = xhr.responseText;
				if(dataType!==undefined&&dataType.toLowerCase()==="json"){
					res = JSON.parse(res);
				}
				callback(res);
			}
		}
	})
}
/*页面加载时加载数据*/
    var obj = ajax({
        type:"get",
        url:"./img/file.json",
        data:"",
        dataType:"json"
    }).then((data)=>{
		//liArr[0].style.marginLeft = data[0].position.x+"px";
        for(var i=0;i<data.length;i++){
            timeBox[i].innerHTML += data[i].intro1;
			time[i].innerHTML+=data[i].obj;
// 			liArr[i].style.marginLeft = data[i].position.x+"px";
			liArr[i].style.marginTop = data[i].position.y+"px";
        }
		document.getElementsByClassName("image2")[0].style.display = "none";
		document.getElementsByClassName("image3")[0].style.display = "none";
		document.getElementsByClassName("image4")[0].style.display = "none";
		var ti = setInterval(function(){
			clearInterval(ti);
			document.getElementsByClassName("image2")[0].style.display = "block";
			document.getElementsByClassName("image3")[0].style.display = "block";
			ti = null;
		},15000)
		var ti2 = setInterval(function(){
			clearInterval(ti2);
			document.getElementsByClassName("image4")[0].style.display = "block";
			ti = null;
		},5000)
    })
	/*滑动时间轴*/
    var swiper = new Swiper('.swiper-container',{
      freeMode : true,
	  freeModeMomentum : true,
	  freeModeMomentumRatio: 0.3,
	  freeModeMomentumBounce:false,
	  freeModeMomentumBounceRatio:0,
	  resistance:true,
	  resistanceRatio:0,
      slidesPerView: 'auto',
      spaceBetween: 30,
	  direction:"horizontal",
	  spaceBetween : 120,
	  // slidesOffsetBefore : 150,
    });
	
	/*点击事件*/
    for(var i=0;i<liArr.length;i++){
		liArr[i].index = i;
        liArr[i].onclick = function(e){
			var styleNum = this.index;
            if(e.target.className == "time"){
				ul.className += " animate";
                for(var j=0;j<liArr.length;j++){
                    liArr[j].className = "swiper-slide";
                }
				if(styleNum%2==0){
					e.target.parentElement.className = "active swiper-slide activeone";
				}else if(styleNum%2==1){
					e.target.parentElement.className = "active swiper-slide activetwo";
				}
                var timer = setInterval(function(){
					clearInterval(timer);
					ul.className = "points swiper-wrapper";
					timer = null;
				},1000);
				var obj = ajax({
				    type:"get",
				    url:"./img/file.json",
				    data:"",
				    dataType:"json"
				}).then((data)=>{
					timeBox[styleNum].innerHTML = data[styleNum].intro2;
				})
            }
        }
    }
	//点击屏幕其他地方退出效果
	fingerMove.onclick = function(e){
		for(var i=0;i<liArr.length;i++){
			liArr[i].className = "swiper-slide";
		}
		console.log(e.target);
	}
}