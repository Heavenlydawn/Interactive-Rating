const btn = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
let rateNum = document.getElementById("rate-num");

const handleSubmit = () => {
  location.href = "./rate.html";

};

let selectedValue;
console.log(btn);

btn.forEach((i) => {
  i.addEventListener("click", function () {
    selectedValue = i.value;
    localStorage.setItem("btn", i.value);
    console.log(selectedValue);
  });
});

function displayNumber(){
  let result = localStorage.getItem("btn");
  rateNum.textContent = JSON.parse(result);
}
displayNumber();