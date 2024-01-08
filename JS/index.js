const header = document.querySelector(".mainHeader");
const headerText = document.querySelector(".headerText");
const headerImageContainer = document.querySelector(".headerImageContainer");
const headerImage = document.querySelector(".headerImage");
const menuBtn = document.querySelector(".menuBtn");
const btnImage = document.querySelector(".menuBtnImage");
const main = document.querySelector(".mainSection");
const mainImage = document.querySelector(".mainImage");
const mainImageContainer = document.querySelector(".mainImageContainer");
const mainTextContainer = document.querySelector(".mainTextContainer");
const subText = document.querySelector(".subHeader");
const descText = document.querySelector(".description");

let currentClassList = [];

let currentSetup = {};

/* Template 3 info */

const template1ClassList = [
  ".template3Body",
  ".template3Header",
  ".template3HeaderText",
  ".template3headerImageContainer",
  ".template3ButtonImage",
  ".template3Main",
  ".template3SubText",
  ".template3DescText",
  ".template3mainTextContainer",
  ".template3mainImageContainer",
  ".template3mainImage",
];
/* 
const template3SetUp = {
  body: { bodyClass: "template3Body" },
  header: {
    headerClass: "template3Header",
    text: "Early Morning Gourmet",
    textClass: "template3HeaderText",
    image: "./Image/headerImage/grommet-icons_coffee.svg",
    imageContainerClass: "template3headerImageContainer",
    buttonImage: "./Image/headerImage/solar_hamburger-menu-linear.svg",
    buttonImageClass: "template3ButtonImage",
  },
  main: {
    mainClass: "template3Main",
    mainTextContainerClass: "template3mainTextContainer",
    subHeadText: "Hello! <br> and Welcome!",
    subHeadTextClass: "template3SubText",
    descTextClass: "template3DescText",
    descText:
      "This is a landingpage template <br> a great place to introduce yourself and your product! <br> something to hook and grab the user's attention.",
    mainImage: "./Image/mainImage/coffeimage main.webp",
    mainImageClass: "template3mainImage",
    mainImageContainerClass: "template3mainImageContainer",
  },
}; */

const template1SetUp = {
  body: { bodyClass: "template1Body" },
  header: {
    headerClass: "template1Header",
    text: "Come and get your car!",
    textClass: "template1HeaderText",
    image: "./",
    imageContainerClass: "template1headerImageContainer",
    buttonImage: "./Image/headerImage/solar_hamburger-menu-linear.svg",
    buttonImageClass: "template3ButtonImage",
  },
  main: {
    mainClass: "template1Main",
    mainTextContainerClass: "template1mainTextContainer",
    subHeadText: "Hello! <br> and Welcome!",
    subHeadTextClass: "template3SubText",
    descTextClass: "template1DescText",
    descText:
      "Welcome to Alex's car dealership! <br> We're the most secure car business in town! <br> You'll get a car that's worth your money.",
    mainImage: "../image/mainImage/Half_of_the_front_of_a_blue_car.jpg.jpg",
    mainImageClass: "template1mainImage",
    mainImageContainerClass: "template1mainImageContainer",
  },
};


/* template switcher */

/**
 * Function that switches the pagedesign based on template
 * @param {*} object the object containing textinfo, images and so on.
 * @param {*} array the array containing all classes added to the page
 */
const stylePage = (object, array) => {
  currentClassList.forEach((className) => {
    let activeElement = document.querySelector(className);
    if (!activeElement) return;
    else {
      activeElement.classList.remove(className);
    }
  });
  currentClassList = array;
  document.body.classList.add(object.body.bodyClass);
  header.classList.add(object.header.headerClass);
  headerText.innerHTML = object.header.text;
  headerText.classList.add(object.header.textClass);
  headerImage.src = object.header.image;
  headerImageContainer.classList.add(object.header.imageContainerClass);
  btnImage.src = object.header.buttonImage;
  menuBtn.classList.add(object.header.buttonImageClass);
  main.classList.add(object.main.mainClass);
  mainImage.src = object.main.mainImage;
  mainImage.classList.add(object.main.mainImageClass);
  mainImageContainer.classList.add(object.main.mainImageContainerClass);
  mainTextContainer.classList.add(object.main.mainTextContainerClass);
  subText.innerHTML = object.main.subHeadText;
  descText.innerHTML = object.main.descText;
  subText.classList.add(object.main.subHeadTextClass);
  descText.classList.add(object.main.descTextClass);
};

/* TemplateSwitch Menu */

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen ? closeMenu() : openMenu();
});

const subMenu = document.createElement("div");
const subMenuTemplate1Btn = document.createElement("button");
subMenuTemplate1Btn.innerText = "Choose Template 1";
/* subMenuTemplate1Btn.addEventListener(
  "click",
  stylePage(template1SetUp, template1ClassList)
); */
subMenu.appendChild(subMenuTemplate1Btn);
const subMenuTemplate2Btn = document.createElement("button");
subMenuTemplate2Btn.innerText = "Choose Template 2";
/* subMenuTemplate2Btn.addEventListener(
  "click",
  stylePage(template2SetUp, template2ClassList)
); */
subMenu.appendChild(subMenuTemplate2Btn);
const subMenuTemplate3Btn = document.createElement("button");
subMenuTemplate1Btn.innerText = "Choose Template 3";
subMenuTemplate1Btn.addEventListener(
  "click",
  stylePage(template3SetUp, template3ClassList)
);
subMenu.appendChild(subMenuTemplate3Btn);
subMenu.classList.add("subMenu");
document.body.append(subMenu);

const closeMenu = () => {
  subMenu.classList.remove("showMenu");
  menuOpen = false;
  menuBtn.classList.remove("menuBtnDark");
};
const openMenu = () => {
  subMenu.classList.add("showMenu");
  menuOpen = true;
  menuBtn.classList.add("menuBtnDark");
};

stylePage(template1SetUp, template1ClassList);



const img = document.getElementById("img");



