const seg = 1000, min = seg*60, hr = min*60, dia = hr*24;

let Fecha = new Date("August 15, 2023 15:00:00").getTime();
	
setInterval(function (){
	Actual = new Date().getTime(), Cuenta = Fecha-Actual;
	document.getElementById("dias").innerText = Math.floor(Cuenta/dia),
	document.getElementById("horas").innerText = Math.floor((Cuenta%dia)/hr),
	document.getElementById("minutos").innerText = Math.floor((Cuenta%hr)/min),
	document.getElementById("segundos").innerText = Math.floor((Cuenta%min)/seg);
}, seg)