import { observable, decorate, action } from "mobx"

class RestaurantStore {
  list = 'lista'

  getList() {
    console.log(this.list)
  }
}

decorate(RestaurantStore, {
  list: observable,
  getList: action
})

export default RestaurantStore;