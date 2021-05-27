const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('input');
const submit=document.getElementById('enviar');
console.log("hola");
console.log(inputs.value);
console.log(formulario.value); 
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/ // 7 a 14 numeros.
}
const campos={
	nombre: false,
	telefono:false,
	correo:false
}
	const validarFormulario = e => {
		switch (e.target.name) {
			case "nombre":
				comprobarCampo(e,expresiones.nombre);
				
				
			break;
			case "telefono":
				comprobarCampo(e,expresiones.telefono);

			break;
			case "correo":
				comprobarCampo(e,expresiones.correo);

			break;
		}
	}
	

	function comprobarCampo(e,expresion) {
		

		if (expresion.test(e.target.value)) {

			document.getElementById(e.target.name).classList.remove('is-danger');

			document.getElementById(e.target.name).classList.add('is-success');
			campos[e.target.name]=true;

			if (e.target.name == "usuario") {
				//document.getElementById('')
			}
		} else {
			

			document.getElementById(e.target.name).classList.remove('is-success');

			document.getElementById(e.target.name).classList.add('is-danger');
			campos[e.target.name]=false;
		}
	}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

submit.addEventListener('click',(e)=>{

	const vivienda = document.querySelectorAll('#vivienda input');
	const gato =  document.querySelectorAll('#gato input');
	const vacuna=document.querySelectorAll('#vacuna input');
	if (campos.nombre && campos.telefono && campos.correo) {
		
	}
})
