using Microsoft.EntityFrameworkCore.Storage;

using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DatabaseContext _databaseContext;

        public readonly ICountriesRepository CountriesRepository;
        public readonly ICitiesRepository CitiesRepository;
        public readonly IConditionsRepository ConditionRepository;
        public readonly IPhotosRepository PhotosRepository;
        public readonly IRideMilestonesRepository RideMilestonesRepository;
        public readonly IRideConditionsRepository RideConditionsRepository;
        public readonly IRidesRepository RidesRepository;
        public readonly IUserRideCommentsRepository UserRideCommentsRepository;
        public readonly IUserRidesRepository UserRidesRepository;
        public readonly IUsersRepository UsersRepository;
        public readonly IUserVehiclesRepository UserVehiclesRepository;
        public readonly IVehicleBrandsRepository VehicleBrandsRepository;
        public readonly IVehicleModelsRepository VehicleModelsRepository;
        public readonly IReportsRepository ReportsRepository;
        public readonly IReportTypesRepository ReportTypesRepository;
        public readonly ITravelPreferenceRepository TravelPreferenceRepository;
        public readonly ITravelPreferenceOptionRepository TravelPreferenceOptionRepository;
        public readonly IUserTravelPreferenceOptionRepository UserTravelPreferenceOptionRepository;
        public readonly IRecentSearchRepository RecentSearchRepository;

        public UnitOfWork(
            DatabaseContext databaseContext,
            ICountriesRepository countriesRepository,
            ICitiesRepository citiesRepository,
            IConditionsRepository conditionRepository,
            IPhotosRepository photosRepository,
            IRideMilestonesRepository rideMilestonesRepository,
            IRideConditionsRepository rideConditionsRepository,
            IRidesRepository ridesRepository,
            IUserRideCommentsRepository userRideCommentsRepository,
            IUserRidesRepository userRidesRepository,
            IUsersRepository usersRepository,
            IUserVehiclesRepository userVehiclesRepository,
            IVehicleBrandsRepository vehicleBrandsRepository,
            IVehicleModelsRepository vehicleModelsRepository,
            IReportsRepository reportsRepository,
            IReportTypesRepository reportTypesRepository,
            ITravelPreferenceRepository travelPreferenceRepository,
            ITravelPreferenceOptionRepository travelPreferenceOptionRepository,
            IUserTravelPreferenceOptionRepository userTravelPreferenceOptionRepository,
            IRecentSearchRepository recentSearchRepository)
        {
            _databaseContext = databaseContext;

            CountriesRepository = countriesRepository;
            CitiesRepository = citiesRepository;
            ConditionRepository = conditionRepository;
            PhotosRepository = photosRepository;
            RideMilestonesRepository = rideMilestonesRepository;
            RideConditionsRepository = rideConditionsRepository;
            RidesRepository = ridesRepository;
            UserRideCommentsRepository = userRideCommentsRepository;
            UserRidesRepository = userRidesRepository;
            UsersRepository = usersRepository;
            UserVehiclesRepository = userVehiclesRepository;
            VehicleBrandsRepository = vehicleBrandsRepository;
            VehicleModelsRepository = vehicleModelsRepository;
            ReportsRepository = reportsRepository;
            ReportTypesRepository = reportTypesRepository;
            RecentSearchRepository = recentSearchRepository;
            TravelPreferenceRepository= travelPreferenceRepository;
            TravelPreferenceOptionRepository = travelPreferenceOptionRepository;
            UserTravelPreferenceOptionRepository = userTravelPreferenceOptionRepository;
        }

        public async Task<IDbContextTransaction> BeginTransactionAsync(CancellationToken cancellationToken = default)
        {
            return await _databaseContext.Database.BeginTransactionAsync(cancellationToken);
        }

        public async Task CommitTransactionAsync(CancellationToken cancellationToken = default)
        {
            await _databaseContext.Database.CommitTransactionAsync(cancellationToken);
        }

        public async Task RollbackTransactionAsync(CancellationToken cancellationToken = default)
        {
            await _databaseContext.Database.RollbackTransactionAsync(cancellationToken);
        }

        public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return await _databaseContext.SaveChangesAsync(cancellationToken);
        }
    }
}
