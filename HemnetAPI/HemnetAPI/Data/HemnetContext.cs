using HemnetAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HemnetAPI.Data
{
    public class HemnetContext : DbContext
    {
        public HemnetContext(DbContextOptions<HemnetContext> options) : base(options)
        {
        }

        public DbSet<Brooker> Brookers { get; set; }
        public DbSet<Coordinate> Coordinates { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<HouseObject> HouseObjects { get; set; }
        public DbSet<RegOfIntrest> RegOfIntrests { get; set; }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<RegOfIntrest>()
                .HasKey(ba => new { ba.CustomerId, ba.HouseObjectId });

            modelbuilder.Entity<RegOfIntrest>()
                .HasOne(ba => ba.Customer)
                .WithMany(a => a.RegOfIntrests)
                .HasForeignKey(ba => ba.CustomerId);

            modelbuilder.Entity<RegOfIntrest>()
                .HasOne(ba => ba.HouseObject)
                .WithMany(b => b.RegOfIntrests)
                .HasForeignKey(ba => ba.HouseObjectId);
        }

    }
}
