$(document).ready(function(){

	//on click function
	$("#submit-button").click(function(e) {
		
		//stop from submitting and refreshing
		e.preventDefault();
		
		//get input value and save to variable
		var dollarAmount = $('#dollar-amount').val();
		
		//get json data from file
		$.ajax({
			url: "json/items-list.json",
			dataType: "json",
			success: function(data) {
            
			//put json data intwo variable           
			var itemsArray = data;
			
			//loop through array and get six random entries			
			for (var i=0; i < 6; i++) {
						
				var itemvar = itemsArray.items[Math.floor(Math.random() * itemsArray.items.length)];
				
				//add list items			
				$('#items').append('<li>You can buy ' + '<em>' + Math.floor(dollarAmount/itemvar.price) + ' ' +  itemvar.name + 's</em> with your money!</li>');
			
			}
					
			}
               
						
		});
		
	});

}); 
	