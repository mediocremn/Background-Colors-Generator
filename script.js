/*
This file creates different background colors
This file was added to Github on 07/15/2018
*/

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var initcolors = document.querySelector("body");
var randcolors=document.getElementById("randBtn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradientButtons() {
	color1.style.background = "#00ff00";
	
}

function showInitialColorsText() {
	console.log("Testing");
	css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";
}

function randomColors() {
	var randcolor1='#'+Math.floor(Math.random()*16777215).toString(16);
	var randcolor2='#'+Math.floor(Math.random()*16777215).toString(16);

	color1.value=randcolor1;
	console.log(randcolor1);
	color2.value=randcolor2;
	console.log(randcolor2);
	setGradient();
}

initcolors.addEventListener("load", showInitialColorsText());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randcolors.addEventListener("click", randomColors);