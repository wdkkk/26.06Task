let calculate = [];

document.querySelectorAll(".variant").forEach((variant) => {
  variant.addEventListener("click", () => {
    document.querySelectorAll(".variant").forEach((sq) => {
      sq.classList.remove("selected");
      calculate = [];
    });
    const ans = variant.querySelector(".variant__description").innerHTML.trim();
    variant.classList.add("selected");
    calculate.push(ans);
  });
});

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const containers = document
    .querySelector(".calculate")
    .querySelectorAll(".container");
  const buttons = document.querySelectorAll(".calculate__next");
  let currentIndex = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("asd");
      if (currentIndex < containers.length) {
        // Fade out current container
        containers[currentIndex].classList.remove("show");
        setTimeout(() => {
          containers[currentIndex].classList.add("dnone");

          // Update index for next container
          currentIndex = (currentIndex + 1) % containers.length;

          // Fade in next container
          containers[currentIndex].classList.remove("dnone");
          setTimeout(() => {
            containers[currentIndex].classList.add("show");
          }, 10);
        }, 500); // Wait for fade out transition to complete
      }
    });
  });
});

const modal = document.getElementById("myModal");
const btns = document.querySelectorAll("#openModalBtn");
const span = document.getElementsByClassName("close")[0];
const formInputs = document.querySelectorAll(".phone-mask");

btns.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = "block";
  };
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

formInputs.forEach((input) => {
  IMask(input, {
    mask: "+{7} (000) 000 00-00",
  });
});
