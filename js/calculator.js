$(document).ready(function(){
	$('#submit-button').click(function(e) {
		e.preventDefault();

		var princple = $('#principleAmt').val();
		var interest = $('#interestRate').val();
		var monthly = $('#monthlyPay').val();

		if(princple && jQuery.isNumeric(princple) && interest && jQuery.isNumeric(interest) && monthly && jQuery.isNumeric(monthly)) {

			//housekeeping
			$('#items .commodity').remove();

			var newP = princple;
			var accrual = 0;
			var totalAccrual = 0;
			var period = 365;
			var monthInterest = (interest/100)/12;
			var totalInterest = 0;
			var totalMonths = 0;
			var n = 0.0833333333333;

			totalMonths = (-Math.log(1-(monthInterest*princple/monthly))) / (Math.log(1+monthInterest));
			totalMonths = Math.ceil(totalMonths);

			$('#monthTot').text(totalMonths);

			var totalYears = totalMonths/12;
			var monthsAdd = n;
			var interior = 0;
			var power = 0;
			var monthlyInt = 0;

			while (monthsAdd <= totalYears) {
				interior = 1 + (interest/100/period);
				power = period*n;
				accrual = newP*Math.pow(interior,power);

				monthlyInt = accrual-newP;
				totalInterest += monthlyInt;
				newP = accrual - monthly;
				monthsAdd += n;
			}

			totalAccrual = parseFloat(princple) + parseFloat(totalInterest);
			totalAccrual = totalAccrual.toFixed(2);

			$('#accrualAmt').text('$' + totalAccrual);

			$.ajax({
				url: "json/items-list.json",
				dataType: "json",
				success: function(data) {
				
				//put json data into variable           
				var itemsArray = data;
				
				//loop through array and get six random entries			
				for (var i=0; i < 6; i++) {
							
					var itemvar = itemsArray.items[i];
					
					var finalamt = Math.floor(totalAccrual/itemvar.price);
					
					//add list items
					if (finalamt >= 0) {
						$('#items').append('<div class="commodity"><img src="img/icons/' + itemvar.img + '"/><p class="itemwords">' + finalamt + ' ' + itemvar.name + '</p></div>');
					}
					else {
						var finalstrpamt = finalamt.toString();
						$('#items').append('<div class="commodity"><img src="../img/calc/140x140.gif"/><p><em>' + finalstrpamt.substr(1) + ' ' + itemvar.name + '&#39;s</em></p></div>');
					}

					$('#items .commodity').delay(500).each(function(i) {
						$(this).delay((i++)*500).fadeTo(1000,1);
					});
				
				}
						
				}
				   
			});

				$('#outputpage').show();
				$('#outputpage').delay(500).fadeTo(100,1);
		}
	});

	$('#again-button').click(function(e) {
		$('#outputpage').fadeTo(100,0, function() {
			$('#outputpage').hide();
			$('#inputpage').delay(100).show('slide', {direction: 'up'},500);
		});
	})
});