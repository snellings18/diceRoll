

// This function initially changes the img of the dice to its corresponing random number.
function diceRoll() {
    let randomNumber1 = Math.ceil(Math.random() * 6);
    console.log(randomNumber1);
    let randomNumber2 = Math.ceil(Math.random() * 6);
    console.log(randomNumber2);
    document.querySelector(".img1").setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    document.querySelector(".img2").setAttribute('src', 'images/dice' + randomNumber2 + '.png');
    
        // Simultaniously, the function also changes the h1 element of the HTML file to display the result.
        if(randomNumber1 > randomNumber2) {
                document.querySelector("h1").innerHTML = "Player 1 Wins!";
            } else if(randomNumber1 < randomNumber2) {
                document.querySelector("h1").innerHTML = "Player 2 Wins!";
            } else {
                document.querySelector("h1").innerHTML = "It's a Draw!";
        }
    
}

