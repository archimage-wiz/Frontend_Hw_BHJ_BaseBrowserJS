

const cookieImage = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');


function countCookies() {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    cookieImage.width = cookieImage.width === 250 ? 200 : 250;
    cookieImage.height = cookieImage.height === 150 ? 100 : 150;
}

cookieImage.onclick = countCookies;


