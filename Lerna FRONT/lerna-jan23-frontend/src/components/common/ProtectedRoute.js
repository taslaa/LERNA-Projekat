import { Navigate } from "react-router";
import AuthService from "../../data/services/AuthService";
import userProfileStore from "../../data/stores/UserProfileStore";
import { useEffect, useState } from "react";
import UsersService from "../../data/services/UsersService";
import { httpSmartClient } from "../../config/httpClient";

function ProtectedRoute({ roles, children }) {
  const currentUser = AuthService.getCurrentUser();
  const rolesArray = roles ? roles.split(",") : [];

  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const fetch=async()=>{
    let currentUser = AuthService.getCurrentUser();
      let response=await UsersService.getById(currentUser.Id);
      if (response.isSuccess) {
        let user=response.data;
        user.profilePhotoUrl= httpSmartClient.getPhotoUrl(user.profilePhotoId);
        userProfileStore.setUser(user);
        setIsLoading(false);
      }
      else
      {
        console.log(response.error);
      }
    }
    fetch();
  }, [])

  if(isLoading){
		return (
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
        </div>)
	}

  if (currentUser && (roles.length === 0 || rolesArray.includes(currentUser.Role))) {
    return children;
  } else {
    return <Navigate to="/sign-in"></Navigate>;
  }
}
export default ProtectedRoute;
