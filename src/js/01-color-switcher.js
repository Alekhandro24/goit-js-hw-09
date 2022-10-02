const bodyRef = document.body;
const startRef = document.querySelector('[data-start]');
const stopRef = document.querySelector('[data-stop]');

startRef.addEventListener('click', onStartClick);
stopRef.addEventListener('click', onStopClick);

let intervalId = null;

function onStartClick(e) {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startRef.disabled = true;
}

function onStopClick() {
  clearInterval(intervalId);
  startRef.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
