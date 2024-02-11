const modalPopup = document.querySelector("#subscribe-modal");
const modalClose = document.querySelector(".modal__close");

if (document.cookie.split(";").indexOf("modal=1") === -1) {
    modalPopup.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
    modalPopup.classList.remove("modal_active");
    document.cookie = "modal=1; path=/; max-age=86400;";
});
