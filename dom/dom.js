console.dir()

var id = document.getElementById("id");
var id = document.getElementById("#id"); 


//return an array of objects
var class = document.getElementByClassName("class");
var tag = document.getElementByTagName("tag");

//querySelector: return 1st matched element
var tag = document.querySelector(".bolded");
vat tag = document.querySelectorAll("h1");

//classList: read-only list
tag.classList.add("another-class");
tag.classList.remove("another-class");
tag.classList.toggle("another-class");

//textContent: pure text
tag.textContent
//innerHTML: text with inner tag
tag.innerHTML

//ATTRIBUTES: src or href
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "http://www.google.com"); 

logo.style.hight = "100px";
logo.sytle.border = "2px solid purple"; 

for(var i = 0; i < link.length; i++) {
	console.log(link[i].textContent);
}

//EVENT LISTENER
element.addEventListener(type, functionToCall);
var button = document.querySelector("button");
button.addEventListener("click", function() {
	console.log("SOMEONE CLICKED THE BUTTON!");
});

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.style.color = "pink";
	});
}

resetButton.addEventListener("change", function(){
	alert("change the input");
});

//javascript using classes in css
var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function(){
		// this.style.color = "green";
		this.classList.add("selected");
	});
	lis[i].addEventListener("mouseout", function(){
		// this.style.color = "black";
		this.classList.remove("selected");

	});
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done"); //define class "done" in CSS
	})

}




button.addEventListener("mouseover", function(){
	button.style.color = "green";
});

button.addEventListener("mouseout", function(){
	button.style.color = "black";
});



























