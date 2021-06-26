using DichvuLibrary.Interface;
using DichvuLibrary.Model;
using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace DichvuLibrary.Respository
{
    public class ContentRepository : IContent
    {
        private readonly MarketingServicesContext _context;

        public ContentRepository(MarketingServicesContext context)
        {
            _context = context;
        }

        public async Task<Content> FindById(int id)
        {
            return await _context.Content.FindAsync(id);
        }

        public Task<Content> FindByIdDangKyNguon(string id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Content>> List(int top)
        {
            return await _context.Content.OrderByDescending(x => x.Id).Take(top).ToListAsync();
        }

        public async Task<IEnumerable<Content>> Listbycategory(List<int> idcategory)
        {
            var rs = await(from a in _context.Content
                           where idcategory.Contains((int)a.CategoryId)
                           select a).ToListAsync();
            return rs;
        }
    }
}
