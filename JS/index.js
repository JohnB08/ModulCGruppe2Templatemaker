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

const template3ClassList = [
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
const template2ClassList = [
  ".template2Body",
  ".template2Header",
  ".template2HeaderText",
  ".template2headerImageContainer",
  ".template2ButtonImage",
  ".template2Main",
  ".template2SubText",
  ".template2DescText",
  ".template2mainTextContainer",
  ".template2mainImageContainer",
  ".template2mainImage",
];
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
};
//template 2
const template2SetUp = {
  body: { bodyClass: "template2Body" },
  header: {
    headerClass: "template2Header",
    text: "Kjøtt fyfaen",
    textClass: "template2HeaderText",
    image: "./Image/headerImage/wagyu.jpg",
    imageContainerClass: "template2headerImageContainer",
    buttonImage: "./Image/headerImage/solar_hamburger-menu-linear.svg",
    buttonImageClass: "template2ButtonImage",
  },
  main: {
    mainClass: "template2Main",
    mainTextContainerClass: "template3mainTextContainer",
    subHeadText: "Hello! <br> and Welcome!",
    subHeadTextClass: "template2SubText",
    descTextClass: "template2DescText",
    descText:
      "This is a landingpage template <br> a great place to introduce yourself and your product! <br> something to hook and grab the user's attention.",
    mainImage: "./Image/mainImage/raw_steak.jpg",
    mainImageClass: "template2mainImage",
    mainImageContainerClass: "template2mainImageContainer",
  },
};

/* template switcher */

/**
 * Function that switches the pagedesign based on template
 * @param {*} object the object containing textinfo, images and so on.
 * @param {*} array the array containing all classes added to the page
 */
const stylePage = (object, array) => {
  console.log(currentClassList);
  currentClassList.forEach((className) => {
    let activeElement = document.querySelector(className);
    console.log(activeElement);
    if (!activeElement) return;
    else {
      const normalizedClassName = className.split(".").pop();
      console.log(normalizedClassName);
      activeElement.classList.remove(normalizedClassName);
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

stylePage(template2SetUp, template2ClassList);
console.log(currentClassList);
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
subMenuTemplate2Btn.addEventListener("click", () =>
  stylePage(template2SetUp, template2ClassList)
);
subMenu.appendChild(subMenuTemplate2Btn);
const subMenuTemplate3Btn = document.createElement("button");
subMenuTemplate3Btn.innerText = "Choose Template 3";
subMenuTemplate3Btn.addEventListener("click", () =>
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
