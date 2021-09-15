document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded")
      //card options
      //all the images and its names store in an Array of objects
      const cardArray = [
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        }
      ]
    //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):


    cardArray.sort(() => 0.5 - Math.random())
    console.log(" cardArray sort ", cardArray)
    
  const grid = document.querySelector('.test')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function checkForMatch(){
      let cards = document.querySelectorAll('img')
      console.log(cards)
      let optionOneId = cardsChosenId[0]
      let optionTwoId = cardsChosenId[1]
      //scenario one
      if(optionOneId == optionTwoId){
          cards[optionOneId].setAttribute('src','images/blank.png')
          cards[optionTwoId].setAttribute('src','images/blank.png')
          alert("you chose same images.. try selecting different images..")
      }else if(cardsChosen[0] === cardsChosen[1]){
          cards[optionOneId].setAttribute('src','images/white.png');
          cards[optionTwoId].setAttribute('src','images/white.png');
          cardsWon.push(cardsChosen)
          console.log("cardsWon", cardsWon)
          alert("u found a match that's great")
      }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
  }

  function flipkard () {
      cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      this.setAttribute('alt', cardArray[cardId].name)
      console.log(cardId, cardArray[cardId].img)
      if(cardsChosen.length == 2){
        setTimeout(checkForMatch, 500)

      }
  }

  cardArray.forEach((Eachcard,index) => {
      card = document.createElement('img')
      card.setAttribute('src','images/blank.png')
      card.setAttribute('data-id',index)
      card.addEventListener('click',flipkard)
      grid.appendChild(card)
  });


})