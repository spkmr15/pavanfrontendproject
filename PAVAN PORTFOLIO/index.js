document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar ul.right a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Get the list items
    var navListItems = document.querySelectorAll('.right li');

    // Add animation class to each list item with a delay
    navListItems.forEach(function (item, index) {
        setTimeout(function () {
            item.classList.add('animate');
        }, index * 200); // Adjust the delay as needed
    });
});
// document.addEventListener('DOMContentLoaded', function () {
//     // Get the about section
//     var aboutSection = document.querySelector('.aboutmyself');

//     // Check if the animation class has been added
//     if (!aboutSection.classList.contains('rotate-animation')) {
//         // Add the rotate animation class
//         aboutSection.classList.add('rotate-animation');
//     }
// });