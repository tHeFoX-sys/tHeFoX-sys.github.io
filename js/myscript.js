document.addEventListener('DOMContentLoaded', () => {
  let angle = 0;
  const h4 = document.getElementById(".rotate#r");
  if (!h4) return; // element not found

  if (getComputedStyle(h4).display === 'inline') {
    h4.style.display = 'inline-block';
  }
  h4.style.transformOrigin = '50% 50%';

  // Smooth animation loop
  function tick() {
    angle = (angle + 2) % 360; // degrees per frame
    h4.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

});
