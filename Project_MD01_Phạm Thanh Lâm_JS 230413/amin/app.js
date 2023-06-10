let nikes = JSON.parse(localStorage.getItem("nike"));
let shopUser = JSON.parse(localStorage.getItem("users"));
let quanly = document.querySelector(".head22");
quanly.innerHTML = "";
shopUser.forEach((element) => {
  quanly.innerHTML += `
    <tr>
      <td class="head211">${element.id}</td>
      <td class="head212">${element.email}</td>
      <td class="head213">${element.password}</td>
      <td class="head214">
      ${element.status}
      <span class="status-msg"></span>
      </td>
      <td class="head215">
        <button class="head2151" onclick="unblock('${element.id}')">unlock</button>
        <button class="head2152">${element.block}</button>
        <button class="head2153" onclick="block('${element.id}')">block</button>
      </td>
    </tr>`;
});

// Khóa tài khoản người dùng
function block(id) {
  let user = shopUser.find((user) => user.id === id);
  if (user) {
    user.block = true;
    localStorage.setItem("users", JSON.stringify(shopUser));
    displayUsers();
    showStatusMessage(user.id, "Tài khoản đã bị khóa.");
  }
}

function unblock(id) {
  let user = shopUser.find((user) => user.id === id);
  if (user) {
    user.block = false;
    localStorage.setItem("users", JSON.stringify(shopUser));
    displayUsers();
    showStatusMessage(user.id, "Tài khoản đã được mở khóa.");
  }
}

function showStatusMessage(id, message) {
  let statusMsg = document.querySelector(`#${id} .status-msg`);
  statusMsg.textContent = message;
}

// Hàm hiển thị danh sách người dùng
function displayUsers() {
  let quanly = document.querySelector(".head22");
  quanly.innerHTML = "";
  shopUser.forEach((element) => {
    let statusMsg = element.block ? "Tài khoản đã bị khóa." : "";
    quanly.innerHTML += `
      <tr>
        <td class="head211">${element.id}</td>
        <td class="head212">${element.email}</td>
        <td class="head213">${element.password}</td>
        <td class="head214">
          ${element.status}
          <span class="status-msg">${statusMsg}</span>
        </td>
        <td class="head215">
          <button class="head2151" onclick="unblock('${
            element.id
          }')">Unlock</button>
          <button class="head2152">${
            element.block ? "Blocked" : "Active"
          }</button>
          <button class="head2153" onclick="block('${
            element.id
          }')">Block</button>
        </td>
      </tr>`;
  });
}

// Gọi hàm hiển thị người dùng ban đầu
displayUsers();

//
let mainForm4 = document.getElementById("main-form4");
mainForm4.addEventListener("submit", function (e) {
  e.preventDefault();
  let newBookmark4 = {
    id: Math.floor(Math.random() * 100000000000000),
    name: mainForm4.name.value,
    kieu: mainForm4.kieu.value,
    gia: mainForm4.gia.value,
    thong: mainForm4.thong.value,
    img: mainForm4.img.value,
    img1: mainForm4.img1.value,
    img2: mainForm4.img2.value,
    img3: mainForm4.img3.value,
    img4: mainForm4.img4.value,
    img5: mainForm4.img5.value,
    img6: mainForm4.img6.value,
    img7: mainForm4.img7.value,
    img8: mainForm4.img8.value,
  };
  console.log(newBookmark4);
  nikes.push(newBookmark4);
  localStorage.setItem("nike", JSON.stringify(nikes));
});

//
let nike1 = document.querySelector(".nike");

nike1.innerHTML = "";
nikes.forEach((element) => {
  nike1.innerHTML += `
    <div class="head421" id="${element.id}">
      <img src="${element.img}" style="width: 100px;" alt="">
      <div class="head4211">
        <div class="head42111">
          <h5><b>${element.name}</b></h5>
        </div>
        <div class="head42112">${element.kieu}</div>
        
        <div class="head42114">${element.gia}</div>
        
        <button onclick="xoangay1('${element.id}')">xoá</button>
      </div>
      <hr>
    </div>`;
});

function xoangay1(id) {
  console.log(id);
  let nikes = JSON.parse(localStorage.getItem("nike"));
  let findUser = nikes.filter(function (user) {
    if (user.id == id) {
      let findIndex = nikes.findIndex(function (element, index) {
        return element.id == user.id;
      });

      nikes.splice(findIndex, 1);
      localStorage.setItem("nike", JSON.stringify(nikes));
      displayNikes();
    }
  });
}

function displayNikes() {
  let nike1 = document.querySelector(".nike");
  let nikes = JSON.parse(localStorage.getItem("nike"));

  nike1.innerHTML = "";
  nikes.forEach((element) => {
    nike1.innerHTML += `
      <div class="head421" id="${element.id}">
        <img src="${element.img}" style="width: 100px;" alt="">
        <div class="head4211">
          <div class="head42111">
            <h5><b>${element.name}</b></h5>
          </div>
          <div class="head42112">${element.kieu}</div>
          
          <div class="head42114">${element.gia}</div>
          <button onclick="xoangay1('${element.id}')">xoá</button>
        </div>
        <hr>
      </div>`;
  });
}

// Hiển thị sản phẩm ban đầu
displayNikes();

// function xoangay1(id) {
//   console.log(id);
//   let nikes = JSON.parse(localStorage.getItem("nike"));
//   let index = nikes.findIndex((item) => item.id === id);
//   if (index !== -1) {
//     nikes.splice(index, 1);
//     localStorage.setItem("nike", JSON.stringify(nikes));

//     // Cập nhật lại giao diện sau khi xóa sản phẩm
//     // displayNikes();
//   }
// }

// function xoangay1(id) {
//   console.log(id);
//   let nikes = JSON.parse(localStorage.getItem("nike"));
//   let findUser = nikes.filter(function (user) {
//     if (user.id == id) {
//       let findIndex = nikes.findIndex(function (element, index) {
//         return element.id == user.id;
//       });
//       nikes.splice(findIndex, 1);
//       localStorage.nikes = JSON.stringify(nikes);
//     }
//   });
// }
