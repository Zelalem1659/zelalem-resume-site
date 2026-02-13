import './style.css'
import ztLogo from '/zt-logo.svg'

// Add loading state for better mobile experience
const addLoadingState = () => {
  document.querySelector('#app').innerHTML = `
    <div class="loading-screen">
      <div class="loading-spinner"></div>
      <p>Loading Portfolio...</p>
    </div>
  `;
};

// Show loading initially
addLoadingState();

// Load main content after a brief delay
setTimeout(() => {
  document.querySelector('#app').innerHTML = `
    <div class="glassmorphism-portfolio">
    <!-- Floating Geometric Elements -->
    <div class="floating-elements">
      <div class="floating-element circle"></div>
      <div class="floating-element square"></div>
      <div class="floating-element triangle"></div>
      <div class="floating-element hexagon"></div>
    </div>

    <!-- Fixed Glass Navbar -->
    <nav class="glass-navbar">
      <div class="navbar-logo">
        <img src="${ztLogo}" alt="ZT" class="nav-logo" />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="glass-card hero-card">
        <div class="logo-container">
          <img src="${ztLogo}" alt="ZT Logo" class="hero-logo" />
        </div>
        <h1 class="hero-title">Zelalem Tewelde</h1>
        <div class="profile-photo-wrap">
          <img src="/profile.jpg" alt="Zelalem Tewelde" class="profile-photo" />
        </div>
        <p class="hero-about">
          Cybersecurity-focused computer science student who builds secure, reliable software and enjoys hands-on labs in
          virtualization, system hardening, and data-driven problem solving.
        </p>
        <p class="hero-tagline">Building secure, elegant software.</p>
        <div class="hero-buttons">
          <button class="cta-button" onclick="document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})">
            View My Work
          </button>
          <a href="/Zelalem_Tewelde_Resume.pdf" target="_blank" class="resume-button">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
      <h2 class="section-title">Skills & Expertise</h2>
      <div class="skills-grid">
        <div class="glass-card skill-card">
          <div class="skill-icon">⚡</div>
          <h3>C/C++</h3>
          <p>Systems programming and performance-critical applications</p>
        </div>
        <div class="glass-card skill-card">
          <div class="skill-icon">🐍</div>
          <h3>Python</h3>
          <p>Data analysis, automation, and backend development</p>
        </div>
        <div class="glass-card skill-card">
          <div class="skill-icon">🗄️</div>
          <h3>SQL/MySQL</h3>
          <p>Database design, optimization, and data management</p>
        </div>
        <div class="glass-card skill-card">
          <div class="skill-icon">⚛️</div>
          <h3>React/Vite</h3>
          <p>Modern frontend development and user interfaces</p>
        </div>
        <div class="glass-card skill-card">
          <div class="skill-icon">🐧</div>
          <h3>Linux/Bash</h3>
          <p>System administration and command-line automation</p>
        </div>
        <div class="glass-card skill-card">
          <div class="skill-icon">🔒</div>
          <h3>Cybersecurity</h3>
          <p>Security analysis, threat assessment, and protection</p>
        </div>
      </div>
    </section>

    <!-- Certificates Section -->
    <section id="certificates" class="certificates-section">
      <h2 class="section-title">Certificates & Achievements</h2>
      <div class="certificates-grid">
        <div class="glass-card certificate-card">
          <div class="cert-icon">�</div>
          <h3>CompTIA Security+</h3>
          <p class="cert-status">In Progress</p>
          <p class="cert-description">Cybersecurity fundamentals and best practices</p>
        </div>
        
                <div class="glass-card certificate-card">
          <div class="cert-icon">�</div>
          <h3>Virtual Machine Security Project</h3>
          <p class="cert-status">Academic</p>
          <p class="cert-description">Ubuntu VM setup with secure configuration and user privilege management</p>
        </div>
        
        <div class="glass-card certificate-card">
          <div class="cert-icon">🖥️</div>
          <h3>Operating System Virtualization Lab</h3>
          <p class="cert-status">Academic</p>
          <p class="cert-description">CentOS, Kali Linux, and Ubuntu VM installation and secure setup</p>
        </div>
        
        <div class="glass-card certificate-card">
          <div class="cert-icon">💻</div>
          <h3>Client-Server Application (C)</h3>
          <p class="cert-status">Academic</p>
          <p class="cert-description">TCP client-server model for employee data management with CSV integration</p>
        </div>
        
        <div class="glass-card certificate-card">
          <div class="cert-icon">🗄️</div>
          <h3>Database Management System</h3>
          <p class="cert-status">Academic</p>
          <p class="cert-description">MySQL relational database with Python integration and visualization</p>
        </div>
      </div>
    </section>

    <!-- Resume Section -->
    <section id="resume" class="resume-section">
      <h2 class="section-title">Professional Resume</h2>
      
      <!-- Resume Download Banner -->
      <div class="glass-card resume-banner">
        <div class="resume-banner-content">
          <div class="resume-info">
            <div class="resume-icon">📋</div>
            <div>
              <h3>Complete Resume Available</h3>
              <p>View my full professional resume and save as PDF</p>
            </div>
          </div>
          <div class="resume-buttons">
            <a href="/resume.html" target="_blank" class="resume-download-btn">
              📄 View Resume
            </a>
            <button onclick="window.open('/resume.html'); setTimeout(() => window.print(), 1000);" class="resume-print-btn">
              🖨️ Print PDF
            </button>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="resume-content">
        <div class="resume-column">
          <div class="glass-card resume-card">
            <h3 class="resume-card-title">💼 Professional Experience</h3>
            
            <div class="experience-item">
              <div class="experience-header">
                <h4>Driver</h4>
                <span class="experience-date">2018–Present</span>
              </div>
              <p class="experience-company">Uber Technologies Inc. – Nashville, TN</p>
              <ul class="experience-details">
                <li>Completed 25,000+ rides with a 4.98-star rating, demonstrating reliability and professionalism</li>
                <li>Maintained a 100% clean driving record</li>
                <li>Provided exceptional customer service in fast-paced environment</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="experience-header">
                <h4>Manager</h4>
                <span class="experience-date">2017–2018</span>
              </div>
              <p class="experience-company">Quency Liquor Store – Washington, DC</p>
              <ul class="experience-details">
                <li>Supervised staff hiring, training, and performance evaluations</li>
                <li>Oversaw daily operations and customer service</li>
                <li>Managed inventory and financial operations</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="experience-header">
                <h4>Legal Counsel Department Manager</h4>
                <span class="experience-date">2013–2016</span>
              </div>
              <p class="experience-company">Afro-Tsion Construction – Addis Ababa, Ethiopia</p>
              <ul class="experience-details">
                <li>Managed all legal affairs for a leading construction firm</li>
                <li>Advised management on compliance and contracts</li>
                <li>Provided risk management and legal consultation</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="resume-column">
          <div class="glass-card resume-card">
            <h3 class="resume-card-title">🎓 Education</h3>
            
            <div class="education-item">
              <div class="education-header">
                <h4>B.S. Computer Science, Cybersecurity Concentration</h4>
                <span class="education-date">2024–Present</span>
              </div>
              <p class="education-school">Middle Tennessee State University – Murfreesboro, TN</p>
              <p class="education-gpa">GPA: 3.83/4.0</p>
              <p class="education-details">Cybersecurity concentration with focus on system security and digital forensics</p>
            </div>

            <div class="education-item">
              <div class="education-header">
                <h4>Associate of Science, Computer Science</h4>
                <span class="education-date">2024</span>
              </div>
              <p class="education-school">Nashville State Community College – Nashville, TN</p>
              <p class="education-details">Foundation in programming, mathematics, and computer science fundamentals</p>
            </div>

            <div class="education-item">
              <div class="education-header">
                <h4>LL.M., Environmental & Water Law</h4>
                <span class="education-date">2013</span>
              </div>
              <p class="education-school">Gondar University – Gondar, Ethiopia</p>
              <p class="education-details">Advanced legal studies with environmental law specialization</p>
            </div>

            <div class="education-item">
              <h4>Relevant Coursework</h4>
              <div class="coursework-grid">
                <span class="course-tag">Data Structures & Algorithms</span>
                <span class="course-tag">Systems Programming</span>
                <span class="course-tag">Database Management</span>
                <span class="course-tag">Network Security</span>
                <span class="course-tag">Software Engineering</span>
                <span class="course-tag">Web Development</span>
              </div>
            </div>
          </div>

          <div class="glass-card resume-card">
            <h3 class="resume-card-title">🏆 Achievements</h3>
            
            <div class="achievement-item">
              <div class="achievement-icon">🥇</div>
              <div>
                <h4>Dean's List</h4>
                <p>Fall 2023, Spring 2024</p>
              </div>
            </div>

            <div class="achievement-item">
              <div class="achievement-icon">💡</div>
              <div>
                <h4>Hackathon Winner</h4>
                <p>Best Security Solution - Regional Tech Challenge 2024</p>
              </div>
            </div>

            <div class="achievement-item">
              <div class="achievement-icon">🎯</div>
              <div>
                <h4>Student Leadership Award</h4>
                <p>Computer Science Department Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div class="glass-card project-card">
          <div class="project-icon">🏢</div>
          <h3>Hart Computing</h3>
          <p class="project-type">Business Website</p>
          <p class="project-description">Professional corporate website with modern design and responsive layout for computing services company.</p>
          <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">CSS3</span>
            <span class="tech-tag">JavaScript</span>
          </div>
        </div>
        
        <div class="glass-card project-card">
          <div class="project-icon">📊</div>
          <h3>TrafficWiz</h3>
          <p class="project-type">Data Analytics Tool</p>
          <p class="project-description">Advanced traffic analysis dashboard with real-time data visualization and predictive analytics capabilities.</p>
          <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">SQL</span>
            <span class="tech-tag">Dashboard</span>
          </div>
        </div>
        
        <div class="glass-card project-card">
          <div class="project-icon">🎬</div>
          <h3>Ethio Segenet</h3>
          <p class="project-type">Media Platform</p>
          <p class="project-description">Comprehensive media streaming platform with user management, content delivery, and social features.</p>
          <div class="project-tech">
            <span class="tech-tag">Full Stack</span>
            <span class="tech-tag">Database</span>
            <span class="tech-tag">Streaming</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <h2 class="section-title">Get In Touch</h2>
      <div class="glass-card contact-card">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h3>Email</h3>
              <a href="mailto:zolafruit@gmail.com" class="contact-link">zolafruit@gmail.com</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">�</div>
            <div class="contact-details">
              <h3>Phone</h3>
              <a href="tel:+16293454682" class="contact-link">(629) 345-4682</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">�🐱</div>
            <div class="contact-details">
              <h3>GitHub</h3>
              <a href="https://github.com/Zelalem1659" target="_blank" class="contact-link">github.com/Zelalem1659</a>
            </div>
          </div>
        </div>
        
        <div class="contact-cta">
          <p>Let's collaborate and build something amazing together!</p>
        </div>
      </div>
    </section>
  </div>
`

// Add smooth scrolling for navigation links
document.querySelectorAll('.glass-navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add click handler for navbar logo to scroll to home
document.querySelector('.nav-logo').addEventListener('click', function() {
  document.getElementById('home').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Add scroll animations with error handling
const observeElements = () => {
  try {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: Just add animate-in class to all elements
      document.querySelectorAll('.glass-card, .section-title').forEach(el => {
        el.classList.add('animate-in');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '50px' // Better mobile performance
    });

    document.querySelectorAll('.glass-card, .section-title').forEach(el => {
      observer.observe(el);
    });
  } catch (error) {
    console.warn('Animation observer failed, using fallback:', error);
    // Fallback: Just show all elements
    document.querySelectorAll('.glass-card, .section-title').forEach(el => {
      el.classList.add('animate-in');
    });
  }
};

    // Initialize animations when DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => setTimeout(observeElements, 100));
    } else {
      setTimeout(observeElements, 100);
    }
}, 500); // Close the setTimeout properly
