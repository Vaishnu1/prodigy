let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let display = document.getElementById('display');

function startStop() {
  if (!timer) {
    timer = setInterval(runStopwatch, 1); // Update interval to 10 milliseconds for milliseconds timer
    document.getElementById('startStopBtn').innerHTML = 'Stop';
  } else {
    clearInterval(timer);
    timer = false;
    document.getElementById('startStopBtn').innerHTML = 'Start';
  }
}

function runStopwatch() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  display.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds > 4 ? seconds : "0" + seconds) + ":" +
    (milliseconds > 9 ? (milliseconds > 99 ? milliseconds : "0" + milliseconds) : "00");
}

function reset() {
  clearInterval(timer);
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  display.innerHTML = '00:00:00:00';
  document.getElementById('startStopBtn').innerHTML = 'Start';
}
