import React from 'react'
import MyProfileSidebar from './userChunks/MyProfileSidebar';
import MyPersonalInfo from './userChunks/MyPersonalInfo';
import MyChangeMail from './userChunks/MyChangeMail';
import MyChangePassword from './userChunks/MyChangePassword';
import { ToastContainer } from 'react-toastify';

export default function MyProfilePage ()  {
	return (
		<>
			<main>
				<section class="pt-3">
					<div class="container">
						<div class="row">
							<MyProfileSidebar />
							<div class="col-lg-8 col-xl-9">
								<div class="d-grid mb-0 d-lg-none w-100">
									<button class="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
										<i class="fas fa-sliders-h"></i> Menu
									</button>
								</div>
								<div class="vstack gap-4">

									{/* <MyCompleteProfile /> */}
									<MyPersonalInfo />
									<MyChangeMail />
									<MyChangePassword />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<ToastContainer/>
		</>
	)
}

