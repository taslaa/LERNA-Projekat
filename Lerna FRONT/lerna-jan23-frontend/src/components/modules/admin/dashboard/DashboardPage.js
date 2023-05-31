import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import ReportsService from "../../../../data/services/ReportsService";
import UsersService from "../../../../data/services/UsersService";
import RidesService from "../../../../data/services/RidesService";
import UserRidesService from "../../../../data/services/UserRidesService";

export default function DashboardPage() {
  const [totalNewReports, setTotalNewReports] = useState();
  const [totalUsers, setTotalUsers] = useState();
  const [totalActiveRides, setTotalActiveRides] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [topUsers, setTopUsers] = useState();


  useEffect(() => {
    const fetchAndSetTotalNewReports = async () => {
      const response = await ReportsService.getCount("WaitingForReview");
      setTotalNewReports(response.data.count);
    }
    const fetchAndSetTotalUsers = async () => {
      const response = await UsersService.getTotalUsers();
      setTotalUsers(response.data.count);
    }
    const fetchAndSetTotalActiveRides = async () => {
      const response = await RidesService.getCount(new Date());
      setTotalActiveRides(response.data.count);
    }
    const fetchAndSetTotalIncome = async () => {
      const response = await UserRidesService.getTotalIncome();
      setTotalIncome(response.data.count);
    }
    const fetchAndSetTopUsers = async () => {
      const response = await UsersService.getTopUsers(5);
      setTopUsers(response.data);
    }
    fetchAndSetTotalNewReports();
    fetchAndSetTotalUsers();
    fetchAndSetTotalActiveRides();
    fetchAndSetTotalIncome();
    fetchAndSetTopUsers();
  }, [])

  const { t } = useTranslation();
  return (
    <>
      <h1 className="h3 mb-3 mb-sm-4">{t("DASHBOARD")}</h1>
      <div className="row g-4 mb-5">
        <div className="col-md-6 col-xxl-3">
          <div className="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-0">{totalUsers}</h4>
                <span className="h6 fw-light mb-0">Total Users</span>
              </div>
              <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i className="fa-solid fa-users fa-fw"></i></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card card-body bg-success bg-opacity-10 border border-success border-opacity-25 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-0">BAM {totalIncome}</h4>
                <span className="h6 fw-light mb-0">Total Incomes</span>
              </div>
              <div className="icon-lg rounded-circle bg-success text-white mb-0"><i className="fa-solid fa-hand-holding-dollar fa-fw"></i></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card card-body bg-primary bg-opacity-10 border border-primary border-opacity-25 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-0">{totalActiveRides}</h4>
                <span className="h6 fw-light mb-0">Total Active Rides</span>
              </div>
              <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fa-solid fa-car fa-fw"></i></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card card-body bg-info bg-opacity-10 border border-info border-opacity-25 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mb-0">{totalNewReports}</h4>
                <span className="h6 fw-light mb-0">Total New Reports</span>
              </div>
              <div className="icon-lg rounded-circle bg-info text-white mb-0"><i className="fa-solid fa-user fa-fw"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow h-100">
        <div className="card-header border-bottom d-flex justify-content-between align-items-center p-3">
          <h5 className="card-header-title">Top Users</h5>
          <a href="#" className="btn btn-link p-0 mb-0">View all</a>
        </div>
        <div className="card-body p-3">
          {topUsers && topUsers.map((user, index) => (
            <>
              <div key={index} className="d-flex justify-content-between align-items-center">
                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                  <div className="flex-shrink-0">
                    <img src="" className="rounded h-60px" alt="" />
                  </div>
                  <div className="ms-sm-3 mt-2 mt-sm-0">
                    <h6 className="mb-1">{user.firstName} {user.lastName}</h6>
                    <ul className="list-inline smaller mb-0">
                      {[...Array(Math.floor(user.ridesAverageRating))].map((x, i) => (
                        <li key={i} className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                      ))}
                      {(user.ridesAverageRating - Math.floor(user.ridesAverageRating)) >= 0.5 && [...Array(1)].map((x, i) => (
                        <li key={i} className="list-inline-item me-0"><i className="fas fa-star-half-stroke text-warning"></i></li>
                      ))}
                      {(user.ridesAverageRating - Math.floor(user.ridesAverageRating)) == 0.5 ? [...Array(Math.floor(5 - user.ridesAverageRating))].map((x, i) => (
                        <li key={i} className="list-inline-item me-0"><i className="far fa-star text-warning"></i></li>
                      )) :
                        [...Array(Math.round(5 - user.ridesAverageRating))].map((x, i) => (
                          <li key={i} className="list-inline-item me-0"><i className="far fa-star text-warning"></i></li>
                        ))}
                      <li className="list-inline-item me-0">({user.ridesRatingCount})</li>
                    </ul>
                  </div>
                </div>
                <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
