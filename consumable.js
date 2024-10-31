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