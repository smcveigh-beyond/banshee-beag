var nap = new ConsumableBuilder("nap", 0).setHealthChange(5).setEnergyChange(5).setHungerChange(-2).setThirstChange(-2).build();
var sleep = new ConsumableBuilder("sleep", 0).setHealthChange(30).setEnergyChange(30).setHungerChange(30).setThirstChange(30).build();

var allSleep = [nap, sleep];

window.addEventListener('load', function() {
    for(var sleepIdx=0; sleepIdx<allSleep.length; sleepIdx++) {
        var button = document.createElement("button");
        const sleepName = allSleep[sleepIdx].name;
        button.onclick = function() { consume(sleepName, allSleep) };
    
        var img = document.createElement("img");
        img.src = "icons/sleep/" + sleepName + ".svg";
        img.alt = sleepName + " SVG";
        img.width="60";
        img.height="60";
    
        button.appendChild(img);
    
        document.getElementsByClassName('popup-menu-sleep')[0].appendChild(button);
    }
});
