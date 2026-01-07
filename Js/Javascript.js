let angle = 0;

  const h2 = document.getElementById('sys');

  setInterval(() => {
    angle += 2; // degrees per frame
    h4.style.transform = `rotate(${angle}deg)`;

  }, 16);










