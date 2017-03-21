
window.onload = function (){

	window.localStorage.getItem('usuarios', JSON.stringify(usuarios));

}

function login(){
	var loginCorrecto = false;
	var login = localStorage.getItem('usuarios');
	//Convertir String a un Objeto
	login = JSON.parse(login);

	var usuarioActual = document.getElementById('usuarioActual').value;
	var passwordActual = document.getElementById('passwordActual').value;

	for (var i = 0; i < login.length; i++) {
		if(usuarioActual == login[i].nombreUsuario){
			loginCorrecto = true;
			var usuarioCorrecto = login[i];
		}
	}

	if (loginCorrecto == false){
		alert('Usuario incorrecto');
	}else {
		if (usuarioCorrecto.password != passwordActual){
			alert('Password incorrecto');
		}else {
			alert('login exitoso!');
			window.open("administrador.html","_self");
		}
	}

	return false;


}
