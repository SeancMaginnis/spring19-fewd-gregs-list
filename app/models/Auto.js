export default class Auto {
  constructor(data) {
    if (!data.make || !data.model || !data.price || !data.year || !data.miles) {
      throw new Error("missing necessary information to create an auto listing")
    }
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.color = data.color || "factory standard"
    this.img = data.img || "https://cdn1.iconfinder.com/data/icons/transportation-5/24/Car-2-512.png"
    this.price = data.price
    this.miles = data.miles
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
        </ul>
      </div>
    </div>
    `
  }
}