using DichvuLibrary.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DichvuLibrary.Interface
{
    public interface IProductCategory
    {
        Task<List<ProductCategory>> GetListProductCategory();

        Task<ProductCategory> GetProductCategory(int? ID);

        Task<int> AddProductCategoryk(ProductCategory productCategory);

        Task<int> DeleteProductCategory(int? ID);

        Task UpdateProductCategory(ProductCategory productCategory);
    }
}
