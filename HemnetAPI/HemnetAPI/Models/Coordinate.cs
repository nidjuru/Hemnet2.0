using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HemnetAPI.Models
{
    public class Coordinate
    {

        [Key]
        public int CoordinateId { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }

        public ICollection<HouseObject> HouseObjects { get; set; }
    }
}

