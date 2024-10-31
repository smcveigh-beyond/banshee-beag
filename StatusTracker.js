let HEALTH = 100;
let ENERGY = 100;
let HUNGER = 100;
let THIRST = 100;

let statusList = document.getElementById("status-list");

const updateStatusBars = function() {
    let statusMap = {
        "Health": HEALTH,
        "Energy": ENERGY,
        "Hunger": HUNGER,
        "Thirst": THIRST,
    }

    for (let i = 0; i < Object.keys(statusMap).length; i++) {
        const text = Object.values(statusMap)[i] + "%";
        const id = Object.keys(statusMap)[i].toLowerCase() + "-status";
        document.getElementById(id).textContent = text;
    } 
}

updateStatusBars();


