let angle = 0;
  const h2 = document.getElementById("h4.rotate#r");

  setInterval(() => {
    while(1===1){
    angle += 2; // degrees per frame
    h2.style.transform = `rotate(${angle}deg)`;
    }
  }, 16);


