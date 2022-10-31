const btn = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const rateNum = document.getElementById("rate-num");

// const rateNum = document.querySelector('#rate-num')

// const rating = function () {
//   btn.forEach((i) => {
//     i.addEventListener("click", function () {
//       console.log(i);
//       rateNum.innerHTML = i.innerHTML;
//     });
//   });
// };


btn.forEach((i) => {
  i.addEventListener("click", function () {
    i.innerHTML = rateNum.innerHTML
    rateNum.innerHTML = i.innerHTML;
  });
});

submit.addEventListener("click", function () {
  location.href = "./rate.html";
});
