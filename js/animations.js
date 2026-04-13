/* ═══════════════════════════════════════════════════════ */
/* ANIMATIONS - Staggered entrance animations              */
/* ═══════════════════════════════════════════════════════ */

export function initializeAnimations() {
  const cards = document.querySelectorAll('.link-card');
  const socials = document.getElementById('socials');

  // Animar cards com delay escalonado
  cards.forEach((card, i) => {
    card.style.animationDelay = `${0.35 + i * 0.09}s`;
    card.classList.add('animate-in');
  });

  // Animar redes sociais com delay após os cards
  socials.style.animation = `fadeUp 0.6s ${0.35 + cards.length * 0.09 + 0.1}s forwards`;
}
