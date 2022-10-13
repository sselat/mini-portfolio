var btnSobre = document.getElementById('btnSobre');
var btnRedes = document.getElementById('btnRedes');
var descricaoSobre = document.getElementById('descricaoSobre');
var descricaoRedes = document.getElementById('descricaoRedes');

btnSobre.addEventListener('click', function(){
    descricaoRedes.classList.remove('selecionado');
    descricaoSobre.classList.add('selecionado');
    btnRedes.classList.remove('selecionado');
    btnSobre.classList.add('selecionado');
});
btnRedes.addEventListener('click', function(){
    descricaoSobre.classList.remove('selecionado');
    descricaoRedes.classList.add('selecionado');
    btnSobre.classList.remove('selecionado');
    btnRedes.classList.add('selecionado');
});

var checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', function (){
    var btnTema = document.querySelector('#labelCheckbox span');
    btnTema.classList.toggle('light-theme');
    var bodyTema = document.querySelector('body');
    bodyTema.classList.toggle('light-theme');
    var cartaoTema = document.querySelector('.cartao');
    cartaoTema.classList.toggle('light-theme');
    var informacoesTema = document.querySelector('.minhas-informacoes');
    informacoesTema.classList.toggle('light-theme');
})