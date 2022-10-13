       
var movie = {
    "peliculas":[
      {
         "imagen": "img/ lord of king.jpg",
         "Titulo": "Lord of king",
         "Duracion": "3h:50m",
         "Clasificacion": "+12",
         "Butaca": "Tradicional",
         "Horario":"11:00 AM, 3:00 PM  5:00 PM"

     },


    {   
         "imagen": "img/ avenger.jpg",
         "Titulo": "Avenger",
         "Duracion": "2h:00m",
         "Clasificacion": "+9",
         "Butaca": "Tradicional",
         "Horario":"8:00 AM, 11:00 PM  3:00 PM"

     },

     {
      "imagen": "img/ conjuro.jpg",
      "Titulo": "El conjuro",
      "Duracion": "2h:30m",
      "Clasificacion": "+18",
      "Butaca": "Tradicional",
      "Horario":"11:00 AM, 9:00 PM  10:00 PM"

  },

  {
   "imagen": "img/ villano.jpg",
   "Titulo": "Mi villano favorito",
   "Duracion": "2h:00m",
   "Clasificacion": "+7",
   "Butaca": "Tradicional",
   "Horario":"8:00 AM, 11:00 PM  3:00 PM"

},


    ]


    
}



var div = document.getElementById("pelis");
div.innerHTML = volcarDatos(movie.peliculas);
function volcarDatos(datos){
 var total = datos.length;
 data = "<ul class=\"grid\">\n";
 for(var i=0; i<total; i++){
   
    data+=  "<div class= > </div>"
   data+= "<div class="+"p-3 border bg-light>    </div>"

   data+=  ("<h2> "+datos[i].Titulo+"\n</h2>"  +  "<h5> Horario: </h5> \n "+ datos[i].Horario +"<h5> Tipo de butaca: </h5> \n " + datos[i].Butaca 
   + "<h5> Duracion: </h5> \n " + datos[i].Duracion + "<h5> Clasificacion: </h5> \n " + datos[i].Clasificacion  );
    

     
  
     
   
}
data += "</ul>\n";
return data
}








/*data += "<li class=\"box\">\n";
data += "<div class=\"box-shadow\"></div>\n";
data += "<div class=\"box-gradient\">\n";
data += "<img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " +
datos[i].nombre + " " + datos[i].apellido + "\" class=\"avatar\" />\n";
data += "<h4>\nNombre: " + datos[i].nombre + " " + datos[i].apellido +
"\n</h4>\n";
data += "<p>\nEdad: " + datos[i].edad + "\n<br />\n";
data += "Profesión: " + datos[i].profesion + "\n</p>\n";
data += "</div>\n";
data += "</li>\n";

data += "</ul>\n";
return data;
 for(var i=0; i<total; i++){
   data += "<li class=\"box\">\n";
   data += "<div class=\"box-shadow\"></div>\n";
   data += "<div class=\"box-gradient\">\n";
   data += "<img src=\"" + datos[i].imagen + "\" alt=\"Avatar de " +
  datos[i].Titulo + " Lord of King" + datos[i].Duracion + "\" class=\"avatar\" />\n";
   data += "<h4>\nTitulo: " + datos[i].Titulo + " " + datos[i].Clasificacion +
  "\n</h4>\n";
   data += "<p>\nButaca: " + datos[i].Butaca + "\n<br />\n";
   data += "Horario: " + datos[i].Horario + "\n</p>\n";
   data += "</div>\n";
   data += "</li>\n";
   }
   data += "</ul>\n";
   return data;

   
*/
