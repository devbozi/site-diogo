/* ═══════════════════════════════════════════════════════ */
/* INTERACTIONS - Ripple effect on click                    */
/* ═══════════════════════════════════════════════════════ */

export function initializeRippleEffect() {
  const cards = document.querySelectorAll('.link-card');

  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Criar elemento ripple
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.8;

      // Determinar cor do ripple baseado se é featured
      const color = this.classList.contains('featured')
        ? 'rgba(61,224,82,0.12)'
        : 'rgba(59,139,235,0.12)';

      // Aplicar estilos
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: ${color};
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
        transform: scale(0);
        animation: ripple 0.55s ease-out forwards;
        pointer-events: none;
        z-index: 0;
      `;

      // Adicionar ripple ao card
      this.appendChild(ripple);

      // Remover ripple após animação
      setTimeout(() => ripple.remove(), 600);
    });
  });
}
