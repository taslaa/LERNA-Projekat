import { action, makeObservable, observable } from "mobx";

class DriverProfileStore {

  driver = null;
  constructor() {
    makeObservable(this, {
      driver: observable,
      getDriverData: action,
    });

    var fromLocalStorage = sessionStorage.getItem("driver");

    if (fromLocalStorage) {
      var driverParsed = JSON.parse(fromLocalStorage);
      this.driver = driverParsed;
    }
    else 
    {
      
    }
  }

  async getDriverData(driver) {
   
    if (driver) {
      this.driver=driver;
    }
  }
}

const driverProfileStore = new DriverProfileStore();
export default driverProfileStore;
