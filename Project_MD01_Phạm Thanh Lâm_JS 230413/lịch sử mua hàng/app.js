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
let purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
let hihiUsers = [];
let result = "";
for (let a = 0; a < purchaseHistory.length; a++) {
  for (let b = 0; b < shopUser.length; b++) {
    if (
      purchaseHistory[a].nameCart == shopUser[b].email &&
      shopUser[b].status == "online"
    ) {
      let hihiUsers = purchaseHistory[a].cart;
      for (let d = 0; d < hihiUsers.length; d++) {
        result += `
                <div class="nho">
                    <img src="${hihiUsers[d].img}" alt="" />
                    <div class="bag">
                        <p>${hihiUsers[d].name}</p>
                        <p>${hihiUsers[d].kieu}</p>
                        <p>Atmosphere/White/Guava Ice/Light Steel Grey</p>
                        <p>Size: ${hihiUsers[d].size}</p>
                        <p class="tien">${hihiUsers[d].gia}₫</p>
                    </div>
                </div>
                `;
      }
    }
  }
}
document.querySelector(".container").innerHTML = result;

function shop() {
  // Chuyển đến trang shop
  window.location.href = "http://127.0.0.1:5500/shop/shop.html";
}
