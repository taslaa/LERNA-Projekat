import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UserPersonalInfo() {

    const [driver, setDriver] = useState();
    let id=2;
	useEffect(() => {
		const fetch = async () => {
			let response = await axios.get("https://localhost:7111/api/Users/" + id);
			if (response.data) {
				setDriver(response.data);
			}
		}
		fetch();
	}, [])
  return (
    <div class="card border">
    <div class="card-header border-bottom">
        <h4 class="card-header-title">Personal Information</h4>
    </div>

    <div class="card-body">
        <form class="row g-3">
            <div class="col-12">
                <label class="form-label">Upload your profile photo<span class="text-danger">*</span></label>
                <div class="d-flex align-items-center">
                    <label class="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                        <span class="avatar avatar-xl">
                            <img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" src="/assets/images/avatar/01.jpg" alt="" />
                        </span>
                    </label>
                    <label class="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Change</label>
                    <input id="uploadfile-1" class="form-control d-none" type="file" />
                </div>
            </div>

            <div class="col-md-6">
                <label class="form-label">Full Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control" value={driver ? driver.firstName : "Jacqueline Miller"} placeholder="Enter your full name" />
            </div>

            <div class="col-md-6">
                <label class="form-label">Email address<span class="text-danger">*</span></label>
                <input type="email" class="form-control" value={driver ? driver.email : "hello@gmail.com"} placeholder="Enter your email id" />
            </div>

            <div class="col-md-6">
                <label class="form-label">Mobile number<span class="text-danger">*</span></label>
                <input type="text" class="form-control" value={driver ? driver.phoneNumber : "222 555 666"} placeholder="Enter your mobile number" />
            </div>

            <div class="col-md-6">
                <label class="form-label">Nationality<span class="text-danger">*</span></label>
                <div class="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div class="choices__inner"><select class="form-select js-choice choices__input" hidden="" tabindex="-1" data-choice="active"><option value="Paris" data-custom-properties="[object Object]">Paris</option></select><div class="choices__list choices__list--single"><div class="choices__item choices__item--selectable" data-item="" data-id="1" data-value="Paris" data-custom-properties="[object Object]" aria-selected="true">Paris</div></div></div><div class="choices__list choices__list--dropdown" aria-expanded="false"><div class="choices__list" role="listbox"><div id="choices--8j3o-item-choice-1" class="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Select your country</div><div id="choices--8j3o-item-choice-2" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="USA" data-select-text="Press to select" data-choice-selectable="">USA</div><div id="choices--8j3o-item-choice-3" class="choices__item choices__item--choice is-selected choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Paris" data-select-text="Press to select" data-choice-selectable="">Paris</div><div id="choices--8j3o-item-choice-4" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="India" data-select-text="Press to select" data-choice-selectable="">India</div><div id="choices--8j3o-item-choice-5" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="UK" data-select-text="Press to select" data-choice-selectable="">UK</div></div></div></div>
            </div>

            <div class="col-md-6">
                <label class="form-label">Date of Birth<span class="text-danger">*</span></label>
                <input type="text" class="form-control flatpickr flatpickr-input" value="29 Aug 1996" placeholder="Enter date of birth" data-date-format="d M Y" readonly="readonly" />
            </div>

            <div class="col-md-6">
                <label class="form-label">Select Gender<span class="text-danger">*</span></label>
                <div class="d-flex gap-4">
                    <div class="form-check radio-bg-light">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="" />
                        <label class="form-check-label" htmlFor="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div class="form-check radio-bg-light">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" htmlFor="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                    <div class="form-check radio-bg-light">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label class="form-check-label" htmlFor="flexRadioDefault3">
                            Others
                        </label>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <label class="form-label">Address</label>
                <textarea class="form-control" rows="3" spellcheck="false">2119 N Division Ave, New Hampshire, York, United States</textarea>
            </div>

            <div class="col-12 text-end">
                <a href="#" class="btn btn-primary mb-0">Save Changes</a>
            </div>
        </form>
    </div>
</div>

  )
}
