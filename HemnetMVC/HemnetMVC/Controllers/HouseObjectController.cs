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
    public class HouseObjectController : Controller
    {
        // GET: HouseObjectController
        public async Task <ActionResult> Index()
        {
            IList<HouseObjectViewModel> houses = null;

            using (var client = new HttpClient())
            {
                var result = await client.GetAsync("http://localhost:58403/api/HouseObjects");

                if (result.IsSuccessStatusCode)
                {
                    houses = await result.Content.ReadAsAsync<IList<HouseObjectViewModel>>();

                }
                else
                {
                    return NotFound();
                }
            }
            return View(houses);
        }

        // GET: HouseObjectController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: HouseObjectController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: HouseObjectController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: HouseObjectController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: HouseObjectController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: HouseObjectController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: HouseObjectController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
