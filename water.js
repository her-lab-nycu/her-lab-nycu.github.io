// Each crest refracts the backdrop through a thin annular lens.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
document.addEventListener('pointerdown', event => {
  if (reducedMotion.matches || event.button !== 0) return;
  const active = document.querySelectorAll('.water-drop');
  if (active.length >= 6) active[0].remove();
  const drop = document.createElement('div');
  drop.className = 'water-drop';
  drop.setAttribute('aria-hidden', 'true');
  drop.style.left = event.pageX + 'px';
  drop.style.top = event.pageY + 'px';
  for (let wave = 0; wave < 3; wave++) {
    const crest = document.createElement('span');
    crest.style.animationDelay = wave * 105 + 'ms';
    drop.append(crest);
  }
  document.body.append(drop);
  setTimeout(() => drop.remove(), 1450);
}, {passive: true});
