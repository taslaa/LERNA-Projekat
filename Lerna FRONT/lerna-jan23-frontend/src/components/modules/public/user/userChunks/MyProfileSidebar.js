import React from 'react'
import userProfileStore from '../../../../../data/stores/UserProfileStore';
import { observer } from 'mobx-react-lite';
import AuthService from '../../../../../data/services/AuthService';
import { useNavigate } from 'react-router-dom';

 const MyProfileSidebar=observer(() => {

	const user=userProfileStore.user;
	const navigate = useNavigate();

	const signOut = () =>
	{
		AuthService.signOut();
		navigate("/sign-in");
	}

  return (
    <div class="col-lg-4 col-xl-3">
				<div class="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasSidebar">
					<div class="offcanvas-header justify-content-end pb-2">
						<button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
					</div>

					<div class="offcanvas-body p-3 p-lg-0">
						<div class="card bg-light w-100">

							<div class="card-body p-3">
								<div class="text-center mb-3">
									<div class="avatar avatar-xl mb-2">
										<img class="avatar-img rounded-circle border border-2 border-white" src={user.profilePhotoId!=null ? user.profilePhotoUrl : "/assets/images/avatar/01.jpg"} />
									</div>
									<h6 class="mb-0">{user.firstName+" "+user.lastName} </h6>
									<a href="#" class="text-reset text-primary-hover small">{user.email}</a>
									<hr />
								</div>

								<ul class="nav nav-pills-primary-soft flex-column">
									<li class="nav-item">
										<a class="nav-link active" href="account-profile.html"><i class="bi bi-person fa-fw me-2"></i>My Profile</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="account-bookings.html"><i class="bi bi-ticket-perforated fa-fw me-2"></i>My Bookings</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="account-travelers.html"><i class="bi bi-people fa-fw me-2"></i>Travelers</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="account-payment-details.html"><i class="bi bi-wallet fa-fw me-2"></i>Payment Details</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="account-settings.html"><i class="bi bi-gear fa-fw me-2"></i>Settings</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="account-delete.html"><i class="bi bi-trash fa-fw me-2"></i>Delete Profile</a>
									</li>
									<li class="nav-item">
										<a onClick={signOut} class="nav-link text-danger bg-danger-soft-hover" href='#'><i class="fas fa-sign-out-alt fa-fw me-2"></i>Sign Out</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
});


export default MyProfileSidebar;