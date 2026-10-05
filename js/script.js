/* =========================
   Theme Switcher
========================= */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("dexora-theme");


if (savedTheme === "purple") {
    document.documentElement.dataset.theme = "red";
}


themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "red" ? "purple" : "red";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dexora-theme", theme);
});

/* =========================
   Mobile Navigation
========================= */

const mobileMenu = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");

if (mobileMenu && mobileNav) {
    mobileMenu.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });

    mobileNav
        .querySelectorAll("a")
        .forEach((link) => {
            link.addEventListener("click", () => { mobileNav.classList.remove("active");});
        });

}