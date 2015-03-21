$(document).ready(function(){
	
//global variables	
	
	//define messages 
	var posmessage = "with your money!";
	var negmessage = "worth of money!";	
	
//main js 

	//hide more button
	$('#more-button').hide();

	//on click function
	$("#submit-button").click(function(e) {
		
		//stop from submitting and refreshing
		e.preventDefault();
		
		//get input value and save to variable
		var dollarAmount = $('#dollar-amount').val();
		
		
		//validation
		if (dollarAmount && jQuery.isNumeric(dollarAmount)) {
		
			//housekeeping
			$('#items li').remove();
			
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
					
					if (finalamt >= 0) {
					
						//add list items			
						$('#items').append('<li>You can buy ' + '<em>' + finalamt + ' ' +  itemvar.name + 's</em>' + posmessage + '</li>');
					
					} else {
						
						var finalstrpamt = finalamt.toString();
						
						//add list items			
						$('#items').append('<li>You owe ' + '<em>' + finalstrpamt.substr(1) + ' ' +  itemvar.name + 's</em>' + negmessage + '</li>');
						
					}
				
				}
						
				}
				   
			});
			
			$('#more-button').show();	
		
		}  else {
			
			alert("PLEASE ENTER A NUMBER!");
			
			$('#more-button').hide();	
			
			//housekeeping
			$('#items li').remove();
		
		}
		
	});

	//MORE function
	$("#more-button").click(function(e) {
		
		//stop from submitting and refreshing
		e.preventDefault();
		
		//get input value and save to variable
		var dollarAmount = $('#dollar-amount').val();
		
		
		//validation
		if (dollarAmount && jQuery.isNumeric(dollarAmount)) {
		
			//housekeeping
			$('#items li').remove();
			
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
					
					if (finalamt >= 0) {
					
						//add list items			
						$('#items').append('<li>You can buy ' + '<em>' + finalamt + ' ' +  itemvar.name + 's</em>' + posmessage + '</li>');
					
					} else {
						
						var finalstrpamt = finalamt.toString();
						
						//add list items			
						$('#items').append('<li>You owe ' + '<em>' + finalstrpamt.substr(1) + ' ' +  itemvar.name + 's</em>' + negmessage + '</li>');
						
					}
					
				}
						
				}
				   
			});
			
			$('#more-button').show();	
		
		}  else {
			
			alert("PLEASE ENTER A NUMBER!");
			
			$('#more-button').hide();	
			
			//housekeeping
			$('#items li').remove();
		
		}
		
	});
	
}); 
	