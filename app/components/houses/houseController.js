import HouseService from "./houseService.js";



let _houseService = new HouseService(drawHouses)

function drawHouses() {
  let house = _houseService.house
  let template = ""
  house.forEach(house => {
    template += house.draw()
  })
  document.querySelector("#listings").innerHTML = template;
}



export default class HouseController {
  constructor() {
    console.log("what up from the controller")
  }
  addHouse(event) {
    event.preventDefault()
    console.log(event)
    let form = event.target
    let formData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      price: form.price.value,
      imgUrl: form.img.value,
      description: form.description.value,
      year: form.year.value
    }
    form.reset()
    _houseService.addHouse(formData)
    drawHouses()
  }
  displayHouseForm() {
    //generates the form
    let template = `
  <form onsubmit="app.controllers.houseController.addHouse(event)" class="p-3">
    <!-- form-group is a bootstrap class to style labels and inputs -->
    <div class="form-group">
      <label for="bedrooms">Bedrooms</label>
      <input required type="text" name="bedrooms">
    </div>
    <div class="form-group">
      <label for="bathrooms">Bathrooms</label>
      <input required type="text" name="bathrooms">
    </div>
     <div class="form-group">
      <label for="levels">Stories</label>
      <input type="number" name="levels">
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
      <label for="description">Description</label>
      <textarea rows="4" type="text" name="description"></textarea>
    </div>
    <div class="d-flex">
      <button type="submit">Create Listing</button>
      <button type="button" class="btn btn-info" onclick="app.controllers.houseController.viewListings()">View House Listings</button>
    </div>
  </form>
  `
    document.querySelector(".form-dropzone").innerHTML = template
  }

  deleteHouse(houseId) {
    _houseService.deleteHouse(houseId)
  }
  placeBid(id) {
    _houseService.placeBid(id)
  }
  viewListings() {
    _houseService.getHouse()
  }
}