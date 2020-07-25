function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("FIrst Name must be filled out");
      return false;
    }
    var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
      alert("Last Name must be filled out");
      return false;
    }
    var Phone = document.forms["myForm"]["Phone"].value;
    if (Phone == "") {
      alert("Phone number must be filled out");
      return false;
    }
  } ;
