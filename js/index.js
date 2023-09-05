/**Acesso às variáveis globais */
const btnArtigo = document.getElementById('btnArtigo');
const btnMonografia = document.getElementById('btnMonografia');
const btnDissertacao = document.getElementById('btnDissertacao');
const btnProjetoTCC = document.getElementById('btnProjetoTCC');
const artigo = document.getElementById('artigo');
const monografia = document.getElementById('monografia');
const dissertacao = document.getElementById('dissertacao');
const projetoTCC = document.getElementById('projetoTCC');
const btnFecharModalArtigo = document.getElementById('btnFecharModalArtigo');
const btnFecharModalMonografia = document.getElementById('btnFecharModalMonografia');
const btnFecharModalDissertacao = document.getElementById('btnFecharModalDissertacao');
const btnFecharModalProjetoTCC = document.getElementById('btnFecharModalProjetoTCC');
const containerGeral = document.getElementById('containerGeral');


//Abrir modal de artigo
btnArtigo.onclick = ()=>{
    artigo.classList.remove('d-none');
    containerGeral.classList.add('d-none');
}

//Fechar modal de artigo
btnFecharModalArtigo.onclick = ()=>{
    artigo.classList.add('d-none');
    containerGeral.classList.remove('d-none');
}

//Abrir modal de monografia
btnMonografia.onclick = ()=>{
    monografia.classList.remove('d-none');
    containerGeral.classList.add('d-none');
}

//Fechar modal de monografia
btnFecharModalMonografia.onclick = ()=>{
    monografia.classList.add('d-none');
    containerGeral.classList.remove('d-none');
}

//Abrir modal de dissertacao
btnDissertacao.onclick = ()=>{
    dissertacao.classList.remove('d-none');
    containerGeral.classList.add('d-none');
}

//Fechar modal de dissertacao
btnFecharModalDissertacao.onclick = ()=>{
    dissertacao.classList.add('d-none');
    containerGeral.classList.remove('d-none');
}

//Abrir modal de projeto de TCC
btnProjetoTCC.onclick = ()=>{
    projetoTCC.classList.remove('d-none');
    containerGeral.classList.add('d-none');
}

//Fechar modal de projeto de TCC
btnFecharModalProjetoTCC.onclick = ()=>{
    projetoTCC.classList.add('d-none');
    containerGeral.classList.remove('d-none');
}






