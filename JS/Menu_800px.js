// Menu 800px
(function(){
	const listElements = document.querySelectorAll(".Menu_Opciones_Desp");
	const list = document.querySelector(".Menu_Desplegable");
	const menu = document.querySelector(".menu_menor");
	
	const addClick = ()=>{
		listElements.forEach(element =>{
			element.addEventListener("click", ()=>{
				
				let subMenu = element.children[1];
				let height = 0;
				element.classList.toggle("Menu_Opciones_act");
								
				if(subMenu.clientHeight === 0){
					height = subMenu.scrollHeight;
				}
				 subMenu.style.height = `${height}px`;
			});
		});
		
	}
	 if(window.innerWidth <= 1000){
        addClick();
    }

	menu.addEventListener('click', ()=> list.classList.toggle('Menu_Des_Desp'));

}
)();

// Galeria Superior
var BotIzq = document.querySelector(".B_Izq"),
	BotDer = document.querySelector(".B_Der"),
	Deslizar =  document.querySelector(".Carousell"),
	DeslCaja = document.querySelectorAll(".Caja");
	
	BotIzq.addEventListener("click", e =>MovIzq())
	BotDer.addEventListener("click", e =>MovDer())
	
	setInterval(()=>{
	MovDer()	
	}, 5000
	);
	
	let operacion=0, contador = 0, widthImg = 100/DeslCaja.length;
	
	function MovDer(){
		if (contador >= DeslCaja.length-1){
			contador=0;
			operacion=0;
			Deslizar.style.transform = `translate(-${operacion}%)`;
			Deslizar.style.transition = "none";
			return;
		}
		else{
			contador++;
			operacion +=widthImg;
			Deslizar.style.transform = `translate(-${operacion}%)`;
			Deslizar.style.transition = "all ease .6s";
		}
	}
	
	function MovIzq(){
		if (contador<0){
			contador = DeslCaja.length-1;
			operacion = widthImg*(DeslCaja.length-1);
			Deslizar.style.transform = `translate(-${operacion}%)`;
			Deslizar.style.transition = "none";
			return;
		}
		else{
			contador--;
			operacion -= widthImg;
			Deslizar.style.transform = `translate(-${operacion}%)`;
			Deslizar.style.transition = "all ease .6s";
		}
	}
	//Cronómetro
const seg = 1000, min = seg*60, hr = min*60, dia = hr*24;

let Fecha = new Date("August 15, 2023 15:00:00").getTime();
	
setInterval(function (){
	Actual = new Date().getTime(), Cuenta = Fecha-Actual;
	document.getElementById("dias").innerText = Math.floor(Cuenta/dia),
	document.getElementById("horas").innerText = Math.floor((Cuenta%dia)/hr),
	document.getElementById("minutos").innerText = Math.floor((Cuenta%hr)/min),
	document.getElementById("segundos").innerText = Math.floor((Cuenta%min)/seg);
}, seg)
