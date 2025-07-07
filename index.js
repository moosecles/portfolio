document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');
  const footer = document.querySelector('footer'); // Add if you have one
  
  const updateActiveNav = () => {
      let currentSection = '';
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.id;
          
          if ((scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) || 
              (sectionId === 'about' && isAtBottom)) {
              currentSection = sectionId;
          }
      });
      
      navItems.forEach(item => {
          const link = item.querySelector('a');
          const linkHref = link.getAttribute('href').substring(1);
          item.classList.toggle('active', linkHref === currentSection);
      });
  };
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 100,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Initialize and update on scroll
  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav);
});