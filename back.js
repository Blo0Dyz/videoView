// Seleciona o botão pela classe
const searchButton = document.querySelector('.settings-option');

// Adiciona um evento de clique ao botão
searchButton.addEventListener('click', () => {
    // Redireciona o usuário
    window.location.href = "Pages/settings/settings.html";
});