using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HemnetMVC.Models
{
    public class CoordinateViewModel
    {
        [Key]
        public int CoordinateId { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }
}
