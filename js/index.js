/**Acesso às variáveis globais */
const btnArtigo = document.getElementById('btnArtigo');
const artigo = document.getElementById('artigo');
const btnFecharModalArtigo = document.getElementById('btnFecharModalArtigo');
const overlay = document.getElementsByClassName('.overlay');
const containerGeral = document.getElementById('containerGeral');


//Abrir modal de artigo
btnArtigo.onclick = ()=>{
    artigo.classList.remove('d-none');
    artigo.classList.add('overlay');
    containerGeral.classList.add('d-none');
}

//Fechar modal de artigo
btnFecharModalArtigo.onclick = ()=>{
    artigo.classList.add('d-none');
    containerGeral.classList.remove('d-none');

}






