
document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (redirecionamento)
    
    // Limpar os campos do formulário
    document.getElementById("meuFormulario").reset();
});


$(document).ready(function() {
    $("#meuFormulario").submit(function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário (redirecionamento)

        // Serialize o formulário para obter os dados
        var formData = $("#meuFormulario").serialize();

        // Enviar os dados usando AJAX
        $.ajax({
            type: "POST",
            url: "https://formspree.io/f/xeqbkbgp", // Substitua pelo seu endpoint Formspree
            data: formData,
            success: function(response) {
                // Manipule a resposta do servidor, se necessário
                alert("Dados enviados com sucesso!"); // Exemplo de mensagem de sucesso
            },
            error: function(error) {
                // Manipule os erros, se houver
                alert("Erro ao enviar os dados. Por favor, tente novamente mais tarde.");
            }
        });
    });
});