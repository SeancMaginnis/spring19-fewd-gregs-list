import AutosService from "./autos-service.js";

let _autosService = new AutosService()

function drawAutos() {
  let autos = _autosService.autos //this is a getter
  let template = ""
  autos.forEach(auto => {
    template += auto.draw() //resolves to the auto's html template found within Auto.js
  })
  document.querySelector("#listings").innerHTML = template
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
}