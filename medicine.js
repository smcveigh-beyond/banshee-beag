var pill = new ConsumableBuilder("pill", 30).setHealthChange(30).setEnergyChange(10).build();
var injection = new ConsumableBuilder("injection", 50).setHealthChange(100).build();

var allMedicine = [pill, injection];

window.addEventListener('load', function() {
    for(var medicineIdx=0; medicineIdx<allMedicine.length; medicineIdx++) {
        var button = document.createElement("button");
        const medicineName = allMedicine[medicineIdx].name;
        button.onclick = function() { consume(medicineName, allMedicine) };
    
        var img = document.createElement("img");
        img.src = "icons/medicine/" + medicineName + ".svg";
        img.alt = medicineName + " SVG";
        img.width="60";
        img.height="60";
    
        button.appendChild(img);
    
        document.getElementsByClassName('popup-menu-medicine')[0].appendChild(button);
    }
});
