using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HemnetMVC.Models
{
    public class RegOfIntrestViewModel
    {
        public int HouseObjectId { get; set; }
        public int CustomerId { get; set; }

        public CustomerViewModel Customer { get; set; }
        public HouseObjectViewModel HouseObject { get; set; }
    }
}
