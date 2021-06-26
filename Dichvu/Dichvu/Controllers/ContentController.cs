using DichvuLibrary.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dichvu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentController : Controller
    {
        private readonly IContent _contentRepository;

        public ContentController(IContent contenttRepository)
        {
            _contentRepository = contenttRepository;
        }
        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> List()
        {
            try
            {
                var work = await _contentRepository.List(3);
                if (work == null)
                {
                    return NotFound();
                }

                return Ok(work);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpGet("listbycategory")]
        public async Task<IActionResult> listbycategory1(int branchcode)
        {
            try
            {
                var work = await _contentRepository.Listbycategory(new List<int> { 1 });
                if (work == null)
                {
                    return NotFound();
                }

                return Ok(work);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpGet("listbycategoryins")]
        public async Task<IActionResult> listbycategoryins(int branchcode)
        {
            try
            {
                var work = await _contentRepository.Listbycategory(new List<int> { 2 });
                if (work == null)
                {
                    return NotFound();
                }

                return Ok(work);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
