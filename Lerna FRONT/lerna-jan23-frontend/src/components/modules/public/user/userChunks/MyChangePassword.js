import React from 'react'
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import UsersService from '../../../../../data/services/UsersService';
import userProfileStore from '../../../../../data/stores/UserProfileStore';
import toastify from '../../../../../utils/toastify/toastify';

 const MyChangePassword=observer(() =>{
    const user=userProfileStore.user;
    const [passwordVisible,setPasswordVisible] = useState(false);


    const toggleVisibility = (e) =>
    {
        setPasswordVisible((previousVisibility) => !previousVisibility)
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    const onSubmit = async (data) =>
    {
        if (data.password===data.password2) {
            const response = await UsersService.edit({ ...user, password: data.password });

            if (response.isSuccess) {
                toastify.success("Password successfully updated.");
            }
            else
            {
                console.log(response.error);
                toastify.error("Failed to update password.");
            }
        }
        else
        {
            toastify.error("Confirm password must be identical.");
        }
    }

  return (
    <div class="card border">
    <div class="card-header border-bottom">
        <h4 class="card-header-title">Update Password</h4>
      
    </div>

    <form onSubmit={handleSubmit(onSubmit)} class="card-body">
        <div class="mb-3">
            <label class="form-label">Current password</label>
            <input {...register("oldPassword",{required:"Mandatory field"})} class="form-control" type={passwordVisible?"text":"password"} placeholder="Enter current password" />
            {errors.oldPassword && <span className="text-danger">{errors.oldPassword.message}</span>}
        </div>
        <div class="mb-3">
            <label class="form-label"> Enter new password</label>
            <div class="input-group">
                <input {...register("password",{required:"Mandatory field"})} class="form-control fakepassword" placeholder="Enter new password" type={passwordVisible?"text":"password"} id="psw-input" />
                <span class="input-group-text p-0 bg-transparent">
                    <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2" onClick={toggleVisibility}></i>
                </span>
            </div>
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
        </div>
        <div class="mb-3">
            <label class="form-label">Confirm new password</label>
            <input {...register("password2",{required: "MUST_CONFIRM_PASSWORD"})} class="form-control" type={passwordVisible?"text":"password"} placeholder="Confirm new password" />
            {errors.password2 && <span className="text-danger">{errors.password2.message}</span>}
        </div>

        <div class="text-end">
            <button class="btn btn-primary mb-0">Change Password</button>
        </div>
    </form>
</div>
  )});

export default MyChangePassword;