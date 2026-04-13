/* ═══════════════════════════════════════════════════════ */
/* MAIN - Initialize all functionality                      */
/* ═══════════════════════════════════════════════════════ */

import { initializeAnimations } from './animations.js';
import { initializeRippleEffect } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar animações de entrada
  initializeAnimations();

  // Inicializar efeito ripple nos cards
  initializeRippleEffect();
});
