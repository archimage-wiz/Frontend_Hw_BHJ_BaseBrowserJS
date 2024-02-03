const tabButtonsArr = Array.from(
    document.querySelectorAll(".tab__navigation > .tab")
);
const tabContentArr = Array.from(
    document.querySelectorAll(".tab__contents > .tab__content")
);

document.addEventListener("click", tabClick);

function selectTab(indx) {
    tabButtonsArr.forEach((el, lindx) => {
        if (lindx === indx) {
            el.classList.add("tab_active");
            tabContentArr[lindx].classList.add("tab__content_active");
        } else {
            el.classList.remove("tab_active");
            if (indx < tabContentArr.length) {
                tabContentArr[lindx].classList.remove("tab__content_active");
            }
        }
    });
}

function tabClick(e) {
    const indxSel = tabButtonsArr.indexOf(e.target);
    if (indxSel > -1) {
        selectTab(indxSel);
    }
}
