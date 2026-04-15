const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".newsletter-form, .contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

// const icon = document.getElementById("navIcon");

// const currentPage = window.location.pathname;

// if (currentPage.includes("product.html")) {
//   icon.src = "img/product__logo.svg"; // icon for product page
// } else {
//   icon.src = "img/Group.svg"; // default icon (home)
// }
