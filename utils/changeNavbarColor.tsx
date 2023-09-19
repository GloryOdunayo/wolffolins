export function changeNavbarColor() {
    const components = document.querySelectorAll('.component'); // Select all components
    const navbarLinks = document.querySelectorAll('.navbar-link'); // Select navbar links
  
    for (let i = 0; i < components.length; i++) {
      const component = components[i] as HTMLElement;
      const rect = component.getBoundingClientRect();
  
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // Component is fully in the viewport
        const textColor = window.getComputedStyle(component).color;
        navbarLinks.forEach((link) => {
          (link as HTMLElement).style.color = textColor; // Change navbar text color
        });
      }
    }
  }
  