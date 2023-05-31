import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DriverCompleteProfile from './driverChunks/DriverCompleteProfile';
import DriverPersonalInfo from './driverChunks/DriverPersonalInfo';
import driverProfileStore from '../../../../data/stores/DriverProfileStore';
import UsersService from '../../../../data/services/UsersService';
import { httpSmartClient } from '../../../../config/httpClient';

export default function DriverProfilePage() {

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
	useEffect(()=>{
		driverProfileStore.getDriverData(driver);
		console.log(driver);
	},[driver]);

	return (
		<>
			<main>
				<section class="pt-3">
					<div class="container">
						<div class="row">
								<div class="d-grid mb-0 d-lg-none w-100">
									<button class="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
										<i class="fas fa-sliders-h"></i> Menu
									</button>
								</div>
								<div class="vstack gap-4">
									<DriverCompleteProfile />
									<DriverPersonalInfo />
								</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
