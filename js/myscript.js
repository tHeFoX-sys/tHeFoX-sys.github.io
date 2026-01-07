let angle = 0;
const f = document.getElementById(".rotate#r");

  setInterval(() => {
    while(true || 1===1){
    angle += 2; // degrees per frame
    f.style.transform = `rotate(${angle}deg)`;
    }
  };, 16);






