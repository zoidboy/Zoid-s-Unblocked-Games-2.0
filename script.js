// Get references to the elements we'll be working with
const menuToggle = document.getElementById("menu-toggle");
const sectionButtons = document.querySelector(".section-buttons");

// Add an event listener to the menu toggle button
menuToggle.addEventListener("click", () => {
    // Toggle the visibility of the section buttons
    sectionButtons.classList.toggle("show");

    // If section buttons are being hidden, add close class to animate
    if (!sectionButtons.classList.contains("show")) {
        sectionButtons.classList.add("close");
    } else {
        // If section buttons are being shown, remove close class
        sectionButtons.classList.remove("close");
    }
});
