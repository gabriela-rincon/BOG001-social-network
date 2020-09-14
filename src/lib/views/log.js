import {handleClick} from "../../main.js"

export function LogIn () {

  let secondView = document.getElementById("container");

  let view = document.createElement("section");
  secondView.appendChild(view);
  let header = document.createElement("div");
  header.classList.add("waveLog")
  header.innerHTML = `
        <h1 class = "welcome"> Welcome</h1> 
        <h1 class = "welcomeBack" "welcome"> Back!</h1>
        <button id= "close" href="/"> X </button>
  view.appendChild(header);

  let view2 = document.createElement("section");
  secondView.appendChild(view2);
  let wave2 = document.createElement("div");
  wave2.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
           <path fill="#229ACF" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,101.3C384,128,480,192,576,213.3C672,235,768,213,864,181.3C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>`
  view.appendChild(wave2);


  let btnClose = document.getElementById("close");
  btnClose.addEventListener("click", (e) => {
    handleClick(e);
  });

  let form = document.createElement("form");
  form.innerHTML = `
    <input class="loginInput1" type="email" id="email" placeholder="E-mail">
    <input class="loginInput" type="password" id="password" placeholder="Password">`
  view.appendChild(form);

  let btnLogIn = document.createElement("a");
  btnLogIn.classList.add("LogIn");
  btnLogIn.innerHTML = "Log In"
  view.appendChild(btnLogIn);
  btnLogIn.addEventListener("click", (e) => {

    const emailLog = document.getElementById("email").value;
    const passwordLog = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog).catch(function (error) {
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
      }
    });
  });

  let logGoogle = document.createElement("a");
  logGoogle.classList.add("LogGoogle");
  logGoogle.innerHTML = `<img src="/src/Imagenes/googleIcono.png"/> <p>Sign in with Google</p> `
  view.appendChild(logGoogle);
  logGoogle.addEventListener("click", (e) => {

    var provider = new firebase.auth.GoogleAuthProvider(); // Con provider estamos indicando que se pueda autenticar con google
    // Popup es para abrir una ventana emergente
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      console.log(token)
      var user = result.user;
      console.log(user)
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      //alert(errorMessage);
    });
    console.log(provider)


  });
  return view;
};

