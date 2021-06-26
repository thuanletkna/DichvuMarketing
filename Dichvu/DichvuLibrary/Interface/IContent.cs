using DichvuLibrary.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DichvuLibrary.Interface
{
    public interface IContent
    {
        Task<IEnumerable<Content>> Listbycategory(List<int> idcategory);
        Task<List<Content>> List(int top);
        Task<Content> FindByIdDangKyNguon(string id);
        Task<Content> FindById(int id);
    }
}
