let HEALTH = 100;
let ENERGY = 100;
let HUNGER = 100;
let THIRST = 100;

let statusList = document.getElementById("status-list");

console.log(statusList);

let statusMap = {
    "Health": HEALTH,
    "Energy": ENERGY,
    "Hunger": HUNGER,
    "Thirst": THIRST,
}

console.log(statusMap);

for (let i = 0; i < statusList.childElementCount; i++) {
    console.log("here");
    const element = document.createElement("p");

    console.log(element);
    const text = document.createTextNode(statusMap[i][0] + " :" + statusMap[i][1]);

    element.appendChild(text);

    console.log(element);

    statusList[i].append(element);
    console.log(statusList[i]);
}


