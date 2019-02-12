import AutosService from "./autos-service.js";

let _autosService = new AutosService(drawAutos)

function drawAutos() {
  let autos = _autosService.autos //this is a getter
  let template = ""
  autos.forEach(auto => {
    template += auto.draw() //resolves to the auto's html template found within Auto.js
  })
  document.querySelector("#listings").innerHTML = template;
}


export default class AutosController {
  constructor() {
    console.log("hello from the controller!")
  }

  addAuto(event) {
    event.preventDefault()
    // console.log(event)
    let form = event.target
    let formData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      img: form.img.value,
      color: form.color.value,
      miles: form.miles.value,
    }
    // console.log(formData)
    form.reset() //reset our form
    _autosService.addAuto(formData)
    drawAutos()
  }

  displayAutosForm() {
    let template = `
  <form onsubmit="app.controllers.autosController.addAuto(event)" class="p-3">
    <!-- form-group is a bootstrap class to style labels and inputs -->
    <div class="form-group">
      <label for="make">Make</label>
      <input required type="text" name="make">
    </div>
    <div class="form-group">
      <label for="model">Model</label>
      <input required type="text" name="model">
    </div>
    <div class="form-group">
      <label for="year">Year</label>
      <input type="number" name="year">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input required type="number" name="price">
    </div>
    <div class="form-group">
      <label for="img">Image</label>
      <input type="url" name="img">
    </div>
    <div class="form-group">
      <label for="color">Color</label>
      <input type="text" name="color">
    </div>
    <div class="form-group">
      <label for="miles">Miles</label>
      <input type="text" name="miles">
    </div>
    <button type="submit">Create Listing</button>
  </form>
  `
    document.querySelector(".form-dropzone").innerHTML = template
  }
}