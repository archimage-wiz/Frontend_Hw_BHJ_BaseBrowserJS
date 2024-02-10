document.forms.form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.send.disabled = true;
    const formData = new FormData(e.target);
    SendData(formData);
});

function SendData(formData) {
    const progress = document.getElementById("progress");
    const uploadLink = "https://students.netoservices.ru/nestjs-backend/upload";
    const xhr = new XMLHttpRequest();

    xhr.open("POST", uploadLink, true);
    xhr.upload.onprogress = function (e) {
        progress.value = e.loaded / e.total;
    };
    xhr.onload = function () {
        alert("Done");
        document.forms.form.send.disabled = false;
        document.forms.form.reset();
    };
    xhr.upload.onerror = function () {
        alert(`Произошла ошибка во время отправки: ${xhr.status}`);
    };
    xhr.send(formData);
}
