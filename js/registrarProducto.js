
var productos = [];

function registrarProducto (){

	var producto = {
		nombre: document.getElementById('nombre').value,
		marca: document.getElementById('marca').value,
		departamento: document.getElementById('depSelect').value,
		precio: document.getElementById('precio').value,
	}

	productos.push(producto);

	var inputs = document.getElementsByClassName('reset');
    	for (var i =0; i<inputs.length; i++){
        	inputs[i].value = "";
    	}

	window.localStorage.setItem('productos', JSON.stringify(productos));
	document.getElementById('monitor').value = JSON.stringify(productos, null, 2);
	alert("El producto se ha registrado con éxito!");


return false;

}






