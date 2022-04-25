function type() {
  let name = "TAMIL SELVAN";
  let namearr = name.split("");

  function looping() {
    if (namearr.length > 0) {
      let n = namearr.shift();
      document.querySelector("#heading--main").innerHTML += n;
    } else {
      document.querySelector("#heading--main").innerHTML = "";
      type();
      return false;
    }
    setTimeout(looping, 500);
  }

  looping();
}

type();

const square = document.querySelectorAll(".skill-line div");
// square.forEach(a=>a.classList.remove('animaaation'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animaaation");
      return;
    }

    entry.target.classList.remove("animaaation");
  });
});

square.forEach((a) => observer.observe(a));

//light dark theme
let dayN = document.querySelector("#day-night");
dayN.addEventListener("click", changemode);

function changemode() {
  if (dayN.querySelector("i").classList.contains("fa-sun")) {
    dayN.innerHTML = '<i class="fas fa-moon"></i>';
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  } else {
    dayN.innerHTML = '<i class="fas fa-sun"></i>';
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
  }
}
