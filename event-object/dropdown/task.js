/** @type {HTMLElement} */
const dropdownButton = document.querySelector(".dropdown__value");
/** @type {HTMLElement} */
const dropdownList = document.querySelector(".dropdown__list");

dropdownButton.addEventListener("click", () =>
    dropdownList.classList.toggle("dropdown__list_active")
);
dropdownList.addEventListener("click", listSelect);

/**
 * Listens for a click event and updates the dropdown button and list accordingly.
 * @param {Event} event - The event object
 * @return {void}
 */
function listSelect(event) {
    event.preventDefault();
    dropdownButton.textContent = event.target.textContent;
    dropdownList.classList.toggle("dropdown__list_active");
}
