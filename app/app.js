let radioValue;

const radioBtn = document.querySelectorAll('input[name="radio-btn"]');
radioBtn.forEach((radio) => {
  radio.addEventListener("click", function () {
    radioValue = radio.value;

    if (radioValue === "light") {
      document.querySelector(".col-1").style.backgroundColor = "#00FF00";
      document.querySelector(".col-1").style.color = "#000";
      document.querySelector(".col-2").style.backgroundColor = "#E496D2";
      document.querySelector(".col-2").style.color = "#fff";
    } else if (radioValue === "dark") {
      document.querySelector(".col-1").style.backgroundColor = "#000";
      document.querySelector(".col-1").style.color = "#00FF00";
      document.querySelector(".col-2").style.backgroundColor = "#191970";
      document.querySelector(".col-2").style.color = "#C657A5";
    }
  });
});
