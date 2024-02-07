const fontSizeButtons = document.querySelectorAll(".font-size");
const bookContent = document.querySelector(".book__content");

const sizesClass = {
    small: "book_fs-small",
    big: "book_fs-big",
};

/**
 * Updates the class of the active button and removes a specified class from all other buttons.
 *
 * @param {HTMLElement} activeButton - The button that is currently active
 * @param {Array<HTMLElement>} buttons - The array of all buttons
 * @param {string} className - The class name to be added to the active button and removed from other buttons
 * @return {void}
 */
function fontSizeButtonProc(buttons, activeButton, className) {
    buttons.forEach((button) => {
        button.classList.remove(className);
    });
    activeButton.classList.add(className);
}

// Add event listener to each fontSizeButton
fontSizeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        // Process the font size button
        fontSizeButtonProc(fontSizeButtons, event.target, "font-size_active");

        // Remove all existing size classes from bookContent
        bookContent.classList.remove(...Object.values(sizesClass));

        // If the clicked button has a data-size attribute, add the corresponding size class to bookContent
        if (event.target.dataset.size) {
            bookContent.classList.add(sizesClass[event.target.dataset.size]);
        }
    });
});
