const tooltipItems = document.querySelectorAll(".has-tooltip");

const toolTipElemArr = [];
const mousePosXY = [0, 0];

tooltipItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const ee = createTooltip(item.title, "tooltip", "tooltip_active");
        document.body.append(ee);
        const targetPos = event.target.getBoundingClientRect();
        ee.style.left = mousePosXY[0] + "px";
        ee.style.top = mousePosXY[1] + targetPos.height + "px";
        toolTipElemArr.push(ee);
    });
});

setInterval(() => {
    toolTipCleaner(toolTipElemArr);
}, 1000);

document.addEventListener("mousemove", (event) => {
    mousePosXY[0] = event.clientX;
    mousePosXY[1] = event.clientY;
});

function toolTipCleaner(elements) {
    for (let element of elements) {
        const elemPos = element.getBoundingClientRect();
        const widthMaxDist = window.innerWidth / 3;
        const heightMaxDist = window.innerHeight / 25;
        if (
            mousePosXY[0] > elemPos.right + widthMaxDist ||
            mousePosXY[0] < elemPos.left - widthMaxDist ||
            mousePosXY[1] > elemPos.bottom + heightMaxDist ||
            mousePosXY[1] < elemPos.top - heightMaxDist
        ) {
            elements.splice(elements.indexOf(element), 1);
            element.remove();
        }
    }
}

function createTooltip(text, ttClass, ttActiveClass = null) {
    const newTooltip = document.createElement("div");
    newTooltip.classList.add(ttClass);
    if (ttActiveClass) {
        newTooltip.classList.add(ttActiveClass);
    }
    newTooltip.innerText = text;

    return newTooltip;
}
