const selectYearList = document.getElementById("expirationYear");
const cartContainer = document.getElementById("cartDisplay");
const cartPriceDisplay = document.getElementById("cartTotalPrice");
const cartArticlesDisplay = document.getElementById("cartTotalArticles");

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault()
});

const purchaseCartButton = document.getElementById("purchaseCartButton");
/*purchaseCartButton.addEventListener("click", function (event) {
    event.preventDefault()
}); */
purchaseCartButton.addEventListener("click", purchaseCart);



const inputFields = {
    familyName: {
        field: document.getElementById("familyNameField"),
        alertElement: document.getElementById("alertFamilyName"),
        pattern: /^([a-zA-Z]){3,}$/,
        isValid: false,
        alertMessage: "ce champs n'accepte que des lettres et au moins 3 charactère"
    },
    firstName: {
        field: document.getElementById("firstNameField"),
        alertElement: document.getElementById("alertFirstName"),
        pattern: /^([a-zA-Z]){3,}$/,
        isValid: false,
        alertMessage: "ce champs n'accepte que des lettres et au moins 3 charactère"
    },
    address: {
        field: document.getElementById("roadAddress"),
        alertElement: document.getElementById("alertAddress"),
        pattern: /^(\w|-|\'| ){5,}$/,
        isValid: false,
        alertMessage: "certains caractères utilisés sont invalides"
    },
    postalCode: {
        field: document.getElementById("postalCode"),
        alertElement: document.getElementById("alertPostalCode"),
        pattern: /^\d{5}$/,
        isValid: false,
        alertMessage: "certains caractères utilisés sont invalides"
    },
    city: {
        field: document.getElementById("cityName"),
        alertElement: document.getElementById("alertCity"),
        pattern: /^([a-zA-Z]){3,}$/,
        isValid: false,
        alertMessage: "ce champs n'accepte que des lettres et au moins 3 charactère"
    },
    cardNumber: {
        field: document.getElementById("cardNumber"),
        alertElement: document.getElementById("alertCardNumber"),
        pattern: /^(\d{4}-\d{4}-\d{4}-\d{4})$/,
        isValid: false,
        alertMessage: "insérer 16 chiffres selong le format 0000-0000-0000-0000"

    },
    expirationDate: {
        fieldMonth: document.getElementById("expirationMonth"),
        fieldYear: document.getElementById("expirationYear"),
        alertElement: document.getElementById("alertCardExpiration"),
        isValid: false,
        alertMessage: "cette carte est expirée ou la date est invalide"
    },
    cardCode: {
        field: document.getElementById("securityCode"),
        alertElement: document.getElementById("alertCardCode"),
        pattern: /^\d{3}$/,
        isValid: false,
        alertMessage: "ce champs n'accepte qu'une série de trois chiffres"
    },
};



inputFields.expirationDate.fillYearSelect = function () {
    let currentDate = new Date()
    for (let i = 0; i <= 2; i++) {
        let newSelectOption = document.createElement("Option")
        newSelectOption.setAttribute('value', currentDate.getFullYear() + i);
        let newSelectOptionText = document.createTextNode(currentDate.getFullYear() + i);
        newSelectOption.appendChild(newSelectOptionText);
        inputFields.expirationDate.fieldYear.appendChild(newSelectOption);
    }
}

inputFields.expirationDate.checkValidy = function () {
    let currentDate = new Date();
    if (this.fieldYear.value < currentDate.getFullYear()) {
        this.isValid = false;
    } else if (this.fieldMonth.value < currentDate.getMonth() + 1 && this.fieldYear.value == currentDate.getFullYear()) {
        this.isValid = false;
    } else if (this.fieldYear.value >= currentDate.getFullYear() && this.fieldYear.value <= currentDate.getFullYear() + 2) {
        this.isValid = true;
    } else {
        this.isValid = false;
    }
}

inputFields.isInputValid = function (o) {
    o.isValid = o.pattern.test(o.field.value);
}

inputFields.showElementAlert = function (o) {
    if (o.isValid == false) {
        o.alertElement.textContent = o.alertMessage;
        o.alertElement.classList.remove("invisible");
    } else {
        o.alertElement.classList.add("invisible");
    }
}

inputFields.confirmInput = function (o) {
    inputFields.isInputValid(o);
    inputFields.showElementAlert(o);
}

inputFields.confirmDate = function () {
    inputFields.expirationDate.checkValidy()
    inputFields.showElementAlert(inputFields.expirationDate);
}

inputFields.confirmAllInputs = function () {
    inputFields.confirmInput(inputFields.familyName);
    inputFields.confirmInput(inputFields.firstName);
    inputFields.confirmInput(inputFields.address);
    inputFields.confirmInput(inputFields.postalCode);
    inputFields.confirmInput(inputFields.city);
    inputFields.confirmInput(inputFields.cardNumber);
    inputFields.confirmDate();
    inputFields.confirmInput(inputFields.cardCode);
    console.log(inputFields.cardNumber.isValid)
    console.log(inputFields.cardNumber.pattern.test(inputFields.cardNumber.field.value))
}


inputFields.areAllInputsValid = function () {
    return (inputFields.familyName.isValid && inputFields.firstName.isValid && inputFields.address.isValid && inputFields.postalCode.isValid && inputFields.city.isValid && inputFields.cardNumber.isValid && inputFields.expirationDate.isValid && inputFields.cardCode.isValid);
}

function purchaseCart() {
    inputFields.confirmAllInputs();
    if (inputFields.areAllInputsValid()) {
        form.submit();
    }
}

/* PAGE */

let cart = [];

function isStringValid(value, pattern) {
    return pattern.test(value);
}

function displayError(element, errorMsg) {
    element.textContent = errorMsg
    element.classList.remove("invisible")
}
//function displayAllErrors()

function checkExpirationDate() {
    let currentDate = new Date();
    if (inputCardYear < currentDate.getFullYear) {
        return false;
    } else if (inputCardMonth.value < currentDate.getMonth && inputCardYear == currentDate.getFullYear) {
        return false;
    } else if (inputCardYear >= currentDate.getFullYear && inputCardYear <= currentDate.getFullYear + 2) {
        return true;
    } else {
        return false;
    }
}

function fillYearSelect() {
    let currentDate = new Date;
    for (let i = 0; i <= 2; i++) {
        let newSelectOption = new Option(currentDate.getFullYear() + i, currentDate.getFullYear() + i);
        selectYearList.add(newSelectOption, undefined);
    }
}

//creates a new div hosting the display of an article in the cart
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
    buttonSuppr.textContent = "❌";
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

function displayCart() {
    cartContainer.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        cartContainer.appendChild(createProductElementInCart(cart[i], i));
    }
    displayTotalAmount();
    displayTotalArticles();
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
    cartArticlesDisplay.textContent =
        " Nombres total d'articles : " + articlesTotal;
}

function removeProductFromCart(productId) {
    cart.splice(productId, 1);
    displayCart();
    storeCart()
}

//decrease amount of an article by one, remove article if quantity = 0
function removeOne(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        displayCart();
    } else {
        removeProductFromCart(index);
    }
    storeCart();
}

//increase amount of an article by one
function addOne(index) {
    cart[index].quantity++;
    displayCart();
    storeCart();
}

// stores the cart object into the local storage
function storeCart() {
    localStorage.clear();
    window.localStorage.setItem("savedCart", JSON.stringify(cart));
}


//gets the savedcart local storage and copies it inside cart
function getCartOnLoad() {
    let savedCart = JSON.parse(localStorage.getItem('savedCart') || "[]");
    cart = [...savedCart];
}

/* execution */
inputFields.expirationDate.fillYearSelect();
getCartOnLoad();
displayCart();