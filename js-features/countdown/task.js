const timer_obj = document.getElementById("timer");

function countDown() {
    timer_obj.textContent = timer_obj.textContent - 1;
    if (Number(timer_obj.textContent) === 0) {
        clearInterval(intID);
        window.alert("«Вы победили в конкурсе!»");
    }
}

const intID = setInterval(countDown, 1000);
