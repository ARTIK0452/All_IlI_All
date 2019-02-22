"use strict";

window.onload = function() {
	let randChislo = document.getElementById('randChislo');
	let cur = document.getElementById('cur');
	let batton = document.getElementById('batton');
			
			let min = 0;
			let max = 1;
			
		function rnd() {
			let max = 1;
			return Math.round(Math.random()*max); 
		}			
		
	batton.onclick = function(){
		if(min >= rnd()) {
			cur.innerHTML = "da";
		}else {
			cur.innerHTML = "net";
		}
	}
};