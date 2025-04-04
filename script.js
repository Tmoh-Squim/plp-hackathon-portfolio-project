// Select DOM elements
const progressBar = document.querySelector(".progressbar");
const cards = document.querySelectorAll(".tech-card");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".menu");

// Name animation (fade-in effect with a slide-up transition)
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".name").forEach((el, index) => {
        el.style.opacity = "0"; // Initially hidden
        el.style.transform = "translateY(100px)"; // Start from below
        el.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 300); // Delay based on index for staggered effect
    });
});

// Show the menu when menu button is clicked
menuButton.addEventListener("click", () => {
    menu.classList.add("show");
});

// Hide the menu when close button is clicked
closeButton.addEventListener("click", () => {
    menu.classList.remove("show");
});

// Progress bar scroll animation
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const scrollPercentage = (scrollTop / scrollableHeight) * 100;

    progressBar.style.height = scrollPercentage + "%"; // Adjust height dynamically
});

// Intersection Observer for card animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            entry.target.classList.remove("out-of-view");
        } else {
            entry.target.classList.remove("in-view");
            entry.target.classList.add("out-of-view");
        }
    });
}, { threshold: 0.1 }); // Trigger animation when 10% of the element is visible

// Apply observer to each card
cards.forEach((card) => {
    observer.observe(card);
});

// Scroll event listener to update last scroll position
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    lastScrollY = window.scrollY;
});

// Show or hide "Scroll to Top" button
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Smooth scroll to top when button is clicked
scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// "Read More" button for About Me section
document.addEventListener("DOMContentLoaded", function () {
    const aboutMe = document.querySelector(".about-me");
    const paragraphs = aboutMe.querySelectorAll("p");
    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read More";
    aboutMe.appendChild(readMoreBtn);

    // Hide additional paragraphs initially
    for (let i = 2; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    }

    let expanded = false;
    readMoreBtn.addEventListener("click", function () {
        if (!expanded) {
            paragraphs.forEach((p, index) => {
                if (index >= 2) {
                    p.style.display = "block";
                    p.style.opacity = "0";
                    setTimeout(() => {
                        p.style.opacity = "1";
                        p.style.transition = "opacity 0.5s ease-in-out";
                    }, 10);
                }
            });
            readMoreBtn.textContent = "Read Less";
        } else {
            paragraphs.forEach((p, index) => {
                if (index >= 2) {
                    p.style.opacity = "0";
                    p.style.transition = "opacity 0.5s ease-in-out";
                    setTimeout(() => {
                        p.style.display = "none";
                    }, 500);
                }
            });
            readMoreBtn.textContent = "Read More";
        }
        expanded = !expanded;
    });
});

// Open default email client with pre-filled message
function sendEmail() {
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);
    
    const mailtoLink = `mailto:timooh3214@gmail.com?subject=Message from ${name} (${email})&body=${message}`;
    window.location.href = mailtoLink;
}
