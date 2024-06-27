const calculate = [];

const obj = {
  pageName: "",
  answer: "",
};

document.querySelectorAll(".variant").forEach((variant) => {
  variant.addEventListener("click", () => {
    const ans = variant.querySelector(".variant__description").innerHTML.trim();

    obj.pageName = document
      .getElementsByClassName("calculate__test-title")
      [currentIndex].innerHTML.trim();
    obj.answer = ans;

    document.querySelectorAll(".variant").forEach((sq) => {
      sq.classList.remove("selected");

      obj.answer = ans;
    });

    variant.classList.add("selected");
  });
});

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const containers = document
    .querySelector(".calculate")
    .querySelectorAll(".container");
  const buttons = document.querySelectorAll(".calculate__next");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(obj);
      calculate.push(obj);
      console.log(calculate);

      obj.pageName = "";
      obj.answer = "";

      if (currentIndex < containers.length) {
        containers[currentIndex].classList.remove("show");

        setTimeout(() => {
          containers[currentIndex].classList.add("dnone");

          currentIndex += 1;

          if (currentIndex == containers.length - 1) startTimer();
          containers[currentIndex].classList.remove("dnone");
          setTimeout(() => {
            containers[currentIndex].classList.add("show");
          }, 10);
        }, 500);
      }
    });
  });
});

const modal = document.getElementById("myModal");
const modals = document.querySelectorAll(".modal");
const btns = document.querySelectorAll("#openModalBtn");
const spans = document.querySelectorAll(".close");
const formInputs = document.querySelectorAll(".phone-mask");

btns.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  };
});
spans.forEach((span) => {
  span.onclick = function () {
    modals.forEach((mdl) => (mdl.style.display = "none"));
    document.body.style.overflow = "auto";
  };
});

window.onclick = function (event) {
  modals.forEach((mdl) => {
    if (event.target == mdl) {
      mdl.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
};

formInputs.forEach((input) => {
  IMask(input, {
    mask: "+{7} (000) 000 00-00",
  });
});

$("#daySlider").slick();

const startTimer = () => {
  var start = Date.now();
  const timer = 360;

  setInterval(function () {
    var delta = Date.now() - start; // milliseconds elapsed since start
    const currentTime = timer - Math.floor(delta / 1000); // in seconds
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    if (seconds >= 10) var str = `0${minutes} : ${seconds}`;
    else var str = `0${minutes} : 0${seconds}`;

    const element = document.getElementById("timerTime");

    if (seconds <= 0 && minutes <= 0) element.innerHTML = `00 : 00`;
    else element.innerHTML = str;
  }, 1000);
};

document.getElementById("openReviewModalBtn").onclick = () => {
  document.getElementById("modal4").style.display = "block";
  document.body.style.overflow = "hidden";
};
document.getElementById("openModalBtn1").onclick = () => {
  document.getElementById("modal2").style.display = "block";
  document.body.style.overflow = "hidden";
};
