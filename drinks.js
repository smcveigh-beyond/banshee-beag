var beer = new Consumable("beer", 20, energyChange=-1, thirstChange=8);
var coffee = new Consumable("coffee", 15, energyChange=10, thirstChange=3);
var milk = new Consumable("milk", 5, thirstChange=5);
var soda = new Consumable("soda", 8, energyChange=2, thirstChange=3);
var tea = new Consumable("tea", 10, energyChange=3, thirstChange=5);

var allDrinks = [beer, coffee, milk, soda, tea];

window.addEventListener('load', function() {
    for(var drinkIdx=0; drinkIdx<allDrinks.length; drinkIdx++) {
        var button = document.createElement("button");
        const drinkName = allDrinks[drinkIdx].name
        button.onclick = function() { consume(drinkName, allDrinks)};
    
        var img = document.createElement("img");
        img.src = "icons/drinks/" + drinkName + ".svg";
        img.alt = drinkName + " SVG";
        img.width="60";
        img.height="60";
    
        button.appendChild(img);
    
        document.getElementsByClassName('popup-menu-drinks')[0].appendChild(button);
    }
});