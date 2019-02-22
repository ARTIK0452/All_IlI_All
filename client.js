"use strict";

window.onload = function() {
	let randChislo = document.getElementById('randChislo');
	//let min = document.getElementById('minm');
	//let max = document.getElementById('maxm');
	let cur = document.getElementById('cur');
	let batton = document.getElementById('batton');
			
		function rnd() {
			//let max = 1000;
			//return Math.round(Math.random()*max);

			  let max = document.getElementById("maxm").value;
			  let min = document.getElementById("minm").value;

			Math.floor(Math.random()*(max-min+1)+min);
		}
		
	batton.onclick = function(){
		cur.innerHTML = rnd();
	}
};