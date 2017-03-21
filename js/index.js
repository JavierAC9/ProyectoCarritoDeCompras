


window.onload = function (){

	var usuarios = [{"nombreUsuario":"Admin","password":"12345","dirección": "San José", "nombre": "Administrador", "apellido1": "del",
	"apellido2": "Sistema"}];


	window.localStorage.setItem('usuarios', JSON.stringify(usuarios));

}







