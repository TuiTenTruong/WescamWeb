var list_products_lap = JSON.parse(localStorage.getItem("list_lap"));
var list_products_phone = JSON.parse(localStorage.getItem("list_phone"));

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
// cập nhật sản phẩm
