var BotIzq = document.querySelector(".B_Izq"),
	BotDer = document.querySelector(".B_Der"),
	Deslizar =  document.querySelector(".Carousell")
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