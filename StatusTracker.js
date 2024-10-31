let HEALTH = 100;
let ENERGY = 100;
let HUNGER = 100;
let THIRST = 100;

let COINS = 100;

let statusList = document.getElementById("status-list");

let thoughtBubbleText = document.getElementById("thought-bubble-text");

var prompts = {
    health80: "I'm feeling okay.",
    health60: "I'm starting to feel unwell.",
    health40: "I'm starting to feel very unwell.",
    health20: "I feel really weak!",

    energy80: "I have enough energy to keep going.",
    energy60: "I'm getting a bit tired.",
    health40: "I'm getting very tired.",
    energy20: "I'm exhausted!",

    hunger80: "I could eat.",
    hunger60: "I'm feeling hungry.",
    hunger40: "I'm feeling very hungry.",
    hunger20: "I'm very hungry!",

    thirst80: "I'm feeling fine.",
    thirst60: "I'm getting a bit thirsty.",
    thirst40: "I'm getting very thirsty.",
    thirst20: "I'm very thirsty!",

    default: "Help!"
};

const meterCheckPrompt = function(meterValue, meterType){
    alert("hello")
    let promptsList = [prompts.health80, prompts.health60, prompts.health40, prompts.health20,
        prompts.energy80, prompts.energy60, prompts.energy40, prompts.energy20,
        prompts.hunger80, prompts.hunger60, prompts.hunger40, prompts.hunger20,
        prompts.thirst80, prompts.thirst60, prompts.thirst40, prompts.thirst20, prompts.default
    ];
    let index = 0;
    switch(meterType){
        case "energy": index += 4; break;
        case "hunger": index += 8;  break;
        case "thirst": index += 16; break;
    }

    if(meterValue >= 80){
        thoughtBubbleText.textContent = promptsList[index];
    }
    else if (meterValue > 60 && meterValue < 80) {
        thoughtBubbleText.textContent = promptsList[index+1]; 
    } else if (meterValue > 40 && meterValue <= 60) {
        thoughtBubbleText.textContent = promptsList[index+2]; 
    } else if (meterValue > 20 && meterValue <= 40) {
        thoughtBubbleText.textContent = promptsList[index+3]; 
    } else if (meterValue <= 20) {
        thoughtBubbleText.textContent = promptsList[promptsList.length]; 
    }
}

const updateStatusBars = function() {
    let statusMap = {
        "Health": HEALTH,
        "Energy": ENERGY,
        "Hunger": HUNGER,
        "Thirst": THIRST,
    }

    meterCheckPrompt(health, "health");
    meterCheckPrompt(energy, "energy");
    meterCheckPrompt(hunger, "hunger");
    meterCheckPrompt(thirst, "thirst");

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
