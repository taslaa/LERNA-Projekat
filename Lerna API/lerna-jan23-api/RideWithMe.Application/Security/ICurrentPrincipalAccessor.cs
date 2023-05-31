using System.Security.Claims;

namespace RideWithMe.Application
{
    public interface ICurrentPrincipalAccessor
    {
        ClaimsPrincipal Principal { get; }
    }
}
