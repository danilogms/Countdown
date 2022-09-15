import Countdown from "./countdown.js";

const tempoParaViagem = new Countdown("15 November 2022 23:59:59 GMT-0300");

const daysTime = document.querySelector("[data-days]");
const hoursTime = document.querySelector("[data-hours]");
const minutesTime = document.querySelector("[data-minutes]");
const secondsTime = document.querySelector("[data-seconds]");

function attTime() {
  daysTime.innerText = (tempoParaViagem.total.days) < 10 ? '0' + tempoParaViagem.total.days : (tempoParaViagem.total.days);
  hoursTime.innerText = (tempoParaViagem.total.hours) < 10 ? '0'+ tempoParaViagem.total.hours : (tempoParaViagem.total.hours);
  minutesTime.innerText = (tempoParaViagem.total.minutes) < 10 ? '0' + tempoParaViagem.total.minutes : (tempoParaViagem.total.minutes);
  secondsTime.innerText = (tempoParaViagem.total.seconds) < 10 ? '0' + tempoParaViagem.total.seconds : (tempoParaViagem.total.seconds);
}


setInterval(attTime, 1000);