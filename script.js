const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");
const heroImage = document.getElementById("hero-image");
const mobileBtn = document.querySelector(".btn-mobile-nav");
// MOBILE
const featuresMobile = document.querySelector(".Features-mobile-menu-item");
const companyMobile = document.querySelector(".Company-mobile-menu-item");
const featuresDropdownMobile = document.querySelector(
  ".dropdown--features--mobile"
);
const companyDropdownMobile = document.querySelector(
  ".dropdown--company--mobile"
);
const arrowBtnFeaturesMobile = document.querySelector(".features-mobile-btn");
const arrowBtnCompanyMobile = document.querySelector(".company-mobile-btn");

// DESKTOP
const featuresDesktop = document.querySelector(".Features-desktop-menu-item");
const companyDesktop = document.querySelector(".Company-desktop-menu-item");
const featuresDropdownDesktop = document.querySelector(
  ".dropdown--features--desktop"
);
const companyDropdownDesktop = document.querySelector(
  ".dropdown--company--desktop"
);
const arrowBtnFeaturesDesktop = document.querySelector(".features-desktop-btn");
const arrowBtnCompanyDesktop = document.querySelector(".company-desktop-btn");

// EVENT LISTNERS
mobileBtn.addEventListener("click", function () {
  mobileBtn.classList.toggle("open-mobile-menu");
  body.classList.toggle("modal");
  navigation.classList.toggle("nav-open");
  if (navigation.classList.contains("nav-open")) {
    heroImage.style.filter = "brightness(50%)";
    heroImage.style.opacity = "80%";
  } else {
    heroImage.style.filter = "revert";
    heroImage.style.opacity = "revert";
  }
});
// FEATURES LIST ITEM
featuresMobile.addEventListener("click", function () {
  featuresDropdownMobile.classList.toggle("hide-element");
  arrowBtnFeaturesMobile.classList.toggle("closed--dropdown");
});
featuresDesktop.addEventListener("click", function () {
  featuresDropdownDesktop.classList.toggle("hide-element");
  arrowBtnFeaturesDesktop.classList.toggle("closed--dropdown");
});
//COMPANY LIST ITEM
companyMobile.addEventListener("click", function () {
  companyDropdownMobile.classList.toggle("hide-element");
  arrowBtnCompanyMobile.classList.toggle("closed--dropdown");
});
companyDesktop.addEventListener("click", function () {
  companyDropdownDesktop.classList.toggle("hide-element");
  arrowBtnCompanyDesktop.classList.toggle("closed--dropdown");
});
