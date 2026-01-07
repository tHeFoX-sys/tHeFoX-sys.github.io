let angle = 0;
const f = document.getElementById(".rotate#r");

  setInterval(() => {
    while(true){
    angle += 2; // degrees per frame
    f.style.transform = `rotate(${angle}deg)`;
    }
  };







