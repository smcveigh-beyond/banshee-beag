class Consumable {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        this.healthChange = 0;
        this.energyChange = 0;
        this.hungerChange = 0;
        this.thirstChange = 0;
    }
}

class ConsumableBuilder {
    constructor(name, cost) {
        this.consumable = new Consumable(name, cost);
    }

    setHealthChange(healthChange) {
        this.consumable.healthChange = healthChange;
        return this;
    }

    setEnergyChange(energyChange) {
        this.consumable.energyChange = energyChange;
        return this;
    }

    setHungerChange(hungerChange) {
        this.consumable.hungerChange = hungerChange;
        return this;
    }

    setThirstChange(thirstChange) {
        this.consumable.thirstChange = thirstChange;
        return this;
    }

    build() {
        return this.consumable;
    }
}

const consume = function(consumableName, consumableOptions) {
    for(let i=0; i<consumableOptions.length; i++) {
        if(consumableOptions[i].name === consumableName) {
            var selected = consumableOptions[i];

            if(COINS >= selected.cost) {
                HEALTH = Math.min(100, HEALTH + selected.healthChange);
                ENERGY = Math.min(100, ENERGY + selected.energyChange);
                HUNGER = Math.min(100, HUNGER + selected.hungerChange);
                THIRST = Math.min(100, THIRST + selected.thirstChange);
                COINS = COINS - selected.cost;
                updateStatusBars();
                updateCoins(0);
            }
            
            var popups = document.getElementsByClassName('popup');
            for(var popupIdx=0; popupIdx<popups.length; popupIdx++) {
                popups[popupIdx].hidden = true;
            }

            return;
        }
    }
}

const togglePopup = function(className) {
    var element = document.getElementsByClassName(className)[0];
    var isCurrentlyHidden = element.hidden;

    if(isCurrentlyHidden) {
        var popups = document.getElementsByClassName('popup');
        for(var popupIdx=0; popupIdx<popups.length; popupIdx++) {
            popups[popupIdx].hidden = true;
        }
    }
    
    element.hidden = !element.hidden;
}