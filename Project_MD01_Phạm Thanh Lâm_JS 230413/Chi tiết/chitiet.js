let logOut = document.querySelector(".logOut");
let userName = document.querySelector(".userName");
let renderCart = JSON.parse(localStorage.getItem("renderCart")) || [];
let user = JSON.parse(localStorage.getItem("users"));
// let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// currentUser = currentUser[0].email;

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

let nikes = JSON.parse(localStorage.getItem("nike"));

let url = window.location.href;

let id = url.split("=")[1];

let nike = nikes.filter((e) => {
  return e.id == id;
});

let postContainers2 = document.querySelector(".container");
postContainers2.innerHTML = "";
nike.forEach((element) => {
  postContainers2.innerHTML = ` <div class="anh">
        <div id="product-image" class="img-nho">
          <img src="${element.img1}" alt="" />
          <img src="${element.img2}" alt="" />
          <img src="${element.img3}" alt="" />
          <img src="${element.img4}" alt="" />
          <img src="${element.img5}" alt="" />
          <img src="${element.img6}" alt="" />
          <img src="${element.img7}" alt="" />
          <img src="${element.img8}" alt="" />
        </div>
        <div class="img-to">
          <img id"anhto" src="${element.img1}" alt="" />
        </div>
      </div>

      <div id="product-details" class="sile">
        <h2 id="product-name">${element.name}</h2>
        <p id="product-type">${element.kieu}</p>
        <p id="product-color"></p>
        <p id="product-price">${element.gia}₫</p>
        <p>Select Size</p>

        <div class="size"> 
          <div class="sz">EU 35.5</div>
          <div class="sz">EU 36</div>
          <div class="sz">EU 36.5</div>
          <div class="sz">EU 37.5</div>
          <div class="sz">EU 38</div>
          <div class="sz">EU 38.5</div>
          <div class="sz">EU 39</div>
          <div class="sz">EU 40</div>
          <div class="sz">EU 40.5</div>
          <div class="sz">EU 41</div>
          <div class="sz">EU 42</div>
          <div class="giohang">
          <button
              type="button"
              class="den"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add to Bag
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Added to Bag
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="giohang22">
                     <div class="giohang19">
                        <img src="${element.img1}" alt="" />
                      </div>
                      <div class="giohang220">
                        <div class="giohang221">${element.name}</div>
                        <div class="giohang222">${element.kieu}</div>
                        <div class="giohang223"></div>
                        <div class="giohang224">${element.gia}₫</div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="close" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="button" class="view"  onclick="goToCart()">View Bag</button>
                  </div>
                </div>
              </div>
            </div>
          <button class="trang">
            Favourite <i class="fa-regular fa-heart"></i>
          </button>
        </div>
        </div>
      
        <div class="this">
          This product is excluded from site promotions and discounts.
        </div>
        <div class="rise">
          Rise to the occasion in style that soars. This shoe reworks an icon's
          original magic with a platform sole and low-cut silhouette. Air
          cushioning keeps you lifted, and sleek leather in contrasting colours
          adds visual interest.
        </div>
      </div>`;

  let mangRong = [];

  let sizeElements = document.querySelectorAll(".sz");

  sizeElements.forEach(function (sizeElement) {
    sizeElement.addEventListener("click", function () {
      sizeElements.forEach(function (element) {
        element.classList.remove("active");
      });

      sizeElement.classList.add("active");
      let selectedSize = sizeElement.textContent;
      mangRong.unshift(selectedSize);

      let mainForm2 = document.querySelector(".den");
      let giohang = JSON.parse(localStorage.getItem("giohang")) || [];
      mainForm2.addEventListener("click", function (e) {
        e.preventDefault();
        let newBookmark2 = {
          id: Math.floor(Math.random() * 100000000000000),
          name: element.name,
          kieu: element.kieu,
          gia: element.gia,
          img: element.img,
          size: mangRong[0],
        };

        giohang.unshift(newBookmark2);
        let nameUser = "";
        // renderBookmark2()
        for (let i = 0; i < user.length; i++) {
          if (user[i].status == "online") {
            nameUser = user[i].email;
          }
        }
        let myCartUser = {
          nameCart: nameUser,
          cart: giohang,
        };
        renderCart.unshift(myCartUser);
        localStorage.setItem("renderCart", JSON.stringify(renderCart));
      });
    });
  });
});

// adds.addEventListener("click", function () {
//   let cartTitle = document.querySelector(".giohang223");
//   cartTitle.innerHTML = mangRong[mangRong.length - 1];
// });
const imageSelector = document.querySelectorAll(".img-nho img");
const imageTo = document.querySelector(".img-to img");

for (let i = 0; i < imageSelector.length; i++) {
  const imageElementClick = imageSelector[i];
  imageElementClick.addEventListener("mouseenter", function (event) {
    imageTo.setAttribute("src", event.target.src);
  });
}

function goToCart() {
  // Chuyển đến trang giỏ hàng
  window.location.href =
    "http://127.0.0.1:5500/gi%E1%BB%8F%20h%C3%A0ng/giohang.html";
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
