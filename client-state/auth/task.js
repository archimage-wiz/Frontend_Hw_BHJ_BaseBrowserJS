const accessLink = "https://students.netoservices.ru/nestjs-backend/auth";
const signInBlock = document.querySelector("#signin");
const welcomeBlock = document.querySelector("#welcome");
const signInFrom = document.querySelector("#signin__form");

const user_id = localStorage.getItem("user_id");

if (user_id) {
    showHideElem(signInBlock, false);
    showData({ user_id });
} else {
    signInFrom.addEventListener("submit", (event) => {
        event.preventDefault();
        sendData(signInFrom);
        showHideElem(signInBlock, false);
    });
}

function showHideElem(elem, state) {
    if (state) {
        elem.classList.add("signin_active");
    } else {
        elem.classList.remove("signin_active");
    }
}

function sendData(form) {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", accessLink, true);
    xhr.onload = () => {
        if (xhr.status > 202) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            return;
        }
        const respData = JSON.parse(xhr.response);
        if (respData.success) {
            localStorage.setItem("user_id", respData.user_id);
            showData(respData);
        } else {
            alert("Неверный логин/пароль");
            showHideElem(signInBlock, true);
        }
    };
    xhr.send(formData);
}

function showData(data) {
    welcomeBlock.classList.add("welcome_active");
    const displayTag = welcomeBlock.querySelector("#user_id");
    displayTag.innerHTML = data.user_id;
}
