
const reqLink = "https://students.netoservices.ru/nestjs-backend/poll";
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.open("GET", reqLink, true);

xhr.onload = () => {
    let respData = JSON.parse(xhr.response);
    respData = respData.data;
    pollTitle.innerText = respData.title;
    respData.answers.forEach(answer => {
        const anotherBotton = document.createElement("button");
        anotherBotton.classList.add("poll__answer");
        anotherBotton.innerText = answer;
        pollAnswers.appendChild(anotherBotton);
        anotherBotton.addEventListener("click", buttonAnswer);
    })
}

function buttonAnswer(e) {
    e.preventDefault();
    alert("Спасибо, ваш голос засчитан!");
    
}

xhr.send();
