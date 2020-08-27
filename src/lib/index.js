// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
// class se usa para darle una clase al objeto que se creara con constructor. La clase es para poder manipular ese objeto creado . entre los parentesis de constructor se coloca los parametros 

// Definición de clase, mediante una declaración de clase 
export class Router {
  constructor (paths) {
    this.paths = paths;
    this.initRouter(); 
  } 

initRouter() {
  const { location : {pathname = "/Home"}} = window;
  const URL = pathname === "/Home" ? "Home" : pathname.replace("/Home", "");
  this.load(URL);
}

load(page = "Home") {
  const { paths } = this;
  const { path, Home} = paths[page] || paths.error;
  const Container = document.getElementById("views-container");
  Container.innerHTML = template; 
  window.history.pushState({}, "done", path); 
}

}; 
console.log(Router);



