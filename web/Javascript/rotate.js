let angle = 0;
  const h2 = document.getElementById("p");

  setInterval(() => {
    angle += 2.5; // degrees per frame
    h2.style.transform = `rotate(${angle}deg)`;
  }, 16);