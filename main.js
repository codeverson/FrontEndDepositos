const form = document.getElementById('form-deposito');
const numeroa = document.getElementById('numeroa');
const numerob = document.getElementById('numerob');

let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (numeroa.value >= numerob.value) {
        alert("sim");
        const containerMensagemSucesso = document.querySelector('.success-message');
        document.querySelector('.success-message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";
    } else {
        alert("O número ")

    }
});




