anime({
    targets: '#banshee-beag, .thought-bubble',
    translateY: [0, 20],          
    direction: 'alternate',       
    easing: 'easeInOutSine',      
    duration: 2000,               
    loop: true                    
});

anime({
    targets: '.eye',
    ry: [8, 0],         
    easing: 'easeInOutQuad',
    duration: 800,      
    direction: 'alternate', 
    loop: true,         
});

  document.addEventListener("keydown", function(event) {
    // Check if the space bar (key code 32) is pressed
    if (event.key === " " || event.keyCode === 32) {
        event.preventDefault(); // Prevent default action (e.g., scrolling)
        GhostJump();
    }
});

const randomSwordAttack = function (){
    anime({
        targets: '#sword',
        translateX: {
          value: 1250,
          duration: 1200
        },
        rotate: {
          value: 360,
          duration: 1800,
          easing: 'easeInOutSine'
        },
        delay: 250 
      });
      updateCoins(20);
}

const GhostJump = function(){
    anime({
        targets: '#banshee-beag, .thought-bubble',
        translateY: [-400, 0],                
        easing: 'easeInOutSine',      
        duration: 800,                                
    });

}
 

  