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
// const featuresDesktop = document.querySelector(".Features-Desktop-menu-item");
// const companyDesktop = document.querySelector(".Company-Desktop-menu-item");
// const featuresDropdownDesktop = document.querySelector(
//   ".dropdown--features--Desktop"
// );
// const companyDropdownDesktop = document.querySelector(
//   ".dropdown--company--Desktop"
// );
// const arrowBtnFeaturesDesktop = document.querySelector(".features-Desktop-btn");
// const arrowBtnCompanyDesktop = document.querySelector(".company-Desktop-btn");

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

featuresMobile.addEventListener("click", function () {
  // alert("features");
  console.log(featuresDropdownMobile);
  featuresDropdownMobile.classList.toggle("hide-element");
  arrowBtnFeaturesMobile.classList.toggle("closed--dropdown");
});

companyMobile.addEventListener("click", function () {
  console.log(companyMobile);
  companyDropdownMobile.classList.toggle("hide-element");
  arrowBtnCompanyMobile.classList.toggle("closed--dropdown");
});
