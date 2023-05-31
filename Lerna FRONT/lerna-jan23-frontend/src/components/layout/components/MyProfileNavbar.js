import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../../../data/services/AuthService";
import { observer } from "mobx-react-lite";
import userProfileStore from "../../../data/stores/UserProfileStore";

const MyProfileNavbar = observer(() => {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();
  let user = userProfileStore.user;

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  const signOut = () => {
    AuthService.signOut();
    navigate("/sign-in");
  };

  return (
    <li className="nav-item ms-3 dropdown">
      <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
        <img className="avatar-img rounded-5" src={user.profilePhotoId!=null ? user.profilePhotoUrl : "/assets/images/avatar/01.jpg"} alt="avatar" />
      </a>

      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
        <li className="px-3 mb-3">
          <div className="d-flex align-items-center" style={{cursor: "pointer"}} onClick={()=>navigate(`/my-profile`)}>
            <div className="avatar me-3">
              <img className="avatar-img rounded-circle shadow" src={user.profilePhotoId!=null ? user.profilePhotoUrl : "/assets/images/avatar/01.jpg"} alt="avatar"  />
            </div>
            <div>
              <a className="h6 mt-2 mt-sm-0" href="#">
                {currentUser && currentUser.FirstName} {currentUser && currentUser.LastName}
              </a>
              <p className="small m-0">{currentUser && currentUser.Email}</p>
            </div>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item bg-danger-soft-hover" href="#" onClick={signOut}>
            <i className="bi bi-power fa-fw me-2"></i>Sign Out
          </a>
        </li>
      </ul>
    </li>
  );
});
export default MyProfileNavbar;