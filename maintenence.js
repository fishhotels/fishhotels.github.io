const title = document.querySelector("h1");

setInterval(() => {
  title.style.textShadow = `0 0 20px rgba(0,191,255,${Math.random() * 0.8})`;
}, 400);
