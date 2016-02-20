'use strict';


class App {
    constructor() {
        console.log(arguments);
        document.querySelector(arguments[1]).innerHTML = arguments[0];
    }
}

let app = new App("And...It Works!", "#app");
