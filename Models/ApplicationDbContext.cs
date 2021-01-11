using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAndReact.Models
{
    public class ApplicationDbContext:DbContext
    {
        public DbSet<BloodWork> BloodWork { get; set; }

        public ApplicationDbContext()
           : base()
        {
        }

        public ApplicationDbContext(DbContextOptions options)
           : base(options)
        {
        }
    }
}
