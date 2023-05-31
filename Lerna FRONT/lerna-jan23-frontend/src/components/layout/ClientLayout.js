import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../modules/public/home/hero/hero.css"
import userProfileStore from "../../data/stores/UserProfileStore";
import { useEffect, useState } from "react";
import AuthService from "../../data/services/AuthService";
import UsersService from "../../data/services/UsersService";
import { httpSmartClient } from "../../config/httpClient";

export default function ClientLayout() {
	const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const fetch=async()=>{
    let currentUser = AuthService.getCurrentUser();
      let response=await UsersService.getById(currentUser.Id);
      if (response.isSuccess) {
        let user=response.data;
        user.profilePhotoUrl= httpSmartClient.getPhotoUrl(user.profilePhotoId);
        userProfileStore.setUser(user);
        setIsLoading(false);
      }
      else
      {
        console.log(response.error);
      }
    }
    fetch();
  }, [])

  if(isLoading){
		return (
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
        </div>)
	}

  return (
    <>
      <Header></Header>
      <main>
        <section>
          <div className="container-full">
            <Outlet></Outlet>
          </div>
        </section>
      </main>
      <Footer></Footer>

      <div className="back-top"></div>

      <div className="navbar navbar-mobile">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">
              <i className="bi bi-house-door fa-fw"></i>
              <span className="mb-0 nav-text">Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="account-bookings.html">
              <i className="bi bi-briefcase fa-fw"></i>
              <span className="mb-0 nav-text">My Trips</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="offer-detail.html">
              <i className="bi bi-percent fa-fw"></i>
              <span className="mb-0 nav-text">Offer</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="account-profile.html">
              <i className="bi bi-person-circle fa-fw"></i>
              <span className="mb-0 nav-text">Account</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
