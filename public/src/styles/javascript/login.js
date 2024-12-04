// Seleciona os elementos do DOM
const btnCliente = document.getElementById('btn-cliente');
const btnAdmin = document.getElementById('btn-admin');
const formCliente = document.getElementById('form-cliente');
const formAdmin = document.getElementById('form-admin');

// Função para esconder todos os formulários
function esconderFormularios() {
    formCliente.style.display = 'none';
    formAdmin.style.display = 'none';
}

// Inicialmente, esconde ambos os formulários
esconderFormularios();

// Exibe o formulário de Cliente ao clicar no botão correspondente
btnCliente.addEventListener('click', () => {
    esconderFormularios(); // Esconde todos os formulários
    formCliente.style.display = 'block'; // Exibe o formulário de Cliente
});

// Exibe o formulário de Administrador ao clicar no botão correspondente
btnAdmin.addEventListener('click', () => {
    esconderFormularios(); // Esconde todos os formulários
    formAdmin.style.display = 'block'; // Exibe o formulário de Administrador
});
