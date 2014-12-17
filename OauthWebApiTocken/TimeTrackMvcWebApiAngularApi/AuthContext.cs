

namespace TimeTrackMvcWebApiAngularApi
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Data.Entity;
    using TimeTrackMvcWebApiAngularApi.Entities;

    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext()
            : base("AuthContext")
        {

        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}