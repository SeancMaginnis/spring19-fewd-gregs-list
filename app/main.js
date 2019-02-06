import AutosController from "./components/autos/autos-controller.js";

//javascript entry point

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController()
    }
    console.log("hello from main")
  }
}

window.app = new App()