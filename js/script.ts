// Scroll effect on navbar
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add("bg-secondary");
        } else {
            nav.classList.remove("bg-secondary");
        }
    }
});

// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle") as HTMLButtonElement | null;
toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
    localStorage.setItem("theme", document.body.classList.contains("bg-dark") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("bg-dark", "text-white");
    }

    // Footer dynamic year and hover effect
    const footer = document.querySelector("footer");
    if (footer instanceof HTMLElement) {
        const year = new Date().getFullYear();
        footer.innerHTML += `<p>${year}</p>`;

        footer.addEventListener("mouseenter", () => {
            footer.style.backgroundColor = "#555";
        });
        footer.addEventListener("mouseleave", () => {
            footer.style.backgroundColor = "";
        });
    }

    // Contact form validation
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    const alertBox = document.getElementById("form-alert") as HTMLDivElement | null;

    if (form && alertBox) {
        form.addEventListener("submit", (e: Event) => {
            e.preventDefault();

            const nameInput = document.getElementById("name") as HTMLInputElement | null;
            const emailInput = document.getElementById("email") as HTMLInputElement | null;
            const messageInput = document.getElementById("message") as HTMLTextAreaElement | null;

            const name = nameInput?.value.trim() || "";
            const email = emailInput?.value.trim() || "";
            const message = messageInput?.value.trim() || "";

            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (!name || !email || !message || !isValidEmail || message.length < 10) {
                alertBox.classList.remove("d-none");
                alertBox.textContent = "Please fill all fields correctly. Message must be at least 10 characters.";
            } else {
                alertBox.classList.add("d-none");
                alert("Message sent successfully!");
                form.reset();
            }
        });
    }

    // Service filter
    const filterInput = document.getElementById("service-filter") as HTMLInputElement | null;
    const serviceCards = document.querySelectorAll(".service-card");

    if (filterInput) {
        filterInput.addEventListener("input", () => {
            const keyword = filterInput.value.toLowerCase();

            serviceCards.forEach((card) => {
                if (!(card instanceof HTMLElement)) return;
                const content = card.textContent?.toLowerCase() || "";
                card.style.display = content.indexOf(keyword) !== -1 ? "block" : "none";
            });
        });
    }
});
