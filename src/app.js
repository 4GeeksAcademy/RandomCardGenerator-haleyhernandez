function generateCard() {
    const suits = ["\u2663", "\u2660", "\u2665", "\u2666"]; // Clubs, Spades, Hearts, Diamonds
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    const randomSuit = suits[Math.floor(Math.random() * suits.length)]; //this is multiplying the suits randomly to create random suits from the array suits.

    const randomValue = values[Math.floor(Math.random() * values.length)]; // this is multiplying the values randomly to create random values from the array values

    // Select DOM elements
    const suitTop = document.querySelector(".suit-top");
    const suitBottom = document.querySelector(".suit-bottom");
    const cardValue = document.querySelector(".card-value");

    if (suitTop && suitBottom && cardValue) {
        // Update the DOM with the random suit and value
        suitTop.textContent = randomSuit;
        suitBottom.textContent = randomSuit;
        cardValue.textContent = randomValue;

        // Remove red class from all elements (.remove)
        suitTop.classList.remove("suit-red");
        suitBottom.classList.remove("suit-red");
        cardValue.classList.remove("suit-red");

        // Apply red color for hearts and diamonds (.add)
        if (randomSuit === "\u2665" || randomSuit === "\u2666") {
            suitTop.classList.add("suit-red");
            suitBottom.classList.add("suit-red");
            cardValue.classList.add("suit-red");
        }
    } 
}

// Run function and activate button.
document.addEventListener("DOMContentLoaded", function() {
    generateCard();
});