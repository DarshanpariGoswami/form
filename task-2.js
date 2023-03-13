var selectedRow = null;
Document.getElementById("submitbutton").AddEventListener(
  "click",
  function FormSubmit(e) {
    {
      event.preventDefault();
      var formData = readFormData();
      if (selectedRow == null) {
        insertNewRecord(formData);
      } else {
        updateRecord(formData);
      }
      resetForm();
    }
  }
);

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["phonenumber"] = document.getElementById("phonenumber").value;
  formData["date"] = document.getElementById("date").value;
  formData["cars"] = document.getElementById("cars").value;
  formData["fees_by_check"] = document.getElementById("fees_by_check").value;
  formData["fees_by_googlepay"] =
    document.getElementById("fees_by_googlepay").value;
  formData["fees_in_cash"] = document.getElementById("fees_in_cash").value;
  formData["file"] = document.getElementById("file").value;
  return formData;
}
//Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("dtable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phonenumber;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.date;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = data.cars;
  cell4 = newRow.insertCell(5);
  cell4.innerHTML = data.fees_by_check;
  cell4 = newRow.insertCell(6);
  cell4.innerHTML = data.fees_by_googlepay;
  cell4 = newRow.insertCell(7);
  cell4.innerHTML = data.fees_in_cash;
  cell4 = newRow.insertCell(8);
  cell4.innerHTML = data.fees_in_cash;
  cell4 = newRow.insertCell(9);
  cell4.innerHTML = data.file;
  cell4 = newRow.insertCell(10);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}
//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("phonenumber").value = selectedRow.cells[2].innerHTML;
  document.getElementById("cars").value = selectedRow.cells[3].innerHTML;
  document.getElementById("fees_by_check").value =
    selectedRow.cells[4].innerHTML;
  document.getElementById("fees_by_googlepay").value =
    selectedRow.cells[5].innerHTML;
  document.getElementById("fees_in_cash").value =
    selectedRow.cells[6].innerHTML;
  document.getElementById("file").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.phonenumber;
  selectedRow.cells[3].innerHTML = formData.cars;
  selectedRow.cells[4].innerHTML = formData.fees_by_check;
  selectedRow.cells[5].innerHTML = formData.fees_by_googlepay;
  selectedRow.cells[6].innerHTML = formData.fees_in_cash;
  selectedRow.cells[7].innerHTML = formData.file;
}
//Delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("dtable").deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phonenumber").value = "";
  document.getElementById("cars").value = "";
  document.getElementById("fees_by_check").value = "";
  document.getElementById("fees_by_googlepay").value = "";
  document.getElementById("fees_in_cash").value = "";
  document.getElementById("file").value = "";

  selectedRow = null;
}
