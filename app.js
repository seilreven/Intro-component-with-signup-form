const input = document.querySelectorAll("input");
const btn = document.querySelector(".cta");
const email = document.getElementById("email");
const wrongEmail = document.querySelector(".wrong-email");
const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click", function () {
  input.forEach(function (item) {
    if (item.value === "") {
      item.classList.add("red-border");
      item.nextElementSibling.classList.add("show-error");
      item.parentElement.nextElementSibling.style.display = "block";
    } else {
      item.classList.remove("red-border");
      item.nextElementSibling.classList.remove("show-error");
      item.parentElement.nextElementSibling.style.display = "none";
    }
  });
  if (!email.value.match(validEmail) && email.value !== "") {
    wrongEmail.style.display = "block";
    email.classList.add("red-border");
    email.nextElementSibling.classList.add("show-error");
  }
  if (email.value.match(validEmail) && email.value !== "") {
    wrongEmail.style.display = "none";
    email.classList.remove("red-border");
    email.nextElementSibling.classList.remove("show-error");
  }
  if (!email.value.match(validEmail) && email.value === "") {
    wrongEmail.style.display = "none";
    email.classList.add("red-border");
    email.nextElementSibling.classList.add("show-error");
  }
});
