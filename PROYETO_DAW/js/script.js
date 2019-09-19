var contador = 1;//cantidad de preguntas que hay en la BD
var contador_s;
function loging(){

	var str ="";
	document.getElementById("contenido").innerHTML = str; 	       
		str += "<div id=\"formContent\">";
		str += "   <div class=\"fadeIn first\">";
		str += "  </div>";
		str += "  <form>";
		str += "	<input type=\"text\" id=\"usuarioid\" class=\"fadeIn second\" name=\"login\" placeholder=\"Usuario\">";
		str += "	<input type=\"text\" type=\"password\" id=\"contra\" class=\"fadeIn third\" name=\"login\" placeholder=\"Contraseña\">";
		str += "<button onclick=\"Usuario()\">Entrar</button>";
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
		alert("Bienvenido alumno");
		alumno();
		}
	}
	
	
	if (userid=="karens")
	{
		if (passwd=="3456")
		{
		alert("Bienvenida profesora");
		profesor();
		}
	}
}

function alumno(){ //pantalla donde los alumnos eligen que test van a realizar
str = "";
document.getElementById("contenido").innerHTML = str;

str += "	<h1> Los Test Disponibles son:</h1>";

str += "    <ul id=\"listatest\">";
str += "    <li><button onclick=\"Test()\">Nombre del test</button></li>";
str += "    <li><button onclick=\"Test()\">Nombre del test</button></li>";
str += "	<li><button onclick=\"Test()\">Nombre del test</button></li>";
str += "    <li><button onclick=\"Test()\">Nombre del test</button></li>";
str += "    <li><button onclick=\"Test()\">Nombre del test</button></li>";
str += "	<li><button onclick=\"Test()\">Nombre del test</button></li>";
str += "    </ul>";

document.getElementById("contenido").innerHTML = str;
}

function profesor(){ // pantalla donde los profesores eligen si crear un test O ver el resultado delos alumnos
str = "";
document.getElementById("contenido").innerHTML = str;
str += "<center>";
str += "<h3>";
str += "Que desea hacer? </h3>";
str += "<button onclick=\"CrearTest()\">Crear Test</button>";
str += "<button onclick=\"ResultadosTest()\">Ver Resultados</button>";
str += "<button onclick=\"loging()\">salir</button>";
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

str += "<h1 id=\"preguuta\">Cual es el rio mas grande de El Salvador?</h1><br>";
str += "<h2>Rio Lempa<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2>Rio Goascoran<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2>Rio Torola<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2>Rio Paz<input type=\"radio\" name=\"opcion\" ></h2>";

str += "<button onclick=\"CambioPregunta()\">Siguiente pregunta</button>";
}

if (contador==2)
		{
		str += "	<p>	<span id=\"segundos\">30</span>	</p>";

str += "<h1 id=\"preguuta\">Aproximadamente, Que porcentaje de la superficie de la tierra es agua?</h1><br>";
str += "<h2>10%<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2>50%<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2>70%<input type=\"radio\" name=\"opcion\"  ></h2><br>";
str += "<h2>95%<input type=\"radio\" name=\"opcion\" ></h2>";

str += "<button onclick=\"CambioPregunta()\">Siguiente pregunta</button>";	
		}


document.getElementById("contenido").innerHTML = str;
contador_s =30;
var cronometro;
	
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
str += "	<button onclick=\"Preguntas()\">Aceptar</button>";
str += "	</form>";

document.getElementById("contenido").innerHTML = str;


	
}

function Preguntas(){// pantalla para asignar preguntas
	var nombreT = document.getElementById("nombretest").value;
str = "";
document.getElementById("contenido").innerHTML = str;


str += "            pregunta: <input type=\"text\" id=\"pregunta\" name=\"fname\" id=\"pregunta\">";
str += "            <input type=\"file\" name=\"agregar\" id=\"botonimagen\"  value=\"agregar imagen\"><br>";
str += "            respuesta: <input type=\"text\" id=\"resp1\" name=\"lname1\" class=\"respuesta1\"><input type=\"radio\" name=\"numero\" ><br>";
str += "            respuesta: <input type=\"text\" id=\"resp2\" name=\"lname2\" class=\"respuesta2\"><input type=\"radio\" name=\"numero\" ><br>";
str += "            respuesta: <input type=\"text\" id=\"resp3\" name=\"lname3\" class=\"respuesta3\"><input type=\"radio\" name=\"numero\" ><br>";
str += "            respuesta: <input type=\"text\" id=\"resp4\" name=\"lname4\" class=\"respuesta4\"><input type=\"radio\" name=\"numero\" ><br>";
str += "            <button onclick=\"AgregarPregunta()\">Agregar pregunta</button>";
str += "            <button onclick=\"Terminartest()\">Terminar</button>";

			
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

str += "	<h1> De que test desea conocer los resultados?:</h1>";
str += "    <ul id=\"listaresultados\">";
str += "    <li><button onclick=\"RTest()\">Nombre del testA</button></li>";
str += "    <li><button onclick=\"RTest()\">Nombre del testB</button></li>";
str += "	<li><button onclick=\"RTest()\">Nombre del testC</button></li>";
str += "    <li><button onclick=\"RTest()\">Nombre del testD</button></li>";
str += "    <li><button onclick=\"RTest()\">Nombre del testE</button></li>";
str += "	<li><button onclick=\"RTest()\">Nombre del testN</button></li>";
str += "    </ul>";
document.getElementById("contenido").innerHTML = str;
	
}

function RTest(){//pantalla para los maestros donde observan las notas de los alumnos en un determinado test
	
str = "";
document.getElementById("contenido").innerHTML = str;

str += "	<h1 id=\"tema\">Resultados</h1> ";

str += "   <div id=\"Nombre\">";
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
   
str += "<button onclick=\"profesor()\">Regresar a resultados</button>";
  str += "</div>";

document.getElementById("contenido").innerHTML = str;

}


