function Person(fullName, favColor) {
	this.name = fullName;
	this.color = favColor;
	this.greet = function() {
		console.log("Hello There, My name is " + this.name + " and my favorite color i " + this.color + ".");
	}
}

var john = new Person("John Doe", "Blue");
john.greet();

var elsa = new Person("Jahne Parkins", "Red");
elsa.greet(); 