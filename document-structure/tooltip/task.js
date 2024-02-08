const tooltipItems = document.querySelectorAll(".has-tooltip");

const aloneToolTip = document.createElement("div");
aloneToolTip.classList.add("tooltip");
aloneToolTip.textContent = "";
document.body.append(aloneToolTip);

tooltipItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        if (event.target.title !== aloneToolTip.textContent) {
            aloneToolTip.classList.add("tooltip_active");
            aloneToolTip.textContent = event.target.title;
            aloneToolTip.style.left =
                event.target.getBoundingClientRect().left + "px";
            aloneToolTip.style.top =
                event.target.getBoundingClientRect().bottom + "px";
        } else {
            aloneToolTip.classList.remove("tooltip_active");
            aloneToolTip.textContent = "";
        }
    });
});


