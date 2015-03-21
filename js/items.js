$(document).ready(function(){


	$("#submit-button").click(function(e) {
		e.preventDefault();
		
		var dollarAmount = $('#dollar-amount').val();
		
		console.log(dollarAmount);
		
		$.ajax({
                    url: "json/items-list.json",
                  
                    dataType: "json",
                    success: function(data) {
                       
						
						var itemsArray = data;
						
						
						for (var i=0; i < 6; i++) {
						
							var itemvar = itemsArray.items[Math.floor(Math.random() * itemsArray.items.length)];
							
							
							$('main').append('<div>You can buy ' + Math.floor(dollarAmount/itemvar.price) + ' ' +  itemvar.name + 's with your money!</div>');
						}
					
					}
               
						
          });
		
	});

});	