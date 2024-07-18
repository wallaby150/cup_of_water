let $number = document.querySelector("#number");

const $upButton = document.querySelector("#upButton");
console.log($upButton);
$upButton.addEventListener("click", () => {
  console.log("clicked");
  $number.textContent++;
});

const $downButton = document.querySelector("#downButton");
console.log($downButton);
$downButton.addEventListener("click", () => {
  console.log("clicked");
  $number.textContent--;
});
