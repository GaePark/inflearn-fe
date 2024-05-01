const filter = [
  { name: "all", filter: "filter" },
  { name: "hamberger", filter: "filter" },
  { name: "cake", filter: "filter" },
  { name: "drink", filter: "filter" },
  { name: "fish", filter: "filter" },
];

const foodList = [
  {
    category: "hamberger",
    img: "./image/hamberger.jpg",
    food: "hamberger",
    price: 3000,
    explanation: "햄버검다",
  },
  {
    category: "cake",
    img: "./image/cake.jpg",
    food: "cake1",
    price: 2400,
    explanation: "케잌1임다",
  },
  {
    category: "cake",
    img: "./image/cake2.jpg",
    food: "cake2",
    price: 5000,
    explanation: "케잌2임다",
  },
  {
    category: "drink",
    img: "./image/drink.jpg",
    food: "drink",
    price: 3800,
    explanation: "음료임다",
  },
  {
    category: "drink",
    img: "./image/drink2.jpg",
    food: "drink2",
    price: 4000,
    explanation: "음료2임다",
  },
  {
    category: "fish",
    img: "./image/fish.jpg",
    food: "fish",
    price: 4800,
    explanation: "생선임다",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  createFilter();
  createFood("all");
});

const createFilter = () => {
  const menuFilter = document.querySelector(".menu-filter");
  filter.map((el) => {
    const newDiv = document.createElement("button");
    newDiv.className = el.filter;
    newDiv.innerText = el.name;

    newDiv.addEventListener("click", (e) => {
      const cd = e.target.innerText;
      createFood(cd);
    });

    menuFilter.append(newDiv);
  });
};
//if else 문으로 끝내자

const menuItem = document.querySelector(".menu-item");
const createFood = (filtering) => {
  menuItem.innerHTML = "";

  foodList.map((el) => {
    if ("all" === filtering) {
      active(el);
    }
    if (el.category === filtering) {
      active(el);
    } else {
    }
  });
};

const active = (el) => {
  const menuWrapper = document.createElement("div");
  menuWrapper.className = "menu-wrapper";
  menuWrapper.id = el.category;

  const image = document.createElement("img");
  image.className = "image";
  image.src = el.img;

  const menuTitle = document.createElement("div");
  menuTitle.className = "menu-title";

  const menuName = document.createElement("div");
  menuName.className = "menu-name";
  menuName.innerText = el.food;

  const underLine = document.createElement("div");
  underLine.className = "underline";

  const content = document.createElement("div");
  content.innerText = el.explanation;

  const price = document.createElement("span");
  price.className = "price";
  price.innerText = el.price;

  menuItem.append(menuWrapper);

  menuWrapper.append(image);
  menuWrapper.append(menuTitle);

  menuTitle.append(menuName);
  menuTitle.append(underLine);
  menuTitle.append(content);

  menuName.append(price);
};
