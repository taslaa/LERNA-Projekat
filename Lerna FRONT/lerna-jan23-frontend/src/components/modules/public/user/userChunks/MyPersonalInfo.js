import { observer } from 'mobx-react-lite';
import userProfileStore from '../../../../../data/stores/UserProfileStore';
import { useForm } from 'react-hook-form';
import UsersService from '../../../../../data/services/UsersService';
import { httpSmartClient } from '../../../../../config/httpClient';
import toastify from '../../../../../utils/toastify/toastify';

 const MyPersonalInfo=observer(() =>{
    let user = userProfileStore.user;

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    const fetchUpdatedUser = async() => {
        const response = await UsersService.getById(user.id);

        if (response.isSuccess) {
            const updatedUser = response.data;
            updatedUser.profilePhotoUrl= httpSmartClient.getPhotoUrl(updatedUser.profilePhotoId);
            userProfileStore.setUser(updatedUser);
        }
        else
        {
            console.log(response.error);
        }
    }

    const onSubmit = async (data) =>
    {
        const names=data.fullName.split(" ",2);
        const newUserData={...user,phoneNumber:data.phoneNumber,firstName:names[0],lastName:names[1]}

        const response = await UsersService.edit(newUserData); 

        if (response) {
            fetchUpdatedUser();
            toastify.success("Successfully updated information");
        }
        else
        {
            toastify.error("Error while updating information");
        }
    }

    const handlePhotoUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file)

        const updatedPhoto = await UsersService.edit({ ...user, ProfilePhoto: file });

        if (updatedPhoto.isSuccess) {
            fetchUpdatedUser();
            toastify.success("Successfully changed profile photo");
        }
        else{
            toastify.error("Error while changing profile photo");
        }
    }

    return (
        <div class="card border">
            <div class="card-header border-bottom">
                <h4 class="card-header-title">User Information</h4>
            </div>

            <div class="card-body">
                <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
                    <div class="col-12">
                        <label class="form-label">Upload your profile photo<span class="text-danger">*</span></label>
                        <div class="d-flex align-items-center">
                            <label class="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                                <span class="avatar avatar-xl">
                                    <img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" src={user.profilePhotoId!=null ? user.profilePhotoUrl : "/assets/images/avatar/01.jpg"} />
                                </span>
                            </label>
                            <label class="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Select new photo</label>
                            <input onChange={handlePhotoUpload} id="uploadfile-1" class="form-control d-none" type="file" />
                        </div>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Full Name</label>
                        <input {...register("fullName",{required: "PLEASE_ENTER_FULL_NAME"})} type="text" class="form-control" defaultValue={user ? user.firstName + " " + user.lastName : "Jacqueline Miller"} placeholder="Enter your full name" />
                        {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" readOnly defaultValue={user ? user.email : "hello@gmail.com"} placeholder="Enter your email id" />
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Mobile number</label>
                        <input {...register("phoneNumber",{required: "MUST_CONTAIN_MOBILE_NUMBER"})} type="text" class="form-control" defaultValue={user ? user.phoneNumber : "222 555 666"} placeholder="Enter your mobile number" />
                        {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message}</span>}
                    </div>

                    <div class="text-end mt-3">
                        <button type="submit" class="btn btn-primary mb-0">Update information</button>
                    </div>
                </form>
            </div>
        </div>

    )
});

export default MyPersonalInfo;