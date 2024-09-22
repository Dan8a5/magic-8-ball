document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });

    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    this.reset();
});