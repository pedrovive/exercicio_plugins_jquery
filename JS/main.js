$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            name: "Insira o seu nome.",
            email: "Insira um e-mail válido.",
            telefone: "Insira o número de telefone.",
            cpf: "Insira o CPF do responsável.",
            endereco: "Insira seu endereço completo",
            cep: "Digite o CEP."
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            var camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})