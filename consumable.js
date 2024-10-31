class Consumable {
    constructor(name, cost, healthChange=0, energyChange=0, hungerChange=0, thirstChange=0) {
        this.name = name;
        this.cost = cost;
        this.healthChange = healthChange;
        this.energyChange = energyChange;
        this.hungerChange = hungerChange;
        this.thirstChange = thirstChange;
    }
}

const consume = function(consumableName, consumableOptions) {
    for(let i=0; i<consumableOptions.length; i++) {
        if(consumableOptions[i].name === consumableName) {
            var selected = consumableOptions[i];

            HEALTH = HEALTH + selected.healthChange;
            ENERGY = ENERGY + selected.energyChange;
            HUNGER = HUNGER + selected.hungerChange;
            THIRST = THIRST + selected.thirstChange;

            updateStatusBars();
            document.getElementsByClassName('popup-menu-food')[0].hidden = true;
            document.getElementsByClassName('popup-menu-drinks')[0].hidden = true;
            return;
        }
    }
}

const togglePopup = function(className) {
    var element = document.getElementsByClassName(className)[0];
    element.hidden = !element.hidden;
}