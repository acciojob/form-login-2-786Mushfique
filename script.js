//your JS code here. If required.
 const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneNumber = document.getElementById('phonenumber').value;
  const emailId = document.getElementById('emailid').value;

  alert(
    `First Name: ${firstName}\n` +
    `Last Name: ${lastName}\n` +
    `Phone Number: ${phoneNumber}\n` +
    `Email ID: ${emailId}`
  );
});