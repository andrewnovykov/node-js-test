var util = require('util');

//Parents
function Animal(name) {
	this.name = name;
}

Animal.prototype.walk = function() {
	console.log("Walk " + this.name);
};

//Child
function Rabbit(name) {
	this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
	console.log("Jump " + this.name);
};

//Using
var rabbit = new Rabbit("our rabbit");

rabbit.walk();
rabbit.jump();