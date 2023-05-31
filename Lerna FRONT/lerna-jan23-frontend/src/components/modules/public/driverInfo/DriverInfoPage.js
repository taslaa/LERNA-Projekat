import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import UsersService from '../../../../data/services/UsersService';
import { httpSmartClient } from '../../../../config/httpClient';

export default function DriverInfoPage() {
  const navigate = useNavigate();
	const location = useLocation();
  const { driverId } = useParams();
	const[driver,setDriver]=useState();
	useEffect(()=>{
    const fetch=async()=>{
			let response=await UsersService.getById(driverId);
			if(response.isSuccess){
				let dri= response.data;
				dri.profilePhotoUrl= httpSmartClient.getPhotoUrl(dri.profilePhotoId);
				setDriver(dri);
			}
			else{
				alert(response.error)
			}
		}
		fetch();
	},[]);
  return (
    <>
      <main>
        <section class="pt-4">
          <div class="container">
            <div class="card rounded-3 border p-3 pb-2">
              <div class="d-sm-flex align-items-center">
                <div class="avatar avatar-xl mb-2 mb-sm-0">
                  <img class="avatar-img rounded-circle" src={driver && driver.profilePhotoUrl} alt="no profile picture" />
                </div>
                <h4 class="mb-2 mb-sm-0 ms-sm-3"><span class="fw-light">Hi </span>{driver ? driver.firstName + " " + driver.lastName :"Jacqueline Miller"} </h4>
                <a href="add-listing.html" class="btn btn-sm btn-primary-soft mb-0 ms-auto flex-shrink-0"><i class="bi bi-plus-lg fa-fw me-2"></i>Add New Listing</a>
              </div>

              <button class="btn btn-primary w-100 d-block d-xl-none mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#dashboardMenu" aria-controls="dashboardMenu">
                <i class="bi bi-list"></i> Dashboard Menu
              </button>

              <div class="offcanvas-xl offcanvas-end mt-xl-3" tabindex="-1" id="dashboardMenu">
                <div class="offcanvas-header border-bottom p-3">
                  <h5 class="offcanvas-title">Menu</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#dashboardMenu" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body p-3 p-xl-0">
                  <div class="navbar navbar-expand-xl">
                    <ul class="navbar-nav navbar-offcanvas-menu">

                      <li class="nav-item"> <a onClick={() => navigate("/driverInfo/"+ driverId)} class={`nav-link ${location.pathname == "/driverInfo/"+driverId ? "active" : ""}`} href="#"><i class="bi bi-house-door fa-fw me-1"></i>Dashboard</a>	</li>

                      <li class="nav-item"> <a class="nav-link" href="agent-listings.html"><i class="bi bi-journals fa-fw me-1"></i>Listings</a> </li>

                      <li class="nav-item"> <a class="nav-link" href="agent-bookings.html"><i class="bi bi-bookmark-heart fa-fw me-1"></i>Bookings</a> </li>

                      <li class="nav-item"> <a class="nav-link" href="agent-activities.html"><i class="bi bi-bell fa-fw me-1"></i>Activities</a> </li>

                      <li class="nav-item"> <a class="nav-link" href="agent-earnings.html"><i class="bi bi-graph-up-arrow fa-fw me-1"></i>Earnings</a>	</li>

                      <li class="nav-item"> <a onClick={() => navigate(`/driverInfo/${driverId}/ratings`)} class={`nav-link ${location.pathname == "/driverInfo/" + driverId+"/ratings" ? "active" : ""}`} href="#"><i class="bi bi-star fa-fw me-1"></i>Reviews</a></li>

                      <li> <a class="nav-link" href="agent-settings.html"><i class="bi bi-gear fa-fw me-1"></i>Settings</a></li>

                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdoanMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="bi bi-list-ul fa-fw me-1"></i>Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdoanMenu">
                          <li> <a class="dropdown-item" href="#">Item 1</a></li>
                          <li> <a class="dropdown-item" href="#">Item 2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       <Outlet></Outlet>

      </main>
    </>
  )
}
