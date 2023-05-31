using FluentValidation.Results;

using RideWithMe.Core;

namespace RideWithMe.Application.Mapping
{
    public class ValidationErrorProfile : BaseProfile
    {
        public ValidationErrorProfile()
        {
            CreateMap<ValidationFailure, ValidationError>();
        }
    }
}