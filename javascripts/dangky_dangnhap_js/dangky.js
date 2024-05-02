var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");

var form = document.querySelector("form");

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

function checkEmailError(input) {
    const emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    input.value = input.value.trim();

    let isEmailError = !emailRegex.test(input.value);
    if (isEmailError) {
        showError(input, "Email không hợp lệ");
    } else {
        showSuccess(input);
    }
    return isEmailError;
}

function checkPhoneError(input) {
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    input.value = input.value.trim();

    let isPhoneError = !phoneRegex.test(input.value);
    if (isPhoneError) {
        showError(input, "Số điện thoại không hợp lệ");
    } else {
        showSuccess(input);
    }
    return isPhoneError;
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

function checkPasswordAlike(passwordInput, confirmPasswordInput) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, "Mật khẩu không trùng khớp");
        return true;
    }
    return false;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([
        fullname,
        username,
        email,
        phone,
        password,
        confirmPassword,
    ]);
    let isEmailError = checkEmailError(email);
    let isPhoneError = checkPhoneError(phone);
    let isPasswordError = checkPassword(password);
    let isConfirmPasswordError = checkPassword(confirmPassword);
    let isConfirmPassword_Error = checkPasswordAlike(password, confirmPassword);

    if (
        !isEmptyError &&
        !isEmailError &&
        !isPhoneError &&
        !isPasswordError &&
        !isConfirmPasswordError &&
        !isConfirmPassword_Error
    ) {
        // Kiểm tra xem tên đăng nhập đã tồn tại hay chưa
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some((user) => user.username === username.value)) {
            alert("Tên đăng nhập đã tồn tại.");
        } else {
            // Nếu tên đăng nhập không tồn tại, tiến hành đăng ký
            const user = {
                fullname: fullname.value,
                username: username.value,
                email: email.value,
                phone: phone.value,
                password: password.value,
            };

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Đăng ký thành công");
            window.location.href = "dangnhap.html";
        }
    }
});
