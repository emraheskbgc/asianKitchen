// tüm menü içeriği array içersinde object olarak burada tanımlandı

const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },

  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
// bütün butonları burada bulduk
let allButton = document.querySelector("#allbtn");
let koreaButton = document.querySelector("#koreabtn");
let japanButton = document.querySelector("#japanbtn");
let chinaButton = document.querySelector("#chinabtn");

window.onload = allItems;
// all butonuna basınca menü array içerisindeki tüm elemanlar listelenmesi
allButton.addEventListener("click", allItems);

function allItems() {
  const sectionCenterDOM = document.querySelector(".section-center");

  let menuItems = "";

  menu.forEach((item) => {
    menuItems += `
        <div class= "menu-items col-lg-5  col-sm-4 ">
        <img src= "${item.img}" alt = ${item.title}" class="photo">
        <div class="menu-info">
        <div class = "menu-title">
        <h4>${item.title}</h4>
        <h4 class= "price" > ${item.price}</h4>
        </div>
        <div class= "menu-text">
        ${item.desc}
        </div>
        </div>
        </div>
        ;

        `;
  });

  sectionCenterDOM.innerHTML = menuItems;
}
// korea butonuna basınca kategorisi korea olanların listelenmesi
koreaButton.addEventListener("click", koreaItems);

function koreaItems() {
  const sectionCenterDOM = document.querySelector(".section-center");
  const koreYemekleri = menu
    .filter((yemek) => yemek.category === "Korea")
    .map((yemek) => {
      return `
  <div class="menu-item col-lg-5 col-sm-4 mb-5">
  <img src="${yemek.img}" alt="${yemek.title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${yemek.title}</h4>
      <h4 class="price">${yemek.price}</h4>
    </div>
    <div class="menu-text">
      ${yemek.desc}
    </div>
  </div>
</div>
  `;
    })
    .join("");

  sectionCenterDOM.innerHTML = koreYemekleri;
}
// japan butonuna basınca kategorisi japan olanların listelenmesi
japanButton.addEventListener("click", japanItems);

function japanItems() {
  const sectionCenterDOM = document.querySelector(".section-center");
  const japanYemekleri = menu
    .filter((yemek) => yemek.category === "Japan")
    .map((yemek) => {
      return `
  <div class="menu-item col-lg-5 col-sm-4 mb-5">
  <img src="${yemek.img}" alt="${yemek.title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${yemek.title}</h4>
      <h4 class="price">${yemek.price}</h4>
    </div>
    <div class="menu-text">
      ${yemek.desc}
    </div>
  </div>
</div>
  `;
    })
    .join("");

  sectionCenterDOM.innerHTML = japanYemekleri;
}
// china butonuna basınca kategorisi china olanların listelenmesi
chinaButton.addEventListener("click", chinaItems);

function chinaItems() {
  const sectionCenterDOM = document.querySelector(".section-center");
  const chinaYemekleri = menu
    .filter((yemek) => yemek.category === "China")
    .map((yemek) => {
      return `
  <div class="menu-item col-lg-5 col-sm-4 mb-5">
  <img src="${yemek.img}" alt="${yemek.title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${yemek.title}</h4>
      <h4 class="price">${yemek.price}</h4>
    </div>
    <div class="menu-text">
      ${yemek.desc}
    </div>
  </div>
</div>
  `;
    })
    .join("");

  sectionCenterDOM.innerHTML = chinaYemekleri;
}
