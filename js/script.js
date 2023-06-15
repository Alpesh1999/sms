function toggleBar() {
  let navItems = document.querySelector("#navItems");
  let toggleBarIcon = document.querySelector("#toggleBar");
  navItems.classList.toggle("mobile_navItems");
  toggleBarIcon.classList.toggle("toggleBarIcon");
}

// let navLink = document.querySelectorAll(".navLink");
// let navItems = document.querySelector("#navItems");

// navLink.addEventListner("click", function () {
//   navItems.classList.remove("mobile_navItems");
// });
