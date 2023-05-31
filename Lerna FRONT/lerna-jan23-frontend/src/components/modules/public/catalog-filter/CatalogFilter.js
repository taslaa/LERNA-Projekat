import React, { useEffect, useState } from 'react'
import Header from '../../../layout/components/Header';
import HeroSearchComponent from '../home/hero/HeroSearchComponent';
import './CatalogStore.css'
import VehicleBrandsPage from '../../admin/vehicleBrands/VehicleBrandsPage';
export default function CatalogFilter() {
  return (
    <div style={{ position: "relative", top: "-40px" }} className="bg-purple  mw-100">
      <section className="container p-0  ">
        <div className="row g-4 g-lg-5 justify-content-center bg-purple pt-lg-8 pt-5" >
          <div style={{ position: "relative", maxWidth: "90%", maxHeight: "100%",}} className=" justify-content-center mt-0  pb-5 px-0">
            <div className="container  p-0 m-0 mw-100" >
              <HeroSearchComponent preLoadStore={true} colN={12} />
            </div>
          </div>

        </div>
      </section>
    </div>

  )
}
