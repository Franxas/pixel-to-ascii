import HomeView from "../views/HomeView.js";
import HomeController from "../controllers/HomeController.js";
import LoginView from "../views/LoginView.js";
import LoginController from "../controllers/LoginController.js";
import SketchController from "../controllers/SketchController.js";
import SketchView from "../views/SketchView.js"

const init = function() { // this might hahve to be asynchronous

    // home dependencies
    const homeController = new HomeController();
    const homeView = new HomeView();
    homeController.setView(homeView);

    // login dependencies
    const loginController = new LoginController();
    const loginView = new LoginView();
    loginController.setView(loginView);

    // p5 sketch dependencies
    const sketchController = new SketchController();
    const sketchView = new SketchView();
    sketchController.setView(sketchView);

    return {
        home: homeController,
        login: loginController,
        sketch: sketchController
    }
}

export default init();