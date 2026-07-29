// ============================================
// CONFIGURAÇÕES — troque os valores abaixo
// ============================================

// Número de WhatsApp da MultiCred (com DDI 55 + DDD + número, só números).
const WHATSAPP_NUMERO = "5587999999999";

// Mensagens iniciais que já vêm preenchidas ao abrir o WhatsApp,
// uma para cada botão (para diferenciar de onde o cliente veio).
const WHATSAPP_MENSAGEM_SIMULE = "Olá! Vim pela página da MultiCred e quero simular um crédito.";
const WHATSAPP_MENSAGEM_FALE_CONOSCO = "Olá! Vim pela página da MultiCred e quero falar com vocês.";

// ============================================
// LÓGICA — não precisa mexer aqui
// ============================================

function abrirWhatsapp(mensagem) {
  const mensagemCodificada = encodeURIComponent(mensagem);
  const linkWhatsapp = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagemCodificada}`;
  window.open(linkWhatsapp, "_blank", "noopener");
}

document.addEventListener("DOMContentLoaded", () => {
  const botaoSimule = document.querySelector(".hotspot--simule");
  const botaoWhatsapp = document.querySelector(".hotspot--whatsapp");

  botaoSimule.addEventListener("click", () => {
    abrirWhatsapp(WHATSAPP_MENSAGEM_SIMULE);
  });

  botaoWhatsapp.addEventListener("click", () => {
    abrirWhatsapp(WHATSAPP_MENSAGEM_FALE_CONOSCO);
  });
});
