$(document).ready(function () {
    loadDataListCategory();
    fbcontent();
    loadDataListProduct();
    detailproductfb();
    $("#loadcontent").show();
    $("#inscontent").hide();
});

function loadDataListCategory() {
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
function loadDataListProduct() {
    var html = "";
    $.ajax({
        url: '/api/Content/List',
        type: "GET",
        dataType: "json",
        success: function (response) {
            //var data = response.data;
            $.each(response, function (i, item) {

                html += "<div class='col-lg-4 col-md-6 col-sm-12'>" +
                   
                    '<div class="blog-post-thumb">' +
                    "<div class='img'>" +
                    "<img src=" + item.image + " alt=''>" +
                    "</div>" +
                    "<div class='blog-content'>" +
                    "<h3>" +
                    "<a href='https://localhost:44372/api/home/detail' onclick='return blogdetai(" + item.id + ");'>" + item.name + "</a>" +
                    "</h3>" +
                    "<div class='text'>" +
                    item.description +
                    "</div>" +
                    "<a href='#' class='main-button'>Read More</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +

                    "</div>" 
            });
            $('#bloghome').html(html);
        }
    })
}
function detailproductfb() {
    $("#detailproduct").show();
    $("#detailproductins").hide();
    $("#detailproducttiktok").hide();
    $("#detailproductshopee").hide();
    $("#detailproducttiki").hide();
    $("#detailproductlazada").hide();
    var html = "";
    $.ajax({
        url: '/api/Product/listbycategory',
        type: "GET",
        dataType: "json",
        success: function (data) {
            //var data = response.data;
            $.each(data, function (i, item) {

                html += '<div class="single-post d-flex flex-row"><div class="thumb"><img src="/style/img/post.png" alt="">'+
                            "<ul class='tags'>"+
                                "<li>"+
                                    "<a href='#'>Art</a>"+
                                "</li>"+
                                "<li>"+
                                   "<a href='#'>Media</a>"+
                                "</li>"+
                                "<li>"+
                                    "<a href='#'>Design</a>"+
                               "</li>"+
                            "</ul>"+
                    "</div>"+
                    "<div class='details'>"+
                     "<div class='title d-flex flex-row justify-content-between'>"+
                    "<div class='titles'>" +
                    "<a href='detail' onclick='getdetailfb(" + item.id + ")'><h4 style='color:#222222'>" + item.name + "</h4></a>" +
                     "<h6>" + item.description + "</h6>"+
                     "</div>"+
                     "<ul class='btns'>"+
                     "<li><a href='#'><span class='lnr lnr-heart'></span></a></li>"+
                     "<li><a href='#'>Apply</a></li>"+
                     "</ul>"+
                     "</div>"+
                     "<p>"+
                     item.detail+
                    "</p>" +
                    "<h5>Phù hợp: " + item.metaKeywords + "</h5>" +
                    "<p class='address'><span class='lnr lnr-map'></span> 56/8, Panthapath Dhanmondi Dhaka</p>" +
                    "<p style='color:red' class='address'><span class='lnr lnr-database'></span>&nbsp;" + item.price + "&nbsp;VNĐ</p>" +
                     "</div>"+
                    "</div>"
            });
            $('#detailproduct').html(html);
        }
    })
}

function detailproductins() {
    var html = "";
    $("#detailproduct").hide();
    $("#detailproductins").show();
    $("#detailproducttiktok").hide();
    $("#detailproductshopee").hide();
    $("#detailproducttiki").hide();
    $("#detailproductlazada").hide();
    $.ajax({
        url: '/api/Product/listbycategoryins',
        type: "GET",
        dataType: "json",
        success: function (response) {
            
            //var data = response.data;
            $.each(response, function (i, item) {

                html += '<div class="single-post d-flex flex-row"><div class="thumb"><img src="/style/img/post.png" alt="">' +
                    "<ul class='tags'>" +
                    "<li>" +
                    "<a href='#'>Art</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Media</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Design</a>" +
                    "</li>" +
                    "</ul>" +
                    "</div>" +
                    "<div class='details'>" +
                    "<div class='title d-flex flex-row justify-content-between'>" +
                    "<div class='titles'>" +
                    "<a href='single.html'><h4>" + item.name + "</h4></a>" +
                    "<h6>" + item.description + "</h6>" +
                    "</div>" +
                    "<ul class='btns'>" +
                    "<li><a href='#'><span class='lnr lnr-heart'></span></a></li>" +
                    "<li><a href='#'>Apply</a></li>" +
                    "</ul>" +
                    "</div>" +
                    "<p>" +
                    item.detail +
                    "</p>" +
                    "<h5>Phù hợp: " + item.metaKeywords + "</h5>" +
                    "<p class='address'><span class='lnr lnr-map'></span> 56/8, Panthapath Dhanmondi Dhaka</p>" +
                    "<p style='color:red' class='address'><span class='lnr lnr-database'></span>&nbsp;" + item.price + "&nbsp;VNĐ</p>" +
                    "</div>" +
                    "</div>"
            });
            $('#detailproductins').html(html);
        }
    })
}

function detailproducttiktok() {
    var html = "";
    $("#detailproduct").hide();
    $("#detailproductins").hide();
    $("#detailproducttiktok").show();
    $("#detailproductshopee").hide();
    $("#detailproducttiki").hide();
    $("#detailproductlazada").hide();
    $.ajax({
        url: '/api/Product/listbycategorytiktok',
        type: "GET",
        dataType: "json",
        success: function (response) {

            //var data = response.data;
            $.each(response, function (i, item) {

                html += '<div class="single-post d-flex flex-row"><div class="thumb"><img src="/style/img/post.png" alt="">' +
                    "<ul class='tags'>" +
                    "<li>" +
                    "<a href='#'>Art</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Media</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Design</a>" +
                    "</li>" +
                    "</ul>" +
                    "</div>" +
                    "<div class='details'>" +
                    "<div class='title d-flex flex-row justify-content-between'>" +
                    "<div class='titles'>" +
                    "<a href='single.html'><h4>" + item.name + "</h4></a>" +
                    "<h6>" + item.description + "</h6>" +
                    "</div>" +
                    "<ul class='btns'>" +
                    "<li><a href='#'><span class='lnr lnr-heart'></span></a></li>" +
                    "<li><a href='#'>Apply</a></li>" +
                    "</ul>" +
                    "</div>" +
                    "<p>" +
                    item.detail +
                    "</p>" +
                    "<h5>Phù hợp: " + item.metaKeywords + "</h5>" +
                    "<p class='address'><span class='lnr lnr-map'></span> 56/8, Panthapath Dhanmondi Dhaka</p>" +
                    "<p style='color:red' class='address'><span class='lnr lnr-database'></span>&nbsp;" + item.price + "&nbsp;VNĐ</p>" +
                    "</div>" +
                    "</div>"
            });
            $('#detailproducttiktok').html(html);
        }
    })
}

function detailproductshopee() {
    var html = "";
    $("#detailproduct").hide();
    $("#detailproductins").hide();
    $("#detailproducttiktok").hide();
    $("#detailproductshopee").show();
    $("#detailproducttiki").hide();
    $("#detailproductlazada").hide();
    $.ajax({
        url: '/api/Product/listbycategoryshopee',
        type: "GET",
        dataType: "json",
        success: function (response) {

            //var data = response.data;
            $.each(response, function (i, item) {

                html += '<div class="single-post d-flex flex-row"><div class="thumb"><img src="/style/img/post.png" alt="">' +
                    "<ul class='tags'>" +
                    "<li>" +
                    "<a href='#'>Art</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Media</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Design</a>" +
                    "</li>" +
                    "</ul>" +
                    "</div>" +
                    "<div class='details'>" +
                    "<div class='title d-flex flex-row justify-content-between'>" +
                    "<div class='titles'>" +
                    "<a href='single.html'><h4>" + item.name + "</h4></a>" +
                    "<h6>" + item.description + "</h6>" +
                    "</div>" +
                    "<ul class='btns'>" +
                    "<li><a href='#'><span class='lnr lnr-heart'></span></a></li>" +
                    "<li><a href='#'>Apply</a></li>" +
                    "</ul>" +
                    "</div>" +
                    "<p>" +
                    item.detail +
                    "</p>" +
                    "<h5>Phù hợp: " + item.metaKeywords + "</h5>" +
                    "<p class='address'><span class='lnr lnr-map'></span> 56/8, Panthapath Dhanmondi Dhaka</p>" +
                    "<p style='color:red' class='address'><span class='lnr lnr-database'></span>&nbsp;" + item.price + "&nbsp;VNĐ</p>" +
                    "</div>" +
                    "</div>"
            });
            $('#detailproductshopee').html(html);
        }
    })
}

function detailproductlazada() {
    var html = "";
    $("#detailproduct").hide();
    $("#detailproductins").hide();
    $("#detailproducttiktok").hide();
    $("#detailproductshopee").hide();
    $("#detailproductlazada").show();
    $("#detailproducttiki").hide();
    $.ajax({
        url: '/api/Product/listbycategorylazada',
        type: "GET",
        dataType: "json",
        success: function (response) {

            //var data = response.data;
            $.each(response, function (i, item) {

                html += '<div class="single-post d-flex flex-row"><div class="thumb"><img src="/style/img/post.png" alt="">' +
                    "<ul class='tags'>" +
                    "<li>" +
                    "<a href='#'>Art</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Media</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Design</a>" +
                    "</li>" +
                    "</ul>" +
                    "</div>" +
                    "<div class='details'>" +
                    "<div class='title d-flex flex-row justify-content-between'>" +
                    "<div class='titles'>" +
                    "<a href='single.html'><h4>" + item.name + "</h4></a>" +
                    "<h6>" + item.description + "</h6>" +
                    "</div>" +
                    "<ul class='btns'>" +
                    "<li><a href='#'><span class='lnr lnr-heart'></span></a></li>" +
                    "<li><a href='#'>Apply</a></li>" +
                    "</ul>" +
                    "</div>" +
                    "<p>" +
                    item.detail +
                    "</p>" +
                    "<h5>Phù hợp: " + item.metaKeywords + "</h5>" +
                    "<p class='address'><span class='lnr lnr-map'></span> 56/8, Panthapath Dhanmondi Dhaka</p>" +
                    "<p style='color:red' class='address'><span class='lnr lnr-database'></span>&nbsp;" + item.price + "&nbsp;VNĐ</p>" +
                    "</div>" +
                    "</div>"
            });
            $('#detailproductlazada').html(html);
        }
    })
}

function detailproducttiki() {
    var html = "";
    $("#detailproduct").hide();
    $("#detailproductins").hide();
    $("#detailproducttiktok").hide();
    $("#detailproductshopee").hide();
    $("#detailproductlazada").hide();
    $("#detailproducttiki").show();
    $.ajax({
        url: '/api/Product/listbycategorytiki',
        type: "GET",
        dataType: "json",
        success: function (response) {

            //var data = response.data;
            $.each(response, function (i, item) {

                html += '<div class="single-post d-flex flex-row"><div class="thumb"><img src="/style/img/post.png" alt="">' +
                    "<ul class='tags'>" +
                    "<li>" +
                    "<a href='#'>Art</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Media</a>" +
                    "</li>" +
                    "<li>" +
                    "<a href='#'>Design</a>" +
                    "</li>" +
                    "</ul>" +
                    "</div>" +
                    "<div class='details'>" +
                    "<div class='title d-flex flex-row justify-content-between'>" +
                    "<div class='titles'>" +
                    "<a href='single.html'><h4>" + item.name + "</h4></a>" +
                    "<h6>" + item.description + "</h6>" +
                    "</div>" +
                    "<ul class='btns'>" +
                    "<li><a href='#'><span class='lnr lnr-heart'></span></a></li>" +
                    "<li><a href='#'>Apply</a></li>" +
                    "</ul>" +
                    "</div>" +
                    "<p>" +
                    item.detail +
                    "</p>" +
                    "<h5>Phù hợp: " + item.metaKeywords + "</h5>" +
                    "<p class='address'><span class='lnr lnr-map'></span> 56/8, Panthapath Dhanmondi Dhaka</p>" +
                    "<p style='color:red' class='address'><span class='lnr lnr-database'></span>&nbsp;" + item.price + "&nbsp;VNĐ</p>" +
                    "</div>" +
                    "</div>"
            });
            $('#detailproducttiki').html(html);
        }
    })
}

function getdetailfb(id){
        $.ajax({
            type: "GET",
            url: "/api/Product/FindById?id={id}",
            data: { id: id},
            dataType: 'JSON',
        }).done(function (data) {
            console.log(data);
            var loaidichvu = data.categoryId;
            if (loaidichvu == 1) {
                khgiaingan(data);
            } else if (loaidichvu == 2) {
                khchitratiengui(data);
            } else if (loaidichvu == 3) {
                khtiepquy(data);
            } else if (loaidichvu == 4) {
                thanhtoankhac(data);
            }
        }).fail(function () { console.log("teo") });
}
function khgiaingan(item) {
    console.log(item);
    $('#giaingan').show();
    $('#check_btn').show();
    $('#show1').val(item.loaiHoSo);
    $('#namefb').val(item.name);
    $('#madonvi').val(item.maDonVi);
    $('#tenkhachhang').val(item.tenKhachHang);
    $('#ngaydangky').val(item.ngayDangKy);
    $('#ngayhieuluc').val(item.ngayHieuLuc);
    $('#sotien').val(item.soTien);
    $('#loaitien').val(getLoaiTien(item.loaiTien));
    $('#optiondongtiengiaingan').val(item.dongTienGiaiNgan);
    $('#optiontentrungtam').val(item.tenTrungTam);
    //tenKhachHang: $("#tenkhachhang").val(),
    //tenDonViTiepNhan: $("#tendonvitiepnhan").val(),
    //soTien: $("#sotien").val(),
    //loaiTien: $("#loaitien").val(),
    //dongTienChuyen: $("#dongtienchuyen").val(),
    //dongTienGiaiNgan: $("#dongtiengiaingan").val(),
    //tenTrungTam: $("#tentrungtam").val(),
    //lyDoRut: $("#lydorut").val(),
    //ghiChu: $("#ghichu").val(),
    //benThanhToan: $("#benthanhtoan").val(),
    //ngayHieuLuc: $("#datepicker1").val(),
}

//function getdetailfb() {
//    location.href = "detail";
//}

function fbcontent() {
    var html = "";
    $.ajax({
        url: '/api/Content/listbycategory',
        type: "GET",
        dataType: "json",
        success: function (response) {
            //var data = response.data;
            $.each(response, function (i, item) {
                $("#loadcontent").show();
                $("#inscontent").hide();
               
                html +=
                    "<div class='col-lg-4 col-md-6 col-sm-12'>" +
                    "<div class='blog-post-thumb'>" +
                    
                    "<div class='img'>" +
                    "<img src=" + item.image + " alt=''>" +
                    "</div>"+
                            "<div class='blog-content'>"+
                    "<h3>" +
                "<a href='https://localhost:44372/api/home/detail' onclick='return blogdetai(" + item.id + ");'>" + item.name + "</a>" +
                                "</h3>" +
                    "<div class='text'>" +
                    item.description +
                        "</div>"+
                             "<a href='#' class='main-button'>Read More</a>" +
                            "</div>"+
                        "</div>"+
                        "</div>" +
                      
                    "</div>" 
                
            });
            $('#loadcontent').html(html);
        }
    })
}
function inscontent() {
    var html = "";
    $.ajax({
        url: '/api/Content/listbycategoryins',
        type: "GET",
        dataType: "json",
        success: function (response) {
            //var data = response.data;
            $.each(response, function (i, item) {
                $("#loadcontent").hide();
                $("#inscontent").show();
              
                html += "<div class='col-lg-4 col-md-6 col-sm-12'>" +
                    '<div class="blog-post-thumb">' +
                    "<div class='img'>" +
                    "<img src=" + item.image + " alt=''>" +
                    "</div>" +
                    "<div class='blog-content'>" +
                    "<h3>" +
                    "<a href='#'>" + item.name + "</a>" +
                    "</h3>" +
                    "<div class='text'>" +
                    item.description +
                    "</div>" +
                    "<a href='#' class='main-button'>Read More</a>" +
                    "</div>" +
                    "</div>" +
                    " </div>"
            });
            $('#inscontent').html(html);
        }
    })
}
function blogdetai(id) {

    $.ajax({
        url: '/api/Product/FindById',
        type: "GET",
        data: { id: id },
        dataType: "json",
        success: function (data) {
            console.log(data);
            $.each(data, function (i, item) {
                $('#loadcontent')
                    .append("<h3>" + item.name + "</h3>");
                /* .append("<td>" + item.idDangKyNguon + "</td>")*/
                //.append("<td>" + item.maDonVi + "</td>")
                //.append("<td>" + item.tenKhachHang + "</td>")
                //.append("<td>" + item.ngayDangKy + "</td>")
                //.append("<td>" + getLoaiTien(item.loaiTien) + "</td>")
                //.append("<td>" + item.soTien + "</td>")
                //.append("<td>" + item.ngayHieuLuc + "</td>")
                //.append("<td>" + item.loaiHoSo + "</td>")
                //.append("<td>" + getTrangThai(item.status) + "</td>")
                //.append("</tr>");
            
            });
        },
        error: function () {
            console.log("fail");
        }

    });
    console.log("test");
}