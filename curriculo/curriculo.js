const whatsappLink = document.getElementById("whatsapp-link");

if (whatsappLink) {
    whatsappLink.href =
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
            ? "https://api.whatsapp.com/send?phone=5524992125959"
            : "https://web.whatsapp.com/send?phone=5524992125959";
}

const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    if (toggle) {
        toggle.textContent = "☀️ Tema Claro";
    }
}

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const darkMode = document.body.classList.contains("dark");

        toggle.textContent = darkMode
            ? "☀️ Tema Claro"
            : "🌙 Tema Escuro";

        localStorage.setItem("theme", darkMode ? "dark" : "light");
    });
}