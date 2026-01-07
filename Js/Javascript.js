let angle = 0;

  const p = document.getElementById('sys');

  setInterval(() => {
    angle += 2; // degrees per frame
    p.style.transform = `rotate(${angle}deg)`;

  }, 16);











