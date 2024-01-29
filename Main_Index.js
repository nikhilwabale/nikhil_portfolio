document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const navInfos = document.querySelector('.navinfos');

    menuBtn.addEventListener('click', function () {
        navInfos.classList.toggle('active');
    });

    // Close the navigation menu when a link is clicked
    const navLinks = document.querySelectorAll('.navinfo a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navInfos.classList.remove('active');
        });
    });
});


// Get the arrow_top element
var arrowTop = document.querySelector('.array_top a');

// Add a click event listener to the arrow_top element
arrowTop.addEventListener('click', function (event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     // Define your text content
//     const textContent = {
//         h1_1: "Hello,",
//         h1_2: "I'm NIKHIL WABALE",
//         h2: "Full Stack Developer"
//     };

//     // Get references to HTML elements
//     const h1_1 = document.querySelector('.way_of_path h1:nth-child(1)');
//     const h1_2 = document.querySelector('.way_of_path h1:nth-child(2)');
//     const h2_span = document.querySelector('.way_of_path h2 span');

//     // Function to animate text
//     function animateText(element, text, index, interval) {
//         setTimeout(function() {
//             element.textContent = text.slice(0, index + 1);
//         }, interval * index);
//     }

//     h1_1.style.color = 'white';
//     h1_2.style.color = 'white';
//     h2_span.style.color = 'white';

//     // Trigger animations for each text element
//     for (let i = 0; i < textContent.h1_1.length; i++) {
//         animateText(h1_1, textContent.h1_1, i, 100);
//     }

//     for (let i = 0; i < textContent.h1_2.length; i++) {
//         animateText(h1_2, textContent.h1_2, i, 100);
//     }

//     for (let i = 0; i < textContent.h2.length; i++) {
//         animateText(h2_span, textContent.h2, i, 100);
//     }
// });



// document.addEventListener('DOMContentLoaded', function () {
//     // Get the HTML elements
//     const h1Elements = document.querySelectorAll('.way_of_path h1');
//     const h2Element = document.querySelector('.way_of_path h2 span');

//     // Define the text content
//     const textContent = {
//         h1: ['Hello,', "I'm NIKHIL WABALE"],
//         h2: 'Full Stack Developer'
//     };

//     // Function to add text with delay
//     function addTextWithDelay(element, textArray, delay) {
//         let index = 0;
//         const intervalId = setInterval(function () {
//             element.textContent = textArray[index];
//             index++;
//             if (index === textArray.length) {
//                 clearInterval(intervalId);
//             }
//         }, delay);
//     }

//     // Add text with delay for each h1 element
//     h1Elements.forEach((h1, index) => {
//         const delay = (index + 1) * 1000; // Adjust the delay as needed
//         addTextWithDelay(h1, textContent.h1, delay);
//     });

//     // Add text for h2 element
//     h2Element.textContent = textContent.h2;
// });
