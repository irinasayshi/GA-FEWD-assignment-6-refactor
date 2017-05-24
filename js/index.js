$( document ).ready(function(){

// set tempF var to 0
var tempF = 0; 

// set blur function to run function when user clicks out of field
	$("input").blur(function(){
    	var tempCelcius = $.trim($('#currentTemp').val()); // trim var to remove spaces
		if (tempCelcius != '' && tempCelcius.match(/^\d+$/)){ // check if input is empty or not a number
			tempCelcius = parseInt(tempCelcius); // convert string to a number 
    		tempF = Math.round((tempCelcius * 1.8) + 32); // apply conversion from C to F
    		$('.tempF').text(tempF); // output
    	} else {
    		alert('You need to enter a number!'); // otherwise if input is empty or not a number, alert the user
    	}
	});
});