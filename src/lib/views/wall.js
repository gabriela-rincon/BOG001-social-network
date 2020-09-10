// import { handleClick } from "../../main";

export function Wall () {
 console.log("usted esta en wall")
    let wallView = document.getElementById("container"); 

    let view = document.createElement("section"); 
    wallView.appendChild(view);
    let header = document.createElement("div");
    header.innerHTML = `
    <nav id="menu"> <img src=""> 
        <ul>
        <li><a href="#/Profile" id="profile">Profile</a></li>
        <li><a href="/" id="logOut">Log Out</a></li>
        </ul>
    </nav> 
    <h1> Benevole </h1>
    `
    view.appendChild(header);

    let profile = document.getElementById("profile");
    profile.addEventListener("click", (e) => {
          window.location.hash = "#/Profile"
    })

    let logOut = document.getElementById("logOut");
    logOut.addEventListener("click", (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            console.log("The sesion has been closed");
        })
    })
    return view
};