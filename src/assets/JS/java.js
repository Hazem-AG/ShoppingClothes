//*-------------------------------------------------------------------------------------------------------------START------------------------//
//---------------------------------------------//
//---------------------------------------------//
//---------------------------------------------//
//?---------------------------------------------------------------------------------------------------------- Product-Offers ----------------//
//-----------------------------------------//
document.querySelectorAll(".PR-s").forEach((div) => {
  div.addEventListener("click", () => {
    const selectedImage = window
      .getComputedStyle(div)
      .backgroundImage.replace(/^url\(["']?/, "")
      .replace(/["']?\)$/, "");
    const imageContainers = document.querySelectorAll(".Rec60, .Rec70");
    const currentBackgrounds = Array.from(imageContainers).map((img) =>
      window
        .getComputedStyle(img)
        .backgroundImage.replace(/^url\(["']?/, "")
        .replace(/["']?\)$/, "")
    );
    imageContainers.forEach(
      (img, i) => (img.style.backgroundImage = `url('${selectedImage}')`)
    );
    div.style.backgroundImage = `url('${currentBackgrounds[0]}')`;
    document
      .querySelector(".Deals-OF-month")
      .classList.remove("image-2", "image-3");
    if (selectedImage.includes("PR-2.jpeg")) {
      document.querySelector(".Deals-OF-month").classList.add("image-2");
    } else if (selectedImage.includes("PR-3.jpeg")) {
      document.querySelector(".Deals-OF-month").classList.add("image-3");
    }
  });
});
//---------------------------------------------//
//?---------------------------------------------------------------------------------------------------------- NavBar ----------------//
//-----------------------------------------//

document.getElementById("label1").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("New-Arrivals-Section").scrollIntoView({
      behavior: "smooth",
    });
  }, 400);
});
document.getElementById("label2").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("Trendy-Page").scrollIntoView({
      behavior: "smooth",
    });
  }, 400);
});
document.getElementById("label3").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("OurProducts").scrollIntoView({
      behavior: "smooth",
    });
  }, 400);
});
document.getElementById("label4").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("Deals-OF-Month").scrollIntoView({
      behavior: "smooth",
    });
  }, 400);
});
//-----------------------------------------//
//!-----------------------------------------//
//?---------------------------------------------------------------------------------------------------------- Product Page ----------------//
//-----------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  var productsContainer = document.querySelector(".PRODUCTS");
  var pagination = document.querySelector(".Pagination");
  function calculateRowsCount() {
    var product = productsContainer.querySelector(".product");
    var productHeight = product.offsetHeight;
    var containerHeight = productsContainer.scrollHeight;
    var rowsCount = Math.ceil(containerHeight / productHeight);
    return rowsCount;
  }
  function createButtons() {
    var rowsCount = calculateRowsCount();
    var extraButtonsCount = Math.ceil(rowsCount / 2) - 1;
    console.log("Rows Count:", rowsCount);
    console.log("Extra Buttons Count:", extraButtonsCount);
    pagination.innerHTML = "";
    function scrollToRow(rowNumber) {
      var scrollTo = rowNumber * 430;
      productsContainer.scrollTop = scrollTo;
    }
    for (var i = 0; i <= extraButtonsCount; i++) {
      var newButton = document.createElement("div");
      newButton.className = "Component";
      var buttonNumber = i + 1;
      newButton.innerHTML =
        '<input type="radio" name="compo" id="Component' +
        buttonNumber +
        '"><label for="Component' +
        buttonNumber +
        '"><p id="buttonNumber">' +
        buttonNumber +
        "</p></label>";
      if (buttonNumber == 1) {
        newButton.setAttribute("data-scroll", "0");
      } else {
        newButton.setAttribute("data-scroll", (buttonNumber = i + 1));
      }
      pagination.appendChild(newButton);
      newButton.addEventListener("click", function () {
        var rowToScroll = parseInt(this.getAttribute("data-scroll"));
        scrollToRow(rowToScroll);
      });
    }
  }
  createButtons();
  window.addEventListener("resize", function () {
    createButtons();
  });
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        createButtons();
      }
    });
  });
  var config = { childList: true };
  observer.observe(productsContainer, config);
});
//-----------------------------------------//
//!-----------------------------------------//

//?---------------------------------------------------------------------------------------------------------- Filter ----------------//
//-----------------------------------------//
const Products = document.querySelector(".Our-Products-Section");
//-------------------------------------------------------------//
const ALLButton = document.getElementById("ALL");
const Fil1Button = document.getElementById("Fil1");
const Fil2Button = document.getElementById("Fil2");
const Fil3Button = document.getElementById("Fil3");
const Fil4Button = document.getElementById("Fil4");
const Fil5Button = document.getElementById("Fil5");
const OffButton = document.getElementById("Off");
//-----------------------------------------------//
ALLButton.addEventListener("click", () => {
  Products.classList.add("activeALL");
  Products.classList.remove(
    "activeFil1",
    "activeFil2",
    "activeFil3",
    "activeFil4",
    "activeFil5",
    "activeOff"
  );
});
Fil1Button.addEventListener("click", () => {
  Products.classList.add("activeFil1");
  Products.classList.remove(
    "activeALL",
    "activeFil2",
    "activeFil3",
    "activeFil4",
    "activeFil5",
    "activeOff"
  );
});
Fil2Button.addEventListener("click", () => {
  Products.classList.add("activeFil2");
  Products.classList.remove(
    "activeALL",
    "activeFil1",
    "activeFil3",
    "activeFil4",
    "activeFil5",
    "activeOff"
  );
});
Fil3Button.addEventListener("click", () => {
  Products.classList.add("activeFil3");
  Products.classList.remove(
    "activeALL",
    "activeFil2",
    "activeFil1",
    "activeFil4",
    "activeFil5",
    "activeOff"
  );
});
Fil4Button.addEventListener("click", () => {
  Products.classList.add("activeFil4");
  Products.classList.remove(
    "activeALL",
    "activeFil2",
    "activeFil3",
    "activeFil1",
    "activeFil5",
    "activeOff"
  );
});
Fil5Button.addEventListener("click", () => {
  Products.classList.add("activeFil5");
  Products.classList.remove(
    "activeALL",
    "activeFil2",
    "activeFil3",
    "activeFil4",
    "activeFil1",
    "activeOff"
  );
});
OffButton.addEventListener("click", () => {
  Products.classList.add("activeOff");
  Products.classList.remove(
    "activeALL",
    "activeFil2",
    "activeFil3",
    "activeFil4",
    "activeFil5",
    "activeFil1"
  );
});
//-----------------------------------------//
//!-----------------------------------------//
//-----------------------------------------------//
//?------------------------------------------------------------------------------------------------- Countdown-Container ------------//
//-----------------------------------------//
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);
targetDate.setHours(targetDate.getHours() + 10);
targetDate.setMinutes(targetDate.getMinutes() + 30);
targetDate.setSeconds(targetDate.getSeconds() + 12);
//-----------------------------------------------//
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
//-----------------------------------------------//
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
//-----------------------------------------------//
const interval = setInterval(() => {
  const now = new Date();
  const diffMs = targetDate - now;
  if (diffMs <= 0) {
    clearInterval(interval);
    daysElement.textContent = "0";
    hoursElement.textContent = "0";
    minutesElement.textContent = "0";
    secondsElement.textContent = "0";
    return;
  }
  const days = Math.floor(diffMs / 86400000);
  const hours = Math.floor((diffMs % 86400000) / 3600000);
  const minutes = Math.floor((diffMs % 3600000) / 60000);
  const seconds = Math.floor((diffMs % 60000) / 1000);

  daysElement.textContent = formatTime(days);
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
}, 1000);
//-----------------------------------------//
//!-----------------------------------------//

//?-------------------------------------------------------------------------------------------------POPup All Products------------//
//--------------------------------------//
function openCartPopup() {
  var overlay = document.getElementById("overlay");
  var cartPopup = document.getElementById("cart-popup");

  overlay.style.display = "block";
  cartPopup.style.display = "block";
}
//-----------------------------------------------//
function closeCartPopup() {
  var overlay = document.getElementById("overlay");
  var cartPopup = document.getElementById("cart-popup");

  overlay.style.display = "none";
  cartPopup.style.display = "none";
}
//----------------------------------------//
//!--------------------------------------//

//?-------------------------------------------------------------------------------------------------Scroll-Right & Left------------//
//----------------------------------------//
//-----------------------------------------------//
function scrollRight(element, amount) {
  element.scrollBy({ left: amount, behavior: "smooth" });
}
//-----------------------------------------------//
function scrollLeft(element, amount) {
  element.scrollBy({ left: -amount, behavior: "smooth" });
}
//-----------------------------------------------//

const comment = document.getElementById("Comment2");
const productsContainer = document.getElementById("productsContainer");
const productsContainer2 = document.getElementById("productsContainer2");
const PRODUCTS2232 = document.getElementById("PRODUCTS2232");

function scrollCommentRight() {
  scrollRight(comment, 432);
}
//-----------------------------------------------//
function scrollCommentLeft() {
  scrollLeft(comment, 430);
}
//-----------------------------------------------//
function scrollProductsRight() {
  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth;
  scrollRight(productsContainer, scrollAmount);
}
//-----------------------------------------------//
function scrollProductsLeft() {
  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth;
  scrollLeft(productsContainer, scrollAmount);
}
//-----------------------------------------------//
function scrollProducts2Right() {
  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth;
  scrollRight(productsContainer2, scrollAmount);
}
//-----------------------------------------------//
function scrollProducts2Left() {
  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth;
  scrollLeft(productsContainer2, scrollAmount);
}
//-----------------------------------------------//
function scrollProductsRight3() {
  scrollRight(PRODUCTS2232, 351);
}
//-----------------------------------------------//
function scrollProductsLeft3() {
  scrollLeft(PRODUCTS2232, 351);
}

//-----------------------------------------------//
//----------------------------------------//
//!--------------------------------------//

//?------------------------------------------------------------------------------------------------- POPup Item----------------------//
//----------------------------------------//
//-----------------------------------------------//
function openModal(event, imageElement) {
  const modalcontent1 = document.getElementById("productModal");
  const modal = document.getElementById("modal");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productImage = document.getElementById("productImage");
  //-----------------------------------------------//
  productImage.innerHTML = `
    <img class="img-prodct" src="${imageElement.src}" alt="${productName}">
  `;
  //-----------------------------------------------//
  const buttonElement = event.currentTarget.closest(".add-Cart");
  //-----------------------------------------------//
  const buttonRect = buttonElement.getBoundingClientRect();
  const modalLeft = buttonRect.left + window.scrollX;
  const modalTop = buttonRect.bottom + window.scrollY;
  //-----------------------------------------------//
  modal.style.display = "block";
  modalcontent1.style.display = "block";
  modalcontent1.style.position = "absolute";
  modalcontent1.style.top = `${modalTop + 80}px`;
  modalcontent1.style.left = `${modalLeft + 120}px`;
  //-----------------------------------------------//
  const productElement = buttonElement.parentElement;
  const productNameData =
    productElement.querySelector(".Product-Name").innerText;
  const productPriceData = productElement.querySelector(".Price p").innerText;
  const productImageData = productElement.querySelector(".img-prodct").src;
  //-----------------------------------------------//
  productName.innerText = productNameData;
  productPrice.innerText = productPriceData;
  //-----------------------------------------------//
  productImage.src = productImageData;
}
//---------------------------------------//
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  const modalcontent1 = document.getElementById("productModal");
  //-----------------------------------------------//
  if (event.target === modal) {
    modal.style.display = "none";
    modalcontent1.style.display = "none";
  }
};
//---------------------------------------//
window.onclick = function (event) {
  const modal1 = document.getElementById("modal");
  const modalcontent1 = document.getElementById("productModal");
  //-----------------------------------------------//
  if (event.target === modal1) {
    modal1.style.display = "none";
    modalcontent1.style.display = "none";
  }
};
//---------------------------------------//
function buyProduct2() {
  const sizeRadioElements = document.querySelectorAll('input[name="tab"]');
  const colorRadioElements = document.querySelectorAll('input[name="color"]');
  const numInput = document.getElementById("Num");
  //-----------------------------------------------//
  sizeRadioElements.forEach((radio) => (radio.checked = false));
  colorRadioElements.forEach((radio) => (radio.checked = false));
  n = 1;
  numInput.value = n;
}
//----------------------------------------//
//!--------------------------------------//
//?-------------------------------------------------------------------------------------------------POPup Item-counter------------//
//---------------------------------------//
const min = document.querySelector(".minus"),
  plu = document.querySelector(".plus"),
  num = document.querySelector(".num"),
  mi = document.querySelector(".minus1"),
  pl = document.querySelector(".plus1"),
  nu = document.querySelector(".num2");
//---------------------------------------//
let n = 0;
let n2 = 0;
num.value = 1;
nu.value = 1;
//---------------------------------------//
plu.addEventListener("click", () => {
  n++;
  num.value = n;
});
//-----------------------------------------------//
pl.addEventListener("click", () => {
  n2++;
  nu.value = n2;
});
//-----------------------------------------------//
min.addEventListener("click", () => {
  if (n > 1) {
    n--;
    num.value = n;
  }
});
//-----------------------------------------------//
mi.addEventListener("click", () => {
  if (n2 > 1) {
    n2--;
    nu.value = n2;
  }
});
//----------------------------------------//
//!--------------------------------------//
//-----------------------------------------------//
//?------------------------------------------------------------------------------------------------- POPup ALL Products--------------//
//-----------------------------------------//
function calculateTotal() {
  var total = 0;
  var priceElements = document.getElementsByClassName("PriceTotal");

  for (var i = 0; i < priceElements.length; i++) {
    total += parseFloat(priceElements[i].innerText);
  }

  return total;
}
//-----------------------------------------------//
function updateTotalPrice() {
  var total = calculateTotal();
  document.getElementById("totalPrice").innerText = total.toFixed(0) + " L.E";
}
//-----------------------------------------------//
function increment(button, productPrice) {
  var numInput = button.parentElement.querySelector(".num2");
  numInput.value = parseInt(numInput.value) + 1;
  var totalPriceElement =
    button.parentElement.parentElement.querySelector(".PriceTotal");
  totalPriceElement.innerText =
    (parseInt(numInput.value) * productPrice).toFixed(0) + " L.E";
  updateTotalPrice();
}
//-----------------------------------------------//
function decrement(button, productPrice) {
  var numInput = button.parentElement.querySelector(".num2");
  if (parseInt(numInput.value) > 1) {
    numInput.value = parseInt(numInput.value) - 1;
    var totalPriceElement =
      button.parentElement.parentElement.querySelector(".PriceTotal");
    totalPriceElement.innerText =
      (parseInt(numInput.value) * productPrice).toFixed(0) + " L.E";
    updateTotalPrice();
  }
}
//-----------------------------------------------//
function incrementProduct() {
  var numInput = document.getElementById("Num");
  numInput.value = parseInt(numInput.value) + 1;
  updateTotalPrice();
}
//-----------------------------------------------//
function decrementProduct() {
  var numInput = document.getElementById("Num");
  if (parseInt(numInput.value) > 1) {
    numInput.value = parseInt(numInput.value) - 1;
    updateTotalPrice();
  }
}
//-----------------------------------------------//
function buyProduct(productImage) {
  var productName = document.getElementById("productName").innerText;
  var productPrice = parseFloat(
    document.getElementById("productPrice").innerText
  );
  var numInput = document.getElementById("Num").value;
  var totalPrice = numInput * productPrice;
  var selectedSize = document.querySelector('input[name="tab"]:checked').value;
  var selectedColor = document.querySelector(
    'input[name="color"]:checked'
  ).value;

  var cartPopup = document.getElementById("cart-popup");
  var itemsContainer = document.getElementById("items-container");

  if (!itemsContainer) {
    itemsContainer = document.createElement("div");
    itemsContainer.id = "items-container";
    cartPopup.appendChild(itemsContainer);
  }

  var newItemContainer = document.createElement("div");
  newItemContainer.className = "R1";
  newItemContainer.style.marginTop = "20px";

  newItemContainer.innerHTML = `
    <div class="Rec2">
        <div class="ImageContainer2">
            <img class="img-prodct" src="${productImage}" >
        </div>
    </div>
    <p class="Name2">${productName}</p>
    <p class="Price2" dir="ltr">${productPrice} L.E</p>
    <p class="SelectedSize">${selectedSize}</p>
    <div class="SelectedColor"  style=" background-color:${selectedColor};"></div>
    <div class="counter2">
        <span class="minus1" onclick="decrement(this, ${productPrice})">-</span>
        <input type="text" class="num2" value="${numInput}" onchange="updateTotalPrice()">
        <span class="plus1" onclick="increment(this, ${productPrice})">+</span>
    </div>
    <p class="PriceTotal" dir="ltr">${totalPrice.toFixed(0)} L.E</p>
    <div class="L1"></div>
    <button class="deleteButton" onclick="deleteProduct(this)"><img src="./Style/ICON/X.png"></button>
`;

  itemsContainer.appendChild(newItemContainer);

  updateTotalPrice();
}
//-----------------------------------------------//
function deleteProduct(button) {
  var itemContainer = button.parentElement;
  var itemsContainer = itemContainer.parentElement;
  itemsContainer.removeChild(itemContainer);

  updateTotalPrice();
}
//-----------------------------------------------//
function clearCart() {
  var itemsContainer = document.getElementById("items-container");
  itemsContainer.innerHTML = "";
  updateTotalPrice();
}
//-----------------------------------------------//
function paybutton() {
  clearCart();
}
//-----------------------------------------------//
//!---------------------------------------------//

function popNAVbar22() {
  const popupBackground = document.querySelector(".popup-background");
  const navbar = document.querySelector(".popup-background .navbar");
  const popNAVbarClose = document.querySelector(".popNAVbarClose");

  navbar.style.display = "block";
  popupBackground.style.display = "block";
  popNAVbarClose.style.display = "block";
  document.body.style.overflow = "hidden";
}
function popNAVbarclose() {
  const popupBackground = document.querySelector(".popup-background");
  const navbar = document.querySelector(".popup-background .navbar");
  const popNAVbarClose = document.querySelector(".popNAVbarClose");

  navbar.style.display = "none";
  popupBackground.style.display = "none";
  popNAVbarClose.style.display = "none";
  document.body.style.overflow = "auto";
}

const items = document.querySelectorAll('.navbar input[type="radio"]');
items.forEach((item) => {
  item.addEventListener("change", function () {
    items.forEach((item) => {
      item.nextElementSibling.nextElementSibling.style.visibility = "hidden";
    });
    this.nextElementSibling.nextElementSibling.style.visibility = "visible";
  });
});
//---------------------------------------------//
//---------------------------------------------//
//*-----------------------------------------------------------------------------------------------------------------END------------------------//
