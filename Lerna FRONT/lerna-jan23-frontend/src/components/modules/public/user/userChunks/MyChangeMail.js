import React from 'react'
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import userProfileStore from '../../../../../data/stores/UserProfileStore';
import UsersService from '../../../../../data/services/UsersService';
import { httpSmartClient } from '../../../../../config/httpClient';
import toastify from '../../../../../utils/toastify/toastify';

const MyChangeMail=observer(() =>{

    let user=userProfileStore.user;

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    const onSubmit = async (data) =>
    {
        const response2 = await UsersService.edit({...user,email:data.email}); 
        const response = await UsersService.getById(user.id);
        if (response.isSuccess) {
            const updatedUser = response.data;
            updatedUser.profilePhotoUrl= httpSmartClient.getPhotoUrl(updatedUser.profilePhotoId);
            userProfileStore.setUser(updatedUser);
            toastify.success("Sucessfully updated email adress");
            console.log(updatedUser);
        }
        else
        {
            console.log(response.error);
            toastify.error("Error while updating email adress");
        }
    }

  return (
    <div class="card border">
    <div class="card-header border-bottom">
        <h4 class="card-header-title">Update email</h4>
        <p class="mb-0">Your current email address is <span class="text-primary">{user.email}</span></p>
    </div>

    <div class="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label class="form-label">Enter your new email<span class="text-danger">*</span></label>
            <input {...register("email",{required: "MAIL_IS_REQUIRED"})} type="email" class="form-control" placeholder="Enter your email" />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
            <div class="text-end mt-3">
                <button type="submit" class="btn btn-primary mb-0">Save Email</button>
            </div>
        </form>
    </div>
</div>
  )
});

export default MyChangeMail;