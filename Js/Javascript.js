document.addEventListener('DOMContentLoaded', () => {
  let angle = 0;
  const h2 = document.getElementById('sys');
  if (!h2) return; // element not found

  if (getComputedStyle(h2).display === 'inline') {
    h2.style.display = 'inline-block';
  }
  h2.style.transformOrigin = '50% 50%';

  // Smooth animation loop
  function tick() {
    angle = (angle + 2) % 360; // degrees per frame
    h2.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
});










