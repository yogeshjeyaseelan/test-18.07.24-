document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let responseMessage = '';

    if (name && email && message) {
        responseMessage = `<div class="alert alert-success" role="alert">Thank you, ${name}! Your message has been sent successfully.</div>`;
    } else {
        responseMessage = `<div class="alert alert-danger" role="alert">Please fill in all fields.</div>`;
    }

    document.getElementById('formResponse').innerHTML = responseMessage;

    // Reset the form
    document.getElementById('contactForm').reset();
});
