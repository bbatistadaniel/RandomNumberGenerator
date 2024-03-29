// Log a message with credits
console.log("Made by https://github.com/bbatistadaniel ;)")

// Create an audio object for the button click sound
var audio = new Audio("assets/audios/click.mp3")

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function(){

    // Set initial value for display
    document.getElementById("display").innerText = "0";

    // Function to handle button clicks
    function buttonClick(){
        // Play the click sound
        audio.play()
        
        // Get the minimum and maximum values from input fields
        min = Math.floor(document.getElementById("input0").value);
        max = Math.ceil(document.getElementById("input1").value);

        // Generate a random number within the specified range and update the display
        document.getElementById("display").innerText = String(Math.floor(Math.random()*(max-min+1)+min));
    };

    // Attach the buttonClick function to the click event of the button
    document.getElementById("button0").addEventListener("click", buttonClick);
});
