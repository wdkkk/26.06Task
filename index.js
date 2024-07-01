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

          if (currentIndex == containers.length - 1) {
            startTimer();
            document.getElementById(
              "calculateTitle"
            ).innerHTML = `Куда вам отправить <span class="calculate__strong-title">точный расчет <br>
              стоимости и сроков?</span>`;
            document.getElementById("calculateHuman").remove();

            document
              .getElementById("finalCalculateContainter")
              .classList.add("final");

            document.getElementById("calculateRow").classList.add("final");
            document.getElementById("calculate").classList.add("final");
          }

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

    // document.getElementById("myModalPhone");
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
document.getElementById("openModalBtn3").onclick = () => {
  document.getElementById("modal3").style.display = "block";
  document.body.style.overflow = "hidden";
};
document.getElementById("openModalBtn5").onclick = () => {
  document.getElementById("modal5").style.display = "block";
  document.body.style.overflow = "hidden";
};
document.getElementById("openModalBtn6").onclick = () => {
  document.getElementById("modal6").style.display = "block";
  document.body.style.overflow = "hidden";
};
document.getElementById("openModalBtn7").onclick = () => {
  document.getElementById("modal7").style.display = "block";
  document.body.style.overflow = "hidden";
};
document.getElementById("openModalBtn8").onclick = () => {
  document.getElementById("modal8").style.display = "block";
  document.body.style.overflow = "hidden";
};

const daySteps = document.querySelectorAll(".day__step.computer");
const dayStepButton = document.getElementById("changeDayStep");
dayStepButton.onclick = () => {
  for (let i = 0; i < daySteps.length; i++) {
    if (daySteps[i].classList.contains("selected")) {
      daySteps[i].classList.remove("selected");
      const newIndex = i + 1;
      const element = daySteps[newIndex];

      if (i != daySteps.length - 1) {
        element.classList.add("selected");
        break;
      } else {
        daySteps[0].classList.add("selected");
        break;
      }
    }
  }
};

daySteps.forEach((step) => {
  step.onclick = () => {
    step.classList.add("selected");

    daySteps.forEach((tempStep) => {
      if (tempStep != step) tempStep.classList.remove("selected");
    });
  };
});

$(document).ready(function () {
  $("a[href*='#']").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top,
        },
        777
      );
    e.preventDefault();
    return false;
  });
});

const radioLabels = document.querySelectorAll(".radioLabel");

radioLabels.forEach((radioLabel) => {
  radioLabel.onclick = () => {
    const radioId = radioLabel.attributes["for"].nodeValue;
    const radioButton = document.getElementById(radioId);

    radioButton.checked = true;
  };
});

const calltimeButtons = document.querySelectorAll(".form__calltime__variant");
var callTime = "Сейчас";
calltimeButtons.forEach((calltimeBtn) => {
  calltimeBtn.onclick = () => {
    calltimeBtn.parentElement.children.forEach((child) => {
      if (child.classList.contains("form__caltime-radio")) {
        child.children[0].checked = false;
        child.children[1].checked = false;
      }

      child.classList.remove("selected");
    });

    calltimeBtn.classList.add("selected");
    const calltimeRadioBtnId = calltimeBtn.id.split("button")[1].toLowerCase();

    document.getElementById(calltimeRadioBtnId).checked = true;
    callTime = calltimeBtn.innerHTML;
  };
});

const myModalData = {
  phone: "",
  typeOfContact: "Whatsapp",
  callTime: callTime,
  comfortableTime: "",
};
document.getElementById("myModalPhone").addEventListener("input", (event) => {
  myModalData.phone = event.target.value;
});
document.getElementById("myModalTime").addEventListener("input", (event) => {
  myModalData.comfortableTime = event.target.value;
});
document
  .getElementById("myModalRadioContainer")
  .children[1].addEventListener("click", (event) => {
    myModalData.typeOfContact = document.getElementById(
      "myModalRadioContainer"
    ).children[1].children[1].innerHTML;
  });
document
  .getElementById("myModalRadioContainer")
  .children[3].addEventListener("click", (event) => {
    myModalData.typeOfContact = document.getElementById(
      "myModalRadioContainer"
    ).children[3].children[1].innerHTML;
  });

document.getElementById("myModalButton").onclick = () =>
  console.log(myModalData);
