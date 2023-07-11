	$(document).ready(function() {

		part();
		links();
		contents();
	})
	//第一部分		第一大类

	function part(){
		$(".home").click(function() {
			$("#homeIndex").fadeOut(500);
			$("#box").fadeIn(1000);
			$(".demoShow iframe").attr("src", "modelDemo.html");
		});

		$(".return").click(function() {
			$("#homeIndex").fadeIn(1000);
			$("#box").fadeOut(500);
		})
	}

	function links() {
		$(".demoMenu1").click(function() {
			$(".demoShow iframe").attr("src", "shoe.html")
			$(".btn").fadeOut(200);
			$(".potContents").fadeOut(200);
		})
		$(".demoMenu2").click(function() {

			$(".demoShow iframe").attr("src", "A1254.html")
			$(".btn").fadeOut(200);
			$(".potContents").fadeOut(200);
		
		})
		$(".demoMenu3").click(function() {

			$(".demoShow iframe").attr("src", "suitcase.html")
			$(".btn").fadeOut(200);
			$(".potContents").fadeOut(200);
		})
		$(".demoMenu4").click(function() {

			$(".demoShow iframe").attr("src", "NBA.html")
			$(".btn").fadeOut(200);
			$(".potContents").fadeOut(200);
		})
		$(".demoMenu5").click(function() {

			$(".demoShow iframe").attr("src", "bowl.html")
			$(".btn").fadeOut(200);
			$(".potContents").fadeOut(200);
		})
		$(".demoMenu6").click(function() {
			$(".demoShow iframe").attr("src", "modelDemo.html");
			$(".btn").fadeIn(200);
		})
	}
	
	function contents(){
		$(".btn").click(function(){
			$(".potContents").fadeToggle(200);
			$(".btn").toggleClass(function(){
				return 'bg'+$(this).index();
			});
		})
	}

