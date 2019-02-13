export default class Auto {
  constructor(data) {
    if (!data.make || !data.model || !data.price || !data.year) {
      throw new Error("missing necessary information to create an auto listing")
    }
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.img = data.imgUrl || "https://cdn1.iconfinder.com/data/icons/transportation-5/24/Car-2-512.png"
    this.price = data.price
    this.description = data.description || 'no description provided'
    this._id = data._id
  }

  draw() {
    return `
    <div class="col-12 col-md-3">
      <div class="card">
        <img src="${this.img}" alt="car photo" class="card-img-top">
        <h2 class="card-header">${this.make + ' ' + this.model}</h2>
        <div class="card-body">
          <ul>
            <li>Price: $${this.price.toFixed(2)}</li>
            <li>Year: ${this.year}</li>
            <li>${this.description}</li>
          </ul>
          <button class="btn btn-success" onclick="app.controllers.autosController.placeBid('${this._id}')">Place Bid</button>
          <button class="btn btn-danger btn-outline-dark" onclick="app.controllers.autosController.deleteAuto('${this._id}')">Delete Auto</button>
        </div>
      </div>
    </div>
    `
  }
}