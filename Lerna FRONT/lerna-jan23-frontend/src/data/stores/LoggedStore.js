const { makeObservable, observable, action } = require("mobx");

class LoggedStore {

  isLogged = false;
  token = "";

  constructor() {
    makeObservable(this, {
      isLogged: observable,
      token: observable,
      UpdateCurrentUser: action,
      RemoveCurrentUser:action
    });

    var fromLocalStorage = localStorage.getItem("Logged");

    if (fromLocalStorage) {
      this.isLogged = JSON.parse(fromLocalStorage);
    }
  }


  UpdateCurrentUser(token) {
    this.isLogged = true;
    localStorage.setItem("Logged", this.isLogged);
    localStorage.setItem("token", token);
  }

  RemoveCurrentUser() {
    this.isLogged = false;
    localStorage.setItem("Logged", this.isLogged);
    localStorage.removeItem("token");
  }

}

const loggedStore = new LoggedStore();
export default loggedStore;
