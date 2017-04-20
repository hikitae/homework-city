$(document).ready(function(){

// set the cities's value using an array
var cities = ["NYC","SF","LA","ATX","SYD"];

// make a loop for "cities" and create a drop-down menu
var index;
for (index = 0; index < cities.length; index = index + 1){
	console.log(cities[index]);
	$("select").append("<option>" +cities[index]+"</option>")

}

// grab a value for the user's selection and change the background accordingly.

$("select").on("change",function(){
	if ($(this).val() == "NYC"){		
		$("body").attr("class","nyc");
	}

	else if ($(this).val() == "SF"){	
		$("body").attr("class","sf");
	}

	else if ($(this).val() == "LA"){	
		$("body").attr("class","la ");
	}

	else if ($(this).val() == "ATX"){	
		$("body").attr("class","austin");
	}

	else if ($(this).val() == "SYD"){	
		$("body").attr("class","sydney");
	}

});

});



// Bonus

// Read up on your own and incorporate some more styles on the drop down menu
// While the dropdown menu should update the page 
// in the same way it did after your work last week, 
// take a look at what your final product should look 
// like with a dropdown menu: -->











