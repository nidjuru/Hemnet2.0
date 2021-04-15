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
    public class CoordinatesController : ControllerBase
    {
        private readonly HemnetContext _context;

        public CoordinatesController(HemnetContext context)
        {
            _context = context;
        }

        // GET: api/Coordinates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Coordinate>>> GetCoordinates()
        {
            return await _context.Coordinates.ToListAsync();
        }

        // GET: api/Coordinates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Coordinate>> GetCoordinate(int id)
        {
            var coordinate = await _context.Coordinates.FindAsync(id);

            if (coordinate == null)
            {
                return NotFound();
            }

            return coordinate;
        }

        // PUT: api/Coordinates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCoordinate(int id, Coordinate coordinate)
        {
            if (id != coordinate.CoordinateId)
            {
                return BadRequest();
            }

            _context.Entry(coordinate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoordinateExists(id))
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

        // POST: api/Coordinates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Coordinate>> PostCoordinate(Coordinate coordinate)
        {
            _context.Coordinates.Add(coordinate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCoordinate", new { id = coordinate.CoordinateId }, coordinate);
        }

        // DELETE: api/Coordinates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCoordinate(int id)
        {
            var coordinate = await _context.Coordinates.FindAsync(id);
            if (coordinate == null)
            {
                return NotFound();
            }

            _context.Coordinates.Remove(coordinate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CoordinateExists(int id)
        {
            return _context.Coordinates.Any(e => e.CoordinateId == id);
        }
    }
}
