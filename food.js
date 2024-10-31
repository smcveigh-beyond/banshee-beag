var apple = new ConsumableBuilder("apple", 10).setHealthChange(2).setEnergyChange(1).setHungerChange(5).setThirstChange(1).build();
var avocado = new ConsumableBuilder("avocado", 20).setEnergyChange(5).setHungerChange(5).build();
var bread = new ConsumableBuilder("bread", 5).setHungerChange(3).build();
var burger = new ConsumableBuilder("burger", 12).setEnergyChange(-5).setHungerChange(10).setThirstChange(-2).build();
var carrot = new ConsumableBuilder("carrot", 6).setHealthChange(1).setHungerChange(4).build();
var pear = new ConsumableBuilder("pear", 8).setHungerChange(4).build();

var allFood = [apple, avocado, bread, burger, carrot, pear];

window.addEventListener('load', function() {
    for(var foodIdx=0; foodIdx<allFood.length; foodIdx++) {
        var button = document.createElement("button");
        const foodName = allFood[foodIdx].name;
        button.onclick = function() { consume(foodName, allFood) };
    
        var img = document.createElement("img");
        img.src = "icons/food/" + foodName + ".svg";
        img.alt = foodName + " SVG";
        img.width="60";
        img.height="60";
    
        button.appendChild(img);
    
        document.getElementsByClassName('popup-menu-food')[0].appendChild(button);
    }
});
