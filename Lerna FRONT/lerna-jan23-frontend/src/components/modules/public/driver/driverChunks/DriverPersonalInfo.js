import React from 'react';
import driverProfileStore from '../../../../../data/stores/DriverProfileStore';
import { observer } from 'mobx-react-lite';

 const DriverPersonalInfo=observer(() => {

    let driver = driverProfileStore.driver;
    return (
        <div class="card border">
            <div class="card-header border-bottom">
                <h4 class="card-header-title">Driver's Information</h4>
            </div>
            <div class="card-body">
                <form class="row g-3">
                    <div class="col-12">
                        <div class="d-flex align-items-center">
                            <label class="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                                <span class="avatar avatar-xl">
                                    <img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" 
                                   src={driver && driver.profilePhotoUrl}  alt="no profile picture" />
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Full Name</label>
                        <input type="text" readOnly class="form-control" value={driver ? driver.firstName + " " + driver.lastName : "Jacqueline Miller"} placeholder="Enter your full name" />
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Email address</label>
                        <input type="email" readOnly class="form-control" value={driver ? driver.email : "hello@gmail.com"} placeholder="Enter your email id" />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Mobile number</label>
                        <input type="text" readOnly class="form-control" value={driver ? driver.phoneNumber : "222 555 666"} placeholder="Enter your mobile number" />
                    </div>
                </form>
            </div>
        </div>

    )
});

export default DriverPersonalInfo;