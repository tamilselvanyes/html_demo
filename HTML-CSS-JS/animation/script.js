const startbutton = document.getElementById("start");
startbutton.addEventListener("click", () => {
  console.log("inside clicked");
  let firstanime = document.getElementById("first");
  firstanime.style.animationName = "first";
  let secondanime = document.getElementById("second");
  secondanime.style.animationName = "second";
  let thirdanime = document.getElementById("third");
  thirdanime.style.animationName = "third";
  let fourthanime = document.getElementById("fourth");
  fourthanime.style.animationName = "fourth";
});

const stopbutton = document.getElementById("stop");
stopbutton.addEventListener("click", () => {
  console.log("inside clicked");
  let firstanime = document.getElementById("first");
  firstanime.style.animationName = "";
  let secondanime = document.getElementById("second");
  secondanime.style.animationName = "";
  let thirdanime = document.getElementById("third");
  thirdanime.style.animationName = "";
  let fourthanime = document.getElementById("fourth");
  fourthanime.style.animationName = "";
});
