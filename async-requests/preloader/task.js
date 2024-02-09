const accessLink =
    "https://students.netoservices.ru/nestjs-backend/slow-get-courses";

const itemsContainer = document.querySelector("#items");
const loader = document.querySelector("#loader");

const xhr = new XMLHttpRequest();

xhr.open("GET", accessLink);
xhr.send();

xhr.onload = () => {
    const resp = JSON.parse(xhr.response);
    const respData = resp["response"]["Valute"];
    for (let [key, value] of Object.entries(respData)) {
        itemsContainer.append(
            createElement(key, Number(value["Value"]).toFixed(2), "руб")
        );
    }
    loader.classList.remove("loader_active");
};

function createElement(USD, Val, Currency) {
    const templ = `
    <div class="item">
        <div class="item__code">
            ${USD}
        </div>
        <div class="item__value">
            ${Val}
        </div>
        <div class="item__currency">
            ${Currency}.
        </div>
    </div>`;
    const newElem = document.createElement("template");
    newElem.innerHTML = templ.trim();
    return newElem.content.firstElementChild;
}
