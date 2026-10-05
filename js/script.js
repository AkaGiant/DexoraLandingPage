/* =========================
   Theme Switcher
========================= */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("dexora-theme");


if (savedTheme === "purple") {
    document.documentElement.dataset.theme = "purple";
}


themeToggle.addEventListener("click", () => {

    const html =
        document.documentElement;

    const isPurple =
        html.dataset.theme === "purple";


    if (isPurple) {

        delete html.dataset.theme;

        localStorage.setItem(
            "dexora-theme",
            "red"
        );

    } else {

        html.dataset.theme = "purple";

        localStorage.setItem(
            "dexora-theme",
            "purple"
        );
    }
});
