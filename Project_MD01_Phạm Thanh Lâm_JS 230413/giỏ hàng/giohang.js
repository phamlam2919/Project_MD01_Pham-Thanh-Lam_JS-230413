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

let result = "";
let renderCatt = JSON.parse(localStorage.getItem("renderCart")) || [];
let purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
let cattUsers = [];
let totalAmount = 0;

for (let a = 0; a < renderCatt.length; a++) {
  for (let b = 0; b < shopUser.length; b++) {
    if (
      renderCatt[a].nameCart == shopUser[b].email &&
      shopUser[b].status == "online"
    ) {
      let cattUser = renderCatt[a].cart;

      for (let d = 0; d < cattUser.length; d++) {
        result += `
          <div class="nho">
            <img src="${cattUser[d].img}" alt="" />
            <div class="bag">
              <p>${cattUser[d].name}</p>
              <p>${cattUser[d].kieu}</p>
              <p>Atmosphere/White/Guava Ice/Light Steel Grey</p>
              <p>Size: ${cattUser[d].size}</p>
              
              <br /><br />
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
                onclick="deleteCartItem(${a}, ${d})"
              >
                <path
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
                ></path>
              </svg>
            </div>
            <p class="tien">${cattUser[d].gia}₫</p>
          </div>
        </div>
  `;

        let itemPrice = parseFloat(cattUser[d].gia.replace(/[^0-9.-]+/g, ""));
        totalAmount += itemPrice;
        let totalElement = document.querySelector(".total span");
        totalElement.textContent = formatMoney(totalAmount);
      }
    }
  }
}

document.querySelector(".container").innerHTML = result;

function formatMoney(amount) {
  return amount.toLocaleString() + "₫";
}

// function decreaseQuantity(a, d) {
//   let cattUser = renderCatt[a].cart;
//   if (cattUser[d].quantity > 0) {
//     cattUser[d].quantity--;
//     cattUser[d].gia = `${cattUser[d].giaUnit * cattUser[d].quantity}₫`;
//     updateCart();
//   }
// }

// function increaseQuantity(a, d) {
//   let cattUser = renderCatt[a].cart;
//   cattUser[d].quantity++;
//   cattUser[d].gia = `${cattUser[d].giaUnit * cattUser[d].quantity}₫`;
//   updateCart();
// }

function deleteCartItem(a, d) {
  renderCatt[a].cart.splice(d, 1);
  updateCart();
  window.location.href = "./giohang.html";
}

function updateCart() {
  // Cập nhật lại localStorage
  localStorage.setItem("renderCart", JSON.stringify(renderCatt));
}

function calculateTotalAmount() {
  let totalAmount = 0;
  for (let a = 0; a < renderCatt.length; a++) {
    let cattUser = renderCatt[a].cart;
    for (let d = 0; d < cattUser.length; d++) {
      let itemPrice = parseFloat(cattUser[d].gia.replace(/[^0-9.-]+/g, ""));
      totalAmount += itemPrice;
    }
  }
  return totalAmount;
}

// Lưu thông tin mua hàng vào lịch sử mua hàng
// purchaseHistory.push(...renderCatt);

// Xóa giỏ hàng sau khi đã lưu thông tin mua hàng
// localStorage.removeItem("renderCart");

// // Cập nhật lịch sử mua hàng trong localStorage
// localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory));

function menber() {
  purchaseHistory.push(...renderCatt);
  localStorage.removeItem("renderCart");
  window.location.href =
    "http://127.0.0.1:5500/l%E1%BB%8Bch%20s%E1%BB%AD%20mua%20h%C3%A0ng/index.html";
}

function shop() {
  // Chuyển đến trang shop
  window.location.href = "http://127.0.0.1:5500/shop/shop.html";
}
function lichsu() {
  // Chuyển đến trang lịch sử mua hàng
  window.location.href =
    "http://127.0.0.1:5500/l%E1%BB%8Bch%20s%E1%BB%AD%20mua%20h%C3%A0ng/index.html";
}

// {/* <div>
//   <span>Quantity: </span>
//   <i onclick="decreaseQuantity(${a}, ${d})" class="fa-solid fa-minus"></i>
//   <span class="giatri">${cattUser[d].quantity}</span>
//   <i onclick="increaseQuantity(${a}, ${d})" class="fa-solid fa-plus"></i>
// </div>; */}
// swal({
//   title: "Thanh Toán Thành Công",
//   text: " ",
//   icon: "success",
//   timer: 5000,
//   buttons: false,
// });
// Chuyển hướng sang trang lịch sử mua hàng
