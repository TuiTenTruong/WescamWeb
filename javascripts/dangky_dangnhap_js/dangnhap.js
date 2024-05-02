var usernameInput = document.querySelector("#username");
var passwordInput = document.querySelector("#password");
var form = document.querySelector("form");
// Trang chủ
// var taikhoan = [{ username: "admin123",password : "Admin@123"}]
// localStorage.setItem('users',JSON.stringify(taikhoan));
var usernameDisplay = document.getElementById("username-display");
var logoutBtn = document.getElementById("logout-btn");

//chi tiết
var buy_bnt = document.querySelector("buy_bnt");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(ListInput) {
  let isEmptyError = false;
  ListInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });

  return isEmptyError;
}

function checkPassword(input) {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  input.value = input.value.trim();

  let isPasswordError = !passwordRegex.test(input.value);
  if (isPasswordError) {
    showError(input, "Mật khẩu không đúng định dạng");
  } else {
    showSuccess(input);
  }
  return isPasswordError;
}

//  đăng nhập
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmptyError = checkEmptyError([usernameInput, passwordInput]);
  let isPasswordError = checkPassword(passwordInput);

  if (!isEmptyError && !isPasswordError) {
    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Tìm người dùng
    const user = users.find(
      (u) =>
        u.username === usernameInput.value && u.password === passwordInput.value
    );
    if (user) {
      alert("Đăng nhập thành công!");

      localStorage.setItem("loggedInUser", JSON.stringify(user));
      //dua loggedInUser để xuống hàm displayLoggedInUser lấy ra

      // Kiểm tra trạng thái trang trước đó từ localStorage
      const currentPage = localStorage.getItem("currentPage");
      if (currentPage === "chitiet.html") {
        // Nếu trước đó đang ở trang chi tiết, chuyển hướng đến trang chi tiết
        window.location.href = "chitiet.html";
      } else {
        // Ngược lại, chuyển hướng về trang chính
        window.location.href = "trangchu.html";
      }
    } else {
      alert("Đăng nhập thất bại, tài khoản chưa tồn tại!");
    }
  }
});

//  đăng nhập và nút "Đăng xuất"
function displayLoggedInUser() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(loggedInUser);

  if (loggedInUser) {
    usernameDisplay.textContent = `${loggedInUser.username} |`;
    logoutBtn.textContent = "Đăng xuất";
    usernameDisplay.style.display = "block"; // Hiển thị tên người dùng
    logoutBtn.style.display = "block"; // Hiển thị nút "Đăng xuất"

    document
      .querySelector("#username-display")
      .removeAttribute("href", "./dangnhap.html");
    document
      .querySelector("#logout-btn")
      .removeAttribute("href", "./dangky.html");

    document.querySelector("#logout-btn").setAttribute("href", "#");
  }
}

// "Đăng xuất"
logoutBtn.addEventListener("click", function () {
  // Hiển thị hộp thoại xác nhận
  if (logoutBtn.textContent == "Đăng xuất") {
    if (confirm("Bạn có chắc muốn đăng xuất không?")) {
      localStorage.removeItem("loggedInUser");
    }
    window.location.href = "trangchu.html";
  }
});

usernameDisplay.addEventListener("click", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (usernameDisplay.textContent === `${loggedInUser.username} |`) {
    var userlogin = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(userlogin.username);
    if (
      userlogin.username === "admin123" &&
      userlogin.password === "Admin@123"
    ) {
      window.open("/Admin/index_list_account.html", "_self");
    } else {
      window.open("user.html", "_self");
    }
  }
});

//check đăng nhập bên trang chi tiết
// buy_bnt.addEventListener("click", function () {
//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//   if (!loggedInUser) {
//     // Lưu trạng thái trang vào localStorage -> trang đăng nhập
//     localStorage.setItem("currentPage", "chitiet.html");
//     window.location.href = "dangnhap.html";
//   }
// });
