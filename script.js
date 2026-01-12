//your JS code here. If required.
 document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault();

      alert(
        `First Name: ${firstname.value}\n` +
        `Last Name: ${lastname.value}\n` +
        `Phone Number: ${phonenumber.value}\n` +
        `Email ID: ${emailid.value}`
      );
    });