const revealAccentBlocks = document.querySelectorAll(".reveal"); 
let scrollEvent = false; 

window.addEventListener("scroll", () => {
    scrollEvent = true;
});

setInterval(revealAccent, 500); 

/**
 * Function to reveal accent blocks based on scroll position.
 *
 * @param {void}
 * @return {void}
 */
function revealAccent() {
    if (scrollEvent) {
        revealAccentBlocks.forEach((block) => {
            const coordsxy = block.getBoundingClientRect();
            if (coordsxy.bottom < 0 || coordsxy.top > window.innerHeight) {
                block.classList.remove("reveal_active");
            } else {
                block.classList.add("reveal_active");
            }
        });
        scrollEvent = false;
    }
}


