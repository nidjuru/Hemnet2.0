using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HemnetAPI.Data;
using HemnetAPI.Models;

namespace HemnetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HouseObjectsController : ControllerBase
    {
        private readonly HemnetContext _context;

        public HouseObjectsController(HemnetContext context)
        {
            _context = context;
        }

        // GET: api/HouseObjects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HouseObject>>> GetHouseObjects()
        {
            return await _context.HouseObjects.Include(b => b.Brooker).Include(c => c.Coordinate).ToListAsync();
        }

        // GET: api/HouseObjects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HouseObject>> GetHouseObject(int id)
        {
            var houseObject = await _context.HouseObjects.FindAsync(id);
            houseObject.Brooker = await _context.Brookers.FirstOrDefaultAsync(brooker => brooker.BrookerId == houseObject.BrookerId);
            houseObject.Coordinate = await _context.Coordinates.FirstOrDefaultAsync(coordinate => coordinate.CoordinateId == houseObject.CoordinateId);

            if (houseObject == null)
            {
                return NotFound();
            }

            return houseObject;
        }

        // PUT: api/HouseObjects/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHouseObject(int id, HouseObject houseObject)
        {
            if (id != houseObject.HouseObjectId)
            {
                return BadRequest();
            }

            _context.Entry(houseObject).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HouseObjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/HouseObjects
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HouseObject>> PostHouseObject(HouseObject houseObject)
        {
            _context.HouseObjects.Add(houseObject);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHouseObject", new { id = houseObject.HouseObjectId }, houseObject);
        }

        // DELETE: api/HouseObjects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHouseObject(int id)
        {
            var houseObject = await _context.HouseObjects.FindAsync(id);
            if (houseObject == null)
            {
                return NotFound();
            }

            _context.HouseObjects.Remove(houseObject);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HouseObjectExists(int id)
        {
            return _context.HouseObjects.Any(e => e.HouseObjectId == id);
        }
    }
}
