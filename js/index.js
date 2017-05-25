$( document ).ready(function(){

// set tempF var to 0
var tempF = 0; 

// set blur function to run function when user clicks out of field
	$("form").on("submit", function(){
		event.preventDefault();
    	var tempCelcius = $.trim($('#currentTemp').val()); // trim var to remove spaces
		if (tempCelcius != '' && tempCelcius.match(/^\d+$/)){ // check if input is empty or not a number
			tempCelcius = parseInt(tempCelcius); // convert string to a number 
    		tempF = Math.round((tempCelcius * 1.8) + 32); // apply conversion from C to F
    		$('.tempF').text(tempF); // output

    		// change background code starts here

	    	if(tempF > 85){ // change the background to a desert if the resulting temp is > 85 F
				$('body').attr('class', 'hot');
				// alert('Temp is over 85!');
			} else if(tempF < 50){ // change to a snowy picture if < 50 degrees
				$('body').attr('class', 'cold');
			} else  if(tempF >= 50 && tempF <= 85){ // otherwise change background to a beautiful meadow picture because temp is 50-85 degrees
				$('body').attr('class', 'nice');
			} 

    	} else {
    		$('.tempF').text('You need to enter a number!'); // otherwise if input is empty or not a number, alert the user
    		$('body').attr('class', '');
    	}
	});
});