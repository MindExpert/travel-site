var Person = require('./modules/Person'); // Whenu use require, you dont need to use .js
var $ = require('jquery');


var john = new Person("John Doe", "blue");
	john.greet();
var jane = new Person("Jane Smith", "green");
	jane.greet();

$("h1").remove();


/* WebPack Testing */ 
// console.log(Person.exampleProperty);
// Person.exampleFunction();