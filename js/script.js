// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const main = document.querySelector("main");
let skillmove = document.querySelector(".skill-logo-boxx");

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
ScrollReveal().reveal(".home-content, .heading, .contact-info, .form-description", { origin: "top" });
ScrollReveal().reveal(".skills-reveal, .skills-reveal1, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-img", {
  origin: "none",     // Removes directional animation
  distance: "0px",    // No sliding movement
  scale: 0.8,         // Zoom-in effect
  duration: 1500,
  easing: "ease-in-out",
  reset: false
});
ScrollReveal().reveal(".home-content h1, .home-content p, .about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });

ScrollReveal().reveal(".form-title", { origin: "top", delay: 200 });


const expTab = document.querySelector('[data-target="experience"]');
const btechTab = document.querySelector('[data-target="btech"]');
const expSection = document.querySelector('.skills-reveal1');

if (expTab && btechTab && expSection) {
  // When EXPERIENCE button is clicked
  expTab.addEventListener("click", () => {
    if (window.innerWidth <= 450) {
      // On small screens: kill ScrollReveal effect visually
      expSection.classList.add("no-reveal");
    }
  });

  // When BTECH SKILLS button is clicked
  btechTab.addEventListener("click", () => {
    if (window.innerWidth <= 450) {
      expSection.classList.remove("no-reveal");
    }
  });
}


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

const experienceList = document.querySelector('.experience-list');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentBox = button.closest('.exp-box');
    const extraContent = currentBox.querySelector('.extra-content');
    const expHeading = document.querySelector('.services-box.experience h3'); // your Experience heading

    // Hide all other boxes
    allBoxes.forEach(box => {
      if (box !== currentBox) box.style.display = 'none';
    });

    // Hide the Experience heading
    if (expHeading) expHeading.style.display = 'none';

    // Add expanded class (no specific height in JS)
    experienceList.classList.add('expanded');

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
    const expHeading = document.querySelector('.services-box.experience h3'); // same heading

    // Hide extra content and show "read more" again
    extraContent.classList.add('hidden');
    readMoreBtn.style.display = 'inline';

    // Show heading again
    if (expHeading) expHeading.style.display = 'block';

    // Show all boxes again
    allBoxes.forEach(box => {
      box.style.display = 'block';
    });

    // Remove expanded class
    experienceList.classList.remove('expanded');
  });
});



//   document.getElementById("toggle-btn1").addEventListener("click", function () {
//   document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
// });

document.getElementById("toggle-btn1").addEventListener("click", function () {
  const aboutSection = document.querySelector("#contact");

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



// const buttons = document.querySelectorAll(".menu-btn");
// const boxes = document.querySelectorAll(".portfolio-box");


// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {


    // Do nothing if a project is active (bigger mode open)
// if (document.querySelector(".portfolio-box.active")) return;



    // Active button highlight
//     buttons.forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");

//     const category = btn.dataset.category;

//     boxes.forEach(box => {
//       if (category === "all" || box.classList.contains(category)) {
//         box.classList.remove("hide");
//       } else {
//         box.classList.add("hide");
//       }
//     });
//   });
// });


// //portfolio project
// document.addEventListener("DOMContentLoaded", () => {
//   const boxes = document.querySelectorAll(".portfolio-box");
//   const aboutContent = document.querySelector(".about-content1.glass1");
//   const container = document.querySelector(".portfolio-container");

//   boxes.forEach(box => {
//     const detailsBtn = box.querySelector(".details-btn");
//     const closeBtn = box.querySelector(".close-details");

//     if (detailsBtn) {
//       detailsBtn.addEventListener("click", e => {
//         e.stopPropagation();


        // Hide other projects
        // container.classList.add("hide-others");

//         // Show only this one
//         box.classList.add("active");
//       });

      
//     }

//     if (closeBtn) {
//       closeBtn.addEventListener("click", e => {
//         e.stopPropagation();

//         container.classList.remove("hide-others");
//         box.classList.remove("active");
//       });
//     }
//   });
// });



document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");
  const boxes = document.querySelectorAll(".portfolio-box");
  const container = document.querySelector(".portfolio-container");
  const body = document.body;

  function isProjectOpen() {
    return !!document.querySelector(".portfolio-box.active");
  }

  function updateProjectState() {
    if (isProjectOpen()) {
      body.classList.add("project-open");
    } else {
      body.classList.remove("project-open");
    }
  }

  // Menu buttons
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // ❌ Don't change menu / filter while a project is open
      if (isProjectOpen()) return;

      // Active button highlight
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;

      boxes.forEach(box => {
        const shouldShow = category === "all" || box.classList.contains(category);
        box.classList.toggle("hide", !shouldShow);
      });
    });
  });

  // Portfolio project open / close
  boxes.forEach(box => {
    const detailsBtn = box.querySelector(".details-btn");
    const closeBtn = box.querySelector(".close-details");

    if (detailsBtn) {
      detailsBtn.addEventListener("click", e => {
        e.stopPropagation();

        // Show only this project
        container.classList.add("hide-others");
        box.classList.add("active");

        updateProjectState(); // ⭐ sync body.project-open
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", e => {
        e.stopPropagation();

        container.classList.remove("hide-others");
        box.classList.remove("active");

        updateProjectState(); // ⭐ sync body.project-open
      });
    }
  });

  // Initial sync (in case some box is marked active in HTML)
  updateProjectState();
});

// Select both download buttons (second one is optional)
const downloadButtons = document.querySelectorAll("#downloadBtn, #download-cv, #download-cvBtn");

// Popup elements
const overlay = document.getElementById("download-overlay");
const confirmBtn = document.getElementById("confirmDownload");
const cancelBtn = document.getElementById("cancelDownload");

// Only for this page load
let downloadedOnce = false;

// Disable buttons visually and functionally
function disableButtons() {
  downloadButtons.forEach(btn => {
    btn.textContent = "CV Downloaded";
    btn.classList.add("disabled");        // for styles like opacity, font-size
    btn.style.cursor = "not-allowed";     // 🔥 inline style = highest priority
  });
}

// Handle clicks on download buttons
downloadButtons.forEach(btn => {
  if (!btn) return; // in case one of the IDs doesn't exist

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // If already downloaded, do nothing (but cursor still shows not-allowed)
    if (downloadedOnce) return;

    // Show popup
    overlay.style.display = "flex";

    // Store the href for this click
    overlay.dataset.href = btn.getAttribute("href");
  });
});

// Confirm download
confirmBtn.addEventListener("click", () => {
  overlay.style.display = "none";

  const link = document.createElement("a");
  link.href = overlay.dataset.href;
  link.download = "";
  document.body.appendChild(link);
  link.click();
  link.remove();

  // Mark as downloaded & disable buttons
  downloadedOnce = true;
  disableButtons();
});

// Cancel popup
cancelBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});



//  const downloadBtn = document.getElementById("downloadBtn");
//   const overlay = document.getElementById("download-overlay");
//   const confirmBtn = document.getElementById("confirmDownload");
//   const cancelBtn = document.getElementById("cancelDownload");

//   downloadBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     overlay.style.display = "flex";
//   });

//   confirmBtn.addEventListener("click", () => {
 
//     overlay.style.display = "none";

  
//     const link = document.createElement("a");
//     link.href = downloadBtn.getAttribute("href");
//     link.download = "";
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//   });

//   cancelBtn.addEventListener("click", () => {
//     overlay.style.display = "none"; 
//   });


// Get both toggle buttons
const toggleBtns = [
  document.getElementById("theme-toggle"),
  document.getElementById("header-theme-toggle")
].filter(Boolean); // filter in case one doesn’t exist on bigger screens

let isStarsActive = true; // 🌟 start as ON
let animationFrames = new Map();

function initStarBackground(section, numStars = 150) {
  let canvas = section.querySelector("canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    section.prepend(canvas);
  }

  const ctx = canvas.getContext("2d");
  let stars = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.25,
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
    animationId = requestAnimationFrame(animate);
    animationFrames.set(section, animationId);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  createStars();
  animate();
}

// 🌟 Start stars ON by default
document.querySelectorAll(".stars-bg").forEach(section => {
  initStarBackground(section);
});

// 🌟 Function to update both icons together
function updateIcons() {
  toggleBtns.forEach(btn => {
    btn.innerHTML = isStarsActive
      ? "<i class='bx bx-star'></i>" // stars ON
      : "<i class='bx bx-x'></i>";   // stars OFF
  });
}

// 🌟 Add event listener to both buttons
toggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (isStarsActive) {
      // ❌ Stop and remove canvases
      animationFrames.forEach((id) => cancelAnimationFrame(id));
      animationFrames.clear();
      document.querySelectorAll(".stars-bg canvas").forEach(c => c.remove());
      isStarsActive = false;
    } else {
      // ✅ Start stars again
      document.querySelectorAll(".stars-bg").forEach(section => {
        initStarBackground(section);
      });
      isStarsActive = true;
    }

    // 🔁 Update both buttons’ icons
    updateIcons();
  });
});

// Initial icon setup
updateIcons();


// -------------------------------
// 1) Detect if user already submitted
// -------------------------------

// ❌ Old permanent memory (removed)
// let alreadySubmitted = localStorage.getItem("mailSubmitted") === "true";

// ✔ New session-only memory (resets on reload)
let alreadySubmitted = false; 



// -------------------------------
// 2) Thank You Page Function
// -------------------------------
function showThankYouPage() {


    // ⭐ Stop ALL scrolling (html + body)
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  if (typeof menuIcon !== "undefined") menuIcon.classList.remove("disabled");


  const old = document.getElementById("thankYouFull");
  if (old) old.remove();   

document.body.insertAdjacentHTML("beforeend", `
  <style>
    @media (max-width: 450px) {
      #thankYouFull h1 {
        font-size: 2.5rem !important;
      }
      #thankYouFull p {
        font-size: 1.25rem !important;
      }
      #returnToPortfolio {
        font-size: 1.05rem !important;
        padding: 0.6rem 1.5rem !important;
      }
    }
  </style>

  <div id="thankYouFull" style="
    position: fixed; top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: #0a0a0a; color: #00ff48;
    display: flex; justify-content: center; align-items: center;
    text-align: center; font-family: Poppins, sans-serif;
    z-index: 9999;">
    <div>
      <h1 style="font-size:4.5rem;">✅ Message Sent!</h1>
      <p style="font-size:2.25rem;opacity:0.9;margin-bottom:2rem;">
        Thank you for reaching out.. I’ll get back to you soon!
      </p>

      <a id="returnToPortfolio" style="
        display:inline-block;background:#00ff48;color:#000;
        padding:1rem 3rem;font-size:1.5rem;font-weight:700;
        border-radius:0.8rem;cursor:pointer;
      ">⬅ Go Back</a>

    </div>
  </div>
`);

  document.getElementById("returnToPortfolio").addEventListener("click", () => {

    // ⭐ Restore scrolling
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    document.getElementById("thankYouFull").remove();
  });
}



// -------------------------------
// 3) Popup Form Elements
// -------------------------------
const contactBtn = document.getElementById("contactBtn");
const popupForm = document.getElementById("popupForm");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");
const mainSection = document.querySelector(".home") || document.querySelector("main");



document.querySelectorAll(".contact-btn1").forEach(btn => {
  btn.addEventListener("click", () => {
    if (alreadySubmitted) {
      showThankYouPage();
      return;
    }

    popupForm.classList.add("active");
    popupOverlay.style.display = "block";
    mainSection.classList.add("main-blur");
    if (typeof menuIcon !== "undefined") menuIcon.classList.add("disabled");
  });
});

// -------------------------------
// 4) Contact Button Click
// -------------------------------
contactBtn.addEventListener("click", () => {

  // ❌ Old behavior (permanent memory)
  // if (alreadySubmitted) {
  //   showThankYouPage();
  //   return;
  // }

  // ✔ New behavior: show thank-you ONLY if submitted in same session
  if (alreadySubmitted) {
    showThankYouPage();
    return;
  }

  popupForm.classList.add("active");
  popupOverlay.style.display = "block";
  mainSection.classList.add("main-blur");
  if (typeof menuIcon !== "undefined") menuIcon.classList.add("disabled");
});



// -------------------------------
// 5) Close Popup (X)
// -------------------------------
closePopup.addEventListener("click", () => {
  popupForm.classList.remove("active");
  popupOverlay.style.display = "none";
  if (typeof menuIcon !== "undefined") menuIcon.classList.remove("disabled");
});



// -------------------------------
// 6) Close Popup (click outside)
// -------------------------------
popupOverlay.addEventListener("click", () => {
  popupForm.classList.remove("active");
  popupOverlay.style.display = "none";
  if (typeof menuIcon !== "undefined") menuIcon.classList.remove("disabled");
});



// -------------------------------
// 7) FORM SUBMIT — AJAX (NO REDIRECT)
// -------------------------------
document.getElementById("xxxxx").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  alreadySubmitted = true;

  // BUTTON elements
  const submitBtn = document.getElementById("submitBtn1");   // popup submit button ID
  const btnText = submitBtn.querySelector(".btn-text");
  const spinner = submitBtn.querySelector(".spinner");

  // ⭐ Show spinner only
  submitBtn.classList.add("loading");
  btnText.style.visibility = "hidden";   // hide text but keep width
  spinner.style.display = "block";       // center spinner

  // Send the form in background
  await fetch(this.action, {
    method: "POST",
    body: formData
  });

  // Reset form
  this.reset();

  // Restore button
  submitBtn.classList.remove("loading");
  btnText.style.visibility = "visible";
  spinner.style.display = "none";

  // Close popup UI
  popupForm.classList.remove("active");
  popupOverlay.style.display = "none";

  // Show thank you page
  showThankYouPage();
});



// -------------------------------
// 8) Default message text
// -------------------------------
const messageBoxes = document.querySelectorAll("#message");

const defaultMessage = `Hello,
I have reviewed your portfolio and was impressed with your work.
I'd like to discuss further opportunities with you now..

Best regards,
[Your Name]`;

messageBoxes.forEach(messageBox => {
  messageBox.addEventListener("focus", () => {
    if (messageBox.value.trim() === "") {
      messageBox.value = defaultMessage;
    }
  });
});



document.getElementById("contactForm2").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  alreadySubmitted = true;

  const submitBtn = document.getElementById("submitBtn2");
  const btnText = submitBtn.querySelector(".btn-text");
  const spinner = submitBtn.querySelector(".spinner");

  // Show spinner only
  submitBtn.classList.add("loading");
  btnText.style.visibility = "hidden";   // hide text without resizing
  spinner.style.display = "block";       // show spinner centered

  await fetch(this.action, {
    method: "POST",
    body: formData
  });

  this.reset();

  // restore button
  submitBtn.classList.remove("loading");
  btnText.style.visibility = "visible";
  spinner.style.display = "none";

  showThankYouPage();
});


// -------------------------------
// Default message for second contact form textarea
// -------------------------------
const messageBox2 = document.getElementById("message2");

messageBox2.addEventListener("focus", () => {
  if (messageBox2.value.trim() === "") {
    messageBox2.value = defaultMessage;
  }
});



// const countryEl = document.getElementById('country');
// let isBharat = true;

// setInterval(() => {
//   setTimeout(() => {
//     countryEl.textContent = isBharat ? 'INDIA' : 'BHARAT';
//     isBharat = !isBharat;
//   }, 1000);
// }, 3000);




// const words = ["BHARAT", "INDIA"];
// let i = 0;
// let j = 0;
// let currentWord = "";
// let isDeleting = false;
// const country = document.getElementById("country");

// function typeEffect() {
//   currentWord = words[i];
//   country.textContent = currentWord.substring(0, j);

//   if (!isDeleting && j < currentWord.length) {
//     j++;
//     setTimeout(typeEffect, 150);
//   } else if (isDeleting && j > 0) {
//     j--;
//     setTimeout(typeEffect, 100);
//   } else {
//     if (!isDeleting) {
//       isDeleting = true;
//       setTimeout(typeEffect, 1000);
//     } else {
//       isDeleting = false;
//       i = (i + 1) % words.length;
//       setTimeout(typeEffect, 200);
//     }
//   }
// }
// typeEffect();




  const tabs = document.querySelectorAll(".skills-tab");
  const contents = document.querySelectorAll(".skills-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active classes
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Add active class to the clicked tab and its content
      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.target);
      target.classList.add("active");
    });
  });






(function(){
  const arrow = document.querySelector('header .arrow1');
  const navLinks = Array.from(document.querySelectorAll('header .navbar a'));

  // Build sections list from nav href order (only anchors with #id)
  const sections = navLinks
    .map(a => {
      const id = a.getAttribute('href');
      return (id && id.startsWith('#')) ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if (!arrow || sections.length === 0) {
    console.warn('arrow1 or sections not found.');
    return;
  }

  let currentIndex = 0;
  let lastWheelTime = 0;
  let lastTouchY = null;

  // Strict IntersectionObserver: section must be mostly visible / near top
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = sections.indexOf(entry.target);
        if (idx !== -1) {
          currentIndex = idx;
          // At extremes enforce arrow face
          if (currentIndex === sections.length - 1) {
            arrow.classList.add('up');
          } else if (currentIndex === 0) {
            arrow.classList.remove('up');
          }
          highlightNav(currentIndex);
        }
      }
    });
  }, {
    root: null,
    // wait until the section is much closer to top before marking it visible
    rootMargin: '0px 0px -90% 0px',
    threshold: 0.25
  });

  sections.forEach(s => io.observe(s));

  function highlightNav(idx){
    navLinks.forEach(a => a.classList.remove('active'));
    const link = navLinks[idx];
    if (link) link.classList.add('active');
  }

  function scrollToIndex(idx){
    if (idx < 0) idx = 0;
    if (idx > sections.length - 1) idx = sections.length - 1;
    sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Click: step one-by-one up or down depending on arrow state
  arrow.addEventListener('click', () => {
    const isUp = arrow.classList.contains('up');
    if (isUp) {
      // step up one section (if possible)
      if (currentIndex > 0) {
        scrollToIndex(currentIndex - 1);
      }
    } else {
      // step down one section (if possible)
      if (currentIndex < sections.length - 1) {
        scrollToIndex(currentIndex + 1);
      } else {
        // already last: ensure arrow shows up
        arrow.classList.add('up');
      }
    }
  });

  // Immediate mood-change handlers (wheel + touch)
  // small thresholds to react quickly to small gestures
  function handleWheel(e){
    const now = Date.now();
    if (now - lastWheelTime < 60) return; // tiny throttle for responsiveness
    lastWheelTime = now;

    const delta = e.deltaY;
    if (Math.abs(delta) < 6) return; // ignore microscopics

    if (delta > 0) {
      // user is scrolling down -> arrow should be down (unless at last section)
      if (currentIndex !== sections.length - 1) arrow.classList.remove('up');
    } else {
      // user scrolling up -> arrow should be up (unless at home)
      if (currentIndex !== 0) arrow.classList.add('up');
    }
  }

  function handleTouchStart(e){
    lastTouchY = e.touches ? e.touches[0].clientY : null;
  }
  function handleTouchMove(e){
    if (lastTouchY == null) return;
    const y = e.touches ? e.touches[0].clientY : null;
    if (y == null) return;
    const dy = lastTouchY - y; // positive if user swiped up (content moves down)
    if (Math.abs(dy) < 8) return; // small threshold

    if (dy > 0) {
      // user swiped up -> intent to move down content -> arrow down
      if (currentIndex !== sections.length - 1) arrow.classList.remove('up');
    } else {
      // user swiped down -> intent to move up content -> arrow up
      if (currentIndex !== 0) arrow.classList.add('up');
    }
    lastTouchY = y;
  }
  function handleTouchEnd(){ lastTouchY = null; }

  window.addEventListener('wheel', handleWheel, { passive: true });
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: true });
  window.addEventListener('touchend', handleTouchEnd, { passive: true });

  // Scroll handler: prefer a section whose top is within ±40px of viewport top,
  // otherwise pick the closest by distance. This ensures we keep going up until Home is really reached.
  let scrollTimer;
  window.addEventListener('scroll', function(){
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      // try to find a section near the top
      let nearIdx = -1;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top >= -40 && rect.top <= 40) {
          nearIdx = i;
          break;
        }
      }

      if (nearIdx !== -1) {
        currentIndex = nearIdx;
      } else {
        // fallback to closest by distance
        let closestIdx = 0;
        let closestDist = Infinity;
        sections.forEach((s, i) => {
          const rect = s.getBoundingClientRect();
          const dist = Math.abs(rect.top);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = i;
          }
        });
        currentIndex = closestIdx;
      }

      // enforce extremes: last -> up, first -> down
      if (currentIndex === sections.length - 1) {
        arrow.classList.add('up');
      } else if (currentIndex === 0) {
        arrow.classList.remove('up');
      }

      highlightNav(currentIndex);
    }, 80);
  });

  // On page load, initialize currentIndex and arrow state
  window.addEventListener('load', () => {
    let startIdx = 0;
    let minDist = Infinity;
    sections.forEach((s, i) => {
      const rect = s.getBoundingClientRect();
      const dist = Math.abs(rect.top);
      if (dist < minDist) { minDist = dist; startIdx = i; }
    });
    currentIndex = startIdx;
    if (currentIndex === sections.length - 1) arrow.classList.add('up');
    else arrow.classList.remove('up');
    highlightNav(currentIndex);
  });

  // Optional: keyboard up/down reflect mood immediately
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      if (currentIndex < sections.length - 1) arrow.classList.remove('up');
    } else if (e.key === 'ArrowUp') {
      if (currentIndex > 0) arrow.classList.add('up');
    }
  });

})();
