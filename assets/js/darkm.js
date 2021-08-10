window.onload = function () {
    if (window.CSS && CSS.supports("color", "var(--sandman)")) {

        const storage = localStorage.getItem("dark-mode");

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute("data-theme", "dark");
        }

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.documentElement.setAttribute("data-theme", "light");
        }

        if (storage && storage === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        }

        if (storage && storage === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        }

        const toggleTheme = function toggleTheme(e) {
            if (e.currentTarget.classList.contains("dark--hidden")) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("dark-mode", "dark");
                return;
            }
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "light");
        };
        const toggleThemes = document.querySelectorAll(".theme__btn");
        toggleThemes.forEach(function (btn) {
            btn.addEventListener("click", toggleTheme);
        });
    }
}