// Initialize feather icons
feather.replace({
  "stroke-width": 1,
});

// Initialize chosen
$("#language-select").chosen({ disable_search_threshold: 10 });

new Swiper(".category-nav-swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next-category-nav",
    prevEl: ".swiper-button-prev-category-nav",
  },
});

new Swiper(".banner-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  var $dropdown = $("#categoryDropdown");
  var $dropdownMenu = $("#categoryMenu");
  var dropdownInstance = new bootstrap.Dropdown($dropdown[0]);

  // Open dropdown on hover
  $dropdown.on("mouseenter", function () {
    dropdownInstance.show();
  });

  // Close dropdown on scroll
  $(window).on("scroll", function () {
    dropdownInstance.hide();
  });

  // Prevent dropdown from closing when hovering over menu
  $dropdownMenu.on("mouseenter", function () {
    clearTimeout(dropdownInstance._timeout);
  });

  // Allow dropdown to close when mouse leaves menu
  $dropdownMenu.on("mouseleave", function () {
    dropdownInstance.hide();
  });
});
