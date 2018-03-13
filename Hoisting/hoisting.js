// Lecture: Hoisting [Function Declarations] 
// --- Take away --- 
//  These two examples are very similar; the first picture illustrates a function declared and called afterwards. The second photo showcases the term hoisting. The creation phase of the execution context (in this case.. the global executon context). The declaration of the function calculateAge is stored in a variable; it will be ready to be used once it is called upon and even before the execution.  So this way... we don't have to declare the function first. This only happens with function declarations. 


// example to hoisting 
calculateAge(1965); 

function calculateAge(year) {
	console.log(2018 - year);
}

// example of a normal function declaration 

function calculateAge(year) {
	console.log(2018 - year);
}

calculateAge(1998); 


