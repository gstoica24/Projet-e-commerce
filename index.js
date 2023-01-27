const shopContainer = document.getElementById("grilleArticle");
const cartContainer = document.getElementById("cartDisplay");
const cartPriceDisplay = document.getElementById("cartTotalPrice");
const cartArticlesDisplay = document.getElementById("cartTotalArticles");
const cartShow = document.querySelector("aside");

const availableProducts = [
  {
    name: "NBA 2K23",
    description:
      "Soyez à la hauteur de ce qu'on attend de vous et exprimez tout votre potentiel dans NBA 2K23.",
    price: 55,
    imageSource: "/image-article/2k23_-removebg-preview.webp",
  },
  {
    name: "Elden Ring",
    description:
      "L'Ordre d'or a été anéanti. Levez-vous, Sans-éclat, et puisse la grâce guider vos pas. Brandissez la puissance du Cercle d'Elden. Devenez Seigneur de l'Entre-terre.",
    price: 55,
    imageSource: "/image-article/81vt8Zuy8AL._AC_SX425_-removebg-preview.webp",
  },
  {
    name: "Call Of Duty Modern Warfare II",
    description: "Bienvenue dans la nouvelle ère de Call of Duty®",
    price: 55,
    imageSource: "/image-article/Call-of-Duty-Modern-Warfare-II-PS5.webp",
  },
  {
    name: "Marvel's spider-man miles morales",
    description:
      "Assistez à l'avènement de Miles Morales en tant que héros, à mesure qu'il apprend à maîtriser de nouveaux pouvoirs détonants pour devenir sa propre version de Spider-Man.",
    price: 40,
    imageSource: "/image-article/spiderman_-removebg-preview.webp",
  },
  {
    name: "FIFA 23",
    description:
      "FIFA 23 vous permet de vivre The World's Game* (* Le Jeu Universel), avec la technologie HyperMotion2 qui apporte encore plus de réalisme à la jouabilité, les Coupes du Monde de la FIFA™ féminine et masculine pendant la saison, les clubs féminins et les fonctionnalités de cross-play, et plus encore.",
    price: 40,
    imageSource: "/image-article/fifa23.webp",
  },
  {
    name: "Sony Manette Playstation 5 Officielle",
    description:
      "Manette sans fil DualSense pour PS5, Pour une expérience de gaming plus intense et innovante, Compatible avec PC via une connexion filaire en USB",
    price: 50,
    imageSource: "/image-article/mannete-ps5.webp",
  },
  {
    name: "Sony, Casque-micro sans fil Pulse 3D pour PlayStation 5",
    description:
      " Audio 3D, 12h d'autonomie, Bluetooth, Compatible avec PS5, Couleur : Bicolore",
    price: 70,
    imageSource: "image-article/casque-ps5.webp",
  },
  {
    name: "Sony PlayStation 5 Digital Edition",
    description: "PS5 avec 1 Manette Sans Fil DualSense, Couleur : Blanche",
    price: 550,
    imageSource: "image-article/console-ps5-removebg-preview.webp",
  },
];
// cart est un tableau dynamique qui contient les éléments que l'on veut acheter
// L'ensemble de ces produits seront affiché dans le cart
// items inside the cart will have an added <quantity> property
let cart = [];

function addProductToCart(productId) {
  cartItemIndex = cart.findIndex(function (e) {
    return e.name == availableProducts[productId].name;
  });

  if (cartItemIndex == -1) {
    let itemInCart = availableProducts[productId];
    itemInCart.quantity = 1;
    cart.push(itemInCart);
  } else {
    cart[cartItemIndex].quantity++;
  }
  displayCart();
}

function displayTotalAmount() {
  let priceTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    priceTotal = priceTotal + cart[i].price * cart[i].quantity;
  }
  cartPriceDisplay.textContent = "Prix total du panier : " + priceTotal + "€";
}

function displayTotalArticles() {
  let articlesTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    articlesTotal = articlesTotal + cart[i].quantity;
  }
  console.log(articlesTotal);
  cartArticlesDisplay.textContent =
    " Nombres total articles ajoute : " + articlesTotal;
}

function removeProductFromCart(productId) {
  cart.splice(productId, 1);
  displayCart();
}

let input = document.querySelector("input");

input.addEventListener("input", function () {
  displayAvailableProducts();
});

//display all elements inside availableProducts object array on the page
function displayAvailableProducts() {
  shopContainer.innerHTML = "";
  for (let i = 0; i < availableProducts.length; i++) {
    let articleTag = document.createElement("article");
    let upperCaseName = availableProducts[i].name;
    let upperCaseValue = input.value;
    if (upperCaseName.toUpperCase().includes(upperCaseValue.toUpperCase())) {
      let articleImgContainer = document.createElement("div");
      articleImgContainer.classList.add("imageContainer");

      let articleImg = document.createElement("img");
      articleImg.src = availableProducts[i].imageSource;
      articleImg.alt = "product illustration";

      let articleName = document.createElement("h2");
      articleName.textContent = availableProducts[i].name;

      let articleDesc = document.createElement("p");
      articleDesc.textContent = availableProducts[i].description;

      let articleBuyDiv = document.createElement("div");
      articleBuyDiv.classList.add("addCart");

      let articlePrice = document.createElement("span");
      articlePrice.textContent = availableProducts[i].price + "€";

      let articleAddButton = document.createElement("button");
      articleAddButton.textContent = "acheter";
      articleAddButton.addEventListener("click", function () {
        addProductToCart(i);
      });

      articleImgContainer.appendChild(articleImg);
      articleBuyDiv.append(articlePrice, articleAddButton);
      articleTag.append(
        articleImgContainer,
        articleName,
        articleDesc,
        articleBuyDiv
      );
      shopContainer.appendChild(articleTag);
    }
  }
}

function createProductElementInCart(item, i) {
  let newLi = document.createElement("li");

  let articleName = document.createElement("span");
  articleName.classList.add("articleShorten");
  articleName.textContent = item.name;

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("thumbnailContainer");

  let articleThumbnail = document.createElement("img");
  articleThumbnail.src = item.imageSource;
  articleThumbnail.alt = "article image";

  let changeQuantityContainer = document.createElement("div");
  changeQuantityContainer.classList.add("quantityContainer");

  let buttonDecrease = document.createElement("button");
  buttonDecrease.textContent = "-";
  buttonDecrease.addEventListener("click", function () {
    removeOne(i);
  });

  let amountDisplay = document.createElement("span");
  amountDisplay.classList.add("quantityDisplay");
  amountDisplay.textContent = item.quantity;

  let buttonIncrease = document.createElement("button");
  buttonIncrease.textContent = "+";
  buttonIncrease.addEventListener("click", function () {
    addOne(i);
  });

  let buttonSuppr = document.createElement("button");
  buttonSuppr.innerHTML = "❌";
  buttonSuppr.addEventListener("click", function () {
    removeProductFromCart(i);
  });

  imageContainer.appendChild(articleThumbnail);
  changeQuantityContainer.append(buttonDecrease, amountDisplay, buttonIncrease);
  newLi.append(
    articleName,
    imageContainer,
    changeQuantityContainer,
    buttonSuppr
  );
  return newLi;
}

function showCart() {
  cartShow.classList.toggle("invisible");

  /*if (cartShow.classList.contains("invisible")) {
    cartShow.classList.remove("invisible");
  } else {
    cartShow.classList.add("invisible");
  }*/
}

function displayCart() {
  cartContainer.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartContainer.appendChild(createProductElementInCart(cart[i], i));
  }
  displayTotalAmount();
  displayTotalArticles();
}

function removeOne(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
    displayCart();
  } else {
    removeProductFromCart(index);
  }
}

function addOne(index) {
  cart[index].quantity++;
  displayCart();
}

/* execution */

displayAvailableProducts();
