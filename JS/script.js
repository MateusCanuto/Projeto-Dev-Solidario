// Seleciona todos os itens de serviço
document.querySelectorAll('.servico-item').forEach(item => {
  const button = item.querySelector('.toggle-btn'); // Seleciona o botão dentro do item

  button.addEventListener('click', () => {
    // Alterna a classe 'active' no item clicado
    item.classList.toggle('active');

    // Atualiza o texto do botão entre 'Ver mais' e 'Ver menos'
    if (item.classList.contains('active')) {
      button.textContent = 'Ver menos';
    } else {
      button.textContent = 'Ver mais';
    }
  });
});

function enviarWhatsApp(event) {
  // Evita o envio padrão do formulário
  event.preventDefault();

  // Captura os valores do formulário
  const nome = document.getElementById("nome").value.trim();
  const contato = document.getElementById("contato").value.trim();
  const subservico = document.getElementById("subservico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  // Verifica se todos os campos estão preenchidos
  if (!nome || !contato || !subservico || !data || !hora) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Formata a mensagem para o WhatsApp
  const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar o subserviço "${subservico}" para o dia ${data} às ${hora}. Meu contato é: ${contato}.`;
  const numeroWhatsApp = "5544999194088"; // Substitua pelo número do WhatsApp
  const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  // Redireciona para o WhatsApp
  window.open(link, "_blank");
}
