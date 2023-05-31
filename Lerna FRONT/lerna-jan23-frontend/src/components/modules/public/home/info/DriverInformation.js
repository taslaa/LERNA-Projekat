import { useTranslation } from "react-i18next";
import ArrowForward from "../../../../layout/components/Icons/ArrowForward";

export default function DriverInformation() {
	const { t } = useTranslation();
	return (
		<>
			<section class="pt-0 pt-lg-5 mt-5">
				<div class="container p-0">
					<div class="row" style={{ marginBottom: '-400px'}}>

						<div class="col-lg-10 p-0 ms-auto position-relative">
							<img src="assets/images/myImages/woman.png" class="rounded-3" alt="" />

							<div class="col-11 col-sm-11 col-lg-8 col-xl-6 position-lg-middle ms-lg-8 ms-xl-7">
								<div class="card shadow pb-0 mt-n7 mt-sm-n8 mt-lg-0">
									<div class="card-header" style={{ backgroundColor: "#FDDC00", borderRadius: '15px' }}>
										<div class="card card-body" style={{ backgroundColor: "#FDDC00" }}>
											<div class="col">
												<h4 class="text mb-0">{t("BECOME_DRIVER")}</h4>
											</div>
											<div className="col-8">
												<div class="d-flex align-items-center">
													<h7 class="text-black mt-4">{t("BECOME_DRIVER_DESCRIPTION")}</h7>
												</div>
											</div>
											<div className="row">
												<div className="col"></div>
												<div className="col-auto">
													<a href="#" className="btn btn-primary backgroundColor">
														<span>{t("POST_A_RIDE")}</span>
														<ArrowForward col="col-auto mt-0 p-0" height="30" width="40" color="#FDDC00"></ArrowForward>

													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill="#920FCD" fill-opacity="1" d="M0,96L34.3,128C68.6,160,137,224,206,261.3C274.3,299,343,309,411,309.3C480,309,549,299,617,266.7C685.7,235,754,181,823,165.3C891.4,149,960,171,1029,186.7C1097.1,203,1166,213,1234,213.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
				</svg>
				<div className="row p-0" style={{ backgroundColor: 'rgb(148, 0, 211)', height: '100px'}}>
					
				</div>
			</section>
		</>
	);
}