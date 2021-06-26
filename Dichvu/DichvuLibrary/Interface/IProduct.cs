using DichvuLibrary.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DichvuLibrary.Interface
{
    public interface IProduct
    {
        
        Task<IEnumerable<Product>> Listbycategory(List<int> idcategory);
        Task<List<Product>> List();
        Task<Product> FindByIdDangKyNguon(string id);
        Task<Product> FindById(int id);

    }
}
