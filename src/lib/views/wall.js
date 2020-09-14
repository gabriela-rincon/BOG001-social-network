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

    let posts= document.createElement("div");
    posts.classList.add("postSpace");
    posts.innerHTML=`
    <ul> 
        <li class ="listPost">
        <h2>User Name   Location  Time</h2>
        <p> Description </p>
        <button id="favorite">Favorite</button>
        <button id="like"> Like</button>
        <button id="comment">Comment</button>
        </li>
    </ul>
    `
    view.appendChild(posts);
    // Un evento que confirma si el usuario est alogueado o no
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.firestore.collection("Posts")
                .get()
                .then((snapshot)=>{
                

                });
        }else {
            console.log("sign out")
        }
    })

          /* User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log("sign in")
        } else { 
            console.log("sign out")
        }*/
      //});

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