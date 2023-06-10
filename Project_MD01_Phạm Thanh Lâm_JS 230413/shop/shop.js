let nikes = JSON.parse(localStorage.getItem("nike"));
let useName = document.querySelector(".userName");
let logOut = document.querySelector(".logOut");
let userName = document.querySelector(".userName");

let shopUser = JSON.parse(localStorage.getItem("users"));

localStorage.setItem("users", JSON.stringify(shopUser));

logOut.addEventListener("click", function () {
  for (let i = 0; i < shopUser.length; i++) {
    shopUser[i].status = "offline";
  }
  localStorage.setItem("users", JSON.stringify(shopUser));
  window.location.href = "http://127.0.0.1:5500/trang%20ch%E1%BB%A7/index.html";
});
for (let j = 0; j < shopUser.length; j++) {
  if (shopUser[j].status == "online") {
    userName.innerHTML = shopUser[j].email;
  }
}
let postContainer = document.querySelector(".giay");
postContainer.innerHTML = "";
nikes.forEach((element) => {
  postContainer.innerHTML += `
      <div class="promo">
          <a
            href="/Chi tiết/chitiet.html?id=${element.id}"       
          >
            <img src="${element.img}" alt="" />
            <p class="mau">Promo Exclusion</p>
            <p>${element.name}</p>
            <p>${element.kieu}</p>
            <p>1 Colour</p>
            <br />
            <p>${element.gia}₫</p>
            
          </a>
        </div>
        `;
  console.log(element.id);
});

function goToCart() {
  // Chuyển đến trang giỏ hàng
  window.location.href =
    "http://127.0.0.1:5500/gi%E1%BB%8F%20h%C3%A0ng/giohang.html";
}
function lichsu() {
  // Chuyển đến trang lịch sử mua hàng
  window.location.href =
    "http://127.0.0.1:5500/l%E1%BB%8Bch%20s%E1%BB%AD%20mua%20h%C3%A0ng/index.html";
}
// function trangchu() {
//   // Chuyển đến trang chủ
//   window.location.href = "http://127.0.0.1:5500/trang%20ch%E1%BB%A7/index.html";
// }
