
import controllers from "./utils/bootstrap.js";
//import LoginView from "./views/LoginView.js";

const router = async () => {

    const routes = [
            { path: '/', controller: controllers.home },
            { path: '/admin/login', controller: controllers.login },
            { path: '/posts', controller: controllers.sketch }
            //{ path: '/settings', view: () => console.log('viewing Settings') }
    ];

    const match = routes.find(route => route.path === location.pathname) || routes[0];
    console.log('test match');
    console.log(match);
    const controller = match.controller;
    await controller.showView();
} 

const navigate = function(url) {

    history.pushState(null, null, url);
    router();
}

document.addEventListener('DOMContentLoaded', () => {

    console.log("window.p5 at module start:", window.p5);

    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigate(e.target.href);
        }
    })
    
    console.log('testing dom content loading');
    console.log(controllers);
    router();
})