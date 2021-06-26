using DichvuLibrary.Interface;
using DichvuLibrary.Model;
using DichvuLibrary.Respository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dichvu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProduct _productRepository;

        public ProductController(IProduct productRepository)
        {
            _productRepository = productRepository;
        }

        

        [HttpGet]
        [Route("List")]
        public async Task<IActionResult> List()
        {
            try
            {
                var work = await _productRepository.List();
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
                var work = await _productRepository.Listbycategory(new List<int> { 1});
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
                var work = await _productRepository.Listbycategory(new List<int> { 2 });
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

        [HttpGet("listbycategorytiktok")]
        public async Task<IActionResult> listbycategorytiktok(int branchcode)
        {
            try
            {
                var work = await _productRepository.Listbycategory(new List<int> { 3 });
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

        [HttpGet("listbycategoryshopee")]
        public async Task<IActionResult> listbycategoryshopee(int branchcode)
        {
            try
            {
                var work = await _productRepository.Listbycategory(new List<int> { 4 });
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

        [HttpGet("listbycategorylazada")]
        public async Task<IActionResult> listbycategorylazada(int branchcode)
        {
            try
            {
                var work = await _productRepository.Listbycategory(new List<int> { 5 });
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

        [HttpGet("listbycategorytiki")]
        public async Task<IActionResult> listbycategorytiki(int branchcode)
        {
            try
            {
                var work = await _productRepository.Listbycategory(new List<int> { 6 });
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

        [HttpGet("FindById")]
        public async Task<Product> FindById(int id)
        {
            return await _productRepository.FindById(id);
        }

        [HttpGet("xem-thong-tin")]
        public async Task<Product> Details(string id)
        {
            return await _productRepository.FindByIdDangKyNguon(id);
        }
    }
}
