﻿// <auto-generated />
using System;
using HemnetAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HemnetAPI.Migrations
{
    [DbContext(typeof(HemnetContext))]
    [Migration("20210416083739_updated_price")]
    partial class updated_price
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("HemnetAPI.Models.Brooker", b =>
                {
                    b.Property<int>("BrookerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("BrookerId");

                    b.ToTable("Brookers");
                });

            modelBuilder.Entity("HemnetAPI.Models.Coordinate", b =>
                {
                    b.Property<int>("CoordinateId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Latitude")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Longitude")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CoordinateId");

                    b.ToTable("Coordinates");
                });

            modelBuilder.Entity("HemnetAPI.Models.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("HemnetAPI.Models.HouseObject", b =>
                {
                    b.Property<int>("HouseObjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("BiArea")
                        .HasColumnType("int");

                    b.Property<int>("BrookerId")
                        .HasColumnType("int");

                    b.Property<int>("BuildYear")
                        .HasColumnType("int");

                    b.Property<int>("CoordinateId")
                        .HasColumnType("int");

                    b.Property<string>("Descriptions")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FormOfLease")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HousingType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Images")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("LivingArea")
                        .HasColumnType("int");

                    b.Property<int?>("PlotArea")
                        .HasColumnType("int");

                    b.Property<string>("Price")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Rooms")
                        .HasColumnType("int");

                    b.Property<DateTime>("ShowingDate")
                        .HasColumnType("datetime2");

                    b.HasKey("HouseObjectId");

                    b.HasIndex("BrookerId");

                    b.HasIndex("CoordinateId");

                    b.ToTable("HouseObjects");
                });

            modelBuilder.Entity("HemnetAPI.Models.RegOfIntrest", b =>
                {
                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<int>("HouseObjectId")
                        .HasColumnType("int");

                    b.HasKey("CustomerId", "HouseObjectId");

                    b.HasIndex("HouseObjectId");

                    b.ToTable("RegOfIntrests");
                });

            modelBuilder.Entity("HemnetAPI.Models.HouseObject", b =>
                {
                    b.HasOne("HemnetAPI.Models.Brooker", "Brooker")
                        .WithMany("HouseObjects")
                        .HasForeignKey("BrookerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HemnetAPI.Models.Coordinate", "Coordinate")
                        .WithMany("HouseObjects")
                        .HasForeignKey("CoordinateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Brooker");

                    b.Navigation("Coordinate");
                });

            modelBuilder.Entity("HemnetAPI.Models.RegOfIntrest", b =>
                {
                    b.HasOne("HemnetAPI.Models.Customer", "Customer")
                        .WithMany("RegOfIntrests")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HemnetAPI.Models.HouseObject", "HouseObject")
                        .WithMany("RegOfIntrests")
                        .HasForeignKey("HouseObjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");

                    b.Navigation("HouseObject");
                });

            modelBuilder.Entity("HemnetAPI.Models.Brooker", b =>
                {
                    b.Navigation("HouseObjects");
                });

            modelBuilder.Entity("HemnetAPI.Models.Coordinate", b =>
                {
                    b.Navigation("HouseObjects");
                });

            modelBuilder.Entity("HemnetAPI.Models.Customer", b =>
                {
                    b.Navigation("RegOfIntrests");
                });

            modelBuilder.Entity("HemnetAPI.Models.HouseObject", b =>
                {
                    b.Navigation("RegOfIntrests");
                });
#pragma warning restore 612, 618
        }
    }
}
