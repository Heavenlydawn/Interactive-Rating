// const btn = document.querySelectorAll(".btn");
// const submit = document.querySelector(".submit");
// const rateNum = document.getElementById("rate-num");

// // const rateNum = document.querySelector('#rate-num')

// // const rating = function () {
// //   btn.forEach((i) => {
// //     i.addEventListener("click", function () {
// //       console.log(i);
// //       rateNum.innerHTML = i.innerHTML;
// //     });
// //   });
// // };


// btn.forEach((i) => {
//   i.addEventListener("click", function () {
//     i.innerHTML = rateNum.innerHTML
//     rateNum.innerHTML = i.innerHTML;
//   });
// });

// submit.addEventListener("click", function () {
//   location.href = "./rate.html";
// });


const btn = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const rateNum = document.getElementById("rate-num");

let selectedValue = 0;

btn.forEach((i) => {
  i.addEventListener("click", function () {
    selectedValue = i.innerHTML;
    localStorage.setItem("value", selectedValue);
  });
});


submit.addEventListener("click", function () {
  location.href = "./rate.html";
});

rateNum.innerHTML = `you selected ${localStorage.getItem("value")} out of 5`;
console.log(rateNum.innerHTML);