document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");

    menuToggle.addEventListener("click", () => {
        if (sideMenu.classList.contains("open")) {
            sideMenu.classList.remove("open");
        } else {
            sideMenu.classList.add("open");
        }
    });
});
