var apple = new Consumable("apple", 10, energyChange=1, hungerChange=5, thirstChange=-1);
var avocado = new Consumable("avocado", 20, energyChange=5, hungerChange=5);
var bread = new Consumable("bread", 5, hungerChange=3);
var burger = new Consumable("burger", 12, energyChange=-5, hungerChange=10, thirstChange=-2);
var carrot = new Consumable("carrot", 6, hungerChange=4);
var pear = new Consumable("pear", 8, hungerChange=4);

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
