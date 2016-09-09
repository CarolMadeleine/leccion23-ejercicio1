window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value;
		var person = new Persona(nombre, edad, sexo);
		document.getElementById ("resultado").innerHTML = person.presentacion();

		
		/*var resultado = document.getElementById("resultado");
		resultado.innerHTML = person.presentacion(); */ 
		document.getElementById("nombre").value="";
		document.getElementById("edad").value="";
		document.getElementById("sexo").value="";
		
	});
		function Persona(nombre, edad, sexo) {
		  this.nombre = nombre;
		  this.edad = edad;
		  this.sexo = sexo;
		  this.mayor = (edad >= 18);
			this.presentacion = function(){
				var resultado = "Hola, mi nombre es " + this.nombre + " mi sexo es " + this.sexo + " tengo " + this.edad + " años " + ((this.mayor)? "mayor" : "menor") + " de edad";
				/*if (this.mayor){
					resultado = ("Hola, mi nombre es " + this.nombre + " mi sexo es " + this.sexo + " tengo " + this.edad + " años " + " Soy Mayor de edad </p>");
				} else{
					resultado = ("Hola, mi nombre es " + this.nombre + " mi sexo es " + this.sexo + " tengo " + this.edad + " años " + " Soy Menor de Edad </p>");
				}*/
				return resultado;
		};
	}
});







