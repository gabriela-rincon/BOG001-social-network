import { handleClick } from "../../main.js";

export function SignIn () {

    let thirdView = document.getElementById("container");
    
    let view = document.createElement("section");
    thirdView.appendChild(view);
    let header = document.createElement("div");
    header.classList.add("waveSign")
    header.innerHTML = `
        <h1 class="welcome"> Welcome! </br> Create account!</h1>
        <button id= "close" href="/"> X </button>
        <div class="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-2.54,146.53 C50.51,172.20 209.65,-13.31 500.84,141.61 L508.17,-34.03 L-1.41,-37.00 Z" style="stroke: none; fill: #229ACF;"></path></svg></div>`
    view.appendChild(header);

    let btnClose = document.getElementById("close");
    btnClose.addEventListener("click", (e) => {
        handleClick(e);
    });

    let form = document.createElement("form");
    form.innerHTML = `
    <input type="text" id="name" placeholder="Name">
    <input type="email" id="email" placeholder="E-mail">
    <input type="text" id="password" placeholder="Password">`
    view.appendChild(form);

    function messageSign(errorText){

        //crear un modal
        console.log(errorText);
      }

    let btnSignIn = document.createElement("a");
    btnSignIn.classList.add("SignIn");
    btnSignIn.innerHTML = "Sign In";
    view.appendChild(btnSignIn);
    btnSignIn.addEventListener("click", (e) =>{
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
    
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            console.log("cuenta creada con éxito")
            window.location.hash = "#/Profile"
        })
        .catch(function(error) {
            // Handle Errors here.Crear un catch y un then 
            var errorCode = error.code;
            var errorMessage = error.message;
            messageSign(error.message);
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
            };
        });
    });

    function googleSigin(errorText){

        //crear un modal
        console.log(errorText);
      }

    let signGoogle= document.createElement("a");
    signGoogle.classList.add("signGoogle");
    signGoogle.href= "#/Wall";
    signGoogle.innerHTML = "Sign in with Google"
    view.appendChild(signGoogle);
    signGoogle.addEventListener("click", (e) =>{
              
        var provider = new firebase.auth.GoogleAuthProvider();// Con provider estamos indicando que se pueda autenticar con googlr
        // Popup es para abrir una ventana emergente
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            })
            .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            googleSigin(errorMessage);
              });
                 
    });
    return view;
};
