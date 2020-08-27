// Este es el punto de entrada de tu aplicacion
import {Router} from './lib/index.js';
import {Home} from './lib/views/home.js';
import {Log} from './lib/views/log.js';
// import LogIn from './lib/views/log.js';
// import SignIn from './lib/views/sign.js';
// import Profile from './lib/views/profile.js';
// import Wall from './lib/views/wall.js';

// const routes = {
//     '/Home' : Home,
//     '/LogIn' : LogIn,
//     '/SignIn' : SignIn,
//     '/Profile' : Profile,
//     '/Wall' : Wall,
// } 

let routes = {
    Home: {
        path: '/Home',
        template: Home(),
    },
    LogIn: {
        path: '/LogIn',
        // template: Log()
    },
    SignIn: {
        path: '/SignIn'
    },
    Profile: {
        path: '/Profile'
    },
    Wall: {
        path: '/Wall'
    }, 
};

const ROUTER = new Router (routes);

console.log(casa.name);


console.log(ROUTER );






