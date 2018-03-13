// Lecture: Hoisting [Variables] 
// --- Take away --- 
// This is how hoisting works with variables. [scenario 2] - During the creation phsae of the variable object is that it scans for variable declarations and the varaibels are then set to undefined. [scenario 3] - It comes back as an error because without the declaration... JS won't know what it is reference to. 

// scenario 1: 
var age = 23; 
console.log(age); // 23 

// scenario 2: 
console.log(age); 
var age = 23; // undefined because JavaScript knows that there is a variable of age, but hasn't been defined yet 

// scenario 3: 
console.log(age); // Uncaught ReferenceError: age is not defined because JavaScript doesn't know what variable is age... 

// scenario 4 
function foo() {
	var age = 65 
	console.log(age); // 65 
}

foo();
console.log(age); // 23 

// in scenario 4, 23 gets printed out because the variable age on line 11 is stored in the global  execution context where as the age on line 18 is stored within the function (or at least in the scope of the function)

// in scenario 4, age on line 18 and 11 can have the same name because they are two different types of objects. Line 18 is a variable in the execution context object of the foo function where line 11 is in the global execution context. So each one gets its own variable object. 

