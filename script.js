 const brochureBtn = document.getElementById("brochureBtn");
  const brochureModal = document.getElementById("brochureModal");
  const closeBtn = document.querySelector(".close");
  const slides = document.getElementById("slides");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const downloadBrochure = document.getElementById("downloadBrochure");

  let currentIndex = 0;
  const totalSlides = slides.children.length;

  // Open/Close modal
  brochureBtn.onclick = () => brochureModal.style.display = "block";
  closeBtn.onclick = () => brochureModal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === brochureModal) brochureModal.style.display = "none";
  };

  // Slide controls
  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  next.onclick = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  };

  prev.onclick = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  };

  // Download brochure
  downloadBrochure.onclick = () => {
    const link = document.createElement("a");
    link.href = "brochure.pdf"; // 📄 your PDF file path
    link.download = "ASTEEVIA_ITFest_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

/* -------- Nav toggle + auto close on link click -------- */
const hamburger = document.getElementById('hamburger');
const navPanel = document.getElementById('navPanel');

hamburger.addEventListener('click', ()=> navPanel.classList.toggle('show'));
document.querySelectorAll('[data-close]').forEach(a=>{
  a.addEventListener('click', ()=> navPanel.classList.remove('show'));
});

/* -------- countdown timer -------- */
const target = new Date('2025-11-04T09:00:00').getTime();
function updateCountdown(){
  const now = Date.now();
  let diff = target - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
  const secs = Math.floor((diff % (1000*60)) / 1000);
  document.getElementById('days').textContent = String(days).padStart(2,'0');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(mins).padStart(2,'0');
  document.getElementById('seconds').textContent = String(secs).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);

/* -------- Events ring behavior & popups -------- */
/* Event details map */
const eventDetails = {
  "Stealth Mastermind":"IT Manager (For UG).",
  "Shoguns Riddle":"Quiz (Both PUC and UG).",
  "Secrets of the Creed":"Surprise Event (Both PUC and UG).",
  "Blade Script":"Error Detection (Both PUC and UG).",
  "Shadows in Motion":"Reel Making (Both PUC and UG).",
  "Shadow Scolars":"Paper Presentation (For UG).",
  "Obsidian Invention":"Science and IT Model (For UG).",
  "Dark Act":"Mad Ad (Both PUC and UG).",
  "Cipher Chase":"Math Relay (Both PUC and UG).",
  "Ghost Grid":"Web designing (For UG).",
};

/* Hook up icons: click -> open popup */
document.querySelectorAll('.icon').forEach(icon=>{
  icon.addEventListener('click', (e)=>{
    const key = icon.dataset.key || icon.dataset.event;
    const title = key;
    const body = eventDetails[key] || "Details coming soon!";
    showPopup(title, body);
  });
});

/* popup controls */
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupBody = document.getElementById('popupBody');
const closePopupBtn = document.getElementById('closePopup');
closePopupBtn.addEventListener('click', ()=> hidePopup() );
popup.addEventListener('click', (e)=>{ if(e.target===popup) hidePopup(); });
function showPopup(title, text){
  popupTitle.textContent = title;
  popupBody.textContent = text;
  popup.classList.add('show');
  popup.setAttribute('aria-hidden','false');
}
function hidePopup(){
  popup.classList.remove('show');
  popup.setAttribute('aria-hidden','true');
}

/* -------- Make orbiters have translate radius responsive -------- */
/* Set CSS custom property --r for icons based on medallion size */
function setOrbitRadius(){
  const med = document.querySelector('.medallion');
  if(!med) return;
  const size = Math.min(med.clientWidth, med.clientHeight);
  const r = Math.round(size*0.36); // proportion radius
  document.querySelectorAll('.icon').forEach(ic=>{
    ic.style.setProperty('--r', r+'px');
  });
}
window.addEventListener('resize', setOrbitRadius);
setOrbitRadius();

/* -------- contact form basic validation (static) -------- */
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  if(!name || !email || !msg){
    statusEl.textContent = "Please fill all fields.";
    statusEl.style.color = "#ffb86b";
    return;
  }
  // just simulate send
  statusEl.style.color = "#7efc9a";
  statusEl.textContent = "Message sent (simulated). We'll contact you soon!";
  form.reset();
});

/* small helper: open brochure placeholder */
function openBrochure(){
  alert("C:\Users\ASUS\Downloads");
}

/* Accessibility: close nav when clicking outside */
document.addEventListener('click', (e)=>{
  const nav = document.getElementById('navPanel');
  const ham = document.getElementById('hamburger');
  if(!nav.contains(e.target) && !ham.contains(e.target)){
    nav.classList.remove('show');
  }
});

