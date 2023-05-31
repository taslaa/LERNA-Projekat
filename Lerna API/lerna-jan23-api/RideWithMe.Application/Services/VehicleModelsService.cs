using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class VehicleModelsService : BaseService<VehicleModel, VehicleModelDto, VehicleModelUpsertDto, VehicleModelSearchObject, IVehicleModelsRepository>, IVehicleModelsService
    {
        public VehicleModelsService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<VehicleModelUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {

        }
    }
}