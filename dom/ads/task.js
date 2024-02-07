const stringItems = document.querySelectorAll(".rotator__case");

setInterval(() => {
    rotateElementClass(stringItems, "rotator__case_active");
}, 1000);

/**
 * Rotates the class of the elements in the array.
 *
 * @param {NodeListOf<Element>} elements - The array of elements to rotate the class.
 * @param {string} classItem - The class to be rotated among the elements.
 * @return {void}
 */
function rotateElementClass(elements, classItem) {
    let currentIndex = 0;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(classItem)) {
            currentIndex = i;
        }
    }
    elements[currentIndex].classList.remove(classItem);
    elements[(currentIndex + 1) % elements.length].classList.add(classItem);
}

