using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HemnetAPI.Models
{
        public class Customer
        {
            [Key]
            public int CustomerId { get; set; }
            [Required]
            [MaxLength(50)]
            public string FirstName { get; set; }
            [Required]
            [MaxLength(50)]
            public string LastName { get; set; }
            [EmailAddress]
            public string Email { get; set; }

            public ICollection<RegOfIntrest> RegOfIntrests { get; set; }
        }
}
