import {handleClick} from "../../main.js";

export function SignIn () {

  let thirdView = document.getElementById("container");

  let view = document.createElement("section");
  thirdView.appendChild(view);
  let header = document.createElement("div");
  header.classList.add("waveSign")
  header.innerHTML = `
        <h1 class="welcome"> Welcome!</h1> 
        <h1 class="create"> Create account!</h1>
        <button id= "close" href="/"> X </button>     
        <div class="wrapper">
        <div class="wave"></div>
        </div>`
  view.appendChild(header);

  let btnClose = document.getElementById("close");
  btnClose.addEventListener("click", (e) => {
    handleClick(e);
  });

  let form = document.createElement("form");
  form.innerHTML = `
    <input type="text" id="name" placeholder="Name">
    <input type="email" id="email" placeholder="E-mail">
    <input type="password" id="password" placeholder="Password">`
  view.appendChild(form);

  let btnSignIn = document.createElement("a");
  btnSignIn.classList.add("btnSignIn");
  btnSignIn.innerHTML = "Sign In";
  view.appendChild(btnSignIn);
  btnSignIn.addEventListener("click", (e) => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      };
    });
  });

  let signGoogle = document.createElement("a");
  signGoogle.classList.add("signGoogle");
  signGoogle.href = "#/Wall";
  signGoogle.innerHTML = `<img src="/src/Imagenes/googleIcono.png"/> <p>Sign in with Google</p> `
  view.appendChild(signGoogle);
  signGoogle.addEventListener("click", (e) => {

    var provider = new firebase.auth.GoogleAuthProvider(); // Con provider estamos indicando que se pueda autenticar con googlr
    // Popup es para abrir una ventana emergente
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        alert(errorMessage);
      });

  });
  return view;
};
