// =========================================================
// MULTICRED — comportamentos simples da landing page
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // Se a foto do casal (assets/hero-photo.jpg) ainda não tiver
  // sido enviada, some com a tag <img> e deixa só o fundo
  // teal/laranja aparecendo, para não quebrar o layout.
  const heroImg = document.querySelector('.hero-image');
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      heroImg.style.display = 'none';
    });
  }

  // Pequeno registro no console para conferir se os links
  // de WhatsApp já foram configurados antes de publicar.
  document.querySelectorAll('a[href*="SEUNUMERO"]').forEach(link => {
    console.warn(
      '[MultiCred] Link do WhatsApp ainda não configurado:',
      link.className || link.textContent.trim()
    );
  });
});
