var contador = 1;//cantidad de preguntas que hay en la BD
var contador_s;
var cronometro;
var NoUser=1;
function loging(){
contador=1;
	var str ="";
	document.getElementById("contenido").innerHTML = str; 	  
	 
         
		str += "<div id=\"formContent\">";
		str += "   <div class=\"fadeIn first\">";
		str += "  </div>";
		str += "  <form>";
		str += "	<p><input type=\"text\" id=\"usuarioid\" class=\"fadeIn second\" name=\"login\" placeholder=\"Usuario\"><br></p>";
		str += "	<p><input type=\"password\" id=\"contra\" class=\"fadeIn third\" name=\"login\" placeholder=\"Contraseña\"><br></p>";
		str += "   <p><button class='btn btn-outline-dark' onclick=\"Usuario()\">Entrar</button ><br></p>";
		str += "  </form>";
		str += "  <div id=\"formFooter\">";
		str += "  </div>";
		str += "</div>";
	  
  document.getElementById("contenido").innerHTML = str;
}

loging();

function Usuario(){//determina que tipo de usuario se está logueando (alumno o profesor)
	
	var userid = document.getElementById("usuarioid").value;
	var passwd = document.getElementById("contra").value;
	
	
	//Estos IF iran a comprobar la existencia y tipo de usuario a la BD cuando ya esté conectada.
	//De momento se han quemado los usuarios alumno y profesor 
	
	if (userid=="alumno")
	{
		if (passwd=="12345")
		{
		NoUser=2;//cambia esta variable para saber que le usuario si fue identificado
		alert("Bienvenido alumno");
		alumno();
		}
	}
	
	
	if (userid=="karens")
	{
		if (passwd=="3456")
		{
		NoUser=2;//cambia esta variable para saber que le usuario si fue identificado
		alert("Bienvenida profesora");
		profesor();
		}
	}
	
	if (NoUser==1){
	alert("USUARIO O CONTRASENA INVALIDO");
	}
}

function alumno(){ //pantalla donde los alumnos eligen que test van a realizar
str = "";
document.getElementById("contenido").innerHTML = str;

str += "	<h1><center> Los Test Disponibles son:</center></h1><br>";

str += "    <ul id=\"listatest\">";
str += "    <p><button class='btn btn-outline-secondary' onclick=\"Test()\">Nombre del test</button><br></p>";
str += "    <p><button class='btn btn-outline-secondary' onclick=\"Test()\">Nombre del test</button><br></p>";
str += "	<p><button class='btn btn-outline-secondary' onclick=\"Test()\">Nombre del test</button><br></p>";
str += "    <p><button class='btn btn-outline-secondary' onclick=\"Test()\">Nombre del test</button><br></p>";
str += "    <p><button class='btn btn-outline-secondary' onclick=\"Test()\">Nombre del test</button><br></p>";
str += "	<p><button class='btn btn-outline-secondary' onclick=\"Test()\">Nombre del test</button><br></p>";
str += "    </ul>";

document.getElementById("contenido").innerHTML = str;
}

function profesor(){ // pantalla donde los profesores eligen si crear un test O ver el resultado delos alumnos
str = "";
document.getElementById("contenido").innerHTML = str;
str += "<center>";
str += "<h3>";
str += "Que desea hacer? </h3>";
str += "<p><button class='btn btn-outline-primary' onclick=\"CrearTest()\">Crear Test</button><br></p>";
str += "<p><button class='btn btn-outline-success' onclick=\"ResultadosTest()\">Ver Resultados</button><br></p>";
str += "<p><button class='btn btn-outline-danger' onclick=\"loging()\">salir</button><br></p>";
str += "</center>";
document.getElementById("contenido").innerHTML = str;
}

function Test () { // pantalla con preguntas de test que debe resolver el alumno

//test del alumno

str = "";
document.getElementById("contenido").innerHTML = str;

if (contador==1)
{

str += "	<p>	<span id=\"segundos\">30</span>	</p>";

str += "<h1 id=\"pregunta\">Cual es el rio mas grande de El Salvador?</h1><br>";
str += "<img id=\"imagen\" src=\"\" width=\"200\" height=\"100\">";
str += "<h2 id=\"respuesta1\">Rio Lempa<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2 id=\"respuesta2\">Rio Goascoran<p><input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2 id=\"respuesta3\">Rio Torola<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2 id=\"respuesta4\">Rio Paz<input type=\"radio\" name=\"opcion\" ></h2>";

str += "<button class='btn btn-outline-primary' onclick=\"CambioPregunta()\">Siguiente pregunta</button>";
}

if (contador==2)
		{
		str += "	<p>	<span id=\"segundos\">30</span>	</p>";

str += "<h1 id=\"pregunta\">Aproximadamente, Que porcentaje de la superficie de la tierra es agua?</h1><br>";
str += "<img id=\"imagen\" src=\"\" width=\"200\" height=\"100\">";
str += "<h2 id=\"respuesta1\">10%<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2 id=\"respuesta2\">50%<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2 id=\"respuesta3\">70%<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2 id=\"respuesta4\">95%<input type=\"radio\" name=\"opcion\" ></h2>";

str += "<button onclick=\"CambioPregunta()\">Siguiente pregunta</button>";	
		}

document.getElementById("contenido").innerHTML = str;

        

            var pregunta = document.getElementById('pregunta');
            var imagen = document.getElementById('imagen');
            var respuesta1 = document.getElementById('respuesta1');
            var respuesta2 = document.getElementById('respuesta2');
			var respuesta3 = document.getElementById('respuesta3');
            var respuesta4 = document.getElementById('respuesta4');


            var dbRef = firebase.database().ref().child('profesor').child('profesor1').child('tests').child('test1' ).child('pregunta'+contador+'').child('texto');
            dbRef.on('value', snap => pregunta.innerText=snap.val());

            var dbRef = firebase.database().ref().child('profesor').child('profesor1').child('tests').child('test1' ).child('pregunta'+contador+'').child('imagen');
            dbRef.on('value', snap => imagen.src=snap.val());

            var dbRef = firebase.database().ref().child('profesor').child('profesor1').child('tests').child('test1' ).child('pregunta'+contador+'').child('respuesta1').child('texto');
            dbRef.on('value', snap => respuesta1.innerHTML=snap.val()+"<input type=\"radio\" name=\"opcion\"  >");

            var dbRef = firebase.database().ref().child('profesor').child('profesor1').child('tests').child('test1' ).child('pregunta'+contador+'').child('respuesta2').child('texto');
            dbRef.on('value', snap => respuesta2.innerHTML=snap.val()+"<input type=\"radio\" name=\"opcion\"  >");
			
            var dbRef = firebase.database().ref().child('profesor').child('profesor1').child('tests').child('test1' ).child('pregunta'+contador+'').child('respuesta3').child('texto');
            dbRef.on('value', snap => respuesta3.innerHTML=snap.val()+"<input type=\"radio\" name=\"opcion\"  >");
        
            var dbRef = firebase.database().ref().child('profesor').child('profesor1').child('tests').child('test1' ).child('pregunta'+contador+'').child('respuesta4').child('texto');
            dbRef.on('value', snap => respuesta4.innerHTML=snap.val()+'<input type=\"radio\" name=\"opcion\"  >');


contador_s =30;

	clearInterval(cronometro);
		s = document.getElementById("segundos");
		cronometro = setInterval(
			function(){

				if(contador_s>0)
				{
				contador_s--;
				s.innerHTML = contador_s;
				}
				else
				{

			clearInterval(cronometro);
			confirm("Se acabo el tiempo de pregunta");
			CambioPregunta();

             }
			}
			,1000);
}

function CambioPregunta(){ // funcion que cambia a la siguiente pregunta (o finaliza el test al ya no haber mas preguntas)
	contador++
	//guarda la respuesta del alumno en la bd
	
	
	if (contador<3)//simula la cantidad de preguntaas que tiene el test en la base de datos, 
	{
	//nos muestra la siguiente pregunta que este en la BD
	alert("esto mostrará la siguiente pregunta almacenada en la bd");	
	Test ();
	}
	else{
	ResultadoAlumno();
	contador_s=10000;
	}
}

function ResultadoAlumno (){ // Pantalla de resultado que se entrega al alumno al finalizar un test
	
	alert ("Ya no hay mas preguntas, mostrando los resultados...");
	str = "";
	document.getElementById("contenido").innerHTML = str;
	
	str += " 	<center><h3> Alumnno X, NOTA:  9.0 </h3></center> <br><br>";
	
	str += " 	<h4> Pregunta 1 xxxxxxxxxxxxxxxxxx</h4><br>";
	str += " 	<h5> Su respuesta fue: A </h5><br>";
	str += " 	<h5> Respuesta correcta: A </h5><br><br>";
	
	str += " 	<h4> Pregunta 2 yyyyyyyyyyyyyyyyyy </h4><br>";
	str += " 	<h5> Su respuesta fue: D </h5><br>";
	str += " 	<h5> Respuesta correcta: D </h5><br>";
	
	
	str += " 	<h4> Pregunta 3 zzzzzzzzzzzzzzzzzzz </h4><br>";
	str += " 	<h5> Su respuesta fue: B </h5><br>";
	str += " 	<h5> Respuesta correcta: C </h5><br><br>";
	str += "<button onclick=\"loging()\">salir</button>";
	
	
	
	document.getElementById("contenido").innerHTML = str;
}

function CrearTest(){//Pantalla para profesores para asignar nombre al test
	
str = "";
document.getElementById("contenido").innerHTML = str;

str += "	<form id=\"test\" >";
str += " 	<h1> Nombre del test</h1>";
str += " 	<input type=\"text\" id=\"nombretest\">";
str += "	<button class='btn btn-outline-secondary' onclick=\"Preguntas()\">Aceptar</button>";
str += "	</form>";

document.getElementById("contenido").innerHTML = str;


	
}

function Preguntas(){// pantalla para asignar preguntas
	var nombreT = document.getElementById("nombretest").value;
str = "";
document.getElementById("contenido").innerHTML = str;


str += "            <p>pregunta: <input type=\"text\" id=\"pregunta\" name=\"fname\" id=\"pregunta\"></p>";
str += "            <p><input class='btn btn-outline-secondary' type=\"file\" name=\"agregar\" id=\"botonimagen\"  value=\"agregar imagen\"><br></p>";
str += "            <p>respuesta: <input type=\"text\" id=\"resp1\" name=\"lname1\" class=\"respuesta1\"><input type=\"radio\" name=\"numero\" ><br></p>";
str += "            <p>respuesta: <input type=\"text\" id=\"resp2\" name=\"lname2\" class=\"respuesta2\"><input type=\"radio\" name=\"numero\" ><br></p>";
str += "            <p>respuesta: <input type=\"text\" id=\"resp3\" name=\"lname3\" class=\"respuesta3\"><input type=\"radio\" name=\"numero\" ><br></p>";
str += "            <p>respuesta: <input type=\"text\" id=\"resp4\" name=\"lname4\" class=\"respuesta4\"><input type=\"radio\" name=\"numero\" ><br></p>";
str += "            <button class='btn btn-outline-secondary' onclick=\"AgregarPregunta()\">Agregar pregunta</button>";
str += "            <button class='btn btn-outline-secondary' onclick=\"Terminartest()\">Terminar</button>";

			
document.getElementById("contenido").innerHTML = str;
}

function AgregarPregunta(){//funcion que guarda la pregunta del test en desarrollo y perite agregar una mas
	
//guarda en la BD la pregunta
alert("se guardaron los datos con exito");
document.getElementById("resp1").value = "";
document.getElementById("resp2").value = "";
document.getElementById("resp3").value = "";
document.getElementById("resp4").value = "";
document.getElementById("pregunta").value = "";
}

function Terminartest(){//funcion que da por finalizado el test, guardando el contenido de las preguntas en la BD
	//guardo en la BD la pregunta
	alert("se guardaron los datos con exito");
	profesor();
}

function ResultadosTest(){//pantalla para los maestros para elegir el test del cual quieren saber lso resultados de lso alumnos
	
str = "";
document.getElementById("contenido").innerHTML = str;

str += "	<h1> De que test desea conocer los resultados?</h1>";
str += "    <ul id=\"listaresultados\">";
str += "    <p><button class='btn btn-outline-secondary'onclick=\"RTest()\">Nombre del test A</button></p>";
str += "    <p><button class='btn btn-outline-secondary' onclick=\"RTest()\">Nombre del test B</button></p>";
str += "	<p><button class='btn btn-outline-secondary' onclick=\"RTest()\">Nombre del test C</button></p>";
str += "    <p><button class='btn btn-outline-secondary' onclick=\"RTest()\">Nombre del test D</button></p>";
str += "    <p><button class='btn btn-outline-secondary' onclick=\"RTest()\">Nombre del test E</button></p>";
str += "	<p><button class='btn btn-outline-secondary' onclick=\"RTest()\">Nombre del test N</button></p>";
str += "    </ul>";
document.getElementById("contenido").innerHTML = str;
	
}

function RTest(){//pantalla para los maestros donde observan las notas de los alumnos en un determinado test
	
str = "";
document.getElementById("contenido").innerHTML = str;

str += "	<center><h1 id=\"tema\">Resultados</h1></center><br> ";

str += "   <div class='col-md-6 col-center' id=\"Nombre\">";
str += "   <h2>Nombre</h2>";
str += "   <p>Alumno 1</p>";
str += "   <p>Alumno 2</p>";
str += "   <p>Alumno n</p>";
 
str += "   </div>";

str += "   <div id=\"Nota\">";
str += "    <h2>Nota</h2>";
str += "    <p>8.00</p>";
str += "   <p>6.8</p>";
str += "    <p>10.00</p>";
   
str += "<br><button class='btn btn-outline-success' onclick=\"profesor()\">Regresar a resultados</button>";
  str += "</div>";

document.getElementById("contenido").innerHTML = str;

}


