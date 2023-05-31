using Microsoft.Extensions.DependencyInjection;

using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public static class Registry
    {
        public static void AddInfrastructure(this IServiceCollection services)
        {
            services.AddScoped<ICitiesRepository, CitiesRepository>();
            services.AddScoped<IConditionsRepository, ConditionsRepository>();
            services.AddScoped<ICountriesRepository, CountriesRepository>();
            services.AddScoped<IPhotosRepository, PhotosRepository>();
            services.AddScoped<IRideMilestonesRepository, RideMilestonesRepository>();
            services.AddScoped<IRideConditionsRepository, RideConditionsRepository>();
            services.AddScoped<IRidesRepository, RidesRepository>();
            services.AddScoped<IUserRidesRepository, UserRidesRepository>();
            services.AddScoped<IUserRideCommentsRepository, UserRideCommentsRepository>();
            services.AddScoped<IUserVehiclesRepository, UserVehiclesRepository>();
            services.AddScoped<IUsersRepository, UsersRepository>();
            services.AddScoped<IVehicleBrandsRepository, VehicleBrandsRepository>();
            services.AddScoped<IVehicleModelsRepository, VehicleModelsRepository>();
            services.AddScoped<IReportsRepository, ReportsRepository>();
            services.AddScoped<IReportTypesRepository, ReportTypesRepository>();
            services.AddScoped<ITravelPreferenceRepository, TravelPreferenceRepository>();
            services.AddScoped<ITravelPreferenceOptionRepository, TravelPreferenceOptionRepository>();
            services.AddScoped<IUserTravelPreferenceOptionRepository, UserTravelPreferenceOptionRepository>();
            services.AddScoped<IRecentSearchRepository, RecentSearchRepository>();

            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }
    }
}
