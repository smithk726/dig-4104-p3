$(document).ready(function() {
	$('#isTwo').hide();
	$('#isThree').hide();
	$('#isFour').hide();
	$('#isFive').hide();
	$('#isSix').hide();
	$('#isSeven').hide();
	$('#isEight').hide();

	$('#slide03_2').hide();
	$('#slide04_2').hide();
	$('#slide04_3').hide();
	$('#slide04_4').hide();
	$('#slide05_2').hide();
	$('#slide06_2').hide();

	var costClick = 0;
	var muchClick = 1;
	var altClick = 0;
	var solClick = 0;

	$('.arrows-down').hover(function(){
		$('.arrows-down').attr('src', 'img/arrowhover.png');
		}, function(){
			$('.arrows-down').attr('src', 'img/arrow.png');
		});
	$('.arrows-up').hover(function(){
		$('.arrows-up').attr('src', 'img/arrowuphover.png');
		}, function(){
			$('.arrows-up').attr('src', 'img/arrowup.png');
		});
	$('.arrows-left').hover(function(){
		$('.arrows-left').attr('src', 'img/arrowlefthover.png');
		}, function(){
			$('.arrows-left').attr('src', 'img/arrowleft.png');
		});
	$('.arrows-right').hover(function(){
		$('.arrows-right').attr('src', 'img/arrowrighthover.png');
		}, function(){
			$('.arrows-right').attr('src', 'img/arrowright.png');
		});
	

	//intro arrow
	$('#arrowIntro').click(function() {
		$('#isOne').hide('slide', {direction: 'up'}, 500, function(){
			$('#isTwo').show('slide', {direction: 'down'}, 500);
		});
	});


	//arrow slide02 up
	$('#arrow02_01').click(function() {
		$('#isTwo').hide('slide', {direction: 'down'}, 500, function(){
			$('#isOne').show('slide', {direction: 'up'}, 500);
		});
	});
	//arrow slide02 down
	$('#arrow02_03').click(function() {
		$('#isTwo').hide('slide', {direction: 'up'}, 500, function(){
			$('#isThree').show('slide', {direction: 'down'}, 500);
		});
	});


	//arrow slide03 up
	$('#arrow03_02').click(function() {
		$('#isThree').hide('slide', {direction: 'down'}, 500, function(){
			$('#isTwo').show('slide', {direction: 'up'}, 500);
		});
	});
	//arrow slide03 down
	$('#arrow03_04').click(function() {
		$('#isThree').hide('slide', {direction: 'up'}, 500, function(){
			$('#isFour').show('slide', {direction: 'down'}, 500);
		});
	});
	//arrow slide03 left
	$('#arrow03l_02').click(function(){
		if(costClick == 0) {
			$('#slide03_1').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide03_2').show('slide', {direction: 'right'}, 500);
				costClick = 1;
			});
		}
		if(costClick == 1) {
			$('#slide03_2').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide03_1').show('slide', {direction: 'right'}, 500);
				costClick = 0;
			});
		}
	});
	//arrow slide03 right
	$('#arrow03r_02').click(function(){
		if(costClick == 0) {
			$('#slide03_1').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide03_2').show('slide', {direction: 'left'}, 500);
				costClick = 1;
			});
		}
		if(costClick == 1) {
			$('#slide03_2').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide03_1').show('slide', {direction: 'left'}, 500);
				costClick = 0;
			});
		}
	});


	//arrow slide04 up
	$('#arrow04_03').click(function() {
		$('#isFour').hide('slide', {direction: 'down'}, 500, function(){
			$('#isThree').show('slide', {direction: 'up'}, 500);
		});
	});
	//arrow slide04 down
	$('#arrow04_05').click(function() {
		$('#isFour').hide('slide', {direction: 'up'}, 500, function(){
			$('#isFive').show('slide', {direction: 'down'}, 500);
		});
	});
	//arrow slide04 left
	$('#arrow04l').click(function(){
		if(muchClick == 1) {
			$('#slide04_1').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide04_4').show('slide', {direction: 'right'}, 500);
				muchClick = 4;
			});
		}
		if(muchClick == 2) {
			$('#slide04_2').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide04_1').show('slide', {direction: 'right'}, 500);
				muchClick = 1;
			});
		}
		if(muchClick == 3) {
			$('#slide04_3').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide04_2').show('slide', {direction: 'right'}, 500);
				muchClick = 2;
			});
		}
		if(muchClick == 4) {
			$('#slide04_4').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide04_3').show('slide', {direction: 'right'}, 500);
				muchClick = 3;
			});
		}
	});
	//arrow slide04 right
	$('#arrow04r').click(function(){
		if(muchClick == 1) {
			$('#slide04_1').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide04_2').show('slide', {direction: 'left'}, 500);
				muchClick = 2;
			});
		}
		if(muchClick == 2) {
			$('#slide04_2').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide04_3').show('slide', {direction: 'left'}, 500);
				muchClick = 3;
			});
		}
		if(muchClick == 3) {
			$('#slide04_3').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide04_4').show('slide', {direction: 'left'}, 500);
				muchClick = 4;
			});
		}
		if(muchClick == 4) {
			$('#slide04_4').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide04_1').show('slide', {direction: 'left'}, 500);
				muchClick = 1;
			});
		}
	});


	//arrow slide05 up
	$('#arrow05_04').click(function() {
		$('#isFive').hide('slide', {direction: 'down'}, 500, function(){
			$('#isFour').show('slide', {direction: 'up'}, 500);
		});
	});
	//arrow slide05 down
	$('#arrow05_06').click(function() {
		$('#isFive').hide('slide', {direction: 'up'}, 500, function(){
			$('#isSix').show('slide', {direction: 'down'}, 500);
		});
	});
	//arrow slide05 left
	$('#arrow05l').click(function(){
		if(altClick == 0) {
			$('#slide05_1').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide05_2').show('slide', {direction: 'right'}, 500);
				altClick = 1;
			});
		}
		if(altClick == 1) {
			$('#slide05_2').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide05_1').show('slide', {direction: 'right'}, 500);
				altClick = 0;
			});
		}
	});
	//arrow slide05 right
	$('#arrow05r').click(function(){
		if(altClick == 0) {
			$('#slide05_1').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide05_2').show('slide', {direction: 'left'}, 500);
				altClick = 1;
			});
		}
		if(altClick == 1) {
			$('#slide05_2').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide05_1').show('slide', {direction: 'left'}, 500);
				altClick = 0;
			});
		}
	});


	//arrow slide06 up
	$('#arrow06_05').click(function() {
		$('#isSix').hide('slide', {direction: 'down'}, 500, function(){
			$('#isFive').show('slide', {direction: 'up'}, 500);
		});
	});
	//arrow slide06 down
	$('#arrow06_07').click(function() {
		$('#isSix').hide('slide', {direction: 'up'}, 500, function(){
			$('#isSeven').show('slide', {direction: 'down'}, 500);
		});
	});
	//arrow slide06 left
	$('#arrow06l').click(function(){
		if(solClick == 0) {
			$('#slide06_1').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide06_2').show('slide', {direction: 'right'}, 500);
				solClick = 1;
			});
		}
		if(solClick == 1) {
			$('#slide06_2').hide('slide', {direction: 'left'}, 500, function() {
				$('#slide06_1').show('slide', {direction: 'right'}, 500);
				solClick = 0;
			});
		}
	});
	//arrow slide06 right
	$('#arrow06r').click(function(){
		if(solClick == 0) {
			$('#slide06_1').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide06_2').show('slide', {direction: 'left'}, 500);
				solClick = 1;
			});
		}
		if(solClick == 1) {
			$('#slide06_2').hide('slide', {direction: 'right'}, 500, function() {
				$('#slide06_1').show('slide', {direction: 'left'}, 500);
				solClick = 0;
			});
		}
	});


	//arrow slide07 up
	$('#arrow07_06').click(function() {
		$('#isSeven').hide('slide', {direction: 'down'}, 500, function(){
			$('#isSix').show('slide', {direction: 'up'}, 500);
		});
	});
	//arrow slide07 down
	$('#arrow07_08').click(function() {
		$('#isSeven').hide('slide', {direction: 'up'}, 500, function(){
			$('#isEight').show('slide', {direction: 'down'}, 500);
		});
	});


	//arrow slide08 up
	$('#arrow08_07').click(function() {
		$('#isEight').hide('slide', {direction: 'down'}, 500, function(){
			$('#isSeven').show('slide', {direction: 'up'}, 500);
		});
	});
	//arrow slide08 to slide01
	$('#arrow08_01').click(function() {
		$('#isEight').hide('slide', {direction: 'up'}, 500, function(){
			$('#isOne').show('slide', {direction: 'down'}, 500);
		});
	});
});