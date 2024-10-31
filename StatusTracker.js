let HEALTH = 100;
let ENERGY = 100;
let HUNGER = 100;
let THIRST = 100;

const updateStatusBars = function() {
    let statusList = document.getElementById("status-list");

    let statusMap = {
        "Health": HEALTH,
        "Energy": ENERGY,
        "Hunger": HUNGER,
        "Thirst": THIRST,
    }
    
    for (let i = 0; i < statusList.childElementCount; i++) {
        const element = document.createElement("p");
        const text = document.createTextNode(Object.keys(statusMap)[i] + " : " + Object.values(statusMap)[i]);
        element.appendChild(text)
        statusList.children[i].appendChild(element);
    }    
}

updateStatusBars();
