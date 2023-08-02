function digitalClock() {
  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
setInterval(digitalClock, 1000);

////////////////////////////////

function analogClock() {
  const hours = document.querySelector(".godz");
  const minutes = document.querySelector(".min");
  const seconds = document.querySelector(".sek");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let hMove = (h / 12) * 360 + (m / 60) * 30 + 90;
  let mMove = (m / 60) * 360 + (s / 60) * 6 + 90;
  let sMove = (s / 60) * 360 + 90;

  hours.style.transform = `rotate(${hMove}deg)`;
  minutes.style.transform = `rotate(${mMove}deg)`;
  seconds.style.transform = `rotate(${sMove}deg)`;
}
setInterval(analogClock, 1000);

///////////////

function zero(x) {
  if (x < 10) {
    return "0" + x;
  } else {
    return x;
  }
}

function data() {
  let mies = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];
  let dni_tyg = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  let dzis = new Date();
  let year = dzis.getFullYear();
  let month = dzis.getMonth();
  let day = dzis.getDay();
  let hour = dzis.getHours();
  let minute = dzis.getMinutes();
  let second = dzis.getSeconds();

  document.getElementById("dzisiejszaData").innerHTML =
    "Dzisiejsza data: " +
    zero(day) +
    " " +
    dni_tyg[day] +
    " " +
    mies[month] +
    " " +
    year +
    " " +
    zero(hour) +
    ":" +
    zero(minute) +
    ":" +
    zero(second);
}
setInterval(data, 1000);
