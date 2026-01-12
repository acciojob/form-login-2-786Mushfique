//your JS code here. If required.
let form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let name = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let phone = document.getElementById('phonenumber').value;
    let email = document.getElementById('emailid').value;
    alert(`First Name: ${name}\nLast Name: ${lastname}\nPhone Number: ${phone}\nEmail ID: ${email}`);
});