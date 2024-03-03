let time = 7200;
const initialTime = time;
let timerId;

const timerEl = document.body.querySelector(".form__timer");

const updateTimer = () => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  timerEl.textContent = `${hours}:${formattedMinutes}:${formattedSeconds}`;
  time -= 1;

  if (time < 0) {
    clearInterval(timerId);
    time = initialTime;
    timerId = setInterval(updateTimer, 1000);
  }
};

timerId = setInterval(updateTimer, 1000);
