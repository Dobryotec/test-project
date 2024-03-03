const formEl = document.querySelector(".form");
const phonePattern = /^\+38\(0\d{2}\)\d{2}-\d{2}-\d{3}$/;

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value;

  if (name === "") {
    form.elements.name.classList.add("error");
  } else {
    form.elements.name.classList.remove("error");
  }

  if (!phone.match(phonePattern)) {
    form.elements.phone.classList.add("error");
  } else {
    form.elements.phone.classList.remove("error");
  }

  if (name && phone.match(phonePattern)) form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone-input");

  phoneInput.addEventListener("input", function (e) {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})/);
    e.target.value = !x[2]
      ? x[1]
      : "+" +
        x[1] +
        "(" +
        x[2] +
        (x[3] ? ")" + x[3] : "") +
        (x[4] ? "-" + x[4] : "") +
        (x[5] ? "-" + x[5] : "");
  });
});
