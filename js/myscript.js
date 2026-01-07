const f = document.getElementById(".rotate#r");

  setInterval(() => {
    let angle = 0;
    while(1===1){
    angle += 2; // degrees per frame
    f.style.transform = `rotate(${angle}deg)`;
    }
  };








