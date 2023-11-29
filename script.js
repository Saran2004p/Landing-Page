document.addEventListener('DOMContentLoaded', function () {
    const subscribeButtons = document.querySelectorAll('.subscribe-btn');

    subscribeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Thank you for subscribing!');
        });
    });
});