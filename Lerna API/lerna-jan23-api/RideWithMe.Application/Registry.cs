using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;

namespace RideWithMe.Application
{
    public static class Registry
    {
        public static void AddApplication(this IServiceCollection services)
        {
            services.AddScoped<ICitiesService, CitiesService>();
            services.AddScoped<ICountriesService, CountriesService>();
            services.AddScoped<IConditionsService, ConditionsService>();
            services.AddScoped<IRideMilestonesService, RideMilestonesService>();
            services.AddScoped<IPhotosService, PhotosService>();
            services.AddScoped<IRidesService, RidesService>();
            services.AddScoped<IRideConditionsService, RideConditionsService>();
            services.AddScoped<IUsersService, UsersService>();
            services.AddScoped<IUserRidesService, UserRidesService>();
            services.AddScoped<IUserRideCommentsService, UserRideCommentsService>();
            services.AddScoped<IUserVehiclesService, UserVehiclesService>();
            services.AddScoped<IVehicleBrandsService, VehicleBrandsService>();
            services.AddScoped<IVehicleModelsService, VehicleModelsService>();
            services.AddScoped<IReportsService, ReportsService>();
            services.AddScoped<IReportTypesService, ReportTypesService>();
            services.AddScoped<ITravelPreferenceService, TravelPreferenceService>();
            services.AddScoped<ITravelPreferenceOptionService, TravelPreferenceOptionService>();
            services.AddScoped<IUserTravelPreferenceOptionService, UserTravelPreferenceOptionService>();
            services.AddScoped<ICatalogFiltersService, CatalogFiltersService>();
            services.AddScoped<IRecentSearchService, RecentSearchService>();
        }

        public static void AddValidators(this IServiceCollection services)
        {
            services.AddScoped<IValidator<CityUpsertDto>, CityValidator>();
            services.AddScoped<IValidator<CountryUpsertDto>, CountryValidator>();
            services.AddScoped<IValidator<ConditionUpsertDto>, ConditionValidator>();
            services.AddScoped<IValidator<RideMilestoneUpsertDto>, RideMilestoneValidator>();
            services.AddScoped<IValidator<PhotoUpsertDto>, PhotoValidator>();
            services.AddScoped<IValidator<RideUpsertDto>, RideValidator>();
            services.AddScoped<IValidator<RideConditionUpsertDto>, RideConditionValidator>();
            services.AddScoped<IValidator<UserUpsertDto>, UserValidator>();
            services.AddScoped<IValidator<UserRideUpsertDto>, UserRideValidator>();
            services.AddScoped<IValidator<UserRideCommentUpsertDto>, UserRideCommentValidator>();
            services.AddScoped<IValidator<UserVehicleUpsertDto>, UserVehicleValidator>();
            services.AddScoped<IValidator<VehicleBrandUpsertDto>, VehicleBrandValidator>();
            services.AddScoped<IValidator<VehicleModelUpsertDto>, VehicleModelValidator>();
            services.AddScoped<IValidator<ReportTypeUpsertDto>, ReportTypeValidator>();
            services.AddScoped<IValidator<ReportUpsertDto>, ReportValidator>();
            services.AddScoped<IValidator<TravelPreferenceWithOptionsUpsertDto>, TravelPreferenceValidator>();
            services.AddScoped<IValidator<TravelPreferenceOptionUpsertDto>, TravelPreferenceOptionValidator>();
            services.AddScoped<IValidator<UserTravelPreferenceOptionUpsertDto>, UserTravelPreferenceOptionValidator>();
            services.AddScoped<IValidator<RecentSearchUpsertDto>, RecentSearchValidator>();
            services.AddScoped<IValidator<UserChangePasswordDto>, UserPasswordValidator>();

            // TODO: Add other validators
        }
    }
}
