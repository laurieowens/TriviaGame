var count=20;
	choices=["Which one of these fruits has its seeds on the outside?",];
	rightChoices=[];
	wrongChoices=[];
	noChoice=[];

var countdown=setInterval(function(){
	count--;
	console.log(count);
	if (count >0 ){
		console.log("more than zero");
		//clearInterval(countdown)//
		$('.countdowntime').html("Clock is Ticking!   "+count+" seconds left");
	}else {
		$('.newForm').css('display','none');
		clearInterval(countdown);
		$('.newForm').css('display','none');

		 }

	  }, 1000)



//clearInterval(countdown);
