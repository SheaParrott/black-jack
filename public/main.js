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

let playerHand = []

let dealerHand = []

let whoWon = () => {
  //needs work
  //cannot display higher number as winner if busted
  // if both player and dealer value is 21 declare tie
  if (computeDealerHandValue() <= computePlayerHandValue()) {
    let winner = document.querySelector('.winnerDeclared')
    winner.textContent(`PLAYER IS THE WINNER`)
  }
  if (computeDealerHandValue() >= computePlayerHandValue()) {
    let winner = document.querySelector('.winnerDeclared')
    winner.textContent(`DEALER IS THE WINNER`)
    // if both player and dealer have the string BUST! declare tie
  }
  // restart button
  // const restartButton = () => {
  //   window.location.reload(true)
  // }
}
let HideHitButton = () => {
  let hidden = document.querySelector('.hit')
  hidden.classList.add('hideElement')
}
let HideStayButton = () => {
  let hidden = document.querySelector('.stay')
  hidden.classList.add('hideElement')
}
let AppearRestartButton = () => {
  let restartButton = document.querySelector('.hiddenRestartButton')
  restartButton.classList.toggle('hiddenRestartButton')
}

let restartButtonFunction = () => {
  window.location.reload(true)
}

let stayButtonFunction = () => {
  hideDealerBackCard()
  dealCardToDealer()
  HideStayButton()
  HideHitButton()
  AppearRestartButton()
}

let hideDealerBackCard = () => {
  let hidden = document.querySelector('.backOfCard')
  hidden.classList.add('hideElement')
}

let dealerCardsToDealerLogic = () => {
  //    need this to activate after player has reached 21
  // , player busts, or player stays
  // also, need a function that hides hit button when conditions
  // above are met
  if (computeDealerHandValue() < 17) {
    dealCardToDealer()
    // kinda rare but doesnt always work
    // figure out why
    // sometimes dealer has cards below 17
    // thinking a for loop can help
  }
  if (computeDealerHandValue() > 17) {
    if (computeDealerHandValue() < 21) {
      // whoWon()
    }
  }
  if (computeDealerHandValue() > 21) {
    let playerBust = document.querySelector('.dealerDeclaration')
    playerBust.textContent = `BUST!`
    //  - make restart button element
  }
}

const computePlayerHandValue = () => {
  // This is how i got the total value for cards in hand for player
  let playerTotalForLoop = 0
  for (let i = 0; i < playerHand.length; i++) {
    //
    // dealerTotalForLoop += dealerHand[i]
    //                 or
    playerTotalForLoop = playerTotalForLoop + playerHand[i]
  }

  return playerTotalForLoop
}

const computeDealerHandValue = () => {
  // This is how i got the total value for cards in hand for dealer
  let dealerTotalForLoop = 0
  for (let i = 0; i < dealerHand.length; i++) {
    //
    // dealerTotalForLoop += dealerHand[i]
    //                or
    dealerTotalForLoop = dealerTotalForLoop + dealerHand[i]
  }

  return dealerTotalForLoop
}

const dealCardToPlayer = () => {
  let playerHandList = document.querySelector('.player-hand')

  let card = deck.pop()

  playerHand.push(card.value)

  // Add this card to the user interface
  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  playerHandList.appendChild(newCardItem)

  let playerHandValue = computePlayerHandValue()

  let playerCardTotalValue = document.querySelector('.player-card-total')
  playerCardTotalValue.textContent = playerHandValue

  //
  // ++probably should be added to compute playerHandValue function++
  if (playerHandValue >= 22) {
    dealCardToDealer()
    hideDealerBackCard()
    HideHitButton()
    HideStayButton()
    AppearRestartButton()
    let playerBust = document.querySelector('.playerDeclaration')
    playerBust.textContent = `BUST!`
  }
  if (playerHandValue === 21) {
    dealCardToDealer()
    hideDealerBackCard()
    HideHitButton()
    HideStayButton()
    AppearRestartButton()
    let winner = document.querySelector('.playerDeclaration')
    winner.textContent = `BLACKJACK!`
  }
}

const dealCardToDealer = () => {
  let dealerHandList = document.querySelector('.dealer-hand')

  let card = deck.pop()

  dealerHand.push(card.value)

  // Add this card to the user interface
  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  dealerHandList.appendChild(newCardItem)

  let dealerHandValue = computeDealerHandValue()

  let dealerCardTotalValue = document.querySelector('.dealer-card-total')
  dealerCardTotalValue.textContent = dealerHandValue

  // dealer array (dealer hand) is more than 1 then run dealer logic
  if (dealerHand.length === 2) {
    dealerCardsToDealerLogic()
  }
}

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
  stayButton.addEventListener('click', stayButtonFunction)

  // find restart button
  let restartButton = document.querySelector('#reloadPage')
  // add event listener on click that does
  restartButton.addEventListener('click', restartButtonFunction)
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
