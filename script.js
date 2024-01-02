var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var luckyBtn = document.querySelector("#lucky");


function changeColorInput() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


function randomColor() {
	var color = "0123456789ABBCDEF"
	var hash = "#"
	for (i = 0; i < 6; i++) {
		hash += color[Math.floor(Math.random() * 16)];
	} 
	return hash;
}

function final(){
	color1.value = randomColor()
	color2.value = randomColor()
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}


luckyBtn.addEventListener("click", final); 

color1.addEventListener("input", changeColorInput); // you can also do oninput instead of this. 

color2.addEventListener("input", changeColorInput);