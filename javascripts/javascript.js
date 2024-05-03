var list_products_lap = JSON.parse(localStorage.getItem("list_lap"));
var list_products_phone = JSON.parse(localStorage.getItem("list_phone"));

var GiamGia = function (Gia, Coupn) {
  var discount = Gia * (1 - Coupn / 100);
  return parseFloat(discount.toFixed(2));
};

var formatNumberWithCommas = function (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
var page = false;
var pagelist = [];
var indexpage = 0;
var show_Out_products = function (products) {
  var str = "";
  if (products.length === 0) {
    var img = "./images/Product/NO_Search.png";
    str = `
        <div>
            <img class="NO_RESULT bg-light p-5" src="${img}">
            <p class="text-center fw-bold text-black p-3">Không tìm thấy kết quả</p>
        </div>`;
  }
  var lent = products.length;
  pagination = document.querySelector(".div_pagination");
  if (lent > 10 || page === true) {
    if (page === false) {
      pagelist = products;
      lent = 10;
      indexpage = 1;
    }
    pagination.innerHTML = `<ul class="pagination d-flex float-end >
                                    <li class="page-item"><button class="page-link text-dark"" value="1" onclick="phantrang(this.value, pagelist)" >1</button></li>
                                    <li class="page-item"><button class="page-link text-dark"" value="2" onclick="phantrang(this.value,pagelist)" >2</button></li>
                                    <li class="page-item"><button class="page-link text-dark"" value="next" onclick="phantrang(this.value,pagelist)" >Next</button></li>
                                </ul>`;
  } else {
    pagination.innerHTML = "";
  }
  for (var i = 0; i < lent; ++i) {
    var obj = JSON.stringify(products[i]);
    str += `<div class="col-12 product col-xl-3  col-lg-3 col-md-4 col-sm-6 p-0">
                <div class="card" onclick=\'call_funtion(${obj})\' id="#" >
                <div class="img-max"><img src="${
                  products[i].img[0]
                }" alt="image"> </div>
                <div class="card--contents">
                <div class="card--contents card__contents--title">
                <span class="text-secondary d-block">${products[i].Brand}</span>
                <span>${products[i].TenSP}</span>
                </div>
                <div class="card__contents--prices"> <span class="Giam">${formatNumberWithCommas(
                  GiamGia(products[i].Gia, products[i].Coupon)
                )} đ</span>
                <span class="Goc">${formatNumberWithCommas(
                  products[i].Gia
                )} đ <span class="text-decoration-none ps-2 text-danger"> -${
      products[i].Coupon
    }%</span></span>
                </div>
                </div>
                </div>
                </div>`;
  }
  document.querySelector(".products").innerHTML = str;
  var pagi = document.querySelectorAll(".pagination button");
  pagi.forEach(function (tmp, index) {
    if (index + 1 === indexpage) tmp.classList.add("active");
  });
  var card_tmp = document.querySelectorAll(".card");
  for (var i = 0; i < card_tmp.length; i++) {
    card_tmp[i].id = products[i].maSP;
  }
};
var show_In_products = function () {
  document.querySelector(".products").innerHTML = "";
};

var phantrang = function (valuepage, list) {
  var showlist = [];
  if (valuepage === "1") {
    show_In_products();
    show_Out_products(list);
  } else if (valuepage === "2") {
    for (i = 10; i < list.length; i++) {
      showlist.push(list[i]);
    }
    page = true;
    indexpage = 2;
    show_In_products();
    show_Out_products(showlist);
  }

  page = false;
};

var open_product = function (string) {
  if (string === "laptop") {
    window.localStorage.setItem("type_product", "laptop");
    window.open("Search.html", "_self");
  }
  if (string === "phone") {
    window.localStorage.setItem("type_product", "phone");
    window.open("Search.html", "_self");
  }
};

/// SHOW list products

function kt() {
  var key = event.which || event.keyCode;
  if (key == 13) {
    search();
  }
}

function search() {
  var frm = document.forms["form_search"];
  if (frm.keywords.value.length > 0) frm.submit();
}

function showsearch() {
  var url = new URL(window.location);
  var list = [];
  var kw = url.searchParams.get("keywords");

  var type = "";
  var found = 0;
  for (var i = 0; i < list_products_lap.length; i++) {
    if (list_products_lap[i].Brand.toLowerCase().includes(kw.toLowerCase())) {
      type = "laptop";
      list.push(list_products_lap[i]);
      found = 1;
    }
  }
  if (found === 0) {
    for (var i = 0; i < list_products_phone.length; i++) {
      if (
        list_products_phone[i].Brand.toLowerCase().includes(kw.toLowerCase())
      ) {
        type = "phone";
        list.push(list_products_phone[i]);
      }
    }
  }
  window.localStorage.setItem("type_product", type);
  on_load();
  show_In_products();
  show_Out_products(list);
}

var on_load = function () {
  var search_type_1 = document.querySelector(".phone");
  var search_type_2 = document.querySelector(".laptop");
  if (
    window.localStorage.getItem("type_product") === "laptop" &&
    location.href.includes("Search.html")
  ) {
    var tmp = document.querySelectorAll(".home span, h5");

    for (var i = 0; i < tmp.length; i++) {
      tmp[i].innerText = "Laptop - Máy tính xách tay";
    }
    search_type_1.className = "phone d-none";
    search_type_2.className = "laptop";
    show_Out_products(list_products_lap);
  } else if (
    window.localStorage.getItem("type_product") === "phone" &&
    location.href.includes("Search.html")
  ) {
    var tmp = document.querySelectorAll(".home span, h5");

    for (var i = 0; i < tmp.length; i++) {
      tmp[i].innerText = "Điện thoại";
    }
    search_type_1.className = "phone";
    search_type_2.className = "laptop d-none";
    show_Out_products(list_products_phone);
  }
};

var s_priese = function (string, products) {
  var list_tmp = [];
  for (var key = 1; key < string.children.length; key++)
    if (string.children[key].className.includes("prieces")) {
      switch (string.children[key].id) {
        case "duoi_10tr":
          for (var i = 0; i < products.length; i++) {
            if (GiamGia(products[i].Gia, products[i].Coupon) < 10000000)
              list_tmp.push(products[i]);
          }
          break;
        case "10tr_15tr":
          for (var i = 0; i < products.length; i++) {
            if (
              GiamGia(products[i].Gia, products[i].Coupon) >= 10000000 &&
              GiamGia(products[i].Gia, products[i].Coupon) < 15000000
            )
              list_tmp.push(products[i]);
          }
          break;
        case "15tr_20tr":
          for (var i = 0; i < products.length; i++) {
            if (
              GiamGia(products[i].Gia, products[i].Coupon) >= 15000000 &&
              GiamGia(products[i].Gia, products[i].Coupon) < 20000000
            )
              list_tmp.push(products[i]);
          }
          break;
        case "20tr_25tr":
          for (var i = 0; i < products.length; i++) {
            if (
              GiamGia(products[i].Gia, products[i].Coupon) >= 20000000 &&
              GiamGia(products[i].Gia, products[i].Coupon) < 25000000
            )
              list_tmp.push(products[i]);
          }
          break;
        case "tren_25tr":
          for (var i = 0; i < products.length; i++) {
            if (GiamGia(products[i].Gia, products[i].Coupon) > 25000000)
              list_tmp.push(products[i]);
          }
          break;
        case "tren_20tr":
          for (var i = 0; i < products.length; i++) {
            if (GiamGia(products[i].Gia, products[i].Coupon) > 20000000)
              list_tmp.push(products[i]);
          }
          break;
      }
      return list_tmp;
    }
};
var s_brand = function (string, products) {
  var list_tmp = [];
  for (var key = 1; key < string.children.length; key++)
    if (string.children[key].className.includes("brand")) {
      // console.log(string.children[key].id);
      for (var i = 0; i < products.length; i++) {
        if (products[i].Brand === string.children[key].id) {
          list_tmp.push(products[i]);
        }
      }
    }

  return list_tmp;
};
var s_purpose = function (string, products) {
  var list_tmp = [];
  for (var key = 1; key < string.children.length; key++) {
    if (string.children[key].className.includes("purpose")) {
      // console.log(string.children[key].id);
      for (var i = 0; i < products.length; i++) {
        if (products[i].NhuCau === string.children[key].id) {
          list_tmp.push(products[i]);
        }
      }
    }
  }
  return list_tmp;
};
var list_fillter = [];
var search_product = function () {
  // list_fillter = [];
  if (window.localStorage.getItem("type_product") === "laptop")
    var list = list_products_lap;
  if (window.localStorage.getItem("type_product") === "phone")
    var list = list_products_phone;
  var string = document.querySelector(".fillter");

  if (string.children.length === 0) {
    list_fillter = list;
  } else if (string.children.length < 3) {
    var key = string.children[1].className.slice(
      string.children[1].className.indexOf("choose") + 7
    );
    if (key === "prieces") list_fillter = s_priese(string, list);
    else if (key === "brand") list_fillter = s_brand(string, list);
    else if (key === "purpose") list_fillter = s_purpose(string, list);
  } else if (string.children.length === 3) {
    var key = string.children[1].className.slice(
      string.children[1].className.indexOf("choose") + 7
    );
    if (key === "prieces") list_fillter = s_priese(string, list);
    else if (key === "brand") list_fillter = s_brand(string, list);
    else if (key === "purpose") list_fillter = s_purpose(string, list);
    var key2 = string.children[2].className.slice(
      string.children[2].className.indexOf("choose") + 7
    );
    if (key2 === "prieces") list_fillter = s_priese(string, list_fillter);
    else if (key2 === "brand") list_fillter = s_brand(string, list_fillter);
    else if (key2 === "purpose") list_fillter = s_purpose(string, list);
  } else {
    var key = string.children[1].className.slice(
      string.children[1].className.indexOf("choose") + 7
    );
    if (key === "prieces") list_fillter = s_priese(string, list);
    else if (key === "brand") list_fillter = s_brand(string, list);
    else if (key === "purpose") list_fillter = s_purpose(string, list);
    var key2 = string.children[2].className.slice(
      string.children[2].className.indexOf("choose") + 7
    );
    if (key2 === "prieces") list_fillter = s_priese(string, list_fillter);
    else if (key2 === "brand") list_fillter = s_brand(string, list_fillter);
    else if (key2 === "purpose") list_fillter = s_purpose(string, list);
    var key3 = string.children[3].className.slice(
      string.children[3].className.indexOf("choose") + 7
    );

    if (key3 === "prieces") list_fillter = s_priese(string, list_fillter);
    else if (key3 === "brand") list_fillter = s_brand(string, list_fillter);
    else if (key3 === "purpose") list_fillter = s_purpose(string, list);
  }
  show_In_products();
  show_Out_products(list_fillter);
};

var sort = function (button) {
  var list = pagelist;
  if (
    list.length === 0 &&
    window.localStorage.getItem("type_product") === "laptop"
  )
    list = list_products_lap;
  if (
    list.length === 0 &&
    window.localStorage.getItem("type_product") === "phone"
  )
    list = list_products_phone;
  var sapxap = button.id;
  if (sapxap === "Tang") {
    list.sort(function (a, b) {
      return GiamGia(a.Gia, a.Coupon) - GiamGia(b.Gia, b.Coupon);
    });
  }
  if (sapxap === "Giam") {
    list.sort(function (a, b) {
      return GiamGia(b.Gia, b.Coupon) - GiamGia(a.Gia, a.Coupon);
    });
  }

  show_In_products();
  show_Out_products(list);
};

function fillter_choose(buttonc) {
  var text = buttonc.innerText;
  var par_buttonc = buttonc.parentElement.className;
  var tmp_area = document.querySelector(".fillter");
  // console.log(tmp_area);
  if (tmp_area.children.length === 0) {
    tmp_area.innerHTML = `
        <h6 class="a">Bộ lọc</h6>
            <button type="button" id="${buttonc.id}" class="btn text-white bg-secondary py-0 my-1 ${par_buttonc}">
            <span class="p-2"> ${text}</span>
            <span class="badge m-1 ps-0">
            <a href="#" onclick="cancle(this);" class="text-white"><i  class="fa-solid fa-xmark"></i></a></span>
            </button>`;
    buttonc.className = "btn bg-secondary text-white m-1";
    search_product();
  } else {
    for (var key = 1; key < tmp_area.children.length; key++) {
      // console.log(tmp_area.children[key].className);
      if (tmp_area.children[key].className.includes(par_buttonc)) {
        var tmp = document.querySelectorAll(
          `.${par_buttonc.slice(par_buttonc.indexOf("choose"))} button`
        );
        //  console.log(tmp);  console.log(par_buttonc);
        for (var i = 0; i < tmp.length; i++) {
          // console.log(i);
          tmp[i].className = "btn btn-outline-secondary m-1";
        }
        // console.log(tmp_area.children);
        tmp_area.children[key].remove();
        tmp_area.innerHTML += `
                <button type="button" id="${buttonc.id}" class="btn text-white bg-secondary py-0 my-1 ${par_buttonc}">
                <span class="p-2"> ${text}</span>
                <span class="badge m-1 ps-0">
                <a href="#" onclick="cancle(this);" class="text-white"><i  class="fa-solid fa-xmark"></i></a></span>
                </button>`;
        buttonc.className = "btn bg-secondary text-white m-1";
        search_product();
        return;
      }
    }
    if (tmp_area.querySelector("h6.d-none")) {
      tmp_area.querySelector("h6.d-none").className = "a";
      // console.log(tmp_area.querySelector('h6.d-none'));
    }
    tmp_area.innerHTML += `
        <button type="button" id="${buttonc.id}" class="btn text-white bg-secondary py-0 my-1 ${par_buttonc}">
        <span class="p-2"> ${text}</span>
        <span class="badge m-1 ps-0">
        <a href="#" onclick="cancle(this);" class="text-white"><i  class="fa-solid fa-xmark"></i></a></span>
        </button>`;
    buttonc.className = "btn bg-secondary text-white m-1";
    search_product();
  }
}

function cancle(a) {
  var tmp_area = document.querySelector(".fillter");
  // console.log(tmp_area.children);
  // console.log(a.parentElement.parentElement);
  for (var i = 0; i < tmp_area.children.length; i++) {
    if (a.parentElement.parentElement === tmp_area.children[i]) {
      tmp_area.children[i].remove();

      // a.parentElement.parentElement.className.slice(par_buttonc.indexOf("choose"))
      var tmp = document.querySelector(
        `.${a.parentElement.parentElement.className.slice(
          a.parentElement.parentElement.className.indexOf("choose")
        )} .bg-secondary`
      );
      tmp.className = "btn btn-outline-secondary m-1";
      if (tmp_area.children.length === 1) tmp_area.children[0].remove();
    }
    // console.log(a.parentElement.parentElement.parentElement.parentElement);
    // a.parentElement.parentElement.parentElement.parentElement.className = "fillter m-2";
  }
  search_product();
}

var call_funtion = function (local) {
  //  console.log(local);
  // window.localStorage.clear();

  window.localStorage.setItem("key_product", JSON.stringify(local));
  window.open("chitiet.html", "_self");
  // console.log( JSON.stringify(local));
  // console.log( JSON.parse(JSON.stringify(local)));
};
function showproduct() {
  var products = list_products_lap;
  var str = '<div class="owl-carousel">';
  for (var i = 0; i < products.length; ++i) {
    var obj = JSON.stringify(products[i]);

    str += `<div class="product" style="height: 300px;">
                <div class="card" ondblclick=\'call_funtion(${obj})\' id="#" >
                <div style="height: 150px;"><img src="${
                  products[i].img[0]
                }" alt="image"> </div>
                <div class="card--contents">
                <div class="card--contents card__contents--title">
                <span class="text-secondary d-block">${products[i].Brand}</span>
                <span>${products[i].TenSP}</span>
                </div>
                <div class="card__contents--prices"> <span class="Giam">${formatNumberWithCommas(
                  GiamGia(products[i].Gia, products[i].Coupon)
                )} đ</span>
                <span class="Goc">${formatNumberWithCommas(
                  products[i].Gia
                )} đ <span class="text-decoration-none ps-2 text-danger"> -${
      products[i].Coupon
    }%</span></span>
                </div>
                </div>
                </div>
                </div>`;
  }
  str += "</div>";
  document.querySelector(".showproducts_lap").innerHTML = str;

  products = list_products_phone;
  str = '<div class="owl-carousel">';
  for (var i = 0; i < products.length; ++i) {
    var obj = JSON.stringify(products[i]);

    str += `<div class="product" style="height: 300px;">
                <div class="card" ondblclick=\'call_funtion(${obj})\' id="#" >
                <div style="height: 150px;"><img src="${
                  products[i].img[0]
                }" alt="image"> </div>
                <div class="card--contents">
                <div class="card--contents card__contents--title">
                <span class="text-secondary d-block">${products[i].Brand}</span>
                <span>${products[i].TenSP}</span>
                </div>
                <div class="card__contents--prices"> <span class="Giam">${formatNumberWithCommas(
                  GiamGia(products[i].Gia, products[i].Coupon)
                )} đ</span>
                <span class="Goc">${formatNumberWithCommas(
                  products[i].Gia
                )} đ <span class="text-decoration-none ps-2 text-danger"> -${
      products[i].Coupon
    }%</span></span>
                </div>
                </div>
                </div>
                </div>`;
  }
  str += "</div>";
  document.querySelector(".showproducts_phone").innerHTML = str;

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
}
function showsale() {
  var products = list_products_lap;
  var str = '<div class="owl-carousel">';
  for (var i = 0; i < products.length; ++i) {
    var obj = JSON.stringify(products[i]);

    if (products[i].Coupon >= 20) {
      str += `<div class="product" style="height: 300px;">
                <div class="card" ondblclick=\'call_funtion(${obj})\' id="#" >
                <div style="height: 150px;"><img src="${
                  products[i].img[0]
                }" alt="image"> </div>
                <div class="card--contents">
                <div class="card--contents card__contents--title">
                <span class="text-secondary d-block">${products[i].Brand}</span>
                <span>${products[i].TenSP}</span>
                </div>
                <div class="card__contents--prices"> <span class="Giam">${formatNumberWithCommas(
                  GiamGia(products[i].Gia, products[i].Coupon)
                )} đ</span>
                <span class="Goc">${formatNumberWithCommas(
                  products[i].Gia
                )} đ <span class="text-decoration-none ps-2 text-danger"> -${
        products[i].Coupon
      }%</span></span>
                </div>
                </div>
                </div>
                </div>`;
    }
  }

  products = list_products_phone;
  for (var i = 0; i < products.length; ++i) {
    var obj = JSON.stringify(products[i]);

    if (products[i].Coupon >= 20) {
      str += `<div class="product" style="height: 300px;">
                <div class="card" ondblclick=\'call_funtion(${obj})\' id="#" >
                <div style="height: 150px;"><img src="${
                  products[i].img[0]
                }" alt="image"> </div>
                <div class="card--contents">
                <div class="card--contents card__contents--title">
                <span class="text-secondary d-block">${products[i].Brand}</span>
                <span>${products[i].TenSP}</span>
                </div>
                <div class="card__contents--prices"> <span class="Giam">${formatNumberWithCommas(
                  GiamGia(products[i].Gia, products[i].Coupon)
                )} đ</span>
                <span class="Goc">${formatNumberWithCommas(
                  products[i].Gia
                )} đ <span class="text-decoration-none ps-2 text-danger"> -${
        products[i].Coupon
      }%</span></span>
                </div>
                </div>
                </div>
                </div>`;
    }
  }
  str += "</div>";
  document.querySelector(".showproducts_sale").innerHTML = str;

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
}
localStorage.setItem("currentPage", location.href);
function open_cart() {
  document.getElementById("cart").style.right = 0;
}
function close_cart() {
  document.getElementById("cart").style.right = "-100%";
}
var buy_order = function () {
  var dress = document.querySelector("#diachi");

  if (dress.value.trim() !== "") {
    var data = JSON.parse(localStorage.getItem("cart"));
    var loginuser = JSON.parse(localStorage.getItem("loggedInUser"));
    var tmp2 = data;
    var tmp = { user: loginuser, hang: tmp2 };

    addListOrder(tmp);
    // localStorage.setItem("listOrder", JSON.stringify(tmp));
    var cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    total();
  }
};
var cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
localStorage.setItem("cart", JSON.stringify(cart));
var add_product = (value) => {
  if (!localStorage.getItem("loggedInUser")) {
    return;
  }
  var data = JSON.parse(localStorage.getItem("cart"));
  var found = 0;

  for (var i = 0; i < data.length; i++) {
    if (JSON.parse(value).maSP === JSON.parse(data[i].hang).maSP) {
      data[i].soluong++;
      found = 1;
      break;
    }
  }
  if (found == 0) data.push({ hang: value, soluong: 1 });
  localStorage.setItem("cart", JSON.stringify(data));
};
//
var total = function () {
  var list_incart = JSON.parse(localStorage.getItem("cart"));
  var position = document.querySelector(".total-price");
  var sum = 0;
  // if (list_incart.length === 0) {
  //     return;
  // }
  list_incart.forEach(function (product) {
    //    console.log(JSON.parse(product.hang).Gia)
    sum =
      sum +
      GiamGia(JSON.parse(product.hang).Gia, JSON.parse(product.hang).Coupon) *
        JSON.parse(product.soluong);
  });

  position.innerText = ` ${formatNumberWithCommas(sum)} đ`;
  var str = "";
  list_incart.forEach(function (product) {
    //    console.log(JSON.parse(product.hang).Gia)
    sum =
      sum +
      GiamGia(JSON.parse(product.hang).Gia, JSON.parse(product.hang).Coupon) *
        JSON.parse(product.soluong);
  });

  position.innerText = `  ${formatNumberWithCommas(sum)} đ`;
  var str = "";
  list_incart.forEach(function (product, index) {
    str += `<div class="cart-box">
            <img
                src="${JSON.parse(product.hang).img[0]}"
                alt=""
                class="cart-img"
            />
            <div class="detail">
                <div class="product-name product_name">
                    ${JSON.parse(product.hang).TenSP}
                </div>
                <div class="product-price">${formatNumberWithCommas(
                  GiamGia(
                    JSON.parse(product.hang).Gia,
                    JSON.parse(product.hang).Coupon
                  )
                )}</div>
                <input
                    type="number"
                    value="${JSON.parse(product.soluong)}"
                    class="cart-quality"
                    min="1" 
                    max="99"
                    onchange = "check_input(); set_soluong(value,${index})"
                />
            </div>
            <button class="btn_remove" onclick="removeitem(value)" value="${
              JSON.parse(product.hang).maSP
            }"><i class="fa-solid fa-trash"></i></button>
        </div>`;
  });
  document.querySelector(".cart-content").innerHTML = str;
};
function set_soluong(value, index) {
  console.log(value);
  var list_incart = JSON.parse(localStorage.getItem("cart"));
  // list_incart.forEach(function (product, index) {
  //     if (JSON.parse(product.hang).maSP === maSP) {
  list_incart[index].soluong = value;
  //     }
  // });
  localStorage.setItem("cart", JSON.stringify(list_incart));
}
function add_cart() {
  var hanghoa = window.localStorage.getItem("key_product");
  add_product(hanghoa);
  total();
}
function check_input() {
  var input = document.querySelector(".cart-quality");
  if (input.value <= 0) input.value = 1;
}
var show_user = function () {
  var userlogin = JSON.parse(localStorage.getItem("loggedInUser"));
  var hoten = document.querySelector(".hoten span");
  var taikhoan = document.querySelector(".taikhoan span");
  var email = document.querySelector(".email span");
  var sdt = document.querySelector(".sdt span");

  taikhoan.innerText = userlogin.username;
  email.innerText = userlogin.email;
  hoten.innerText = userlogin.fullname;
  sdt.innerText = userlogin.phone;
};
function removeitem(btn_rm) {
  var list_incart = JSON.parse(localStorage.getItem("cart"));
  list_incart.forEach(function (product, index) {
    if (JSON.parse(product.hang).maSP === btn_rm) {
      list_incart.splice(index, 1);
    }
  });
  localStorage.setItem("cart", JSON.stringify(list_incart));
  open_cart();
  total();
}

//Đơn hàng

var listOrder = JSON.parse(localStorage.getItem("listOrder"))
  ? JSON.parse(localStorage.getItem("listOrder"))
  : [];
localStorage.setItem("listOrder", JSON.stringify(listOrder));

function addListOrder(order) {
  var listOrder1 = JSON.parse(localStorage.getItem("listOrder"));
  listOrder1.push(order);
  localStorage.setItem("listOrder", JSON.stringify(listOrder1));
}
