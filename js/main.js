const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const proposalForm = document.querySelector("[data-proposal-form]");
const year = document.querySelector("[data-year]");
const whatsappNumber = "919820030060";

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
}

function closeNav() {
  document.body.classList.remove("nav-open");
  header?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNav();
  }
});

proposalForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(proposalForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const siteType = String(formData.get("siteType") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const requirement = String(formData.get("requirement") || "").trim();

  const message = [
    "Hello Vision Technocraft, I would like a CCTV / wiring project proposal.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Site type: ${siteType}`,
    `Location: ${location}`,
    `Requirement: ${requirement}`,
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    closeNav();
  }
});

if (year) {
  year.textContent = String(new Date().getFullYear());
}

updateHeader();

if (window.lucide) {
  window.lucide.createIcons();
}
