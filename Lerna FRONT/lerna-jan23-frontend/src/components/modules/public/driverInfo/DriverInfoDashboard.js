import React from 'react'

export default function DriverInfoDashboard() {
  return (
    <section class="pt-0">
	<div class="container vstack gap-4">
		<div class="row">
			<div class="col-12">
				<h1 class="fs-4 mb-0"><i class="bi bi-house-door fa-fw me-1"></i>Dashboard</h1>
			</div>
		</div>	

		<div class="row g-4">
			<div class="col-sm-6 col-xl-3">
				<div class="card card-body border">
					<div class="d-flex align-items-center">
						<div class="icon-xl bg-success rounded-3 text-white">
							<i class="bi bi-journals"></i>
						</div>
						<div class="ms-3">
							<h4>56</h4>
							<span>Total Listings</span>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-xl-3">
				<div class="card card-body border">
					<div class="d-flex align-items-center">
						<div class="icon-xl bg-info rounded-3 text-white">
							<i class="bi bi-graph-up-arrow"></i>
						</div>
						<div class="ms-3">
							<h4>$2,55,365</h4>
							<span>Earning</span>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-xl-3">
				<div class="card card-body border">
					<div class="d-flex align-items-center">
						<div class="icon-xl bg-warning rounded-3 text-white">
							<i class="bi bi-bar-chart-line-fill"></i>
						</div>
						<div class="ms-3">
							<h4>15K</h4>
							<span>Visitors</span>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-xl-3">
				<div class="card card-body border">
					<div class="d-flex align-items-center">
						<div class="icon-xl bg-primary rounded-3 text-white">
							<i class="bi bi-star"></i>
						</div>
						<div class="ms-3">
							<h4>12K</h4>
							<span>Total Reviews</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row g-4">
			<div class="col-lg-7 col-xl-8">
				<div class="card border h-100">
					<div class="card-header border-bottom">
						<h5 class="card-header-title">Booking stats</h5>
					</div>
					<div class="card-body" style={{position:"relative"}}>
					<div class="resize-triggers"><div class="expand-trigger"><div style={{width:"769px",height:"384px"}}></div></div><div class="contract-trigger"></div></div></div>
				</div>
			</div>

			<div class="col-lg-4">
				<div class="card border h-100">

					<div class="card-header border-bottom d-flex justify-content-between align-items-center">
						<h5 class="card-header-title">Booking Traffic</h5>
						<a href="#" class="btn btn-link p-0 mb-0">View all</a>
					</div>

					<div class="card-body p-3">
						<div class="col-sm-6 mx-auto" style={{position:"relative"}}>
						
						<div class="resize-triggers"><div class="expand-trigger"><div style={{width:"369px", height:"198px"}}></div></div><div class="contract-trigger"></div></div></div>

						<ul class="list-group list-group-borderless align-items-center mt-3">
							<li class="list-group-item"><i class="text-primary fas fa-circle me-2"></i>Organic</li>
							<li class="list-group-item"><i class="text-success fas fa-circle me-2"></i>Google</li>
							<li class="list-group-item"><i class="text-warning fas fa-circle me-2"></i>Social media</li>
							<li class="list-group-item"><i class="text-danger fas fa-circle me-2"></i>Referral program</li>
						</ul>
					</div>
				</div>
			</div>
		</div>	

		<div class="row">
			<div class="col-12">
				<div class="card border rounded-3">
					<div class="card-header border-bottom">
						<div class="d-sm-flex justify-content-between align-items-center">
							<h5 class="mb-2 mb-sm-0">Upcoming Bookings</h5>
							<a href="#" class="btn btn-sm btn-primary mb-0">View All</a>
						</div>
					</div>

					<div class="card-body">
						<div class="row g-3 align-items-center justify-content-between mb-3">
							<div class="col-md-8">
								<form class="rounded position-relative">
									<input class="form-control pe-5" type="search" placeholder="Search" aria-label="Search"/>
									<button class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i class="fas fa-search fs-6"></i></button>
								</form>
							</div>

							<div class="col-md-3">
								<form>
									<div class="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div class="choices__inner"><select class="form-select js-choice choices__input" aria-label=".form-select-sm" hidden="" tabindex="-1" data-choice="active"><option value="" data-custom-properties="[object Object]">Sort by</option></select><div class="choices__list choices__list--single"><div class="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="1" data-value="" data-custom-properties="[object Object]" aria-selected="true">Sort by</div></div></div><div class="choices__list choices__list--dropdown" aria-expanded="false"><div class="choices__list" role="listbox"><div id="choices--u264-item-choice-1" class="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Sort by</div><div id="choices--u264-item-choice-2" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Free" data-select-text="Press to select" data-choice-selectable="">Free</div><div id="choices--u264-item-choice-3" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Newest" data-select-text="Press to select" data-choice-selectable="">Newest</div><div id="choices--u264-item-choice-4" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Oldest" data-select-text="Press to select" data-choice-selectable="">Oldest</div></div></div></div>
								</form>
							</div>
						</div>

						<div class="table-responsive border-0">
							<table class="table align-middle p-4 mb-0 table-hover table-shrink">
								<thead class="table-light">
									<tr>
										<th scope="col" class="border-0 rounded-start">#</th>
										<th scope="col" class="border-0">Name</th>
										<th scope="col" class="border-0">Type</th>
										<th scope="col" class="border-0">Date</th>
										<th scope="col" class="border-0">status</th>
										<th scope="col" class="border-0">Payment</th>
										<th scope="col" class="border-0 rounded-end">Action</th>
									</tr>
								</thead>

								<tbody class="border-top-0">
									<tr>
										<td> <h6 class="mb-0">01</h6> </td>
										<td> <h6 class="mb-0"><a href="#">Deluxe Pool View</a></h6> </td>
										<td> With Breakfast </td>
										<td> Nov 22 - 25 </td>
										<td> <div class="badge text-bg-success">Booked</div> </td>
										<td> <div class="badge bg-success bg-opacity-10 text-success">Full payment</div> </td>
										<td> <a href="#" class="btn btn-sm btn-light mb-0">View</a> </td>
									</tr>

									<tr>
										<td> <h6 class="mb-0">02</h6> </td>
										<td> <h6 class="mb-0"><a href="#">Deluxe Pool View with Breakfast</a></h6> </td>
										<td> Free Cancellation | Breakfast only </td>
										<td> Nov 24 - 28 </td>
										<td> <div class="badge text-bg-success">Booked</div> </td>
										<td> <div class="badge bg-orange bg-opacity-10 text-orange">On Property</div> </td>
										<td> <a href="#" class="btn btn-sm btn-light mb-0">View</a> </td>
									</tr>

									<tr>
										<td> <h6 class="mb-0">03</h6> </td>
										<td> <h6 class="mb-0"><a href="#">Luxury Room with Balcony</a></h6> </td>
										<td> Free Cancellation | Breakfast + Lunch/Dinner </td>
										<td> Nov 24 - 28 </td>
										<td> <div class="badge text-bg-info">Reserved</div> </td>
										<td> <div class="badge bg-info bg-opacity-10 text-info">Half Payment</div> </td>
										<td> <a href="#" class="btn btn-sm btn-light mb-0">View</a> </td>
									</tr>

									<tr>
										<td> <h6 class="mb-0">04</h6> </td>
										<td> <h6 class="mb-0"><a href="#">Deluxe Room Twin Bed With Balcony</a></h6> </td>
										<td> Free Cancellation </td>
										<td> Nov 28 - 30 </td>
										<td> <div class="badge text-bg-success">Booked</div> </td>
										<td> <div class="badge bg-success bg-opacity-10 text-success">Full Payment</div> </td>
										<td> <a href="#" class="btn btn-sm btn-light mb-0">View</a> </td>
									</tr>

									<tr>
										<td> <h6 class="mb-0">05</h6> </td>
										<td> <h6 class="mb-0"><a href="#">Room With Free Cancellation | Breakfast + Lunch</a></h6> </td>
										<td> Free Cancellation </td>
										<td> Nov 28 - 30 </td>
										<td> <div class="badge text-bg-info">Reserved</div> </td>
										<td> <div class="badge bg-success bg-opacity-10 text-success">Full Payment</div> </td>
										<td> <a href="#" class="btn btn-sm btn-light mb-0">View</a> </td>
									</tr>
								</tbody>
							</table>
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
