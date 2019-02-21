import Auto from "../../models/Auto.js";

// @ts-ignore
let carAPI = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/cars",
  timeout: 3000
})

let _autos = []

export default class AutosService {
  constructor(drawCB) {
    this.drawCallback = drawCB
  }

  get autos() {
    //.map() is an array function that we are using to break referrence to the original _autos
    return _autos.map(auto => auto)
  }

  addAuto(formData) {
    //send POST request with the new car data
    //if successful then send a GET request to get all the cars
    carAPI.post('', formData)
      .then(() => {
        this.getAutos()
      })
      .catch(error => console.error(error))
  }

  getAutos() {
    carAPI.get('')
      .then(res => {
        let autosFromAPI = res.data.data
        _autos = autosFromAPI.map(auto => new Auto(auto))
        this.drawCallback()
      })
      .catch(e => console.error(e))
  }

  deleteAuto(autoId) {
    //send DELETE request with the target car id
    //if successful then send a GET request to get all the cars
    carAPI.delete(autoId)
      .then(res => {
        console.log(res)
        this.getAutos()
      })
      .catch(e => console.error(e))
  }

  placeBid(id) {
    //from the id that's just a string we need to find the auto that has that id *hint: .find()*
    //increase the price of the found car by $50
    //use axios to send a PUT request and pass the new car price as a key value pair
    //if successful then retrieve the updated info from the database

    let targetAuto = _autos.find(auto => auto._id == id)
    targetAuto.price *= 1.05
    carAPI.put(id, {
      price: targetAuto.price
    })
      .then(res => {
        console.log(res)
        this.getAutos()
      })
      .catch(e => console.error(e))
  }
}