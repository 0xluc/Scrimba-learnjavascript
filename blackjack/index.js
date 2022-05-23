let cards = []
let sum = 0
let hasblackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Lucas",
    chips: 145
}

playerEl.textContent = player.name +' '+"$: "+player.chips

function getRandomCard() {
    number = Math.floor(Math.random()*13 + 1)
    if (number > 10) {
        return 10
    } else if (number === 1){
        return 11
    } else {
        return number
    }
}
function startGame() {
    isAlive = true
    cards = [getRandomCard(),getRandomCard()]
    sum = cards[0]+cards[1]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards: '
    for (i = 0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum 
    if (sum<21){
        message = "do you want to draw a new card?"
    } else if(sum==21){
        message = "You won!"
        hasblackjack = true
    } else {
        message = "You lost!"
        isAlive = false
    }
    messageEl.textContent = message 
}

function newCard() {
    if (isAlive && !hasblackjack ) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}