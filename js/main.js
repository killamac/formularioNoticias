'use strict'

var divNoticia = document.querySelector('#divNoticia');
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

function cargarNoticia(){
    cargarTitulo();
    cargarSubTitulo();
    cargarVolanta();
    cargarCuerpo();
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

function cargarCuerpo(){
    var cuerpo = document.querySelector('#inputCuerpo').value;
    document.querySelector('#cuerpo').innerHTML = cuerpo;
}