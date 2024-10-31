let HEALTH = 100;
let ENERGY = 100;
let HUNGER = 100;
let THIRST = 100;

let COINS = 100;

let statusList = document.getElementById("status-list");

const updateStatusBars = function() {
    let statusMap = {
        "Health": HEALTH,
        "Energy": ENERGY,
        "Hunger": HUNGER,
        "Thirst": THIRST,
    }

    const values = Object.values(statusMap);
    const keys = Object.keys(statusMap);

    for (let i = 0; i < Object.keys(statusMap).length; i++) {
        const text = values[i] + "%";
        const id = keys[i].toLowerCase() + "-status";
        document.getElementById(id).textContent = text;
    } 
}

const updateCoins = function() {
    document.getElementById("coins").textContent = COINS + " Coins";
}


updateCoins();
updateStatusBars();







