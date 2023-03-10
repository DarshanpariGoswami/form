var submit = document.getElementById("submitbutton");
//var table = document.getElementsByClassName("myDIV");
//submit.addEventListener("click", tableeve);

function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    alert("message");
    return false;
  }
}
