// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  main.classList.toggle("shifted"); // shift main content
};

document.addEventListener("click", (e) => {
  if (
    navbar.classList.contains("active") &&
    !navbar.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    closeMenu();
  }
});

// Close navbar when scrolling
window.addEventListener("scroll", () => {
  if (navbar.classList.contains("active")) {
    closeMenu();
  }
});

// Helper function
function closeMenu() {
  navbar.classList.remove("active");
  menuIcon.classList.remove("bx-x");
  main.classList.remove("shifted");
}

// Scroll Sections Active Links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

// ✅ Close navbar first, then smooth scroll (for mobile only)
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // stop instant jump

      // Get target section
      let targetId = link.getAttribute("href");
      let targetElement = document.querySelector(targetId);

      // Close navbar first
      closeMenu();

      // Then scroll smoothly after a short delay
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }, 300); // match your navbar transition speed
    }
  });
});

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading, .contact-info", { origin: "top" });
ScrollReveal().reveal(".services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-img", {
  origin: "none",     // Removes directional animation
  distance: "0px",    // No sliding movement
  scale: 0.8,         // Zoom-in effect
  duration: 1500,
  easing: "ease-in-out",
  reset: false
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });




  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  const readLessButtons = document.querySelectorAll('.read-less-btn');
  const allBoxes = document.querySelectorAll('.exp-box');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentBox = button.closest('.exp-box');
      const extraContent = currentBox.querySelector('.extra-content');

      // Hide all other boxes
      allBoxes.forEach(box => {
        if (box !== currentBox) box.style.display = 'none';
      });

      // Show this one’s extra content
      extraContent.classList.remove('hidden');
      button.style.display = 'none';
    });
  });

  readLessButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentBox = button.closest('.exp-box');
      const extraContent = currentBox.querySelector('.extra-content');
      const readMoreBtn = currentBox.querySelector('.read-more-btn');

      // Hide extra content and show "read more" again
      extraContent.classList.add('hidden');
      readMoreBtn.style.display = 'inline';

      // Show all boxes again
      allBoxes.forEach(box => {
        box.style.display = 'block';
      });
    });
  });


  document.getElementById("toggle-btn1").addEventListener("click", function () {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});



document.getElementById('toggle-btn').addEventListener('click', toggleAbout);

function toggleAbout() {
  const aboutContent = document.querySelector('.about-content');
  const toggleBtn = document.getElementById('toggle-btn');
  const aboutText = document.getElementById('about-text');

  aboutContent.classList.toggle('expanded');
  aboutText.classList.toggle('collapsed');

if (aboutContent.classList.contains('expanded')) {
  toggleBtn.innerHTML = `
    <span class="arrow first collapse rotated-up">&gt;</span><br>
    <span class="arrow second collapse rotated-up">&gt;</span><br>
    Collapse`;
} else {
  toggleBtn.innerHTML = `
    Expand<br>
    <span class="arrow first">&gt;</span><br>
    <span class="arrow second">&gt;</span>`;
}



}



const buttons = document.querySelectorAll(".menu-btn");
const boxes = document.querySelectorAll(".portfolio-box");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Active button highlight
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    boxes.forEach(box => {
      if (category === "all" || box.classList.contains(category)) {
        box.classList.remove("hide");
      } else {
        box.classList.add("hide");
      }
    });
  });
});


