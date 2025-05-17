
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
      // Show welcome message only if no saved language
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("preferredLanguage");
    const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";
  
    // Show welcome message only if no savedLang
    if (!savedLang) {
      document.getElementById("welcome-message").style.display = "block";
    }
  
    // Apply saved or browser default
    setLanguage(savedLang || browserLang);
  });
  
  // Function for welcome popup buttons
  function chooseLanguage(lang) {
    setLanguage(lang);
    document.getElementById("welcome-message").style.display = "none";
  }
  
 