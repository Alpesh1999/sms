
let sname = document.querySelector("#suname");
let spass = document.querySelector("#spassword");

function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Create an object with the user input data
  const userData = {
    name: sname.value,
    password: spass.value,
    classTeacher: "Teacher1",
  };

  // Store the data in local storage
  localStorage.setItem("userData", JSON.stringify(userData));

  // Reset the form
  sname.value = "";
  spass.value = "";

  // Display a success message or perform any other desired actions
  console.log("User data saved!");
  // Redirect to student.html
  window.location.href = "student.html";
}
