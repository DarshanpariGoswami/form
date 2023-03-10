var sb = document.getElementsById("inputtxt");

function allLetter(sb) {
  if (sb.value.match(/^[A-Za-z]+$/)) {
    alert("true");
    return true;
  } else {
    alert("false");
    return false;
  }
}
