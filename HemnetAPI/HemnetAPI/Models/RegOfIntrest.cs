using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HemnetAPI.Models
{
    public class RegOfIntrest
    {
        public int HouseObjectId { get; set; }
        public int CustomerId { get; set; }

        public  Customer Customer { get; set; }
        public HouseObject HouseObject { get; set; }
    }
}
