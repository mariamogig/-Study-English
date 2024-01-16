document.addEventListener("DOMContentLoaded", function() {
    // Popup 1
    const openPopupButton = document.getElementById("openPopupButton");
    const closePopup = document.getElementById("closePopup");
    const popup = document.getElementById("popup");

    openPopupButton.addEventListener("click", function() {
        togglePopup(popup);
    });

    closePopup.addEventListener("click", function() {
        togglePopup(popup);
    });

    // Popup 2
    const openPopupButton2 = document.getElementById("openPopupButton2");
    const closePopup2 = document.getElementById("closePopup2");
    const popup2 = document.getElementById("popup2");

    openPopupButton2.addEventListener("click", function() {
        togglePopup(popup2);
    });

    closePopup2.addEventListener("click", function() {
        togglePopup(popup2);
    });

    // Popup 3
    const openPopupButton3 = document.getElementById("openPopupButton3");
    const closePopup3 = document.getElementById("closePopup3");
    const popup3 = document.getElementById("popup3");

    openPopupButton3.addEventListener("click", function() {
        togglePopup(popup3);
    });

    closePopup3.addEventListener("click", function() {
        togglePopup(popup3);
    });

    // Reusable function to toggle popup display
    function togglePopup(popup) {
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    }
});