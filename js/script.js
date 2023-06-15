let loginBtn = document.querySelector("#loginBtn");
let formPopup = document.querySelector("#formPopup");
let closeForm = document.querySelector("#closeForm");

function toggleBar() {
  let navItems = document.querySelector("#navItems");
  let toggleBarIcon = document.querySelector("#toggleBar");
  navItems.classList.toggle("mobile_navItems");
  toggleBarIcon.classList.toggle("toggleBarIcon");
}

loginBtn.addEventListener("click", loginForm);

function loginForm() {
  formPopup.style.display = "block";
}

closeForm.addEventListener("click", closeform);

function closeform() {
  formPopup.style.display = "none";
}

function openLogin(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
