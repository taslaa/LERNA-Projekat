using FluentValidation;

using RideWithMe.Core;

namespace RideWithMe.Application
{
    public class UserValidator : AbstractValidator<UserUpsertDto>
    {
        public UserValidator()
        {
            RuleFor(u => u.FirstName).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(u => u.LastName).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
            RuleFor(u => u.Email).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty)
                                 .EmailAddress().WithErrorCode(ErrorCodes.InvalidValue);

            RuleFor(u => u.Password)
                .NotEmpty()
                .NotNull()
                .MinimumLength(8)
                .Matches(@"[A-Z]+")
                .Matches(@"[a-z]+")
                .Matches(@"[0-9]+")
                .WithErrorCode(ErrorCodes.InvalidValue)
                .When(u => u.Id == null || u.Password != null);

            RuleFor(u => u.PhoneNumber).NotEmpty().WithErrorCode(ErrorCodes.NotEmpty);
       
            RuleFor(u => u.Gender).IsInEnum().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(u => u.BirthDate).NotNull().WithErrorCode(ErrorCodes.NotNull);
            RuleFor(u => u.ProfilePhoto)
                .MustAsync(async (profilePhoto, cancellationToken) => await ValidatePhotoSizeAsync(profilePhoto, cancellationToken))
                .WithErrorCode(ErrorCodes.InvalidSize).When(u => u.ProfilePhoto != null)
                .MustAsync(async (profilePhoto, cancellationToken) => await ValidatePhotoTypeAsync(profilePhoto.ContentType, cancellationToken))
                .WithErrorCode(ErrorCodes.InvalidType).When(u => u.ProfilePhoto != null);
        }

        protected async Task<bool> ValidatePhotoSizeAsync(PhotoUpsertDto profilePhoto, CancellationToken cancellationToken = default)
        {
            var fileSize = profilePhoto.Data.Length;
            if (fileSize <= 3145728)
                return true;
            else
                return false;
        }


        protected async Task<bool> ValidatePhotoTypeAsync(string contentType, CancellationToken cancellationToken = default)
        {
            var validExtensions = new string[] { "image/jpeg", "image/jpg", "image/png", "image/gif" };
            return validExtensions.Contains(contentType);
        }
    }
}
