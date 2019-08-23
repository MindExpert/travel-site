function Person(fullName, favColor) {
	this.name = fullName;
	this.color = favColor;
	this.greet = function() {
		console.log("Hello There, My name is " + this.name + " and my favorite color i " + this.color + ".");
	}
}
module.exports = Person;


/* WebPack Testing*/
// console.log("Baby Boy");
// exports.exampleProperty = "Super Magical time ladies...";
// exports.exampleFunction = function () {
// 	alert("This is an Example.");
// }