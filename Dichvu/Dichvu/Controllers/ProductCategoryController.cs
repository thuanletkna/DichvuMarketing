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
    public class ProductCategoryController : Controller
    {
        
        private readonly IProductCategory productCategory;
        public ProductCategoryController(IProductCategory _productCategory)
        {
            productCategory = _productCategory;
        }
        [HttpGet]
        [Route("GetListProductCategory")]
        public async Task<IActionResult> GetListProductCategory()
        {
            try
            {
                var work = await productCategory.GetListProductCategory();
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
