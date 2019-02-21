import AutosController from "./components/autos/autos-controller.js";
import HouseController from "./components/houses/houseController.js";

//javascript entry point

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      houseController: new HouseController(),
    }
    console.log("hello from main")
  }
}

window['app'] = new App()