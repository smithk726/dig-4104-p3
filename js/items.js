$(document).ready(function(){

//global variables	
	
	//define messages 
	var posmessage = "with your money!";
	var negmessage = "worth of money!";	
	var valerror = "PLEASE ENTER A NUMBER!";
	var sixtymessage = "In 1955, your money would be worth ";
	var hundredmessage = "In 1915, your money would be worth ";

//main js 

	//hide more button
	$('#more-button').hide();

	//on click function
	$("#submit-button").click(function(e) {

		$('.commodities').css('display', 'block');

		$('html, body').animate({
			scrollTop: $("#commboss").offset().top
		}, 1000);
		
		//stop from submitting and refreshing
		e.preventDefault();
		
		//get input value and save to variable
		var dollarAmount = $('#dollar-amount').val();

		//inflation equation
		var sixty = dollarAmount * 9.0909090909090909;
		var hundred = dollarAmount * 25;
		
		
		//validation
		if (dollarAmount && jQuery.isNumeric(dollarAmount)) {
		
			//housekeeping
			$('#items .commodity').remove();

			$('#inflation').append('<div><h2>' + sixtymessage + sixty.toFixed(2) + '</h2></div><div><h2>' + hundredmessage + hundred.toFixed(2) + '</h2></div>');
			
			//get json data from file
			$.ajax({
				url: "json/items-list.json",
				dataType: "json",
				success: function(data) {
				
				//put json data into variable           
				var itemsArray = data;
				
				//loop through array and get six random entries			
				for (var i=0; i < 6; i++) {
							
					var itemvar = itemsArray.items[Math.floor(Math.random() * itemsArray.items.length)];
					
					var finalamt = Math.floor(dollarAmount/itemvar.price);
					
					//add list items
					if (finalamt >= 0) {
						$('#items').append('<div class="commodity"><p>You can buy ' + '<em>' + finalamt + ' ' + itemvar.name + 's</em> ' + posmessage + '</p></div>');
					}
					else {
						var finalstrpamt = finalamt.toString();
						$('#items').append('<div class="commodity"><p>You owe ' + '<em>' + finalstrpamt.substr(1) + ' ' + itemvar.name + 's</em> ' + negmessage + '</p></div>');
					}

					$('#items .commodity').each(function(i) {
						$(this).delay((i++)*500).fadeTo(1000,1);
					});
				
				}
						
				}
				   
			});
			
			$('#more-button').show();	
		
		}  else {
			
			alert("PLEASE ENTER A NUMBER!");
			
			$('#more-button').hide();	
			
			//housekeeping
			$('#items .commodity').remove();
		
		}
		
	});

	//MORE function
	$("#more-button").click(function(e) {

		$('html, body').animate({
			scrollTop: $("#commboss").offset().top
		}, 100);
		
		//stop from submitting and refreshing
		e.preventDefault();
		
		//get input value and save to variable
		var dollarAmount = $('#dollar-amount').val();
		
		
		//validation
		if (dollarAmount && jQuery.isNumeric(dollarAmount)) {
		
			//housekeeping
			$('#items .commodity').remove();
			
			//get json data from file
			$.ajax({
				url: "json/items-list.json",
				dataType: "json",
				success: function(data) {
				
				//put json data into variable           
				var itemsArray = data;
				
				//loop through array and get six random entries			
				for (var i=0; i < 6; i++) {
							
					var itemvar = itemsArray.items[Math.floor(Math.random() * itemsArray.items.length)];
					
					var finalamt = Math.floor(dollarAmount/itemvar.price);
					
					//add list items
					if (finalamt >= 0) {
						$('#items').append('<div class="commodity"><p>You can buy ' + '<em>' + finalamt + ' ' + itemvar.name + 's</em> ' + posmessage + '</p></div>');
					}
					else {
						var finalstrpamt = finalamt.toString();
						$('#items').append('<div class="commodity"><p>You owe ' + '<em>' + finalstrpamt.substr(1) + ' ' + itemvar.name + 's</em> ' + negmessage + '</p></div>');
					}

					$('#items .commodity').each(function(i) {
						$(this).delay((i++)*500).fadeTo(1000,1);
					});
				
				}
						
				}
				   
			});
			
			$('#more-button').show();	
		
		}  else {
			
			alert("PLEASE ENTER A NUMBER!");
			
			$('#more-button').hide();	
			
			//housekeeping
			$('#items .commodity').remove();
		
		}
		
	});
	
}); 
	