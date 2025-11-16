let angle = 0;
  const h2 = document.getElementById("GIF/Haacker.gif");

  setInterval(() => {
    angle += 3; // degrees per frame
    h2.style.transform = `rotate(${angle}deg)`;

  }, 16);






