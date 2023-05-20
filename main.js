const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const milSeconds = document.getElementById("milsecond");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");

let H = 0;
let S = 0;
let M = 0;
let LM = 0;

const printNubers = () => {
  hours.innerHTML = H.toString().padStart(2, "0");
  minutes.innerHTML = M.toString().padStart(2, "0");
  seconds.innerHTML = S.toString().padStart(2, "0");
  milSeconds.innerHTML = LM.toString().padStart(2, "0");
};

let validRun = null;

const run = () => {
  validRun = setInterval(() => {
    if (LM === 99) {
      LM = 0;
      S++;
    } else LM++;

    if (S === 60) {
      S = 0;
      M++;
    }

    if (M === 60) {
      M = 0;
      H++;
    }
    printNubers();
  }, 10);
};

const stop = () => {
  clearInterval(validRun);
  validRun = null;
};

const toggleButtons = () => {
  btnStart.classList.toggle("disabled");
  btnStop.classList.toggle("enabled");
};

btnStart.addEventListener("click", () => {
  run();
  toggleButtons();
});

btnStop.addEventListener("click", () => {
  stop();
  toggleButtons();
});

btnReset.addEventListener("click", () => {
  H = 0;
  S = 0;
  M = 0;
  LM = 0;
  printNubers();
  stop();

  if(btnStop.classList.contains("enabled")){
    toggleButtons()

  }
});