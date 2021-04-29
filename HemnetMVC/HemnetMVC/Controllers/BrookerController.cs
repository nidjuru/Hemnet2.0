using HemnetMVC.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace HemnetMVC.Controllers
{
    public class BrookerController : Controller
    {
        // GET: BrookerController
        public async Task<ActionResult> Brookers()
        {
            IList<BrookerViewModel> houses = null;

            using (var client = new HttpClient())
            {
                var result = await client.GetAsync("http://localhost:58403/api/Brookers");

                if (result.IsSuccessStatusCode)
                {
                    houses = await result.Content.ReadAsAsync<IList<BrookerViewModel>>();
                }
                else
                {
                    return NotFound();
                }
            }
            return View(houses.ToList());
        }
    }
}
