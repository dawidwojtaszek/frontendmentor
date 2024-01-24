function handleSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("email-input");
  if (emailValidate(email.value)) {
    clearErrorMessage();
    showModal();

    email.value = "";
  } else {
    showError("Valid email required");
  }
}

function showError(message) {
  const errorElement = document.getElementById("error-message");
  const emailInputElement = document.getElementById("email-input");

  errorElement.classList.remove("hidden");
  errorElement.innerText = message;
  emailInputElement.classList.add("error-state");
}
function clearErrorMessage() {
  const errorElement = document.getElementById("error-message");
  errorElement.classList.add("hidden");
  const emailInputElement = document.getElementById("email-input");
  emailInputElement.classList.remove("error-state");
}

function emailValidate(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function showModal() {
  const modal = document.getElementById("success-modal");
  modal.classList.remove("hidden");
  const userMail = document.getElementById("user-email");
  userMail.innerText = document.getElementById("email-input").value;
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const closeModalBtn = document.getElementById("close-modal-btn");
closeModalBtn.addEventListener("click", () => {
  const modal = document.getElementById("success-modal");
  modal.classList.add("hidden");
});
