let loginBtn = document.querySelector("#loginBtn");
let loginBtn2 = document.querySelector("#loginBtn2");
let formPopup = document.querySelector("#formPopup");
let closeForm = document.querySelector("#closeForm");
let closeForm2 = document.querySelector("#closeForm2");
let body = document.querySelector("#body");
let signupBtn = document.querySelector("#signupBtn");
let registerFormPopup = document.querySelector("#registerFormPopup");

function toggleBar() {
  let navItems = document.querySelector("#navItems");
  let toggleBarIcon = document.querySelector("#toggleBar");
  navItems.classList.toggle("mobile_navItems");
  toggleBarIcon.classList.toggle("toggleBarIcon");
}

// login form open
loginBtn.addEventListener("click", loginForm);

function loginForm() {
  formPopup.style.display = "block";

  openLogin(null, "studentLogin");
  document.getElementById("defaultOpen").classList.add("active");
}
loginBtn2.addEventListener("click", loginForm2);

function loginForm2() {
  formPopup.style.display = "block";
  registerFormPopup.style.display = "none";

  openLogin(null, "studentLogin");
  document.getElementById("defaultOpen").classList.add("active");
}

// signup form open
signupBtn.addEventListener("click", signupForm);

function signupForm() {
  registerFormPopup.style.display = "block";
  formPopup.style.display = "none";
}

// close form
closeForm.addEventListener("click", closeform);

function closeform() {
  formPopup.style.display = "none";
}

closeForm2.addEventListener("click", closeform2);

function closeform2() {
  registerFormPopup.style.display = "none";
}

// Add a click event listener to the signup button
signupBtn.addEventListener("click", function () {
  // Open the registration form and set the active class
  openSignup(null, "studentSignup");
  document.getElementById("defaultOpen2").classList.add("active");
});

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
  if (evt) {
    evt.currentTarget.className += " active";
  }
}

function openSignup(evt, signupName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(signupName).style.display = "block";
  if (evt) {
    evt.currentTarget.className += " active";
  }
}

// Set the default tab to open on page load
document.getElementById("defaultOpen").click();
// Add the active class to the default tab in the login form
document.getElementById("defaultOpen").classList.add("active");
document.getElementById("defaultOpen2").click();

// logout functionality


