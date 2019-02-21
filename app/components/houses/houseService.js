import House from "../../models/Houses.js"


let houseAPI = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses",
  timeout: 3000
})

let _house = []


export default class HouseService {
  constructor(drawCB) {
    this.drawCallback = drawCB
  }

  get house() {
    return _house.map(house => house)
  }
  addHouse(fromData) {
    houseAPI.post('', fromData)
      .then(() => {
        this.getHouse()
      })

  }
  getHouse() {
    houseAPI.get('')
      .then(res => {
        let housesFromApi = res.data.data
        _house = housesFromApi.map(house => new House(house))
        this.drawCallback()
      })
      .catch(e => console.error(e))
  }

  deleteHouse(houseId) {
    houseAPI.delete(houseId)
      .then(res => {
        console.log(res)
        this.getHouse()
      })
      .catch(e => console.error(e))
  }

  placeBid(id) {
    let targetHouse = _house.find(house => house._id == id)
    targetHouse.price *= 2.05
    houseAPI.put(id, {
      price: targetHouse.price
    })
      .then(res => {
        console.log(res)
        this.getHouse()
      })
      .catch(e => console.error(e))
  }
}