var fullname = document.querySelector("#fullname");
var email = document.querySelector("#email");
var username = document.querySelector("#user");
var phone = document.querySelector("#phone");
var password = document.querySelector("#password");
var addButton = document.querySelector(".main-btn");
const emailRegex =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  return phoneRegex.test(phone);
}

function isPassword(password) {
  return passwordRegex.test(password);
}

// Bắt sự kiện click của nút thêm tài khoản
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Lấy giá trị từ các trường nhập liệu
  var fullnameValue = fullname.value.trim();
  var emailValue = email.value.trim();
  var usernameValue = username.value.trim();
  var phoneValue = phone.value.trim();
  var passwordValue = password.value.trim();

  // Kiểm tra xem các trường có rỗng không
  if (
    !fullnameValue ||
    !emailValue ||
    !usernameValue ||
    !phoneValue ||
    !passwordValue
  ) {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }

  if (!isValidEmail(emailValue)) {
    alert("Email không hợp lệ");
    return;
  }

  if (!isValidPhone(phoneValue)) {
    alert("Số điện thoại không hợp lệ");
    return;
  }

  if (!isPassword(passwordValue)) {
    alert(
      "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt, và có ít nhất 8 ký tự"
    );
    return;
  }

  // Tạo một đối tượng tài khoản mới
  const user = {
    fullname: fullnameValue,
    email: emailValue,
    username: usernameValue,
    phone: phoneValue,
    password: passwordValue,
  };

  // Lưu đối tượng tài khoản vào localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((user) => user.username === username.value)) {
    alert("Tên đăng nhập đã tồn tại.");
  } else {
    // Nếu tên đăng nhập không tồn tại, tiến hành đăng ký

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công");
    window.location.href = "index_list_account.html";
  }
});

// cập nhật tài khoản
document.addEventListener("DOMContentLoaded", function () {
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var fullname = document.getElementById("fullname");
  var email = document.getElementById("email");
  var username = document.getElementById("user");
  var phone = document.getElementById("phone");
  var password = document.getElementById("password");
  var updateButton = document.getElementById("update");

  function updateUser() {
    var fullnameValue = fullname.value.trim();
    var emailValue = email.value.trim();
    var usernameValue = username.value.trim();
    var phoneValue = phone.value.trim();
    var passwordValue = password.value.trim();

    if (
      !fullnameValue ||
      !emailValue ||
      !usernameValue ||
      !phoneValue ||
      !passwordValue
    ) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (!isValidEmail(emailValue)) {
      alert("Email không hợp lệ");
      return;
    }

    if (!isValidPhone(phoneValue)) {
      alert("Số điện thoại không hợp lệ");
      return;
    }

    if (!isPassword(passwordValue)) {
      alert("Mật khẩu không hợp lệ");
      return;
    }

    // Tạo một đối tượng tài khoản mới
    var updatedUser = {
      fullname: fullnameValue,
      email: emailValue,
      username: usernameValue,
      phone: phoneValue,
      password: passwordValue,
    };

    // Lấy index của tài khoản cần cập nhật
    var index = users.findIndex(function (user) {
      return user.username === usernameValue;
    });

    // Cập nhật thông tin tài khoản trong danh sách
    if (index !== -1) {
      users[index] = updatedUser;
      // Lưu danh sách tài khoản đã cập nhật vào localStorage
      localStorage.setItem("users", JSON.stringify(users));
      alert("Cập nhật tài khoản thành công");
      window.location.href = "index_list_account.html";
    } else {
      alert("Không tìm thấy tài khoản để cập nhật");
    }
  }

  //  sự kiện click
  updateButton.addEventListener("click", updateUser);
});
