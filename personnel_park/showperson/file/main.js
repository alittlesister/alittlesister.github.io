$(document).ready(function(){
	fir();
	thir();
	
})
	

var video1 = document.querySelector(".video1 video");
			var video2 = document.querySelector(".video2 video");
	function fir(){
			$(".start").click(function(){
				$(".actOne").fadeOut(100);
				$(".actTwo").fadeIn(1000);	
				$(".videoBG1").remove();
				video1.play();
				setTimeout(function () {
					$(".video1").remove();
					$(".video2").fadeIn(1000);
					video2.play();
					
						setTimeout(function(){
							$(".actTwo").fadeOut(100);
							$(".video2").remove()
							$(".actThree").fadeIn(1000);
						},8000);
				},21000);
				
			})
	}
	function thir(){
		$(".return").click(function(){
				window.location.reload();
		})

	}