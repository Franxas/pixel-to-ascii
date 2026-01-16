import AbstractView from "./AbstractView.js";
import { sketch } from "../p5/sketch.js";

export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle('home###');
    }

        async getHTML() {
        return `
            <h1>Project</h1>
            <a id="load-button" href="">load</a>
        `;
    }

    show() {

        const p5sketch = new window.p5(sketch);
    }
}