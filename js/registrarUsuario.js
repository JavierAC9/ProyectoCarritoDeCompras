
var usuarios = [{"nombreUsuario":"Admin","password":"12345","dirección": "San José", "nombre": "Administrador", "apellido1": "del",
"apellido2": "Sistema"}];

function registrarUsuario (){

	if(document.getElementById('masculino').checked){
        var genero = "Masculino";
    }else if (document.getElementById('femenino').checked){
        var genero = "Femenino";
    }else{
        var genero = "Otro";
    }

	var usuario = {
		nombre: document.getElementById('nombre').value,
		apellido1: document.getElementById('apellido1').value,
		apellido2: document.getElementById('apellido2').value,
		nombreUsuario: document.getElementById('nombreUsuario').value,
		password: document.getElementById('password').value,
		email: document.getElementById('email').value,
		genero: genero,
		fecha: document.getElementById('fecha').value,
		teléfono: document.getElementById('tel').value,
		edad: document.getElementById('edad').value,
		dirección: document.getElementById('direccion').value,
	}

	usuarios.push(usuario);
	var inputs = document.getElementsByClassName('reset');

    for (var i =0; i<inputs.length; i++){
        inputs[i].value = "";
    }

	window.localStorage.setItem('usuarios', JSON.stringify(usuarios));
	document.getElementById('monitor').value = JSON.stringify(usuarios, null, 2);
	alert("El usuario se ha registrado con éxito!");

return false;

}



