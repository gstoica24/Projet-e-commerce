const availableProducts = [
  {
    name: "NBA 2K23",
    description:
      "Soyez à la hauteur de ce qu'on attend de vous et exprimez tout votre potentiel dans NBA 2K23.",
    price: 55,
    imagesource: "/image-article/2k23_-removebg-preview.webp",
  },
  {
    name: "Elden Ring",
    description:
      "L'Ordre d'or a été anéanti. Levez-vous, Sans-éclat, et puisse la grâce guider vos pas. Brandissez la puissance du Cercle d'Elden. Devenez Seigneur de l'Entre-terre.",
    price: 55,
    imagesource: "/image-article/81vt8Zuy8AL._AC_SX425_-removebg-preview.webp",
  },
  {
    name: "Call Of Duty Modern Warfare II",
    description: "Bienvenue dans la nouvelle ère de Call of Duty®",
    price: 55,
    imagesource: "/image-article/Call-of-Duty-Modern-Warfare-II-PS5.webp",
  },
  {
    name: "Marvel's spider-man miles morales",
    description:
      "Assistez à l'avènement de Miles Morales en tant que héros, à mesure qu'il apprend à maîtriser de nouveaux pouvoirs détonants pour devenir sa propre version de Spider-Man.",
    price: 40,
    imagesource: "/image-article/spiderman_-removebg-preview.webp",
  },
  {
    name: "FIFA 23",
    description:
      "FIFA 23 vous permet de vivre The World's Game* (* Le Jeu Universel), avec la technologie HyperMotion2 qui apporte encore plus de réalisme à la jouabilité, les Coupes du Monde de la FIFA™ féminine et masculine pendant la saison, les clubs féminins et les fonctionnalités de cross-play, et plus encore.",
    price: 40,
    imagesource: "/image-article/fifa23.webp",
  },
  {
    name: "Sony Manette Playstation 5 Officielle",
    description:
      "Manette sans fil DualSense pour PS5, Pour une expérience de gaming plus intense et innovante, Compatible avec PC via une connexion filaire en USB",
    price: 50,
    imagesource: "/image-article/mannete-ps5.webp",
  },
  {
    name: "Sony, Casque-micro sans fil Pulse 3D pour PlayStation 5",
    description:
      " Audio 3D, 12h d'autonomie, Bluetooth, Compatible avec PS5, Couleur : Bicolore",
    price: 70,
    imagesource: "image-article/casque-ps5.webp",
  },
  {
    name: "Sony PlayStation 5 Digital Edition",
    description: "PS5 avec 1 Manette Sans Fil DualSense, Couleur : Blanche",
    price: 550,
    imagesource: "image-article/console-ps5-removebg-preview.webp",
  },
];
// cart est un tableau dynamique qui contient les éléments que l'on veut acheter
// L'ensemble de ces produits seront affiché dans le cart
let cart = [];

function addProductToCart(product) {
  cart.push(availableProducts[i]);
  displayCart();
}
