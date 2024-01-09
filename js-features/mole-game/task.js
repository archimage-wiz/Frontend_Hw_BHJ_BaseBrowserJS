const moleDead = document.getElementById("dead");
const moleLost = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {
    const hole = document.getElementById("hole" + i);
    hole.onclick = moleCatcher;
}

function moleCatcher() {
    if (this.classList.contains("hole_has-mole")) {
        moleDead.innerHTML++;
        this.className = "hole";
        if (moleDead.innerHTML >= 10) {
            moleDead.innerHTML = 0;
            moleLost.innerHTML = 0;
            window.alert("Вы выиграли!");
        }
    } else {
        moleLost.innerHTML++;
        if (moleLost.innerHTML >= 5) {
            moleLost.innerHTML = 0;
            moleDead.innerHTML = 0;
            window.alert("Вы проиграли!");
        }
    }
}
