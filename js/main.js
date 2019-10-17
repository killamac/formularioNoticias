'use strict'
var noticiasLaterales = [];
var divNoticia = document.querySelector('#divNoticia');
divNoticia.style.display ='none';
var divFormu = document.querySelector('#divFormu');

var vistaPreviaButton = document.querySelector('#vistaPreviaButton');
vistaPreviaButton.addEventListener('click', function(){
    cargarNoticia();
    divFormu.style.display ='none';
    divNoticia.style.display ='block';
});

var editButton = document.querySelector('#editButton');
editButton.addEventListener('click', function(){
    divFormu.style.display ='block';
    divNoticia.style.display ='none';
});


var enviarLateralButton = document.querySelector('#enviarLateralButton');
enviarLateralButton.addEventListener('click', function(){
   /* console.log('entre submit');
    console.log(noticiasLaterales);*/
    guardarNoticiaLateral();
});

/*var  formNoticiaLateral = document.querySelector('#formNoticiaLateral');
    formNoticiaLateral.addEventListener('submit', function(){
    console.log(noticiasLaterales);
    guardarNoticiaLateral();
    console.log('entre submit');
    console.log(noticiasLaterales);
    alert('alert');

});*/

function cargarNoticia(){
    cargarFecha();
    cargarTitulo();
    cargarSubTitulo();
    cargarVolanta();
    cargarImagen();
    cargarCuerpo();
    cargarNoticiasLaterales();
};

function cargarFecha(){
    var titulo = document.querySelector('#inputFecha').value;
    document.querySelector('#fecha').innerHTML = titulo;
};

function cargarTitulo(){
    var titulo = document.querySelector('#inputTitulo').value;
    document.querySelector('#titulo').innerHTML = titulo;
};

function cargarSubTitulo(){
    var subTitulo = document.querySelector('#inputSubTitulo').value;
    document.querySelector('#subTitulo').innerHTML = subTitulo;
};

function cargarVolanta(){
    var volanta = document.querySelector('#inputVolanta').value;
    document.querySelector('#volanta').innerHTML = volanta;
};

function cargarImagen(){
    var epigrafe = document.querySelector('#inputEpigrafe').value;
    var urlImg = document.querySelector('#inputUrlImg').value;
    if( urlImg.match(/\.(jpeg|jpg|gif|png)$/) != null ){
    document.querySelector('#urlImg').src = urlImg;
    document.querySelector('#epigrafe').innerHTML = epigrafe;
    console.log(epigrafe);
    }else{
        document.querySelector('#urlImg').src = '';
        document.querySelector('#epigrafe').innerHTML = '';
    };
    // https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg
};

function cargarCuerpo(){
    var cuerpo = document.querySelector('#inputCuerpo').value;
    document.querySelector('#cuerpo').textContent = cuerpo;
};

function guardarNoticiaLateral(){
    var inputNoticiaLateral = document.querySelector('#inputNoticiaLateral');
    var noticiaLateral = inputNoticiaLateral.value;
    inputNoticiaLateral.value = '';
    noticiasLaterales.push(noticiaLateral);

    console.log('guardada noticia lateral');
    console.log(noticiasLaterales);
};

var listaLateral = document.querySelector('#listaLateral');
var i = 1;
function cargarNoticiasLaterales(){
    noticiasLaterales.forEach( function( noticiaLateral ){//recorro el array de noticias y los cargo a la barra lateral en el dom
        var li = document.createElement('LI'); 
        li.className = 'media border-bottom';
        li.innerHTML ='<h4 class="mt-3 mr-3">'+ i +'</h4><div class="media-body cutOverflowWord">'+ noticiaLateral +'</div>';
        listaLateral.appendChild (li);
        i++;
        console.log('cargado lateral ' +i);
        console.log(li);
        console.log(listaLateral.innerHTML);
    });

};