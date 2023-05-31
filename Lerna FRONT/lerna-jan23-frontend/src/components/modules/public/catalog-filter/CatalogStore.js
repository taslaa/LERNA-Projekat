import { makeObservable, observable, action, computed, makeAutoObservable } from "mobx";

class CatalogStore {
  filteredData = {
    "cityFrom": {
        "id": 2,
        "value": "Sarajevo"
    },
    "cityTo": {
        "id": 3,
        "value": "Zenica"
    },
    "date": "2023-03-30"
}

  constructor() {
    makeAutoObservable(this);
  }

  add(filter) {
    this.filteredData=filter;
  }
  get latest() {
    return this.filteredData[this.filteredData.length - 1];
  }
  get all() {
    return this.filteredData;
  }
  get total() {
    return this.filteredData.length;
  }
}

const catalogStore = new CatalogStore();
export default catalogStore;