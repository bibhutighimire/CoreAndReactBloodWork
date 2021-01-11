using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreAndReact.Models;

namespace CoreAndReact.Controllers
{
    [Route("BloodWork")]
    [ApiController]
    public class BloodWorksAPIController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BloodWorksAPIController(ApplicationDbContext context)
        {
            _context = context;
        }
        //https://localhost:44307/api/BloodWorksAPI
        // GET: api/BloodWorksAPI
        [HttpGet("API/All")]
        public List<BloodWork> GetBloodWork()
        {

            var listofbloodworks = _context.BloodWork.ToList();
            return listofbloodworks;
        }

        // GET: api/BloodWorksAPI/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BloodWork>> GetBloodWork(int id)
        {
            var bloodWork = await _context.BloodWork.FindAsync(id);

            if (bloodWork == null)
            {
                return NotFound();
            }

            return bloodWork;
        }

        // PUT: api/BloodWorksAPI/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBloodWork(int id, BloodWork bloodWork)
        {
            if (id != bloodWork.BloodWorkID)
            {
                return BadRequest();
            }

            _context.Entry(bloodWork).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BloodWorkExists(id))
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

        // POST: api/BloodWorksAPI
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BloodWork>> PostBloodWork(BloodWork bloodWork)
        {
            _context.BloodWork.Add(bloodWork);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBloodWork", new { id = bloodWork.BloodWorkID }, bloodWork);
        }

        // DELETE: api/BloodWorksAPI/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBloodWork(int id)
        {
            var bloodWork = await _context.BloodWork.FindAsync(id);
            if (bloodWork == null)
            {
                return NotFound();
            }

            _context.BloodWork.Remove(bloodWork);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BloodWorkExists(int id)
        {
            return _context.BloodWork.Any(e => e.BloodWorkID == id);
        }
    }
}
