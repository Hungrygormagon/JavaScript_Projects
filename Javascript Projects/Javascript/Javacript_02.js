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
    var password = document.forms["myForm"]["Password"].value;
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    var Email = document.forms["myForm"]["EMAIL"].value;
    if (Email == "") {
      alert("Email must be filled out");
      return false;
    }
  } 