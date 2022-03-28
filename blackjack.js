// object that stores the player data
// let player = {
//   name: "Raul", // player name
//   chips: 150 // player chips
  
// };

let cards = []; // array - where are stored the cards
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el"); // storing the message in a variable
let sumEl = document.getElementById("sum-el"); // storing the sum in a variable
let cardsEl = document.querySelector("#cards-el"); // storing the cards in a var.
let playereEl = document.querySelector("#player-el");

// playereEl.textContent = player.name + ": $" + player.chips; //render the player name and chips in HTML

// Function that generates random num(1-13)
// Math.floor() - removes the decimals
// Math.random() - generates random num. (0-0.999)
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 12) + 1; //Store the random number in a var.
  // we need to assing to the num>10 the value of 10 , so 11=10, 12=10, 13=10
  // *Because the Jack=10, Queen = 10,  King=10
  if (randomCard > 10) {
    // condition - if the random num is > 10, it's value will be 10
    return 10; // return the value "10" for all num > 10
  } else if (randomCard === 1) {
    // 2nd cond. - if the random num is strictly 1, it's value will be 11
    // because the A has 11 points
    return 11; //returns the value 11 for num"1"
  } // if none of the condition is true...
  else {
    return randomCard; //...return the rand num with it's real value
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard(); // cals the function that generates random card
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
// Function that decides the game
function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (
    // for loop
    let i = 0; // init a counter to 0
    i < cards.length; // the maximum counting num is the lenght of the array(or the numbers of the card that we have)
    i++ // increment the counter with 1
  )
    cardsEl.textContent += cards[i] + " "; // add the card to array and displays it
  sumEl.textContent = "Sum: " + sum; // display the sum of the cards to html

  if (sum <= 20) {
    // condition - if the sum of the card is < or = to 20, the command will be executed / if the condition is false, goes to "else if"
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    // 2nd conditon - if sum is strictly = (===) to 21, the command will be executed / if none of the cond isn't true, executes else
    message = "Congrats ! You've got BlackJack !";
    hasBlackjack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message; // change the initial message with one from the "for" loop
}

// Function that generates a new card
function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard(); // cals the function that generates a random card
    sum += card; // calculates the sum of all cards
    cards.push(card); // push/stores the new card in the array"cards"
    console.log(cards);
    renderGame(); // cals the function that decides the game
  }
}
