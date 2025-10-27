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

// ✅ Close navbar first, then smooth scroll
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let targetId = link.getAttribute("href");
    let targetElement = document.querySelector(targetId);

    if (!targetElement) return;

    e.preventDefault(); // prevent instant jump
    closeMenu();

    setTimeout(() => {
      if (window.innerWidth <= 768) {
        // Mobile → scroll with header offset
        let header = document.querySelector("header");
        let headerHeight = header.offsetHeight;
        let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        let offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        // Desktop → normal smooth scroll
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // matches navbar transition speed
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



// Show overlay when clicking project link
document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent actual link navigation
    document.getElementById("loading-overlay").style.display = "flex";
  });
});

// Hide overlay when user clicks anywhere on it
document.getElementById("loading-overlay").addEventListener("click", () => {
  document.getElementById("loading-overlay").style.display = "none";
});




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


//   document.getElementById("toggle-btn1").addEventListener("click", function () {
//   document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
// });

document.getElementById("toggle-btn1").addEventListener("click", function () {
  const aboutSection = document.querySelector("#about");

  // For mobile screens — apply header offset
  if (window.innerWidth <= 768) {
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const offsetTop = aboutSection.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  } 
  // For desktop screens — normal scrollIntoView
  else {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
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










 const downloadBtn = document.getElementById("downloadBtn");
  const overlay = document.getElementById("download-overlay");
  const confirmBtn = document.getElementById("confirmDownload");
  const cancelBtn = document.getElementById("cancelDownload");

  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Stop instant download
    overlay.style.display = "flex"; // Show popup
  });

  confirmBtn.addEventListener("click", () => {
    // Hide popup
    overlay.style.display = "none";

    // Trigger download
    const link = document.createElement("a");
    link.href = downloadBtn.getAttribute("href");
    link.download = "";
    document.body.appendChild(link);
    link.click();
    link.remove();
  });

  cancelBtn.addEventListener("click", () => {
    overlay.style.display = "none"; // Close popup
  });



function initStarBackground(section, numStars = 150) {
  // Create and insert canvas
  const canvas = document.createElement('canvas');
  section.prepend(canvas);
  const ctx = canvas.getContext('2d');

  let stars = [];

  // Resize canvas to section size
  function resizeCanvas() {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Create stars
  function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.2 + 0.05
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    for (let s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function updateStars() {
    for (let s of stars) {
      s.y += s.speed;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    }
  }

  function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
  }

  createStars();
  animate();
}

// Apply to all sections with class "stars-bg"
document.querySelectorAll('.stars-bg').forEach(section => {
  initStarBackground(section);
});
