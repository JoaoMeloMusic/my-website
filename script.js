
if (window.location.hostname === "www.joaomelomusic.com") {
    window.location.href = "https://joaomelomusic.com";
}

function setLanguage(lang) {
    document.querySelectorAll(".lang").forEach((el) => {
        el.style.display = el.dataset.lang === lang ? "block" : "none";
    });
    localStorage.setItem("preferredLanguage", lang);
}

function chooseLanguage(lang) {
    setLanguage(lang);
    document.getElementById("welcome-message").style.display = "none";
    document.body.classList.remove("block-scroll");
}

window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("preferredLanguage");
    const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";

    if (!savedLang) {
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.style.display = "block";
        document.body.classList.add("block-scroll");
        setTimeout(() => {
            welcomeMessage.style.opacity = 1;
        }, 50);
    }

    setLanguage(savedLang || browserLang);
});
