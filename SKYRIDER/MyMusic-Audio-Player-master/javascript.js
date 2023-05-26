function check() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  var storedUsername = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");
  if (password == "" || email == "") {
    alert("Email and Password Must Not be Empty");
  } else if (email === storedUsername && password === storedPassword) {
    alert("Login Successful");
  } else {
    alert("Invalid Username or Password");
  }
}

function insert() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  if (password == "" || email == "") {
    alert("Email and Password Must Not be Empty");
  } else if (password.length < 8) {
    alert("Password must be Greater than 8 Character");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Sign up successful! Please Login in.");
  }
}
