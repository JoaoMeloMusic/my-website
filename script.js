
      if (window.location.hostname === "www.joaomelomusic.com") {
        window.location.href = "https://joaomelomusic.com";
      }
  


      function setLanguage(lang) {
        document.querySelectorAll(".lang").forEach((el) => {
          el.style.display = el.dataset.lang === lang ? "block" : "none";
        });
        localStorage.setItem("preferredLanguage", lang);
      }

      window.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem("preferredLanguage");
        const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";
        setLanguage(savedLang || browserLang);
      });
 