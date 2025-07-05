document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');
  const alerta = document.getElementById('mensagem-alerta');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagemCampo = document.getElementById('mensagem').value.trim();

    // Validação dos campos
    if (!nome || !email || !assunto || !mensagemCampo) {
      mostrarMensagem('Por favor, preencha todos os campos.', 'erro');
      return;
    }

    // Mostrar carregando
    mostrarCarregando();

    // Simular envio (ex: 2 segundos)
    setTimeout(() => {
      form.reset();
      mostrarMensagem('Obrigado pela preferência!', 'sucesso');
    }, 2000);
  });

  // Função para mostrar a mensagem com cor e ícone
  function mostrarMensagem(texto, tipo) {
    alerta.className = 'mensagem-alerta'; // reset classes
    alerta.classList.add(tipo);
    alerta.innerHTML = texto;
    alerta.style.display = 'flex';

    setTimeout(() => {
      alerta.style.display = 'none';
      alerta.innerHTML = '';
    }, 5000);
  }

  // Função para mostrar spinner de carregando
  function mostrarCarregando() {
    alerta.className = 'mensagem-alerta';
    alerta.classList.remove('erro', 'sucesso');
    alerta.style.display = 'flex';
    alerta.innerHTML = `<div class="spinner"></div> Enviando...`;
  }
});
