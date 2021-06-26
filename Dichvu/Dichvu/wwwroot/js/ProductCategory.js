$(document).ready(function () {
    loadData();
});
function loadData() {
    var html = "";
    $.ajax({
        url: '/api/ProductCategory/GetListProductCategory',
        type: "GET",
        dataType: "json",
        success: function (response) {
            //var data = response.data;
            $.each(response, function (i, item) {
                
                html += '<div class="col-lg-2 col-md-4 col-sm-6"><div class="single-fcat"><a><img src="/style/img/o1.png" alt="">' +
                    "<p>" + item.name + "</p> " +
                    "</a></div> </div>"
            });
            $('#loaddata').html(html);
        }
    })
}