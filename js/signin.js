import {auth,signInWithEmailAndPassword} from "./firebase-configure.js"

// import {signInWithEmailAndPassword} from "../js/firebase-configure"

let username = document.getElementById("username");
let password = document.getElementById("password");
let signinBtn = document.getElementById("signin-Btn");


function signIn() {
  let emptyInput = document.getElementById("emptyInput");
  let signinError = document.getElementById("signin-error");

  if (username.value === "" && password.value === "") {
    emptyInput.style.display = "block";
  }
  else {
      signInWithEmailAndPassword(auth, username.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    window.location = "../pages/admin.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    signinError.style.display = "block";
    signinError.innerText = errorCode;
  });
  }
}

signinBtn.addEventListener("click", signIn)


