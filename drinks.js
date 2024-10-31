var beer = new ConsumableBuilder("beer", 20).setHealthChange(-10).setThirstChange(8).build();
var coffee = new ConsumableBuilder("coffee", 15).setHealthChange(-5).setEnergyChange(5).setThirstChange(5).build();
var milk = new ConsumableBuilder("milk", 5).setHealthChange(2).setThirstChange(5).build();
var soda = new ConsumableBuilder("soda", 8).setHealthChange(-1).setEnergyChange(2).setThirstChange(3).build();
var tea = new ConsumableBuilder("tea", 10).setEnergyChange(3).setThirstChange(3).build();

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