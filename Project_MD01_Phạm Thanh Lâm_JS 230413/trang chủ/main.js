let btnSignIn = document.getElementById("signupForm");
// let currentUser = JSON.parse(localStorage.getItem("users"));
btnSignIn.addEventListener("click", function () {
  window.location.href =
    "http://127.0.0.1:5500/%C4%91%C4%83ng%20k%C3%AD/index.html";
});

let btnLogin = document.getElementById("logIn");
let overLay = document.querySelector(".overLay");

btnLogin.addEventListener("click", function () {
  overLay.style.display = "block";
});
overLay.addEventListener("click", function (event) {
  if (event.target === overLay) {
    overLay.style.display = "none";
  }
});

let usermail = document.querySelector("#usermail");
let password = document.querySelector("#password");
let btnCorrect = document.querySelector("#btnCorrect");
let formlogin = document.getElementById("formlogin");
let userName = document.querySelector(".userName");

let dataUser = JSON.parse(localStorage.getItem("users"));

formlogin.addEventListener("submit", function (e) {
  e.preventDefault();
  let emailValue = usermail.value;
  let passwordValue = password.value;
  let findUser = dataUser.find(function (user) {
    return user.email === emailValue && user.password === passwordValue;
  });
  if (findUser) {
    findUser.status = "online";
    localStorage.setItem("users", JSON.stringify(dataUser));
    window.location.href = "http://127.0.0.1:5500/shop/shop.html";
  } else {
    alert("Vui lòng nhập lại Email hoặc Password");
  }
});

// let nikes = JSON.parse(localStorage.getItem("nike"));
// let postContainer = document.querySelector(".image");
// postContainer.innerHTML = "";
// nikes.forEach((element) => {
//   postContainer.innerHTML += `
//         <div>
//           <img src="${element.img}" alt="" />
//           <div class="tien">
//             <p>${element.name}</p>
//             <p class="money">${element.gia}₫</p>
//           </div>
//           <p>${element.kieu}</p>
//         </div>`;
// });

function goToCart() {
  // Chuyển đến trang giỏ hàng
  window.location.href =
    "http://127.0.0.1:5500/gi%E1%BB%8F%20h%C3%A0ng/giohang.html";
}
