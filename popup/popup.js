const pop=document.getElementById('pop');
const moda=document.getElementById('moda');
const cancelar=document.getElementById('cancel')
function abrirpop() {
        moda.classList.add('is-active');
    
}
function cerrarpop() {
    moda.classList.remove('is-active');

}
pop.addEventListener('click', abrirpop);
cancelar.addEventListener('click', cerrarpop);