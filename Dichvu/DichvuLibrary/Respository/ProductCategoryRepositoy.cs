using DichvuLibrary.Interface;
using DichvuLibrary.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DichvuLibrary.Respository
{
    public class ProductCategoryRepositoy : IProductCategory
    {
        MarketingServicesContext db;
        public ProductCategoryRepositoy(MarketingServicesContext _db)
        {
            db = _db;
        }

        public Task<int> AddProductCategoryk(ProductCategory productCategory)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteProductCategory(int? ID)
        {
            throw new NotImplementedException();
        }

        public async Task<List<ProductCategory>> GetListProductCategory()
        {
            return await db.ProductCategory.ToListAsync();
        }

        public Task<ProductCategory> GetProductCategory(int? ID)
        {
            throw new NotImplementedException();
        }

        public Task UpdateProductCategory(ProductCategory productCategory)
        {
            throw new NotImplementedException();
        }
    }
}
