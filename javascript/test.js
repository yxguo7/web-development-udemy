console.log("hi");

function square(x) {
	console.log(x * x);
	return x*x;
}

//function declaration
function capitalized(str) {
	if(typeof str === "number") {
		return "this is not a string";
	}
	return str.charAt(0).toUpperCase();
}

//function expression
var capitalize = function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function isEven(num) {
	return num % 2 === 0;
}

//higher order functions
fucntion sing() {
	console.log("dfwer");
}

setInterval(sing, 1000);
clearInterval(2);

setInterval(function() {
	console.log("I am awosome!");
}, 2000);

var friends = ["Charlie", "Liz", "David", "Mattias"];
var len = friends.length //4

//add or remove from the end
friends.push("Amy"); //return length of the array 5
friends.pop(); //return the last removed item of the array 

//add or remove from the front of the array
friends.unshift("Tom"); //return length of the array 
friends.shift(); //return the last removed item of the array

friends.indexOf("David"); // return the first found index; -1 when not found

var names = friends.slice(1, 3) //["Liz", "David"] Parend array doesn't change

//friends.splice(index, number of element you want to delete)
friends.splice(index, 1); //ask user to provide index

var friends = new Array() //uncommon
var friends = [];

//function called for each element in the array
friends.forEach(someFunction)

friends.forEach(function(name) {
	console.log("My friend " + name);
})

function friend(name) {
	console.log(name);
}

friends.forEach(friend);

function myForEach(arr, func) {
	for(var i + 0; i < arr.length; i++) {
		func();
	}
}

var colors = ["red", "orange", "yellow"];
myForEach(colors, alter);

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}


//OBJECT
var person = {
	name: "Cindy",
	age: 21,
	city: "LA",
	comments: ["Awesome post", "terrible post"]
}
console.log(person["name"]);
console.log(person.name); //can't use dot when variable start with number 
person.age += 1;
var person = new object();

var movies = [
	{
		title: "In bruges",
		hasWatched: true,
		rating: 5
	},
	{
		title: "Frozen",
		hasWatched: false,
		rating: 4.5
	}
]

var obj = {
	name: "chunk",
	age: 44,
	add: function(x, y) {
		return x + y;
	}
}
obj.add(10, 9);























