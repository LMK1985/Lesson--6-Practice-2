let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']; // Given property
let hexValue = $("#hex-value");        // Property at header text
let bodyelm = $("body");               // Declared body selector for shortcut
let buttonelm = $(".btn");             // Declared button selector

hexValue.text("#000000");              // Initialize body background

buttonelm.on("click", function() {         // on.() for button click
    let hexcolor = "#";                    // Declaring "#" required at start

    for (i = 0; i < 6; i++) {                                   // For loop for 6 random hex numbers
        let ranhex = parseInt(Math.random() * hexValues.length); // Random number from the 16 variables given
        hexcolor = hexcolor + hexValues[ranhex];                // add hexcolor value for each loop
    }
    hexValue.text(hexcolor);                                    // change hexcolor text
    bodyelm.css("background-color", hexcolor);                  // change hexcolor background
});

