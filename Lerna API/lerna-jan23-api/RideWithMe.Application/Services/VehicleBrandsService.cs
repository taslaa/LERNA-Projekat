using AutoMapper;
using FluentValidation;

using RideWithMe.Core;
using RideWithMe.Application.Interfaces;
using RideWithMe.Infrastructure;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application
{
    public class VehicleBrandsService : BaseService<VehicleBrand, VehicleBrandDto, VehicleBrandUpsertDto, VehicleBrandSearchObject, IVehicleBrandsRepository>, IVehicleBrandsService
    {
        public VehicleBrandsService(IMapper mapper, IUnitOfWork unitOfWork, IValidator<VehicleBrandUpsertDto> validator) : base(mapper, unitOfWork, validator)
        {

        }
    }
}
