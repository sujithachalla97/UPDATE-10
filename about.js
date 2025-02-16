// Toggle the navigation bar on clicking the menu icon
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Define card and card container elements by their IDs
const card0 = document.getElementById('card0');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');
const card7 = document.getElementById('card7');
const card8 = document.getElementById('card8');
const card9 = document.getElementById('card9');
const card10 = document.getElementById('card10');
const card11 = document.getElementById('card11');
const car12 = document.getElementById('card12');
const card13 = document.getElementById('card13');
const card14 = document.getElementById('card14');


const cardContainer0 = document.getElementById('cardContainer0');
const cardContainer1 = document.getElementById('cardContainer1');
const cardContainer2 = document.getElementById('cardContainer2');
const cardContainer3 = document.getElementById('cardContainer3');
const cardContainer4 = document.getElementById('cardContainer4');
const cardContainer5 = document.getElementById('cardContainer5');
const cardContainer6 = document.getElementById('cardContainer6');
const cardContainer7 = document.getElementById('cardContainer7');
const cardContainer8 = document.getElementById('cardContainer8');
const cardContainer9 = document.getElementById('cardContainer9');
const cardContainer10 = document.getElementById('cardContainer10');
const cardContainer11 = document.getElementById('cardContainer11');
const cardContainer12 = document.getElementById('cardContainer12');
const cardContainer13 = document.getElementById('cardContainer13');
const cardContainer14 = document.getElementById('cardContainer14');

// Function to handle 3D rotation effect on card
function handleMouseMove(e, card, cardContainer) {
    const rect = cardContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

// Function to reset card's transform on mouse leave
function handleMouseLeave(card) {
    card.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

// Function to remove transition on card's mouse enter
function handleMouseEnter(card) {
    card.style.transition = 'none';
}

// Function to add transition on card's mouse leave
function handleCardMouseLeave(card) {
    card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
}

// Add event listeners for card0
cardContainer0.addEventListener('mousemove', (e) => handleMouseMove(e, card0, cardContainer0));
cardContainer0.addEventListener('mouseleave', () => handleMouseLeave(card0));
card0.addEventListener('mouseenter', () => handleMouseEnter(card0));
card0.addEventListener('mouseleave', () => handleCardMouseLeave(card0));

// Add event listeners for card1
cardContainer1.addEventListener('mousemove', (e) => handleMouseMove(e, card1, cardContainer1));
cardContainer1.addEventListener('mouseleave', () => handleMouseLeave(card1));
card1.addEventListener('mouseenter', () => handleMouseEnter(card1));
card1.addEventListener('mouseleave', () => handleCardMouseLeave(card1));

// Add event listeners for card2
cardContainer2.addEventListener('mousemove', (e) => handleMouseMove(e, card2, cardContainer2));
cardContainer2.addEventListener('mouseleave', () => handleMouseLeave(card2));
card2.addEventListener('mouseenter', () => handleMouseEnter(card2));
card2.addEventListener('mouseleave', () => handleCardMouseLeave(card2));

// Add event listeners for card3
cardContainer3.addEventListener('mousemove', (e) => handleMouseMove(e, card3, cardContainer3));
cardContainer3.addEventListener('mouseleave', () => handleMouseLeave(card3));
card3.addEventListener('mouseenter', () => handleMouseEnter(card3));
card3.addEventListener('mouseleave', () => handleCardMouseLeave(card3));

// Add event listeners for card4
cardContainer4.addEventListener('mousemove', (e) => handleMouseMove(e, card4, cardContainer4));
cardContainer4.addEventListener('mouseleave', () => handleMouseLeave(card4));
card4.addEventListener('mouseenter', () => handleMouseEnter(card4));
card4.addEventListener('mouseleave', () => handleCardMouseLeave(card4));

// Add event listeners for card5
cardContainer5.addEventListener('mousemove', (e) => handleMouseMove(e, card5, cardContainer5));
cardContainer5.addEventListener('mouseleave', () => handleMouseLeave(card5));
card5.addEventListener('mouseenter', () => handleMouseEnter(card5));
card5.addEventListener('mouseleave', () => handleCardMouseLeave(card5));

// Add event listeners for card6
cardContainer6.addEventListener('mousemove', (e) => handleMouseMove(e, card6, cardContainer6));
cardContainer6.addEventListener('mouseleave', () => handleMouseLeave(card6));
card6.addEventListener('mouseenter', () => handleMouseEnter(card6));
card6.addEventListener('mouseleave', () => handleCardMouseLeave(card6));

// Add event listeners for card7
cardContainer7.addEventListener('mousemove', (e) => handleMouseMove(e, card7, cardContainer7));
cardContainer7.addEventListener('mouseleave', () => handleMouseLeave(card7));
card7.addEventListener('mouseenter', () => handleMouseEnter(card7));
card7.addEventListener('mouseleave', () => handleCardMouseLeave(card7));

// Add event listeners for card8
cardContainer8.addEventListener('mousemove', (e) => handleMouseMove(e, card8, cardContainer8));
cardContainer8.addEventListener('mouseleave', () => handleMouseLeave(card8));
card8.addEventListener('mouseenter', () => handleMouseEnter(card8));
card8.addEventListener('mouseleave', () => handleCardMouseLeave(card8));

// Add event listeners for card9
cardContainer9.addEventListener('mousemove', (e) => handleMouseMove(e, card9, cardContainer9));
cardContainer9.addEventListener('mouseleave', () => handleMouseLeave(card9));
card9.addEventListener('mouseenter', () => handleMouseEnter(card9));
card9.addEventListener('mouseleave', () => handleCardMouseLeave(card9));

// Add event listeners for card10
cardContainer10.addEventListener('mousemove', (e) => handleMouseMove(e, card10, cardContainer10));
cardContainer10.addEventListener('mouseleave', () => handleMouseLeave(card10));
card10.addEventListener('mouseenter', () => handleMouseEnter(card10));
card10.addEventListener('mouseleave', () => handleCardMouseLeave(card10));

// Add event listeners for card11
cardContainer11.addEventListener('mousemove', (e) => handleMouseMove(e, card11, cardContainer11));
cardContainer11.addEventListener('mouseleave', () => handleMouseLeave(card11));
card11.addEventListener('mouseenter', () => handleMouseEnter(card11));
card11.addEventListener('mouseleave', () => handleCardMouseLeave(card11));

// Add event listeners for card12
cardContainer12.addEventListener('mousemove', (e) => handleMouseMove(e, card12, cardContainer12));
cardContainer12.addEventListener('mouseleave', () => handleMouseLeave(card12));
card12.addEventListener('mouseenter', () => handleMouseEnter(card12));
card12.addEventListener('mouseleave', () => handleCardMouseLeave(card12));

// Add event listeners for card13
cardContainer13.addEventListener('mousemove', (e) => handleMouseMove(e, card13, cardContainer13));
cardContainer13.addEventListener('mouseleave', () => handleMouseLeave(card13));
card13.addEventListener('mouseenter', () => handleMouseEnter(card13));
card13.addEventListener('mouseleave', () => handleCardMouseLeave(card13));

// Add event listeners for card14
cardContainer14.addEventListener('mousemove', (e) => handleMouseMove(e, card14, cardContainer14));
cardContainer14.addEventListener('mouseleave', () => handleMouseLeave(card14));
card14.addEventListener('mouseenter', () => handleMouseEnter(card14));
card14.addEventListener('mouseleave', () => handleCardMouseLeave(card14));


// Initialize AOS (Animate On Scroll) library when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true, // Animation happens only once
        mirror: false // Elements do not animate out while scrolling past them
    });
});

// Intersection Observer for reveal animations
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Reveal when 10% of the element is visible
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});

/**
 * Activate header and go-top button when scrolling down 400px
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});

// Smooth scroll to top when button is clicked
goTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

