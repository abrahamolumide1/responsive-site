function check () 
{
    var valid = true, error = "", field = "";
    field = document.getElementById("Fname");
  error = document.getElementById("Fname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "First Name cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  field = document.getElementById("Lname");
  error = document.getElementById("Lname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Last Name cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  field = document.getElementById("Email");
  error = document.getElementById("Email");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Email cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  field = document.getElementById("Password");
  error = document.getElementById("Password");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Password cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  return valid;
}