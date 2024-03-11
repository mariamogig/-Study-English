document.addEventListener("DOMContentLoaded", function () {
    // Define an array of popup data
    const popups = [
        { openButtonId: "openPopupButton", closeButtonId: "closePopup", popupId: "popup" },
        { openButtonId: "openPopupButton2", closeButtonId: "closePopup2", popupId: "popup2" },
        { openButtonId: "openPopupButton3", closeButtonId: "closePopup3", popupId: "popup3" },
        { openButtonId: "openPopupButton4", closeButtonId: "closePopup4", popupId: "popup4" }
        // Add more popups as needed
    ];

    // Iterate through each popup data and set up event listeners
    popups.forEach(function (popupData) {
        const openPopupButton = document.getElementById(popupData.openButtonId);
        const closePopup = document.getElementById(popupData.closeButtonId);
        const popup = document.getElementById(popupData.popupId);

        openPopupButton.addEventListener("click", function () {
            togglePopup(popup);
        });

        closePopup.addEventListener("click", function () {
            togglePopup(popup);
        });
    });

    // Function to toggle popup visibility
    function togglePopup(popup) {
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    }
});


const openHam = document.querySelector("#openHam");
const closeHam = document.querySelector("#closeHam");
const navigationItems = document.querySelector("#navigation-items");

const hamburgerEvent = () => {
    if (window.innerWidth <= 768) {
        navigationItems.style.display = navigationItems.style.display === "none" ? "flex" : "none";
        closeHam.style.display = navigationItems.style.display === "none" ? "none" : "block";
        openHam.style.display = navigationItems.style.display === "none" ? "block" : "none";
    } else {
        navigationItems.style.display = "flex";
        closeHam.style.display = "none";
        openHam.style.display = "none";
    }
};

openHam.addEventListener('click', hamburgerEvent);
closeHam.addEventListener('click', hamburgerEvent);

// Update the navigation visibility on window resize
window.addEventListener('resize', hamburgerEvent);

// Initial check on page load
window.addEventListener('DOMContentLoaded', hamburgerEvent);
