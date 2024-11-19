const navLinks = document.querySelectorAll('header nav a'); // Multiple nav links
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section'); // Multiple sections
const barsBox = document.querySelector('.bars-box');
const menuIcon = document.querySelector('#menu-icon'); // Single bars-box
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})
const activePage = () => {  
    const header = document.querySelector('header');

    // Toggle active class for the header
    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    // Remove 'active' class from all navLinks
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Remove 'active' class from barsBox
    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);
};

// Add click event for each navLink to toggle active state for corresponding section
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage(); // Call activePage to reset states
            link.classList.add('active'); // Add active class to clicked link
            
            setTimeout(() => {
                sections.forEach((section, sectionIdx) => {
                    section.classList.remove('active'); // Remove active from all sections
                    if (idx === sectionIdx) {
                        section.classList.add('active'); // Add active to clicked section
                    }
                });

                // Adjust the .bars-box for the active section
                barsBox.classList.add('active');
            }, 1100);
        }
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
});

// Reset to the first section when logo is clicked
logoLink.addEventListener('click', () => { 
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections.forEach((section, idx) => {
                section.classList.remove('active'); // Remove active class from all sections
                if (idx === 0) {
                    section.classList.add('active'); // Add active to the first section
                }
            });

            // Adjust the .bars-box for the active section
            barsBox.classList.add('active');
        }, 1100);
    }
});

// Code for resume button functionality (remains unchanged)
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

// Portfolio carousel code (remains unchanged)
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled'); 
    }
    if (index === 4) { 
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    if (index === 0) {
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});
