// Select the mobile menu button.
const mobileMenu = document.querySelector('#mobile-menu');

// Select the navigation menu.
const navMenu = document.querySelector('#nav-menu');

// Select the mobile menu icon.
const menuIcon = document.querySelector('#menu-icon');

// Select the theme toggle button.
const themeBtn = document.querySelector('#theme-btn');

// Select the theme icon.
const themeIcon = document.querySelector('#theme-icon');


// Wait until the HTML document is completely loaded.
document.addEventListener('DOMContentLoaded', function () {

    // Add click event to the mobile menu.
    if (mobileMenu && navMenu && menuIcon) {
        mobileMenu.addEventListener('click', () => {

            // Toggle the mobile navigation menu.
            navMenu.classList.toggle('show-menu');

            // Change the menu icon when the menu is opened.
            if (navMenu.classList.contains('show-menu')) {
                menuIcon.classList.replace('bx-menu', 'bx-x');
            } else {

                // Change the close icon back to the menu icon.
                menuIcon.classList.replace('bx-x', 'bx-menu');
            }
        });
    }


    // Add click event to the theme button.
    if (themeBtn && themeIcon) {
        themeBtn.addEventListener('click', () => {

            // Toggle the dark theme class.
            document.body.classList.toggle('dark-theme');

            // Change the icon according to the current theme.
            if (document.body.classList.contains('dark-theme')) {
                themeIcon.classList.replace('bx-moon', 'bx-sun');
            } else {

                // Change the sun icon back to the moon icon.
                themeIcon.classList.replace('bx-sun', 'bx-moon');
            }
        });
    }


    // Select all navigation links.
    const navigationLinks = document.querySelectorAll('.nav-menu a');

    // Add click event to every navigation link.
    navigationLinks.forEach(link => {
        link.addEventListener('click', () => {

            // Close the mobile menu after clicking a link.
            navMenu.classList.remove('show-menu');

            // Change the close icon back to the menu icon.
            if (menuIcon) {
                menuIcon.classList.replace('bx-x', 'bx-menu');
            }
        });
    });


    // Select all navigation links for active page detection.
    const navLinks = document.querySelectorAll('.nav_links');

    // Get the current page name from the URL.
    let currentPage = window.location.pathname.split('/').pop().toLowerCase();

    // Set index.html as the default page.
    if (currentPage === '') {
        currentPage = 'index.html';
    }


    // Check every navigation link.
    navLinks.forEach(function (link) {

        // Remove the active class from the link.
        link.classList.remove('active');

        // Get the link destination.
        const linkHref = link.getAttribute('href');

        // Stop if the link does not have an href.
        if (!linkHref) return;

        // Get the page name from the link destination.
        const linkPage = linkHref.split('/').pop().toLowerCase();

        // Add active class to the current page link.
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });


    // Select the typing text element.
    const textElement = document.querySelector('.typing-text');

    // Store the developer roles for the typing animation.
    const roles = [
        'Full-stack Developer',
        'Blockchain & Web3 Developer'
    ];

    // Store the current role index.
    let roleIndex = 0;

    // Store the current character index.
    let charIndex = 0;

    // Set the typing speed.
    const typingSpeed = 100;

    // Set the erasing speed.
    const erasingSpeed = 60;

    // Set the pause time after typing.
    const pauseTime = 2000;


    // Define the typing function.
    function type() {

        // Stop if the typing element does not exist.
        if (!textElement) return;

        // Check if there are characters left to type.
        if (charIndex < roles[roleIndex].length) {

            // Add the next character to the text.
            textElement.textContent += roles[roleIndex].charAt(charIndex);

            // Move to the next character.
            charIndex++;

            // Continue typing after the specified delay.
            setTimeout(type, typingSpeed);

        } else {

            // Start erasing after the text pause.
            setTimeout(erase, pauseTime);
        }
    }


    // Define the erasing function.
    function erase() {

        // Stop if the typing element does not exist.
        if (!textElement) return;

        // Check if there are characters left to erase.
        if (charIndex > 0) {

            // Remove the last character from the text.
            textElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

            // Move to the previous character.
            charIndex--;

            // Continue erasing after the specified delay.
            setTimeout(erase, erasingSpeed);

        } else {

            // Move to the next developer role.
            roleIndex = (roleIndex + 1) % roles.length;

            // Start typing the next role.
            setTimeout(type, 500);
        }
    }


    // Start the typing animation if the element exists.
    if (textElement) {
        type();
    }

});