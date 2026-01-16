import AbstractController from "./AbstractController.js";

export default class extends AbstractController {

    constructor() {
        super();
    }

    async showView() {

        document.querySelector('#app').innerHTML = await this.view.getHTML();
        
        const loadButton = document.getElementById("load-button");
        loadButton.addEventListener("click", (e) => {
            e.preventDefault();
            const script = document.createElement("script");
            script.src = "/static/js/p5/sketch.js";
            document.body.appendChild(script);
            this.view.show();
        })
    }

}