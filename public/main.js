// This is our list of 52 cards
let deck = [
  { face: '2', value: 2, suit: 'spades' },
  { face: '3', value: 3, suit: 'spades' },
  { face: '4', value: 4, suit: 'spades' },
  { face: '5', value: 5, suit: 'spades' },
  { face: '6', value: 6, suit: 'spades' },
  { face: '7', value: 7, suit: 'spades' },
  { face: '8', value: 8, suit: 'spades' },
  { face: '9', value: 9, suit: 'spades' },
  { face: '10', value: 10, suit: 'spades' },
  { face: 'jack', value: 10, suit: 'spades' },
  { face: 'queen', value: 10, suit: 'spades' },
  { face: 'king', value: 10, suit: 'spades' },
  { face: 'ace', value: 11, suit: 'spades' },
  { face: '2', value: 2, suit: 'hearts' },
  { face: '3', value: 3, suit: 'hearts' },
  { face: '4', value: 4, suit: 'hearts' },
  { face: '5', value: 5, suit: 'hearts' },
  { face: '6', value: 6, suit: 'hearts' },
  { face: '7', value: 7, suit: 'hearts' },
  { face: '8', value: 8, suit: 'hearts' },
  { face: '9', value: 9, suit: 'hearts' },
  { face: '10', value: 10, suit: 'hearts' },
  { face: 'jack', value: 10, suit: 'hearts' },
  { face: 'queen', value: 10, suit: 'hearts' },
  { face: 'king', value: 10, suit: 'hearts' },
  { face: 'ace', value: 11, suit: 'hearts' },
  { face: '2', value: 2, suit: 'clubs' },
  { face: '3', value: 3, suit: 'clubs' },
  { face: '4', value: 4, suit: 'clubs' },
  { face: '5', value: 5, suit: 'clubs' },
  { face: '6', value: 6, suit: 'clubs' },
  { face: '7', value: 7, suit: 'clubs' },
  { face: '8', value: 8, suit: 'clubs' },
  { face: '9', value: 9, suit: 'clubs' },
  { face: '10', value: 10, suit: 'clubs' },
  { face: 'jack', value: 10, suit: 'clubs' },
  { face: 'queen', value: 10, suit: 'clubs' },
  { face: 'king', value: 10, suit: 'clubs' },
  { face: 'ace', value: 11, suit: 'clubs' },
  { face: '2', value: 2, suit: 'diamonds' },
  { face: '3', value: 3, suit: 'diamonds' },
  { face: '4', value: 4, suit: 'diamonds' },
  { face: '5', value: 5, suit: 'diamonds' },
  { face: '6', value: 6, suit: 'diamonds' },
  { face: '7', value: 7, suit: 'diamonds' },
  { face: '8', value: 8, suit: 'diamonds' },
  { face: '9', value: 9, suit: 'diamonds' },
  { face: '10', value: 10, suit: 'diamonds' },
  { face: 'jack', value: 10, suit: 'diamonds' },
  { face: 'queen', value: 10, suit: 'diamonds' },
  { face: 'king', value: 10, suit: 'diamonds' },
  { face: 'ace', value: 11, suit: 'diamonds' }
]

//
//insert dynamix deck here if chosen
//

// This array will store the player's hand
let playerHand = []

// This array will store the dealer's hand
let dealerHand = []

const stayButton = () => {
  //dealers turn
  //
}

const dealCardToPlayer = () => {
  let playerHandList = document.querySelector('.player-hand')

  // - pop another card
  // - push it to the hand
  // - add the card to the interface
  let card = deck.pop()

  playerHand.push(card.value)

  // was an option
  // if (playerHand.length === 2) {
  //   let playerValue = playerHand[0] + playerHand[1]
  //   console.log(playerValue)
  // }
  // if (playerHand.length === 3) {
  //   let playerValue = playerHand[0] + playerHand[1] + playerHand[2]
  //   console.log(playerValue)
  // }
  // if (playerHand.length === 4) {
  //   let playerValue = playerHand[0] + playerHand[1] + playerHand[2] + playerHand[3]
  //   console.log(playerValue)
  // }
  //

  //
  // This is how i got the total value for cards in hand
  //
  let playerTotalForLoop = 0
  for (let i = 0; i < playerHand.length; i++) {
    // playerTotalForLoop += playerHand[i]
    playerTotalForLoop = playerTotalForLoop + playerHand[i]
  }
  let name = document.querySelector('.player-card-total')
  name.textContent = playerTotalForLoop

  //
  //
  //

  // Add this card to the user interface

  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  playerHandList.appendChild(newCardItem)

  //
  //
  //
  // - if value is greater than 21 then run function whoWon() function
  //
  //
}

const dealCardToDealer = () => {
  // create function to deal cards to dealer. should be really similar to player one deal

  let dealerHandList = document.querySelector('.dealer-hand')

  // - pop another card
  // - push it to the hand
  // - add the card to the interface
  let card = deck.pop()

  dealerHand.push(card.value)

  // Add this card to the user interface

  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  dealerHandList.appendChild(newCardItem)

  let dealerTotalForLoop = 0
  for (let i = 0; i < dealerHand.length; i++) {
    // dealerTotalForLoop += dealerHand[i]
    dealerTotalForLoop = dealerTotalForLoop + dealerHand[i]
  }
  if (dealerHand.length === 1) {
    //display back of card
    // display back of card when there is only one card
  } else {
  }
  let name = document.querySelector('.dealer-card-total')
  name.textContent = dealerTotalForLoop
}

//
//
// need function to add up total of hand for dealer
// - find the dealer li
// - add total value of cards
// - display the dealers total value
// - if value is greater than 21 then run function whoWon() function
// - if dealer value => value of 17 dealer cannot hit
// - if dealer value is below 17 he has to hit
//

//
//
// stay button
// - find the stay button
// - call the dealer function to run
//
//

//
//
// whoWon() function
// - if value of player is higher than dealer, but not above 21. player wins
// - if value of dealer is higher than player, but not above 21. dealer wins
//
//

//
//
// Deal again button // reset button
//
//

const main = () => {
  // Shuffle the deck into a random order

  // Uses [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
  for (let index = 52 - 1; index > 1; index -= 1) {
    let otherIndex = Math.floor(Math.random() * index)

    let firstCard = deck[index]
    let secondCard = deck[otherIndex]

    deck[index] = secondCard
    deck[otherIndex] = firstCard
  }

  for (let count = 0; count < 2; count++) {
    dealCardToPlayer()
  }
  for (let count = 1; count < 2; count++) {
    dealCardToDealer()
  }

  // Find the hit button
  let hitButton = document.querySelector('.hit')
  // Add an event listener on 'click' that does:
  hitButton.addEventListener('click', dealCardToPlayer)
  // find stay button
  let stayButton = document.querySelector('.stay')
  // add event listener on click that does
  stayButton.addEventListener('click', stayButton)
}

document.addEventListener('DOMContentLoaded', main)

//
//
//
//
//IGNORE FOR NOW, CHALLENGE LATER IF WANTED
//
//
//
//
//
//

// This code will build the deck dynamically
//
// // This will eventually be our deck of 52 cards
// let deck = []
//
// // A list of all the suits we have
// let suits = ['spades', 'hearts', 'clubs', 'diamonds']
//
// // The 13 cards that are in each suit
// let cards = [
//   { face: '2', value: 2 },
//   { face: '3', value: 3 },
//   { face: '4', value: 4 },
//   { face: '5', value: 5 },
//   { face: '6', value: 6 },
//   { face: '7', value: 7 },
//   { face: '8', value: 8 },
//   { face: '9', value: 9 },
//   { face: '10', value: 10 },
//   { face: 'jack', value: 10 },
//   { face: 'queen', value: 10 },
//   { face: 'king', value: 10 },
//   { face: 'ace', value: 11 }
// ]
//
// for (let index = 0; index < suits.length; index++) {
//   for (let cardIndex = 0; cardIndex < cards.length; cardIndex++) {
//     deck.push({
//       face: cards[cardIndex].face,
//       value: cards[cardIndex].value,
//       suit: suits[index]
//     })
//   }
// }
