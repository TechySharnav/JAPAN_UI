const BG = document.getElementById("bg");
const JAPANESE = document.getElementById("Japanese");
const ENGLISH = document.getElementById("English");

const TOKCIR = document.querySelector("#tokCir img");
const KYOCIR = document.querySelector("#kyoCir img");
const OSACIR = document.querySelector("#osaCir img");
const NARCIR = document.querySelector("#narCir img");

var count = 1;

setInterval(changeBG, 10000);

function changeBG() {
  if (count == 1) {
    BG.style.backgroundImage = "url('Assets/Japan.jpeg')";
    JAPANESE.innerHTML = "日本";
    ENGLISH.innerHTML = "JAPAN";
    ENGLISH.style.left = "30%";
    NARCIR.style.borderColor = "#f9002f";
  }
  if (count == 2) {
    BG.style.backgroundImage = "url('Assets/Tokyo.jpg')";
    JAPANESE.innerHTML = "東京";
    ENGLISH.innerHTML = "TOKYO";
    ENGLISH.style.left = "30%";
    TOKCIR.style.borderColor = "white";
  }
  if (count == 3) {
    BG.style.backgroundImage = "url('Assets/Kyoto.jpg')";
    JAPANESE.innerHTML = "京都";
    ENGLISH.innerHTML = "KYOTO";
    ENGLISH.style.left = "30%";
    TOKCIR.style.borderColor = "#f9002f";
    KYOCIR.style.borderColor = "white";
  }
  if (count == 4) {
    BG.style.backgroundImage = "url('Assets/Osaka.jpg')";
    JAPANESE.innerHTML = "大阪";
    ENGLISH.innerHTML = "OSAKA";
    ENGLISH.style.left = "30%";
    KYOCIR.style.borderColor = "#f9002f";
    OSACIR.style.borderColor = "white";
  }
  if (count == 5) {
    BG.style.backgroundImage = "url('Assets/Nara.jpg')";
    JAPANESE.innerHTML = "奈良市";
    ENGLISH.innerHTML = "NARA";
    ENGLISH.style.left = "35%";
    OSACIR.style.borderColor = "#f9002f";
    NARCIR.style.borderColor = "white";
    setTimeout(function () {
      count = 1;
    }, 9000);
  }

  count++;
}
