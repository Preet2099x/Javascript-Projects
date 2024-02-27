const randomColor = () => {
  const hex = "#0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId; 

const startChanging = () => {
  document.body.style.backgroundColor = randomColor();
};

const start = () => {
  intervalId = setInterval(startChanging, 1000);
};

const stop = () => {
  clearInterval(intervalId);
};

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
