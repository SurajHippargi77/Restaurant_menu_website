const toggleButton = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");

if (toggleButton && siteNav) {
  toggleButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all fields.";
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      formStatus.textContent = "Thanks for contacting us. We will reply soon.";
      contactForm.reset();
    } catch (error) {
      formStatus.textContent = "Unable to send your message right now.";
    }
  });
}
