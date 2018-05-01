//Lets practice a little JavaScript and practice pushing a commit to the repository

//Classic FizzBuzz
for (let i = 1; i <= 100; i++){
	console.log(((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz'))||i);
}


//Classic closure/async problem

//This is the setup that does not work as typically expected, outputting 3 to the console 3 times instead of outputting 0, 1, 2
for (var i = 0; i < 3; i++) {
	setTimeout(function(){
		console.log(i);
	}, 0)
}

/*The issue is the inner function references an outer scoped variable declared with var. When the functions run off of the event queue 
after the call stack is cleared, the value of the outer scoped variable i is now 3 and is output to the console*/
/*To solve this issue, we want to provide i as an inner-scoped variable to the function that holds the value of i when the function is
added to the event queue. We can do this using an IIFE (Immediately Invoked Function Expression)*/
for (var i = 0; i < 3; i++) {
	(function(iCopy) {
  	setTimeout(function(){
    	console.log(iCopy);
		}, 0);
	})(i);
}
// The loop now correctly outputs 0, 1 , 2 to the console.

//However, ES6 has made this solution impractical. We now simply replace var i = 0 with let i = 0 to get a block scoped variable that does just what we want it to do
for (let i = 0; i < 3; i++) {
	setTimeout(function(){
		console.log(i);
	}, 0)
}
//This outputs 0, 1, 2 to the console just like we want it to and only required one simple change.