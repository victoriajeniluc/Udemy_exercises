// Function Expression 

// --- Take away --- 
// Hoisting only works with function declaration. If we use it on a function expression, it will throw an error for us saying that it doesn't quite know what the function grown up is since it was declared later on.. also the scope of the function is not a global context anymore. 


var retirement = function(year) {
	console.log(65 - (2016 - year));
}

retirement(1990); // 39 

// BUT IF WE DID IT THE OTHER WAY AROUND.. 

grownup(1990);

var grownup = function(year) {
	console.log(65 - (2016 - year));
}

// Uncaught TypeError: grownup is not a function
