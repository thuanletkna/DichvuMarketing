using System;
using System.Collections.Generic;

namespace DichvuLibrary.Model
{
    public partial class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MetaTitle { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string MoreImages { get; set; }
        public decimal? Price { get; set; }
        public decimal? PromotionPrice { get; set; }
        public int Quantity { get; set; }
        public int? CategoryId { get; set; }
        public string Detail { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescriptions { get; set; }
        public bool? Status { get; set; }
        public DateTime? TopHot { get; set; }
        public int? ViewCount { get; set; }
        public int? BoughtCount { get; set; }
    }
    public class ProductTable
    {
        public IEnumerable<Product> Data { get; set; }
    }
}
