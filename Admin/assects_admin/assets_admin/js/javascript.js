const list_products_lap = [
  {
    maSP: "sp012",
    NhuCau: "VanPhong",
    Brand: "Macbook",
    TenSP: "Macbook Air M2 2022 13 inch",
    Coupon: 25,
    Gia: 34990000,
    img: [
      "https://cdn.media.amplience.net/i/xcite/646173-01?img404=default&w=2048&qlt=75&fmt=auto",
      "https://sm.pcmag.com/t/pcmag_au/review/a/apple-macb/apple-macbook-air-2022-m2_yqte.1920.jpg",
      "https://92130magazine.com/wp-content/uploads/2022/01/M2_Apple_MacBook_Pro_14_Mac_Air_2022_drdNBC.jpg",
    ],
    ManHinh: "13.6 inch  ( 2560 x 1664 ) | Liquid Retina FHD webcam",
    CPU: "Apple M2 ( 8 - Core CPU / 8 - Core GPU )",
    RAM: "16GB",
    TrongLuong: "1,2kg",
    OCung: "512GB SSD",
    HDH: "macOS",
    KichThuoc: "30.41 x 21.5 x 1.13 cm",
    XuatXu: "Mỹ",
    DanhGia:
      "MacBook Air M2 2022 13 inch (16GB/512GB SSD) là chiếc MacBook đến từ thương hiệu Apple - một trong những nhà sản xuất nổi tiếng với sự đẳng cấp trong thế giới công nghệ. MacBook Air M2 2022 13 inch mang đến hiệu suất vượt trội và thiết kế sang trọng, luôn sẵn sàng chinh phục bất kỳ người dùng nào đang tìm kiếm một sản phẩm đẳng cấp để làm việc hiệu năng cao.",
  },
];

const list_products_phone = [
  {
    maSP: "sp013",
    Brand: "Samsung",
    TenSP: "Galaxy S23 Ultra",
    Gia: 24990000,
    Coupon: 26,
    img: [
      "https://telefonika.com/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Ultra.jpg",
      "https://jersuindica.com/wp-content/uploads/2023/03/s23-ultraa.jpg",
      "https://images.hothardware.com/contentimages/article/3281/content/small_S23-Ultra-03.jpg",
    ],
    ManHinh: "6.8 inch Dynamic AMOLED 2X; Quad HD+ (2K+) (3088 x 1440)",
    CPU: "Snapdragon 8 Gen 2",
    RAM: "8GB (256GB ROM)",
    TrongLuong: "233g",
    HDH: "Android",
    KichThuoc: "78.1 x 163.4 x 8.9 mm",
    XuatXu: "Hàn Quốc",
    DanhGia:
      "Samsung S23 Ultra là một trong những sản phẩm smartphone cao cấp đến từ nhà Samsung mang vẻ ngoài sang trọng, camera tuyệt đỉnh. Với đầy đủ tính năng mới, hơn thế nữa là chất liệu bền vững kết hợp với thiết kế tối giản và tối ưu hóa năng lượng là những yếu tố giúp S23 Ultra không chỉ là một chiếc điện thoại mà còn trở thành một sản phẩm tốt cho người tiêu dùng.",
  },
];

var check_loai = function (vlue) {
  var brand = document.querySelector(".brand_sp");
  str = "";

  if (vlue === "laptop") {
    str += `  <option value="">--select--</option>
                <option value="macbook">MacBook</option>
                <option value="lenvo">Lenvo</option>
                <option value="HP">HP</option>
                <option value="Acer">Acer</option>
                <option value="Asus">Asus</option>
                <option value="Dell">Dell</option>
                <option value="Samsung">Samsung</option>`;
  }
  if (vlue === "phone") {
    str += `<option value="">--select--</option>
              <option value="Iphone">Iphone</option>
              <option value="Xaomi">Xaomi</option>`;
  }

  brand.innerHTML = str;
};

var nhaphang = function (form) {
  var loaisp = form.loai.value;
  var brandsp = form.brand.value;
  var masp = form.masp.value;
  var tensp = form.tensp.value;
  var gia = form.gia.value;
  var coupon = form.coupon.value;
  var linkimg = form.img.value.trim().split(",");
  var manhinh = form.manhinh.value;
  var cpu = form.cpu.value;
  var ram = form.ram.value;
  var trongluong = form.trongluong.value;
  var hdh = form.hdh.value;
  var kichthuoc = form.kichthuoc.value;
  var xuatxu = form.xuatxu.value;
  var danhgia = form.danhgia.value;
  var regexmasp = /^sp\d{3,}/i;

  if (regexmasp.test(masp) === false) {
    alert("Nhap sai map so");
    form.masp.focus();
    return false;
  }
  console.log(masp);
  if (tensp.trim() === "") {
    alert("Vui long nhap ten san pham");
    form.tensp.focus();
    return false;
  }

  if (gia <= 0 || gia === "") {
    alert("Vui long nhap lại gia san pham");
    form.gia.focus();
    return false;
  }
  if (coupon > 30 || coupon === "") {
    alert("Vui long nhap lại Khuyen mai san pham");
    form.coupon.focus();
    return false;
  }

  if (form.img.value === "") {
    alert("Vui long Điền link ảnh");
    form.img.focus();
    return false;
  }
  if (manhinh.trim() === "") {
    alert("Vui long nhập thông tin màn hình");
    form.manhinh.focus();
    return false;
  }
  if (cpu.trim() === "") {
    alert("Vui long nhập thông tin");
    form.cpu.focus();
    return false;
  }
  if (ram.trim() === "") {
    alert("Vui long nhập thông tin");
    form.ram.focus();
    return false;
  }
  if (trongluong.trim() === "") {
    alert("Vui long nhập thông tin");
    form.trongluong.focus();
    return false;
  }
  if (hdh.trim() === "") {
    alert("Vui long nhập thông tin");
    form.hdh.focus();
    return false;
  }
  if (kichthuoc.trim() === "") {
    alert("Vui long nhập thông tin");
    form.kichthuoc.focus();
    return false;
  }
  if (xuatxu.trim() === "") {
    alert("Vui long nhập thông tin");
    form.xuatxu.focus();
    return false;
  }
  if (danhgia.trim() === "") {
    alert("Vui long nhập thông tin");
    form.danhgia.focus();
    return false;
  }
  var obj = {
    maSP: masp,
    Brand: brandsp,
    TenSP: tensp,
    Gia: gia,
    Coupon: coupon,
    img: linkimg,
    ManHinh: manhinh,
    CPU: cpu,
    RAM: ram,
    TrongLuong: trongluong,
    HDH: hdh,
    KichThuoc: kichthuoc,
    XuatXu: xuatxu,
    DanhGia: danhgia,
  };
  if (loaisp === "laptop") list_products_lap.push(obj);
  if (loaisp === "phone") list_products_phone.push(obj);
  if (loaisp === "laptop") {
    list_products_lap.push(obj);
    localStorage.setItem("list_lap", JSON.stringify(list_products_lap));
  }
  if (loaisp === "phone") {
    list_products_phone.push(obj);
    localStorage.setItem("list_phone", JSON.stringify(list_products_phone));
  }
  alert("Them san pham thanh cong !!");
  return true;
};

// console.log(list_products_phone);
// console.log(list_products_lap);
