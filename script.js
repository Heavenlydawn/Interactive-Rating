
const btn = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const rateNum = document.querySelector("#rate-num");

submit.addEventListener("click", function () {
  location.href = "./rate.html";
});

let selectedValue;
console.log(btn);

btn.forEach((i) => {
  i.addEventListener("click", function () {
    selectedValue = i.value;
    localStorage.setItem("btn", i.value);
    console.log(selectedValue);
  });
});

rateNum.textContent = localStorage.getItem("btn");
console.log(rateNum.textContent);
