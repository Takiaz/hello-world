 
let  cards=[]
let sum =0
let hasBlackJack = false
let isAlive = false
let message = "" 
 let messageEl= document.getElementById("message-el")
 let sums= document.querySelector("#sum")
 let cardEl= document.querySelector("#card")

 let player = {
      name:"taka",
      chips: 200,
      sayHello: function(){
          console.log("hello there！")
      }
 }
 
 let playerEl= document.getElementById("player-el")
 playerEl.textContent= player.name +": $"+ player.chips


 function startGame(){
     isAlive = true
     let firstCard =getRandomCards()
let secondCard = getRandomCards()
cards= [firstCard, secondCard]
sum = firstCard + secondCard
  renderGame()
 }
 function newCard(){
     if(isAlive ===true && hasBlackJack===false){
        let card= getRandomCards() 
        cards.push(card)
       
        sum+=card
       renderGame()
     } 
   
 }
 function getRandomCards(){ 
     let random= Math.floor(Math.random()*13) +1
     if(random >10){
         return 10
     }else if(random===1){
         return 11
     }else{
         return random
     }
 }
 function renderGame(){
    sums.textContent = "Sum: "+ sum
    // cardEl.textContent = "Cards: "+ cards[0] +" "+ cards[1]
    cardEl.textContent=  "Cards: "
      for(let count=0; count< cards.length;count++){
          cardEl.textContent += cards[count]+" "
      }
  
      if (sum <= 20) {
          message = "Do you want to draw a new card? 🙂"
      } else if (sum === 21) {
          message = "Wohoo! You've got Blackjack! 🥳"
          hasBlackJack = true
      } else {
          message = "You're out of the game! 😭"
          isAlive = false
      }
      messageEl.textContent = message
 }