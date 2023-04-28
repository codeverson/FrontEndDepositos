const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    let nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2; 
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de <b>R$${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}<b/>. Conta: <b>${numeroContaBeneficiario.value}<b/>`;



    formEValido = validaNome (nomeBeneficiario.value)
    if (formEValido) { 
        const containerMensagemSucesso = document.querySelector('.success-message');
        document.querySelector('.success-message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block"

        nomeBeneficiario.value = ''; 
        numeroContaBeneficiario.value = ''; 
        valorDeposito.value = ''; 
    } else { 
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = "block";
        nomeBeneficiario.style.border = "1px solid red";


        
        //professor fez mais simples
        //document.querySelector('.error-message').style.display = 'block;'
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome (e.target.value);
    
    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';

    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';

    }
})