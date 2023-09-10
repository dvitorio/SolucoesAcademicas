const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const interesse = document.getElementById('interesse');
const curso = document.getElementById('curso');
const mensagem = document.getElementById('mensagem');
const btnFormPrimeiraPagina = document.getElementById('btnFormPrimeiraPagina');
 


document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (redirecionamento)
    
    // Limpar os campos do formulário
    document.getElementById("meuFormulario").reset();

    function limparCampos(){
        nome.value = "";
        email.value = "";
        telefone.value = "";
        interesse.value = "";
        curso.value = "";
        mensagem.value = "";
    }

});


$(document).ready(function() {
    $("#meuFormulario").submit(function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário (redirecionamento)

        // Serialize o formulário para obter os dados
        var formData = $("#meuFormulario").serialize();

        // Enviar os dados usando AJAX
        $.ajax({
            type: "POST",
            url: "https://formspree.io/f/xeqbkbgp", //endpoint Formspree
            data: formData,
            success: function(response) {
                alert("Dados enviados com sucesso!"); // Exemplo de mensagem de sucesso
            },
            error: function(error) {
                // Manipule os erros, se houver
                alert("Erro ao enviar os dados. Por favor, tente novamente mais tarde.");
            }
        });
    });
});