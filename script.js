const body = document.querySelector("body");
const header = document.getElementById("header");
const heroImage = document.getElementById("hero-image");
const mobileBtn = document.querySelector(".btn-mobile-nav");
const features = document.getElementById("Features-menu-item");
const company = document.getElementById("Company-menu-item");
const featuresMenuItems = document.querySelector(".dropdown--features");
const companyMenuItems = document.querySelector(".dropdown--company");
const arrowBtnFeatures = document.querySelector(
  ".expand-collaps-menu.features-btn"
);
const arrowBtnCompany = document.querySelector(
  ".expand-collaps-menu.company-btn"
);
// console.log();
mobileBtn.addEventListener("click", function () {
  mobileBtn.classList.toggle("open-mobile-menu");
  body.classList.toggle("modal");
  header.classList.toggle("nav-open");
  if (header.classList.contains("nav-open")) {
    heroImage.style.filter = "brightness(50%)";
    heroImage.style.opacity = "80%";
  } else {
    heroImage.style.filter = "revert";
    heroImage.style.opacity = "revert";
  }
});
features.addEventListener("click", function () {
  featuresMenuItems.classList.toggle("hide-element");
  arrowBtnFeatures.classList.toggle("closed--dropdown");
});
company.addEventListener("click", function () {
  companyMenuItems.classList.toggle("hide-element");
  arrowBtnCompany.classList.toggle("closed--dropdown");
});
