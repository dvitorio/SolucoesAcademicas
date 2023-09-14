/**Inicialização das variáveis globais */
const btnArtigo = document.getElementById('btnArtigo');
const btnDissertacao = document.getElementById('btnDissertacao');
const btnFecharModalArtigo = document.getElementById('btnFecharModalArtigo');
const btnFecharModalDissertacao = document.getElementById('btnFecharModalDissertacao');
const btnFecharModalMonografia = document.getElementById('btnFecharModalMonografia');
const btnFecharModalProjetoTCC = document.getElementById('btnFecharModalProjetoTCC');
const btnMonografia = document.getElementById('btnMonografia');
const btnProjetoTCC = document.getElementById('btnProjetoTCC');
const containerGeral = document.getElementById('containerGeral');
const modalArtigo = document.getElementById('modalArtigo');
const modalDissertacao = document.getElementById('modalDissertacao');
const modalMonografia = document.getElementById('modalMonografia');
const modalProjetoTCC = document.getElementById('modalProjetoTCC');
const btnContratarArtigo = document.getElementById('btnContratarArtigo');



//Abrir modal de artigo
btnArtigo.addEventListener('click', ()=>{
    modalArtigo.classList.remove('d-none');
    containerGeral.classList.add('d-none');
})

//Fechar modal de artigo
btnFecharModalArtigo.addEventListener('click', ()=>{
    modalArtigo.classList.add('d-none');
    containerGeral.classList.remove('d-none');
})

//Abrir modal de monografia
btnMonografia.addEventListener('click', ()=>{
    modalMonografia.classList.remove('d-none');
    containerGeral.classList.add('d-none');
})

//Fechar modal de monografia
btnFecharModalMonografia.addEventListener('click', ()=>{
    modalMonografia.classList.add('d-none');
    containerGeral.classList.remove('d-none');
})

//Abrir modal de dissertacao
btnDissertacao.addEventListener('click', ()=>{
    modalDissertacao.classList.remove('d-none');
    containerGeral.classList.add('d-none');
})

//Fechar modal de dissertacao
btnFecharModalDissertacao.addEventListener('click', ()=>{
    modalDissertacao.classList.add('d-none');
    containerGeral.classList.remove('d-none');
})

//Abrir modal de projeto de TCC
btnProjetoTCC.addEventListener('click', ()=>{
    modalProjetoTCC.classList.remove('d-none');
    containerGeral.classList.add('d-none');
})

//Fechar modal de dissertacao
btnFecharModalProjetoTCC.addEventListener('click', ()=>{
    modalProjetoTCC.classList.add('d-none');
    containerGeral.classList.remove('d-none');
})


//Controla o botão de scroll
document.addEventListener("DOMContentLoaded", function () {
    var scrollTopButton = document.getElementById("scrollTopButton");
  
    window.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > 100) {
        scrollTopButton.classList.add("show");
      } else {
        scrollTopButton.classList.remove("show");
      }
    });
  
    scrollTopButton.addEventListener("click", function () {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  







