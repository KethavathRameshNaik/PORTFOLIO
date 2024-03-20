document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href*="#about"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust this value to include any fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});
