$(document).ready(function(){

// user imput and click submit button
	$("#submit-btn").click(VarCity);
	function VarCity(){
		event.preventDefault();
// grab "city name" user types
		var city  = $("#city-type").val();
// reasign "city" to lowerCase / remove spaces before and after the city name.
		city = city.toLowerCase();  
		city = city.trim();
		// "replace" is not working...
		city = city.replace("/\/\/","");
//Reset the user input field after it is submitted
		$("#city-type").val("");

		console.log("city is shown...."+city);
//check city name, if matched Display city image
		if (city == "new york" || city == "new york city" || city == "nyc"){			
			$("body").attr("class","nyc");
		}

		else if (city == "san francisco" || city == "sf" || city == "bay area") {
			$("body").attr("class","sf");
		}

		else if (city == "los angeles" || city == "la" || city == "lax") {
			$("body").addClass("la");
		}

		else if (city == "austin" || city == "atx") {
			$("body").addClass("austin");
		}

		else if (city == "sydney" || city == "syd") {
			$("body").addClass("sydney");
		}

// If a user types in an invalid city show citypix_skyline.jpg image and display the message "We currently don't have images for this city. Check back later!"
		else {
			$("body").addClass("citypix");
			alert("We currently don't have images for this city. Check back later!");
			
		}

		}


});









