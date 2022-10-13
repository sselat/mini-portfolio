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