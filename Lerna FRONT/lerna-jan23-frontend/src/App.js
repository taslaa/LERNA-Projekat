import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientLayout from "./components/layout/ClientLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import AdminLayout from "./components/layout/AdminLayout";
import CountriesPage from "./components/modules/admin/countries/CountriesPage";
import CountryAddPage from "./components/modules/admin/countries/CountryAddPage";
import CountryEditPage from "./components/modules/admin/countries/CountryEditPage";
import CitiesPage from "./components/modules/admin/cities/CitiesPage";
import CityAddPage from "./components/modules/admin/cities/CityAddPage";
import CityEditPage from "./components/modules/admin/cities/CityEditPage";
import SignUpPage from "./components/modules/public/sign-up/SignUpPage";
import SignInPage from "./components/modules/public/sign-in/SignInPage";
import DashboardPage from "./components/modules/admin/dashboard/DashboardPage";
import VehicleBrandsPage from "./components/modules/admin/vehicleBrands/VehicleBrandsPage";
import VehicleBrandAddPage from "./components/modules/admin/vehicleBrands/VehicleBrandAddPage";
import VehicleBrandEditPage from "./components/modules/admin/vehicleBrands/VehicleBrandEditPage";
import ConditionsPage from "./components/modules/admin/conditions/ConditionsPage";
import ConditionAddPage from "./components/modules/admin/conditions/ConditionAddPage";
import ConditionEditPage from "./components/modules/admin/conditions/ConditionEditPage";
import ReportTypesPage from "./components/modules/admin/reportTypes/ReportTypesPage";
import ReportTypeAddPage from "./components/modules/admin/reportTypes/ReportTypeAddPage";
import ReportTypeEditPage from "./components/modules/admin/reportTypes/ReportTypeEditPage";
import VehicleModelsPage from "./components/modules/admin/vehiclemodels/VehicleModelsPage";
import VehilceModelAddPage from "./components/modules/admin/vehiclemodels/VehicleModelAddPage";
import VehicleModelEditPage from "./components/modules/admin/vehiclemodels/VehicleModelEditPage";

import TravelPreferencesPage from "./components/modules/admin/travelPreferences/TravelPreferencesPage";
import TravelPreferenceAddPage from "./components/modules/admin/travelPreferences/TravelPreferenceAddPage";
import TravelPreferenceEditPage from "./components/modules/admin/travelPreferences/TravelPreferenceEditPage";
import CatalogFilter from "./components/modules/public/catalog-filter/CatalogFilter";
import ReportsPage from "./components/modules/admin/reports/ReportsPage";
import ReportAddPage from "./components/modules/admin/reports/ReportAddPage";
import HomePage from "./components/modules/public/home/HomePage";

import UsersPage from "./components/modules/admin/users/UsersPage";
import UserAddPage from "./components/modules/admin/users/UserAddPage";
import UserEditPage from "./components/modules/admin/users/UserEditPage";

import DriverProfilePage from "./components/modules/public/driver/DriverProfilePage";
import DriverInfoPage from "./components/modules/public/driverInfo/DriverInfoPage";
import DriverInfoDashboard from "./components/modules/public/driverInfo/DriverInfoDashboard";
import DriverInfoRatings from "./components/modules/public/driverInfo/DriverInfoRatings";
import MyProfilePage from "./components/modules/public/user/MyProfilePage";
import Page404 from "./components/layout/components/Page404";
import CatalogPageMainComponent from "./components/modules/public/catalog-page/CatalogPageMainComponent";
import RideAddPage from "./components/modules/public/rides/RideAddPage";
import RideEditPage from "./components/modules/public/rides/RideEditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout></ClientLayout>}>
        <Route index element={<HomePage />}></Route>
        <Route path="driverProfile/:driverId" element={<DriverProfilePage/>}></Route>
        <Route path="rides" element={<CatalogFilter/>}></Route>
        <Route path="rides/catalogpagemain" element={<CatalogPageMainComponent/>}></Route>
        <Route path="driverInfo" >
          <Route path=":driverId" element={<DriverInfoPage></DriverInfoPage>}>
            <Route index element={<DriverInfoDashboard/>} ></Route>
            <Route path="ratings" element={<DriverInfoRatings/>} ></Route>
          </Route>
        </Route>
        <Route path="404" element={<Page404></Page404>}></Route>
        <Route path="filter" element={<CatalogFilter />}></Route>
        <Route path="my-profile" element={<MyProfilePage/>}></Route>
      </Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles="Administrator,Passenger">
            <AdminLayout></AdminLayout>
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />}></Route>
        <Route path="countries" element={<CountriesPage />}></Route>
        <Route path="countries/create" element={<CountryAddPage />}></Route>
        <Route path="countries/edit/:id" element={<CountryEditPage />}></Route>
        <Route path="cities" element={<CitiesPage />}></Route>
        <Route path="cities/create" element={<CityAddPage />}></Route>
        <Route path="cities/edit/:id" element={<CityEditPage />}></Route>
        <Route path="vehicleBrands" element={<VehicleBrandsPage />}></Route>
        <Route path="vehicleBrands/create" element={<VehicleBrandAddPage />}></Route>
        <Route path="vehicleBrands/edit/:id" element={<VehicleBrandEditPage />}></Route>
        <Route path="conditions" element={<ConditionsPage />}></Route>
        <Route path="conditions/create" element={<ConditionAddPage />}></Route>
        <Route path="conditions/edit/:id" element={<ConditionEditPage />}></Route>
        <Route path="reportTypes" element={<ReportTypesPage />}></Route>
        <Route path="reportTypes/create" element={<ReportTypeAddPage />}></Route>
        <Route path="reportTypes/edit/:id" element={<ReportTypeEditPage />}></Route>
        <Route path="vehicleModels" element={<VehicleModelsPage />}></Route>
        <Route path="vehicleModels/create" element={<VehilceModelAddPage />}></Route>
        <Route path="vehicleModels/edit/:id" element={<VehicleModelEditPage />}></Route>
        <Route path="travelPreferences" element={<TravelPreferencesPage />}></Route>
        <Route path="travelPreferences/create" element={<TravelPreferenceAddPage />}></Route>
        <Route path="travelPreferences/edit/:id" element={<TravelPreferenceEditPage />}></Route>
        <Route path="users" element={<UsersPage />}></Route>
        <Route path="users/create" element={<UserAddPage />}></Route>
        <Route path="users/edit/:id" element={<UserEditPage />}></Route>
        <Route path="reports" element={<ReportsPage />}></Route>
        <Route path="reports/create" element={<ReportAddPage />}></Route>

      </Route>
      <Route path="/rides/create" element={<RideAddPage />}></Route>
      <Route path="/rides/edit/:id" element={<RideEditPage />}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      
     
    </Routes>
  );
}

export default App;