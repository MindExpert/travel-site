//var Person = require('./modules/Person'); // When use require (part of NODE.js), you dont need to use .js
//var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in texas.")
	}
}


var john = new Person("John Doe", "Black");
	john.greet();

var jane = new Adult("Jane Smith", "WHITE");
	jane.greet();
	jane.payTaxes();




/* WebPack Testing */ 
//$("h1").remove();
// console.log(Person.exampleProperty);
// Person.exampleFunction();