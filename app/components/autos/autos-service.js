import Auto from "../../models/Auto.js";

// @ts-ignore
let carAPI = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/cars",
  timeout: 3000
})

let _autos = []

export default class AutosService {
  constructor(drawCB) {
    this.getAutos(drawCB)
  }

  get autos() {
    //.map() is an array function that we are using to break referrence to the original _autos
    return _autos.map(auto => auto)
  }

  addAuto(formData) {
    //creating an instance of an Auto from the formData
    let newAuto = new Auto(formData);
    _autos.push(newAuto)
  }

  getAutos(cb) {
    carAPI.get('')
      .then(res => {
        let autosFromAPI = res.data.data
        _autos = autosFromAPI.map(auto => new Auto(auto))
        cb()
      })
      .catch(e => console.error(e))
  }
}