const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('input');
const submit=document.getElementById('enviar');
/*console.log("hola");
console.log(inputs.value);
console.log(formulario.value); */
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/ // 7 a 14 numeros.
}

const campos={
	nombre: true,
	telefono:true,
	correo:true,
	vivienda:true,
	gatos:true,
	vacuna:true
}

/*
const campos={
	nombre: false,
	telefono:false,
	correo:false,
	vivienda:false,
	gatos:false,
	vacuna:false
}
*/

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

			if (e.target.name == "telefono") {
				var errores=document.getElementsByClassName('txtErrores');
				errores[0].innerHTML = "";	
				//errores[0].hide();
			} else if (e.target.name == "correo") {
				var errores=document.getElementsByClassName('txtErrores');
				errores[1].innerHTML = "";	
			}
		} else {
			

			document.getElementById(e.target.name).classList.remove('is-success');

			document.getElementById(e.target.name).classList.add('is-danger');
			campos[e.target.name]=false;

			if (e.target.name == "telefono") {
				var errores=document.getElementsByClassName('txtErrores');
				errores[0].innerHTML = "El teléfono tiene que tener 9 dígitos";	
				//errores[0].hide();
			} else if (e.target.name == "correo") {
				var errores=document.getElementsByClassName('txtErrores');
				errores[1].innerHTML = "Debe ser un correo correcto: abcde@abc.abc";	
			}
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

	vivienda.forEach((casa) => {
		if (casa.checked) {
			campos.vivienda= true;
		}
	});

	gato.forEach((gatito) => {
		if (gatito.checked) {
			campos.gatos= true;
		}
	});

	vacuna.forEach((siNo) => {
		if (siNo.checked) {
			campos.vacuna= true;
		}
	});

	var mensajeError=document.getElementById('errorBox');
	var modal1=document.getElementById('pop');

	if (campos.nombre && campos.telefono && campos.correo && campos.vivienda && campos.gatos && campos.vacuna) {
		mensajeError.classList.add('oculto');
		modal1.classList.add('is-active');

	} else {
		mensajeError.classList.remove('oculto');

	}
})
