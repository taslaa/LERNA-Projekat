import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import catalogStore from "../../../../data/stores/CatalogStore";
import RidesService from "../../../../data/services/RidesService";
import CitiesService from '../../../../data/services/CitiesService';


export default function CatalogPageMainComponent() {
    const [rides, setRides] = useState();

    const testPodaci = {
        cityFrom: {
            id: 1,
            value: "Mostar"
        },
        cityTo: {
            id: 2,
            value: "Sarajevo"
        },
        seats: 3
        
    }


    useEffect(()=>{
        const fetchAndSetRides = async () => {
            catalogStore.add(testPodaci);
            const response = await RidesService.getByParams({
                pageNumber:1, 
                pageSize:9999, 
                cityFromId: catalogStore.filteredData.cityFrom.id,
                cityToId: catalogStore.filteredData.cityTo.id,           
                maxPassengersCount: catalogStore.filteredData.seats
            });
            setRides(response);  
            console.log(response);  
        }
        fetchAndSetRides();
  
    }, []);

    return (
        <>
         {rides && rides.map((ride,index) => (
            <section  className="pt-0" key={index}>
                <div className="container" data-sticky-container="">
                    <div className="row">
                        <div className="col-xl-8 col-xxl-9">
                            <div className="vstack gap-4">                            
                                     <div className="card border p-4">
                                     <div className="card-body p-0">
                                         <div className="row g-2 g-sm-4">
                                             <div className="left-side">
                                                 <h4 className="card-title"><a href="cab-detail.html">{ride.milestones[0].city.name}, {ride.milestones[0].city.country.abbreviation} {">"} {ride.milestones[1].city.name}, {ride.milestones[1].city.country.abbreviation}</a></h4>
                                                 <div className="col-sm-6 col-md-4 col-xl-3 text-sm-end">
                                                     <div className="departure-time">
                                                         <ul className="list-inline mb-1-1">
                                                             <label>Vrijeme polaska</label>
                                                             <li className="list-inline-item h5 mb-0">{ride.startDateTime.toString().slice(11,16)} h</li>
                                                         </ul>
                                                         <ul className="list-inline mb-1-1">
                                                             <label>Datum vožnje</label>
                                                             <li className="list-inline-item h5 mb-0">{ride.startDateTime.toString().slice(8,10)}.{ride.startDateTime.toString().slice(5,7)}.{ride.startDateTime.toString().slice(0,4)}.</li>
                                                         </ul>
                                                     </div>
                                                     <div className="date-car">
                                                         <ul className="list-inline mb-1-1">
                                                             <label>Vrijeme dolaska</label>
                                                             <li className="list-inline-item h5 mb-0">{ride.endDateTime.toString().slice(11,16)} h</li>
                                                         </ul>
                                                         <ul className="list-inline mb-1-1">
                                                             <label>Vozilo</label>
                                                             <br></br>
                                                             <li className="list-inline-item h5 mb-0">Šapa4</li>
                                                         </ul>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="driver-info">
                                                 <div className="driver-info-more">
                                                     <div className="col-sm-6 col-md-4 colxl-6">
                                                         <h5 className="card-title mb-2"><a href="cab-detail.html" >{ride.driver.firstName}</a></h5>
                                                         <ul className="list-inline mb-0">
                                                             <li className="list-inline-item h6 fw-normal me-1 mb-0">{ride.driver.ridesAverageRating==null ? 0 : ride.driver.ridesAverageRating}</li>
                                                             <li className="list-inline-item me-0"><i className="fa-solid fa-star text-warning"></i></li>
                                                         </ul>
                                                     </div>
                                                     <div className="col-md-4 col-xl-3">
                                                         <div className="bg-light rounded-3 px-4 py-5">
                                                             <img id="driver-photo" src={ride.driver.profilePhotoId==null ? "/assets/images/avatar/01.jpg" : "https://localhost:7111/api/Photos/${ride.driver.profilePhotoId}"}  alt=""></img> 
                                                         </div>
                                                     </div>
                                                 </div>
                                                 <div className="user-ride-info">
                                                     <div className="conditions">
                                                     <label className="ul-lable">Conditions</label>
                                                     <ul className="list-inline mb-1">
                                                         <li className="list-inline-item h5 mb-0">Šapa</li>
                                                     </ul>
                                                     </div>
                                                     <div className="price">
                                                     <label className="ul-lable">Price</label>
                                                     <ul className="list-inline mb-1">
                                                         <li className="list-inline-item h5 mb-0-0">{ride.price} KM</li>
                                                     </ul>
                                                     </div>
                                                 </div>
                                             </div>
                                         
                                         </div>
                                     </div>
                                 </div>
                                                           

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            ))} 

        </>
    );
}