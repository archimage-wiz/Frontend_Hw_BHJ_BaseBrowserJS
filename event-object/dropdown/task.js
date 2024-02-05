
const dropdownButton = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");

dropdownButton.addEventListener("click", () => dropdownList.classList.toggle("dropdown__list_active"));
dropdownList.addEventListener("click", listSelect);

function listSelect(event) {
    event.preventDefault();
    dropdownButton.textContent = event.target.textContent;
    dropdownList.classList.toggle("dropdown__list_active");
}
