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

let currentClassList = [];

let currentSetup = {};

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
    mainImage: "Image/mainImage/coffeimage main.webp",
    mainImageClass: "template3mainImage",
    mainImageContainerClass: "template3mainImageContainer",
  },
};

const stylePage = (object, array) => {
  currentClassList.forEach((className) => {
    activeElement = document.querySelector(className);
    activeElement.classList.remove(className);
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

stylePage(template3SetUp, template3ClassList);
