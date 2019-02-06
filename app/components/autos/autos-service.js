import Auto from "../../models/Auto.js";

let _autos = []

export default class AutosService {
  constructor() {
    console.log('hello from service!')
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
}