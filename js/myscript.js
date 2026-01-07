let angle = 0;
const h4 = document.getElementById("h4#r");

  setInterval(() => {
    while(true || 1===1){
    angle += 2; // degrees per frame
    h4.style.transform = `rotate(${angle}deg)`;
    }
  };, 16);





