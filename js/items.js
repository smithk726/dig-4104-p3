$(document).ready(function(){

	//hide more button
	$('#more-button').hide();

	//on click function
	$("#submit-button").click(function(e) {
		
		$('#items li').remove();
		
		//stop from submitting and refreshing
		e.preventDefault();
		
		//get input value and save to variable
		var dollarAmount = $('#dollar-amount').val();
		
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
				$('#items').append('<li>You can buy ' + '<em>' + finalamt + ' ' +  itemvar.name + 's</em> with your money!</li>');
			
			}
					
			}
               
						
		});
		
		$('#more-button').show();
		
	});

	//on click function
	$("#more-button").click(function(e) {
		
		$('#items li').remove();
		
		//stop from submitting and refreshing
		e.preventDefault();
		
		//get input value and save to variable
		var dollarAmount = $('#dollar-amount').val();
		
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
				$('#items').append('<li>You can buy ' + '<em>' + finalamt + ' ' +  itemvar.name + 's</em> with your money!</li>');
			
			}
					
			}
               
						
		});
		
	});
	
}); 
	