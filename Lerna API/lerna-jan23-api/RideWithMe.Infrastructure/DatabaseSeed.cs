using Microsoft.EntityFrameworkCore;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public partial class DatabaseContext
    {
        private readonly DateTime _dateTime = new(2023, 2, 1, 0, 0, 0, 0, DateTimeKind.Local);

        private void SeedData(ModelBuilder modelBuilder)
        {
            SeedCountries(modelBuilder);
            SeedCities(modelBuilder);
            SeedUsers(modelBuilder);
            SeedVehicleBrands(modelBuilder);
            SeedVehicleModels(modelBuilder);
            SeedReportTypes(modelBuilder);
            SeedRides(modelBuilder);
            SeedRideMilestones(modelBuilder);
            SeedUserVehicle(modelBuilder);
        }


        private void SeedCountries(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Country>().HasData(
                new()
                {
                    Id = 1,
                    Name = "Bosnia and Herzegovina",
                    Abbreviation = "BIH",
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 2,
                    Name = "Croatia",
                    Abbreviation = "HR",
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 3,
                    Name = "Serbia",
                    Abbreviation = "SRB",
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 4,
                    Name = "Montenegro",
                    Abbreviation = "CG",
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 5,
                    Name = "Slovenia",
                    Abbreviation = "SLO",
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 6,
                    Name = "Austria",
                    Abbreviation = "AT",
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                });
        }

        private void SeedCities(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<City>().HasData(
                new()
                {
                    Id = 1,
                    Name = "Mostar",
                    ZipCode = "88000",
                    CountryId = 1,
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 2,
                    Name = "Sarajevo",
                    ZipCode = "77000",
                    CountryId = 1,
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 3,
                    Name = "Zenica",
                    ZipCode = "72000",
                    CountryId = 1,
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                });
        }

        private void SeedUsers(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    FirstName = "Site",
                    LastName = "Admin",
                    Email = "site.admin@ridewithme.com",
                    Role = Role.Administrator,
                    Gender= Gender.Male,
                    PasswordHash = "b4I5yA4Mp+0Pg1C3EsKU17sS13eDExGtBjjI07Vh/JM=", //Plain text: test
                    PasswordSalt = "1wQEjdSFeZttx6dlvEDjOg==",
                    PhoneNumber = "38761123456",
                    IsVerified = true,
                    IsActive = true,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                });
        }

        private void SeedVehicleBrands(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleBrand>().HasData(
                new()
                {
                    Id = 1,
                    Name = "Volkswagen",
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 2,
                    Name = "Audi",
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 3,
                    Name = "Mercedes",
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                });
        }

        private void SeedVehicleModels(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleModel>().HasData(
                new()
                {
                    Id = 1,
                    Name = "Golf MK 8",
                    VehicleType = VehicleType.Hatchback,
                    VehicleBrandId = 1,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 2,
                    Name = "Jetta",
                    VehicleType = VehicleType.Hatchback,
                    VehicleBrandId = 1,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 3,
                    Name = "Arteon",
                    VehicleType = VehicleType.Hatchback,
                    VehicleBrandId = 1,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 4,
                    Name = "A3",
                    VehicleType = VehicleType.Hatchback,
                    VehicleBrandId = 2,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 5,
                    Name = "A4",
                    VehicleType = VehicleType.Hatchback,
                    VehicleBrandId = 2,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 6,
                    Name = "A5",
                    VehicleType = VehicleType.Hatchback,
                    VehicleBrandId = 2,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 7,
                    Name = "GLA 250 SUV",
                    VehicleType = VehicleType.SUV,
                    VehicleBrandId = 3,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 8,
                    Name = "CLA Coupe",
                    VehicleType = VehicleType.Hatchback,
                    VehicleBrandId = 3,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                });
        }

        private void SeedReportTypes(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ReportType>().HasData(
                new()
                {
                    Id = 1,
                    Name = "Scam activity",
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 2,
                    Name = "Suspicious activity",
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 3,
                    Name = "Inappropriate content",
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 4,
                    Name = "Other",
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                });
        }
        private void SeedUserVehicle(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserVehicle>().HasData(
                new()
                {
                    Id = 1,
                    Color="Blue",
                    LicensePlateNumber="1234",
                    ManufactureYear=2019,
                    CountryId=1,
                    UserId=1,
                    VehicleModelId=1,
                    Notes = "Nesto",
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                   new()
                   {
                       Id = 2,
                       Color = "Red",
                       LicensePlateNumber = "1234",
                       ManufactureYear = 2019,
                       CountryId = 1,
                       UserId = 1,
                       VehicleModelId = 1,
                       Notes = "Nesto",
                       CreatedAt = _dateTime,
                       ModifiedAt = null
                   }
                ); 
        }

        private void SeedRides(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ride>().HasData(
                new()
                {
                    Id = 1,
                    Price = 50,
                    StartDateTime = _dateTime,
                    EndDateTime = _dateTime,
                    MaxPassengersCount = 3,
                    PaymentType = PaymentType.Card,
                    CommunicationType = CommunicationType.InPerson,
                    DriverVehicleId = 1,
                    Notes = "Nesto",
                    DriverId = 1,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 2,
                    Price = 100,
                    StartDateTime = _dateTime,
                    EndDateTime = _dateTime,
                    MaxPassengersCount = 2,
                    PaymentType = PaymentType.Cash,
                    CommunicationType = CommunicationType.InPerson,
                    DriverVehicleId = 1,
                    Notes = "Nesto",
                    DriverId = 1,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 3,
                    Price = 70,
                    StartDateTime = _dateTime,
                    EndDateTime = _dateTime,
                    MaxPassengersCount = 1,
                    PaymentType = PaymentType.Card,
                    CommunicationType = CommunicationType.System,
                    DriverVehicleId = 1,
                    Notes = "Nesto",
                    DriverId = 1,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                }); ;
        }

        private void SeedRideMilestones(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RideMilestone>().HasData(
                new()
                {
                    Id = 1,
                    LocationName = "Stanica br. 50",
                    Type = RideMilestoneType.Start,
                    DateTime = _dateTime,
                    Notes = "Kod ulaza",
                    Order = 0,
                    Price = 0,
                    RideId = 1,
                    CityId =1,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                },
                new()
                {
                    Id = 2,
                    LocationName = "Marsala Tita bb",
                    Type = RideMilestoneType.Stop,
                    DateTime = _dateTime,
                    Notes = "Kod stanice",
                    Order = 1,
                    Price = 30,
                    RideId = 1,
                    CityId = 2,
                    CreatedAt = _dateTime,
                    ModifiedAt = null

                },
                new()
                {
                    Id = 3,
                    LocationName = "Glavni trg",
                    Type = RideMilestoneType.End,
                    DateTime = _dateTime,
                    Notes = "Prekoputa doma",
                    Order = 2,
                    Price = 20,
                    RideId = 1,
                    CityId = 3,
                    CreatedAt = _dateTime,
                    ModifiedAt = null
                });
        }
    }
}
