import React from 'react';

export default function DriverInfoRatings() {
  return (
    <section class="pt-0">
	<div class="container vstack gap-4">
		<div class="row">
			<div class="col-12">
				<h1 class="fs-4 mb-0"><i class="bi bi-star fa-fw me-1"></i>Reviews</h1>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				<div class="card border h-100">
					<div class="card-header border-bottom">
						<h5 class="card-header-title">Review Metrics</h5>
					</div>

					<div class="card-body">
						<div class="row g-4">
							<div class="col-sm-6 col-xl-3">
								<div class="d-flex align-items-center">
									<span class="display-6 text-primary"> <i class="bi bi-trophy"></i> </span>
									<div class="ms-3">
										<h4 class="mb-0">4.5</h4>
										<span>Average Rating</span>
									</div>
								</div>
							</div>
			
							<div class="col-sm-6 col-xl-3">
								<div class="d-flex align-items-center">
									<span class="display-6 text-warning"> <i class="bi bi-star"></i> </span>
									<div class="ms-3">
										<h4 class="mb-0">548</h4>
										<span>Total Reviews</span>
									</div>
								</div>
							</div>
			
							<div class="col-sm-6 col-xl-3">
								<div class="d-flex align-items-center">
									<span class="display-6 text-danger"> <i class="bi bi-exclamation-octagon"></i> </span>
									<div class="ms-3">
										<h4 class="mb-0">56</h4>
										<span>Unaddressed Reviews</span>
									</div>
								</div>
							</div>
			
							<div class="col-sm-6 col-xl-3">
								<div class="d-flex align-items-center">
									<span class="display-6 text-success"> <i class="bi bi-bookmark-star"></i> </span>
									<div class="ms-3">
										<h4 class="mb-0">145</h4>
										<span>New reviews in the last 30 days</span>
									</div>
								</div>
							</div>
			
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				<div class="card border rounded-3">
					<div class="card-header border-bottom">
						<h5 class="card-header-title">User Reviews</h5>
					</div>

					<div class="card-body">
						<div class="bg-light rounded p-3">
							<div class="d-sm-flex justify-content-between">
								<div class="d-sm-flex align-items-center mb-3">
									<img class="avatar avatar-md rounded-circle float-start me-3" src="assets/images/avatar/01.jpg" alt="avatar"/>
									<div>
										<h6 class="m-0">Frances Guerrero</h6>
										<span class="me-3 small">2 days ago</span>
									</div>
								</div>
								<ul class="list-inline mb-2 mb-sm-0">
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
								</ul>	
							</div>

							<h6 class="fw-normal"><span class="text-body">Review on:</span> Pride moon Village Resort &amp; Spa</h6>
							<p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
							
							<div class="row g-4">
								<div class="col-4 col-sm-3 col-lg-2">
									<a href="assets/images/category/hotel/4by3/07.jpg" data-glightbox="" data-gallery="gallery">
										<img src="assets/images/category/hotel/4by3/07.jpg" class="rounded" alt=""/>
									</a>
								</div>
								<div class="col-4 col-sm-3 col-lg-2">
									<a href="assets/images/category/hotel/4by3/08.jpg" data-glightbox="" data-gallery="gallery">
										<img src="assets/images/category/hotel/4by3/08.jpg" class="rounded" alt=""/>
									</a>
								</div>
							</div>
							<div class="mt-3">
								<div class="d-flex justify-content-between align-items-center">
									<a class="btn btn-sm btn-primary-soft mb-0" data-bs-toggle="collapse" href="#collapseComment" role="button" aria-expanded="true" aria-controls="collapseComment">
										<i class="bi bi-reply me-1"></i>Reply
									</a>
									<a href="#" class="text-primary-hover text-reset small mb-0"><i class="bi bi-info-circle me-1"></i>Report</a>
								</div>
								<div class="collapse show" id="collapseComment">
									<div class="d-flex mt-3">
										<textarea class="form-control mb-0" placeholder="Add a comment..." rows="2" spellcheck="false"></textarea>
										<button class="btn btn-sm btn-primary-soft ms-2 px-4 mb-0 flex-shrink-0"><i class="fas fa-paper-plane fs-5"></i></button>
									</div>
								</div>
							</div>
						</div>
						
						<hr/> 

						<div class="bg-light rounded p-3">
							<div class="d-sm-flex justify-content-between">
								<div class="d-sm-flex align-items-center mb-3">
									<img class="avatar avatar-md rounded-circle float-start me-3" src="assets/images/avatar/07.jpg" alt="avatar"/>
									<div>
										<h6 class="m-0">Louis Ferguson</h6>
										<span class="me-3 small">Nov 18, 2022 at 11:55 am</span>
									</div>
								</div>
								<ul class="list-inline mb-2 mb-sm-0">
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
								</ul>	
							</div>

							<h6 class="fw-normal"><span class="text-body">Review on:</span> Courtyard by Marriott New York</h6>
							<p>Far advanced settling say finished raillery. Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
							<div class="d-flex justify-content-between align-items-center">
								<a class="btn btn-sm btn-primary-soft mb-0"> <i class="bi bi-reply me-1"></i>Reply </a>
								<a href="#" class="text-primary-hover text-reset small mb-0"><i class="bi bi-info-circle me-1"></i>Report</a>
							</div>
						</div>

						<hr/> 

						<div class="bg-light rounded p-3">
							<div class="d-sm-flex justify-content-between">
								<div class="d-sm-flex align-items-center mb-3">
									<img class="avatar avatar-md rounded-circle float-start me-3" src="assets/images/avatar/06.jpg" alt="avatar"/>
									<div>
										<h6 class="m-0">Carolyn Ortiz</h6>
										<span class="me-3 small">Nov 22, 2022 at 2:00 pm</span>
									</div>
								</div>
								<ul class="list-inline mb-2 mb-sm-0">
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
								</ul>	
							</div>

							<h6 class="fw-normal"><span class="text-body">Review on:</span> Pride moon Village Resort &amp; Spa</h6>
							<p>Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
							<div class="d-flex justify-content-between align-items-center">
								<a class="btn btn-sm btn-primary-soft mb-0"> <i class="bi bi-reply me-1"></i>Reply </a>
								<a href="#" class="text-primary-hover text-reset small mb-0"><i class="bi bi-info-circle me-1"></i>Report</a>
							</div>
						</div>

						<hr/> 

						<div class="bg-light rounded p-3">
							<div class="d-sm-flex justify-content-between">
								<div class="d-sm-flex align-items-center mb-3">
									<img class="avatar avatar-md rounded-circle float-start me-3" src="assets/images/avatar/10.jpg" alt="avatar"/>
									<div>
										<h6 class="m-0">Dennis Barrett</h6>
										<span class="me-3 small">Nov 18, 2022 at 2:00 pm</span>
									</div>
								</div>
								<ul class="list-inline mb-2 mb-sm-0">
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
									<li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
								</ul>	
							</div>

							<h6 class="fw-normal"><span class="text-body">Review on:</span> Pride moon Village Resort &amp; Spa</h6>
							<p>Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
							<div class="d-flex justify-content-between">
								<a class="btn btn-sm btn-primary-soft mb-0"> <i class="bi bi-reply me-1"></i>Reply </a>
								<a href="#" class="text-primary-hover text-reset small mb-0"><i class="bi bi-info-circle me-1"></i>Report</a>
							</div>
						</div>
					</div>

					<div class="card-footer pt-0">
						<div class="d-sm-flex justify-content-sm-between align-items-sm-center">
							<p class="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
							<nav class="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
								<ul class="pagination pagination-sm pagination-primary-soft mb-0">
									<li class="page-item disabled">
										<a class="page-link" href="#" tabindex="-1">Prev</a>
									</li>
									<li class="page-item"><a class="page-link" href="#">1</a></li>
									<li class="page-item active"><a class="page-link" href="#">2</a></li>
									<li class="page-item disabled"><a class="page-link" href="#">..</a></li>
									<li class="page-item"><a class="page-link" href="#">15</a></li>
									<li class="page-item">
										<a class="page-link" href="#">Next</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}
