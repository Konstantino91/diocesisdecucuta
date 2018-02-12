document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, false);
	$('#lista').hide();
 	/*$('#atras').hide();*/
	$('#icon-menu').click(function(){
		home= true;
		$("#lista").empty();
	  	$("#lista").hide();
	 	mostrarContenido();
	});

	$('#vidad').click(function(){
		home=false;
		$("#lista").empty();
		ocultarContenido();
		mostrarSubMenuMateriales();
	});

	$('#curso').click(function(){
		abrirPDF('http://www.emisoravoxdei.com/appsinodo/documentos/calendario.pdf');
	});
	$('#programador').click(function(){
		abrirPDF('http://www.emisoravoxdei.com/appsinodo/documentos/programador.pdf');
	});

	$('#sinodo').click(function(){
		home=false;
		$("#lista").empty();
		ocultarContenido();
		mostrarSubMenuSinodo();
	});


} // Finalización onDeviceReady


var home= true;
var enlaces = new Array();

//Aquí empiezan los métodos
function mostrarSubMenuSinodo(){
	$('#lista').append('<div id="docs" class="boton"><h2>Documentos</h2></div>');
	$('#lista').append('<div id="multimedia" class="boton"><h2>Multimedia</h2></div>');
	$('#lista').append('<div id="imagenes" class="boton"><h2>Imágenes</h2></div>');
	$('#lista').append('<div id="asambleas" class="boton"><h2>Asambleas</h2></div>');
	accederItemsMenuSinodo();
}


function mostrarSubMenuMateriales(){
	$('#lista').append('<div class="boton"><h2 id="m1">Encuentro semanal EPAP</h2></div>');
	$('#lista').append('<div class="boton"><h2 id="m2">Encuentro Eclesial</h2></div>');
	$('#lista').append('<div class="boton"><h2 id="m3">Carta a los cristianos</h2></div>');
	$('#lista').append('<div class="boton"><h2 id="m4">Cenáculo</h2></div>');
	$('#lista').append('<div class="boton"><h2 id="m5">Otros materiales</h2></div>');
	accederItemsMenuMateriales();
}

function accederItemsMenuMateriales(){
	$('#m1').click(function(){
		abrirPDF('http://www.emisoravoxdei.com/appsinodo/documentos/encuentrosepap.pdf');
	});

	$('#m2').click(function(){
		abrirPDF('http://www.emisoravoxdei.com/appsinodo/documentos/encuentroeclesial.pdf');
	});

	$('#m3').click(function(){
		abrirPDF('http://www.emisoravoxdei.com/appsinodo/documentos/Carta%20Cristianos.pdf');
	});

	$('#m4').click(function(){
		abrirPDF('http://www.emisoravoxdei.com/appsinodo/documentos/Cenáculo.pdf');
	});

	$('#m5').click(function(){
		home=false;
		$("#lista").empty();
		ocultarContenido();
		mostrarlistaMateriales();
	});
}

function accederItemsMenuSinodo(){
	$('#docs').click(function(){
		abrirPDF('https://drive.google.com/drive/folders/0BykubDddOzYKMFpLRDROYW9kZDQ?usp=sharing');
	});

	$('#imagenes').click(function(){
		home=false;
		$("#lista").empty();
		ocultarContenido();
		mostrarlistaImg();
	});

	$('#multimedia').click(function(){
		home=false;
		$("#lista").empty();
		ocultarContenido();
		mostrarlistaMultimedia();
	});

	$('#asambleas').click(function(){
		home=false;
		$("#lista").empty();
		ocultarContenido();
		mostrarlistaAsambleas();
	});
}

function abrirPDF(enlace){
	document.removeEventListener("backbutton", onBackKeyDown);
	var ref = window.open(enlace, '_system', 'location=yes');
	ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
	ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
	ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
	ref.addEventListener('exit', function(event) { alert(event.type); });
}

function ocultarContenido(){
	$('#lista').show();
	$('#lista').empty();
	/*$('#atras').show();*/
	/*$('atras').css("background","#222 url(../img/home.png) top left no-repeat");*/
	$("#curso").hide();
	$("#vidad").hide();
	$("#programador").hide();
	$("#sinodo").hide();
	//$('#contenido').css("top","25%");
}


function mostrarContenido(){
	$('#lista').hide();
	/*$('#atras').hide();*/
	$("#vidad").show();
	$("#curso").show();
	$("#programador").show();
	$("#sinodo").show();
	//$('#contenido').css("top","35%");
}


function mostrarlistaDocs(){
	$.get("http://www.emisoravoxdei.com/appsinodo/documentos.xml",{},function(xml){ //Abrimos el archivo noticias.xml
		//El ciclo se va repetir cada vez que se encuentre la etiqueta noticia
		$('item',xml).each(function() {
		  titulo = $(this).find('title').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable titulo
		  enlace = $(this).find('link').text(); //lo mismo con texto
		  textoE= "<a href='#' onclick= 'window.open('https://drive.google.com/file/d/0By7H0ArxhAlwMjJhWWctT2NtVTQ/view', '_blank', 'location=yes');'><h4>"+titulo+"</h4></a>"
		  $('#lista').append(textoE);


		 /* var ref = window.open('https://drive.google.com/file/d/0By7H0ArxhAlwMjJhWWctT2NtVTQ/view', '_blank', 'location=yes');
		 ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
         ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
         ref.addEventListener('exit', function(event) { alert(event.type); });*/

		}); //final de leer cada etiqueta noticia
	}); //fin de $.get*/
}


function mostrarlistaImg(){
	//window.cache.clear();
	$.get("http://www.emisoravoxdei.com/appsinodo/imagenes.xml",{},function(xml){ //Abrimos el archivo noticias.xml
		//El ciclo se va repetir cada vez que se encuentre la etiqueta noticia
		$('item',xml).each(function() {
			titulo = $(this).find('title').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable titulo
			enlace = $(this).find('link').text(); //lo mismo con texto
			$('#lista').append("<h4>"+titulo+"</h4>");
			img= "<div class='widget uib_w_3 scale-image d-margins' data-uib='media/img' data-ver='0'>"
								  +"<figure class='figure-align'>"
								  +	"<img src="+enlace+">"
								  +	"<figcaption data-position='bottom'></figcaption>"
								  +"</figure>"
							  +"</div>";
			$('#lista').append(img);

		}); //final de leer cada etiqueta noticia
	}); //fin de $.get*/
}



function mostrarlistaMultimedia(){
  //window.cache.clear();
	$.get("http://www.emisoravoxdei.com/appsinodo/audios.xml",{},function(xml){ //Abrimos el archivo noticias.xml
	//El ciclo se va repetir cada vez que se encuentre la etiqueta noticia
		$('item',xml).each(function() {
			titulo = $(this).find('title').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable titulo
			enlace = $(this).find('link').text(); //lo mismo con texto
			audioS="<audio controls>"+
					  "<source src='"+enlace+"' type='audio/mpeg'>"+
					"</audio>";
			$('#lista').append("<h4>"+titulo+"</h4>");
			$('#lista').append(audioS);

			}); //final de leer cada etiqueta noticia
	}); //fin de $.get*/
	mostrarlistaVideos();
}


function mostrarlistaVideos(){
  //window.cache.clear();
	$.get("http://www.emisoravoxdei.com/appsinodo/videos.xml",{},function(xml){ //Abrimos el archivo noticias.xml
		//El ciclo se va repetir cada vez que se encuentre la etiqueta noticia
		$('item',xml).each(function() {
		  titulo = $(this).find('title').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable titulo
		  enlace = $(this).find('link').text(); //lo mismo con texto
		   $('#lista').append("<h4>"+titulo+"</h4>");
		    media= "<div class='embed-video widget uib_w_7 d-margins' data-uib='media/youtube' data-ver='0' >"
								  +"<iframe src="+enlace+">"
								  +"</iframe>"
							  +"</div>";
		   $('#lista').append(media);

	  }); //final de leer cada etiqueta noticia
	}); //fin de $.get*/

}


function mostrarlistaAsambleas(){
	var i=1;
	$.get("http://www.emisoravoxdei.com/appsinodo/asambleas.xml",{},function(xml){ //Abrimos el archivo noticias.xml
		//El ciclo se va repetir cada vez que se encuentre la etiqueta noticia
		$('item',xml).each(function() {
		  titulo = $(this).find('title').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable titulo
		  indice = $(this).find('indice').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable indice
		   $('#lista').append('<div class="boton" id="docs"><h2 id="'+ indice + '">Asamblea '+i+'</h2></div>');
		   i++;
	  }); //final de leer cada etiqueta noticia
		mostrarAsamblea();
	}); //fin de $.get*/
}

function mostrarAsamblea(){
	$('#a1').click(function(){
		$('#lista').empty();
		$('#lista').append('<div id="da1"><br><h2>Documentos (Pulse aquí)</h2></div></br>');
		cargarAudiosYVideos("http://www.emisoravoxdei.com/appsinodo/asamblea1/audiosa1.xml","http://www.emisoravoxdei.com/appsinodo/asamblea1/videosa1.xml");
		entrarADocsA();
	});
	$('#a2').click(function(){
		$('#lista').empty();
		$('#lista').append('<div id="da2"><br><h2>Documentos (Pulse aquí)</h2></div></br>');
		cargarAudiosYVideos("http://www.emisoravoxdei.com/appsinodo/asamblea2/audiosa2.xml","http://www.emisoravoxdei.com/appsinodo/asamblea2/videosa2.xml");
		entrarADocsA();
	});
	$('#a3').click(function(){
		$('#lista').empty();
		$('#lista').append('<div id="da3"><br><h2>Documentos (Pulse aquí)</h2></div></br>');
		cargarAudiosYVideos("http://www.emisoravoxdei.com/appsinodo/asamblea3/audiosa3.xml","http://www.emisoravoxdei.com/appsinodo/asamblea3/videosa3.xml");
		entrarADocsA();
	});
	$('#a4').click(function(){
		$('#lista').empty();
		$('#lista').append('<div id="da4"><br><h2>Documentos (Pulse aquí)</h2></div></br>');
		cargarAudiosYVideos("http://www.emisoravoxdei.com/appsinodo/asamblea4/audiosa4.xml","http://www.emisoravoxdei.com/appsinodo/asamblea4/videosa4.xml");
		entrarADocsA();
	});
}

function entrarADocsA(){
	$('#da1').click(function(){
		abrirPDF('https://drive.google.com/folderview?id=0BykubDddOzYKflJWSzBoNTFJS2ptbl9DVzFXUWZqRWR3YlVYWEU5X19zZzBzWDcxcFFpN28&usp=drive_web');
	});
	$('#da2').click(function(){
		abrirPDF('https://drive.google.com/folderview?id=0BykubDddOzYKfk1tWklacUxodng1S1NKb0Q0MnNaZ2NiV2ZTdFdoMDRTYUdkWG5mSkg2SmM&usp=drive_web');
	});
	$('#da3').click(function(){
		abrirPDF('https://drive.google.com/folderview?id=0BykubDddOzYKfmZWTVBYVlpXLXBUaHBMSDBPTmJ2a3dUMDhYTDFDR1pWQ1lvYjFxcWR6Tm8&usp=drive_web');
	});
	$('#da4').click(function(){
		abrirPDF('https://drive.google.com/folderview?id=0BykubDddOzYKflBnTHk4YTYwTDE5SjdSMk9qTWJJM2xOd0R0QnhEZWl4NlI5a05JYkotanM&usp=drive_web');
	});
}

function cargarAudiosYVideos(audios, videos){
 //window.cache.clear();
	$.get(audios,{},function(xml){ //Abrimos el archivo noticias.xml
	//El ciclo se va repetir cada vez que se encuentre la etiqueta noticia
		$('item',xml).each(function() {
			titulo = $(this).find('title').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable titulo
			enlace = $(this).find('link').text(); //lo mismo con texto
			audioS="<audio controls>"+
					  "<source src='"+enlace+"' type='audio/mpeg'>"+
					"</audio>";
			$('#lista').append("<h4>"+titulo+"</h4>");
			$('#lista').append(audioS);

			}); //final de leer cada etiqueta noticia
	}); //fin de $.get*/

	$.get(videos,{},function(xml){ //Abrimos el archivo noticias.xml
		//El ciclo se va repetir cada vez que se encuentre la etiqueta noticia
		$('item',xml).each(function() {
		  titulo = $(this).find('title').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable titulo
		  enlace = $(this).find('link').text(); //lo mismo con texto
		   $('#lista').append("<h4>"+titulo+"</h4>");
		    media= "<div class='embed-video widget uib_w_7 d-margins' data-uib='media/youtube' data-ver='0' >"
								  +"<iframe src="+enlace+">"
								  +"</iframe>"
							  +"</div>";
		   $('#lista').append(media);

	  }); //final de leer cada etiqueta noticia
	}); //fin de $.get*/
}

function mostrarlistaMateriales(){
  //window.cache.clear();
	var i = 1;
	$.get("http://www.emisoravoxdei.com/appsinodo/materiales.xml",{},function(xml){ //Abrimos el archivo noticias.xml
	//El ciclo se va repetir cada vez que se encuentre la etiqueta noticia
		$('item',xml).each(function() {
			titulo = $(this).find('title').text(); //buscamos el valor que contiene la etiqueta titulo y lo guardamos en la variable titulo
			enlace = $(this).find('link').text(); //lo mismo con texto
			enlaces.push(enlace);
			var iden=  i;
			textoE= "<h4 id='"+iden+"'>"+titulo+"</h4>";
			$('#lista').append(textoE);
			$('#'+iden).on('click', function(){
				var n= ($(this).attr("id"))-1;
				window.open(enlaces[n], '_system', 'location=yes');
			});
			i++;
		}); //final de leer cada etiqueta noticia
	}); //fin de $.get*/
}


function onBackKeyDown() {
	if(!home){
		home= true;
		$("#lista").empty();
	  	$("#lista").hide();
	 	mostrarContenido();
	}else{
		navigator.app.exitApp();
	}
}
