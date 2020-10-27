// напишите функции x1 и x2 и измените функцию solve, 
// так, чтобы она показывала решения (решение) 
// уравнения, введенного пользователем на странице 

function solve() {
	let d1 = Number(document.getElementById("d1").value);
	let d2 = Number(document.getElementById("d2").value);
	let h = Number(document.getElementById("h").value);
	
	if (h > 0 && d1 > 0 && d2 > 0 ) {
		let v1 = 0;
		let v2 = 0;
		if (Math.abs(d1 - d2) > 0.000000000001) { 
			let k = (d1 / 2.0) / ((d1 - d2) / 2.0); 
			let h2 = h * k;
			let h3 = h2 - h;
			v1 = coneVolume(d2, h3);
			v2 = coneVolume(d1, h2);
		}
		else {
			v2 = Math.PI * ((d1/2.0)**2.0) * h;
		}
		alert((v2 - v1)/1000.0 + "л");
		
	}
	else {
		alert("Недопустимые данные");
	}
}

function coneVolume(d, h) {
	return ((1.0/3.0) * h * 3.141592653  *((d/2.0)**2.0));
}

