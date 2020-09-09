
import {handleClick} from "../../main.js"

export function LogIn () { 

    let secondView = document.getElementById("container");

    let view = document.createElement("section");
    secondView.appendChild(view);
    let header = document.createElement("div");
    header.classList.add("waveLog")
    header.innerHTML = `
        <h1 class = "welcome"> Welcome </br> Back!</h1>
        <button id= "close" href="/"> X </button>
        <div class="wave"style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-2.54,146.53 C50.51,172.20 209.65,-13.31 500.84,141.61 L508.17,-34.03 L-1.41,-37.00 Z" style="stroke: none; fill: #229ACF;"></path></svg></div>`
    view.appendChild(header);

    let btnClose = document.getElementById("close");
    btnClose.addEventListener("click", (e) => {
        handleClick(e);
    });

    let form = document.createElement("form");
    form.innerHTML = `
    <input type="email" id="email" placeholder="E-mail">
    <input type="text" id="password" placeholder="Password">`
    view.appendChild(form);

    function message(errorText){

      //crear un modal
      console.log(errorText);
    }

    let btnLogIn = document.createElement("a");
    btnLogIn.classList.add("LogIn");
    btnLogIn.innerHTML = "Log In"
    view.appendChild(btnLogIn);
    btnLogIn.addEventListener("click", (e) =>{

        const emailLog = document.getElementById("email").value;
        const passwordLog = document.getElementById("password").value;

        firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog).then(()=>{
          console.log("Logueado con éxito")
          window.location.hash = "#/Wall"
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            message(errorMessage);
          }); 

        firebase.auth().onAuthStateChanged(function(user) {
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
  
    function messageGoogle(errorText){

      //crear un modal
      console.log(errorText);
    }

    let logGoogle= document.createElement("a");
    logGoogle.classList.add("LogGoogle");
    logGoogle.innerHTML = "Log in with Google"
    view.appendChild(logGoogle);
    logGoogle.addEventListener("click", (e) =>{
      
      var provider = new firebase.auth.GoogleAuthProvider();// Con provider estamos indicando que se pueda autenticar con googlr
      // Popup es para abrir una ventana emergente
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        console.log(token)
        var user = result.user;
        console.log(user)
        window.location.hash = "#/Wall"
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        messageGoogle(error.message)
      });
    console.log(provider)


    });
    return view;
};





