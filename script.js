const form = document.getElementById("proForm");
const statusText = document.getElementById("status");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const messageInput = document.getElementById("message");
const count = document.getElementById("count");

togglePassword.addEventListener("click", () => {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
});

messageInput.addEventListener("input", () => {
  count.innerText = messageInput.value.length;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();

  let valid = true;

  if (name.value.trim() === "") {
    showError(name, "Name is required");
    valid = false;
  }

  if (!email.value.includes("@")) {
    showError(email, "Enter a valid email");
    valid = false;
  }

  if (password.value.length < 6) {
    showError(password, "Password must be 6+ characters");
    valid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "Message cannot be empty");
    valid = false;
  }

  if (valid) {
    submitForm();
  }
});

function showError(input, message) {
  input.parentElement.querySelector(".error").innerText = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.innerText = "");
}

function submitForm() {
  const button = form.querySelector("button");
  button.classList.add("loading");

  setTimeout(() => {
    button.classList.remove("loading");
    statusText.style.color = "green";
    statusText.innerText = "Form submitted successfully ✔";
    form.reset();
    count.innerText = 0;
  }, 2000);
}
