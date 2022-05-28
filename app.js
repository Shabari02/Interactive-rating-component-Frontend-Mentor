//DOM
const rateBtn = document.querySelectorAll(".rate-item");
const btnSub = document.querySelector(".btn");
const main = document.querySelector(".main");
const tqMain = document.querySelector(".tq-main");
const span = document.getElementById("x");

//Rating
rateBtn.forEach((rate) => {
  rate.addEventListener("click", getRateNumber);
});

function getRateNumber(event) {
  let rateNum = event.target.innerHTML;
  span.innerHTML = rateNum;
}

//Thank you card
btnSub.addEventListener("click", () => {
  main.style.display = "none";
  tqMain.style.display = "grid";
});
