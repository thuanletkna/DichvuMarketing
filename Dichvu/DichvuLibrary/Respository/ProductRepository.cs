using DichvuLibrary.Interface;
using DichvuLibrary.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DichvuLibrary.Respository
{
    public class ProductRepository : IProduct
    {
        private readonly MarketingServicesContext _context;

        public ProductRepository(MarketingServicesContext context)
        {
            _context = context;
        }

        public async Task<Product> FindById(int id)
        {
            return await _context.Product.FindAsync(id);
        }

        public async Task<List<Product>> List()
        {
            return await _context.Product.OrderByDescending(x => x.Id).ToListAsync();
        }

        public async Task<IEnumerable<Product>> Listbycategory(List<int> idcategory)
        {

            var rs = await (from a in _context.Product
                            where idcategory.Contains((int)a.CategoryId)
                            select a).ToListAsync();
            return rs;
        }
        public async Task<Product> FindByIdDangKyNguon(string id)
        {
            var rs = await (from a in _context.Product
                            where id.Contains((char)a.Id)
                            select a
                            ).FirstOrDefaultAsync();

            return rs;
        }

    }
}
