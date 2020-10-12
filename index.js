const goSignUp = document.getElementById("goSignUp");
const signUpContainer = document.querySelector(".sign-up-container");
const signInContainer = document.querySelector(".sign-in-container");

goSignUp.addEventListener("click", () => {
  signInContainer.style.display = "none";
  signUpContainer.style.display = "flex";
});

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const saveLocal = document.getElementById("localUp");

function setLocal() {
  const nameValue = name.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  if (nameValue === "" || emailValue === "" || passwordValue === "") {
    alert("Please enter all field.");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    alert("Successfully sign up, Please sign in.");
    name.value = "";
    email.value = "";
    password.value = "";
    signInContainer.style.display = "flex";
    signUpContainer.style.display = "none";
    signInContainer.style.animation = "fadeIn 1s ease-in";
  }
}

saveLocal.addEventListener("click", setLocal);

const emailIn = document.getElementById("emailIn");
const passwordIn = document.getElementById("passwordIn");
const profil = document.getElementById("profil");

const signLocal = document.getElementById("localIn");

function openProfil() {
  const emailInValue = emailIn.value;
  const passwordInValue = passwordIn.value;
  if (
    emailInValue === localStorage.getItem("email") &&
    passwordInValue === localStorage.getItem("password")
  ) {
    profil.setAttribute("action", "profil.html");
  } else {
    alert("Email or password is incorrect.");
  }
}

localIn.addEventListener("click", openProfil);
