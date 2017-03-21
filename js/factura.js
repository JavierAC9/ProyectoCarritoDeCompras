
var total = 0;
var contador = 0;
var productos = window.localStorage.getItem('productos');
productos = JSON.parse(productos);

var jsonUsuarios = localStorage.getItem("usuarios");
var mostrarUsuario = JSON.parse(jsonUsuarios);

var m = localStorage.getItem("usuarioMostrarFactura");
var n = JSON.parse(m);

var listaProductosFactura = [];


window.onload = function () {

    
	for (var i = 0; i < productos.length; i++) {
		//crear contenedor de cada producto

		var producto = document.createElement('tr');
		producto.classList.add("producto");

		//crear propiedad de nombre
		var parrafoNombre = document.createElement('td');
		var nombre = document.createTextNode(productos[i].nombre);
		parrafoNombre.appendChild(nombre);
		producto.appendChild(parrafoNombre);
		
		//crear propiedad de marca
		var parrafoMarca = document.createElement('td');
		var marca = document.createTextNode(productos[i].marca);
		parrafoMarca.appendChild(marca);
		producto.appendChild(parrafoMarca);
		
		//crear propiedad de categoria
		var parrafoDepartamento = document.createElement('td');
		var departamento = document.createTextNode(productos[i].departamento);
		parrafoDepartamento.appendChild(departamento);
		producto.appendChild(parrafoDepartamento);
		
		//crear propiedad de precio
		var parrafoPrecio = document.createElement('td');
		var precio = document.createTextNode(productos[i].precio);
		parrafoPrecio.appendChild(precio);
		producto.appendChild(parrafoPrecio);
		parrafoPrecio.setAttribute("numero", "1");
		
		
		var boton = document.createElement('button');
		boton.classList.add("botonAgregarACarrito");
		boton.innerHTML = "Agregar";
		boton.id = contador.toString();
		boton.onclick = function () {		


		var nombre = productos[this.id].nombre;
		var departamento = productos[this.id].departamento;
		var marca = productos[this.id].marca;
		var precio = productos[this.id].precio;			
		total += parseInt(precio);


		listaProductosFactura.push(nombre + " - " + marca + " - "  + departamento + " - " + precio + "<br>");
		window.localStorage.setItem('listaProductosFactura', JSON.stringify(listaProductosFactura));
		document.getElementById("totalProductos").innerHTML = ("<br>Total: " + total);

		for (var i = 0; i < listaProductosFactura.length; i++) {
			var div2 = document.getElementById('listaProductos');
			div2.insertBefore(document.getElementById("listaProductos").innerHTML = listaProductosFactura, div2.childNodes[i]);
		}

		};//Fin Funcion onclick

		producto.appendChild(boton);
		
		//agregar el div de producto en el contenedor
		var div = document.getElementById('productoContainer');
		div.insertBefore(producto, div.childNodes[i]);
		contador++;

	} //Fin del For


	//Mostrar información del Usuario
	document.getElementById("productoContainerTotal").innerHTML = ("<b>Nombre:</b> "+ " " + mostrarUsuario[n].nombre + " " + mostrarUsuario[n].apellido1 + 
	" " + mostrarUsuario[n].apellido2 + "<br> <b>Nombre de usuario:</b> " + " " + mostrarUsuario[n].nombreUsuario +" "+ "<br> <b>Dirección:</b> " + "" + 
	mostrarUsuario[n].dirección + "<br><br><br>");

}//Fin Window.onload






