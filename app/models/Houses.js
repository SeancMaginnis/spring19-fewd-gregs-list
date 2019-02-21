export default class Houses {
  constructor(data) {
    this._id = data._id
    this.bedrooms = data.bedrooms || "I would hope there are bedrooms"
    this.bathrooms = data.bathrooms || "Do you really need a bathroom?"
    this.levels = data.levels || "Levels? Do you mean stories? Well I'm not telling"
    this.price = data.price || "You don't want to know"
    this.description = data.description || "Someone was to lazy to add a description"
    this.img = data.imgUrl || "O NO's where is the Picture"
    this.year = data.year
  }
  draw() {
    return `
    <div class="col-12 col-md-3">
      <div class="card">
        <img src="${this.img}" alt="car photo" class="card-img-top">
        <h2 class="card-header">${this.levels} Stories ${this.bedrooms} Bedrooms and ${this.bathrooms} bathrooms</h2>
        <div class="card-body">
          <ul>
            <li>Price: $${this.price.toFixed(2)}</li>
            <li>Year: ${this.year}</li>
            <li>${this.description}</li>
          </ul>
          <button class="btn btn-success" onclick="app.controllers.houseController.placeBid('${this._id}')">Place Bid</button>
          <button class="btn btn-danger btn-outline-dark" onclick="app.controllers.houseController.deleteHouse('${this._id}')">Delete House</button>
        </div>
      </div>
    </div>
    `
  }
}


