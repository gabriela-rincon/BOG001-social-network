
import {handleClick} from "../../main.js"

export function Home () { 
    
    let firstView = document.getElementById("container");
    
    let view = document.createElement("section");
    firstView.appendChild(view);
    let header = document.createElement("div");
    header.innerHTML = `
        <h1> Benevole </h1>
        <div class="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-2.54,146.53 C50.51,172.20 209.65,-13.31 500.84,141.61 L508.17,-34.03 L-1.41,-37.00 Z" style="stroke: none; fill: #229ACF;"></path></svg></div>
        <p>Want to be part of the change? Our social network of volunteers will help you create amazing memories and experiences. Find volunteer opportunities all around the world and get to know others like you.</p>`
    view.appendChild(header);

    let btnJoin = document.createElement("a");
    btnJoin.classList.add("Join");
    btnJoin.href= "#/SignIn";
    btnJoin.innerHTML= "Join Us";
    view.appendChild(btnJoin);
    btnJoin.addEventListener("click", (e) =>{ 
        handleClick(e);
    });

    let btnLog = document.createElement("a");
    btnLog.classList.add("Log");
    btnLog.href= "#/LogIn";
    btnLog.innerHTML= "Log In";
    view.appendChild(btnLog);
    btnLog.addEventListener("click", (e) =>{
        handleClick(e);
    });

    let body = document.createElement("div");
    body.innerHTML = `
    <p>“You make a living by what you get. You make a life by what you give.”
    </br>
        -Winston Churchill-</p>
            <img src="/Imagenes/volunteers.png"/>`
    view.appendChild(body);

    return view;
};

Home();
console.log("importando home");
