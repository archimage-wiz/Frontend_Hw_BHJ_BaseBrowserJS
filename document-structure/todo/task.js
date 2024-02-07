const submitForm = document.querySelector("#tasks__form");
const tasksList = document.querySelector("#tasks__list");

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = submitForm["task__input"].value.trim();
    if (taskText) {
        const newTaskElem = createTaskElement(taskText);
        newTaskElem
            .querySelector(".task__remove")
            .addEventListener("click", (e) => {
                e.target.parentElement.remove();
            });
        tasksList.append(newTaskElem);
    }
    event.target.reset();
});

function createTaskElement(text) {
    let templateHTML = `
    <div class="task">
        <div class="task__title">${text}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;
    templateHTML = templateHTML.trim();

    const template = document.createElement("template");
    template.innerHTML = templateHTML;
    return template.content.firstChild;
}
