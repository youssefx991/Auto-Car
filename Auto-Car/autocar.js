

function ValidateEmail(str) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (str.match(validRegex)) {
    return true;

  } else {

    return false;
  }
}

function onlySpaces(str) {
  return str.trim().length === 0;
}

function CheckEmailandUser() {
  var n = document.ChangePasswordForm.name.value;
  var p = document.ChangePasswordForm.password.value;
  var e = document.ChangePasswordForm.email.value;
  var valid = true;
  if (document.ChangePasswordForm.email.value.length == 0 || onlySpaces(document.ChangePasswordForm.email.value) ||
    ValidateEmail(document.ChangePasswordForm.email.value) == 0) {
    alert("Invalid email");
    document.ChangePasswordForm.email.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else if (document.ChangePasswordForm.name.value.length == 0 || onlySpaces(document.ChangePasswordForm.name.value)) {
    alert("Name is empty");
    document.ChangePasswordForm.name.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else if (document.ChangePasswordForm.password.value.length == 0 || onlySpaces(document.ChangePasswordForm.password.value)) {
    alert("Password is empty");
    document.ChangePasswordForm.password.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else if (document.ChangePasswordForm.confirm.value.length == 0 || onlySpaces(document.ChangePasswordForm.confirm.value) ||
    document.ChangePasswordForm.confirm.value != document.ChangePasswordForm.password.value) {
    alert("Passwords don't match");
    document.ChangePasswordForm.confirm.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else if (localStorage.getItem("user_name " + n) == n &&
    localStorage.getItem("user_email " + e) == e &&
    localStorage.getItem("user_codeE " + n) == (n + e)) {
    var newPassword = document.ChangePasswordForm.confirm.value;
    localStorage.setItem("user_password " + n, newPassword);
    localStorage.setItem("user_codeP " + n, (n + newPassword));
  }
}

function validate() {
  var valid = true;
  if (document.inputForm.name.value.length == 0 || onlySpaces(document.inputForm.name.value)) {
    alert("Name is empty");
    document.inputForm.name.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else if (document.inputForm.password.value.length == 0 || onlySpaces(document.inputForm.password.value)) {
    alert("Password is empty");
    document.inputForm.password.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else {
    var n = document.inputForm.name.value;
    var p = document.inputForm.password.value;
    if (n == localStorage.getItem("user_name Admin") && p == localStorage.getItem("user_password Admin")) {
      localStorage.setItem("isAdmin", "true");
      document.getElementById("loginButtonId").href = "header.html";

    }
    else if (localStorage.getItem("user_name " + n) == n &&
      localStorage.getItem("user_password " + n) == p &&
      localStorage.getItem("user_codeP " + n) == (n + p)) {
      document.getElementById("loginButtonId").href = "header.html";
      localStorage.setItem("isAdmin", "false");
      valid = true;
    }
    else {
      alert("user not registered");
    }
  }

}

function validate_register() {
  var valid = true;
  if (document.inputRegisterForm.email.value.length == 0 || onlySpaces(document.inputRegisterForm.email.value) ||
    ValidateEmail(document.inputRegisterForm.email.value) == 0) {
    alert("Invalid email");
    document.inputRegisterForm.email.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else if (document.inputRegisterForm.name.value.length == 0 || onlySpaces(document.inputRegisterForm.name.value)) {
    alert("Name is empty");
    document.inputRegisterForm.name.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else if (document.inputRegisterForm.password.value.length == 0 || onlySpaces(document.inputRegisterForm.password.value)) {
    alert("Password is empty");
    document.inputRegisterForm.password.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else if (document.inputRegisterForm.confirm.value.length == 0 || onlySpaces(document.inputRegisterForm.confirm.value) ||
    document.inputRegisterForm.confirm.value != document.inputRegisterForm.password.value) {
    alert("Passwords don't match");
    document.inputRegisterForm.confirm.focus();
    // document.getElementById("loginButtonId").href="#";
    valid = false;
  }
  else {
    var n = document.inputRegisterForm.name.value;
    var p = document.inputRegisterForm.password.value;
    var e = document.inputRegisterForm.email.value;
    localStorage.setItem("user_name " + n, n);
    localStorage.setItem("user_email " + n, e);
    localStorage.setItem("user_password " + n, p);
    localStorage.setItem("user_codeP " + n, (n + p));
    localStorage.setItem("user_codeE " + n, (n + e));
    localStorage.setItem("isAdmin", "false");
    document.getElementById("loginButtonId").href = "header.html";

    valid = true;
  }
}




function callmodal(card_id, modal_id) {
  var modal = document.getElementById(modal_id);

  // Get the button that opens the modal
  var btn = document.getElementById(card_id);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.hide();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      event.target.style.display = "none";
    }
  }
}


// function hidecolorpicker(){
//   if(localStorage.getItem("isAdmin") === false){
//     alert("isAdmin is false");
//       document.getElementById("pagecolor").classList.add("hide");
//       document.getElementById("chngclrBtn").classList.add("hide");
//   }
// }



function default_slideshow() {
  if (localStorage.getItem("Logged_before") != "True") {
    // localStorage.setItem("slideshow_1", "images/aston-martin.jpg");
    localStorage.setItem("slideshow_2", "images/audi-rs-e-tron-gt.jpg");
    localStorage.setItem("slideshow_3", "images/nio-et5.jpg");
    localStorage.setItem("slideshow_4", "images/cheerful.jpg");
    // localStorage.setItem("slideshow_5", "images/bmw.jpg");
    localStorage.setItem("Logged_before", "True");
  }
}

function firstload() {

  if (localStorage.getItem("Logged_before") == "False") {
    localStorage.setItem("Logged_before", "True");
  }
}

function changeSlide() {
  var picture = document.getElementById("photo-select").value;
  var num = document.getElementById("slide_select").value;

  if (picture == "aston-martin") {
    localStorage.setItem("slideshow_" + num, "images/aston-martin.jpg");
  }
  else if (picture == "audi-rs-e-tron-gt") {
    localStorage.setItem("slideshow_" + num, "images/audi-rs-e-tron-gt.jpg");
  }
  else if (picture == "maserati-mc20") {
    localStorage.setItem("slideshow_" + num, "images/maserati-mc20.jpg");
  }
  else if (picture == "nio-et5") {
    localStorage.setItem("slideshow_" + num, "images/nio-et5.jpg");
  }
  else if (picture == "cheerful") {
    localStorage.setItem("slideshow_" + num, "images/cheerful.jpg");
  } else if (picture == "family") {
    localStorage.setItem("slideshow_" + num, "images/family.jpg");
  } else if (picture == "lazy") {
    localStorage.setItem("slideshow_" + num, "images/lazy.jpg");
  } else if (picture == "tobi") {
    localStorage.setItem("slideshow_" + num, "images/tobi.jpg");
  } else if (picture == "woman") {
    localStorage.setItem("slideshow_" + num, "images/woman.jpg");
  }
  // else if(picutre == "1"){
  //   localStorage.setItem("pic1", "1");

  // }
  // else if(picutre == "5"){
  //   localStorage.setItem("pic5", "5");

  // }


}