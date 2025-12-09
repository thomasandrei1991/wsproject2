document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let name = document.getElementById('name').value;
        alert('Hello, ' + name + '!');
        this.reset(); // Clear the form after submission
    });
});