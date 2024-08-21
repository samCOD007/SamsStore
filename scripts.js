// Example: Add JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Added to cart!');
        });
    });
});
