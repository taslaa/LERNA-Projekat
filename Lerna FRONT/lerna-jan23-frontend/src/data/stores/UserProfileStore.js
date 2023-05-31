import { action, makeObservable, observable } from "mobx";

class UserProfileStore {

  user = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action
    });
  }
  
  setUser(user){
    this.user=user;
  }

}

const userProfileStore = new UserProfileStore();
export default userProfileStore;
