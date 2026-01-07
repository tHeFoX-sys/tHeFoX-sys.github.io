let angle = 0;
const f = document.getElementById('h4#r');

  setInterval(() => {
    angle += 2; // degrees per frame
    f.style.transform = 'rotate(${angle}deg)';
  },16);











