// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.skill-card, .timeline-item, .education-card, .contact-item'
  );
  
  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.2)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(212, 175, 55, 0.1)';
  }
  
  lastScrollTop = scrollTop;
});

// Add typing effect to hero subtitle
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const subtitle = document.querySelector('.hero-subtitle');
  if (subtitle) {
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 100);
  }
});



// Console easter egg
console.log('%c👋 Hello there!', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cThanks for checking out my resume website!', 'color: #8892b0; font-size: 14px;');
console.log('%cBuilt with ❤️ using Vite, HTML, CSS, and JavaScript', 'color: #8892b0; font-size: 12px;');
