document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(contactForm);
    const status = document.querySelector("#form-status");
    const sender = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const topic = String(formData.get("subject")).trim();
    const message = String(formData.get("message")).trim();

    status.textContent = `Message preview (not sent or stored)\nFrom: ${sender} · ${email}\nAbout: ${topic}\n\n${message}\n\nTo send a real message, use the email link on this page.`;
    status.focus();
  });
}
