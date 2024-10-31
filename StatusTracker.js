let HEALTH = 100;
let ENERGY = 100;
let HUNGER = 100;
let THIRST = 100;

let statusList = document.getElementById("status-list");

const updateStatusBars = function(health, energy, hunger, thirst) {
    let statusMap = {
        "Health": health,
        "Energy": energy,
        "Hunger": hunger,
        "Thirst": thirst,
    }

    for (let i = 0; i < statusList.childElementCount; i++) {
        const text = Object.keys(statusMap)[i] + " : " + Object.values(statusMap)[i];
        const id = Object.keys(statusMap)[i].toLowerCase() + "-status";
        document.getElementById(id).textContent = text;
    } 
}

updateStatusBars(HEALTH, ENERGY, HUNGER, THIRST);


