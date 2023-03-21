var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyBG = document.getElementById("gradient");

function setGradient(){
	bodyBG.style.background = 
	"linear-gradient(to right, "+ color1.value +", "+ color2.value +")";

	css.textContent = bodyBG.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
