export default class Auto {
  constructor(data) {
    if (!data.make || !data.model || !data.price || !data.year) {
      throw new Error("missing necessary information to create an auto listing")
    }
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.color = data.color || "factory standard"
    this.img = data.img || data.imgUrl || "https://cdn1.iconfinder.com/data/icons/transportation-5/24/Car-2-512.png"
    this.price = data.price
    this.miles = data.miles || 0
    this.description = data.description || 'no description provided'
    this._id = data._id
  }

  draw() {
    return `
    <div class="col-12 col-md-3">
      <div class="card">
        <img src="${this.img}" alt="car photo" class="card-img-top">
        <h2 class="card-header">${this.make + ' ' + this.model}</h2>
        <ul class="card-body">
          <li>Price: $${this.price}</li>
          <li>Miles: ${this.miles}</li>
          <li>Year: ${this.year}</li>
          <li>Color: ${this.color}</li>
          <li>${this.description}</li>
        </ul>
      </div>
    </div>
    `
  }
}