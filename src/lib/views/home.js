import {handleClick} from "../../main.js"

export function Home () { 
    
  let firstView = document.getElementById("container");
    
  let view = document.createElement("section");
  firstView.appendChild(view);
  let header = document.createElement("div");
  header.classList.add("homeWave")
  header.innerHTML = `
      <h1> Benevole </h1>`
  view.appendChild(header);

  /*  WAVE */
 
  let headerP = document.createElement("div");
  headerP.classList.add("textP")
  headerP.innerHTML = `
        <p>Want to be part of the change? Our social network of volunteers will help you create amazing memories and experiences. Find volunteer opportunities all around the world and get to know others like you.</p>`
  view.appendChild(headerP);

  let btnJoin = document.createElement("a");
  btnJoin.classList.add("Join");
  btnJoin.href = "#/SignIn";
  btnJoin.innerHTML = "Join Us";
  view.appendChild(btnJoin);
  btnJoin.addEventListener("click", (e) => {
    handleClick(e);
  });

  let btnLog = document.createElement("a");
  btnLog.classList.add("Log");
  btnLog.href = "#/LogIn";
  btnLog.innerHTML = "Log In";
  view.appendChild(btnLog);
  btnLog.addEventListener("click", (e) => {
    handleClick(e);
  });

  let body = document.createElement("div");
  body.classList.add("textP");
  body.innerHTML = `
    <p>“You make a living by what you get. You make a life by what you give.”
    </br>
        -Winston Churchill-</p>
            <img src="/src/Imagenes/volunteers1.png">`
  view.appendChild(body);

  return view;
};

