
import {handleClick} from "../../main.js"

export function LogIn () { 

    let secondView = document.getElementById("container");

    let view = document.createElement("section");
    secondView.appendChild(view);
    let header = document.createElement("div");
    header.innerHTML = `
        <h1 class = "welcome"> Welcome </br> Back!</h1>
        <div class="wave"style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-2.54,146.53 C50.51,172.20 209.65,-13.31 500.84,141.61 L508.17,-34.03 L-1.41,-37.00 Z" style="stroke: none; fill: #229ACF;"></path></svg></div>`
    view.appendChild(header);

    let form = document.createElement("form")
    form.innerHTML = `
    <input type="email" id="user" placeholder="E-mail">
    <input type="text" id="password" placeholder="Password">`
    view.appendChild(form);

    let btnLogIn = document.createElement("a");
    btnLogIn.classList.add("LogIn");
    btnLogIn.href= "#/Wall";
    btnLogIn.innerHTML = "Log In"
    view.appendChild(btnLogIn);
    btnLogIn.addEventListener("click", (e) =>{
        handleClick(e);
    console.log(e);
    }); console.log(btnLogIn);

    return view;
};


