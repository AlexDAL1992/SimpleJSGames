document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "pencil",
      img: "images/pencil.png",
    },
    {
      name: "pencil",
      img: "images/pencil.png",
    },
    {
      name: "notebook",
      img: "images/notebook.png",
    },
    {
      name: "notebook",
      img: "images/notebook.png",
    },
    {
      name: "pen",
      img: "images/pen.png",
    },
    {
      name: "pen",
      img: "images/pen.png",
    },
    {
      name: "sticky-notes",
      img: "images/sticky-notes.png",
    },
    {
      name: "sticky-notes",
      img: "images/sticky-notes.png",
    },
    {
      name: "markers",
      img: "images/markers.png",
    },
    {
      name: "markers",
      img: "images/markers.png",
    },
    {
      name: "drawing-easel",
      img: "images/drawing-easel.png",
    },
    {
      name: "drawing-easel",
      img: "images/drawing-easel.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenID = [];
  var cardsWon = [];

  // create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.setAttribute("width", 100);
      card.setAttribute("height", 100);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch(){
      var cards = document.querySelectorAll('img');
      const optionOneID = cardsChosenID[0];
      const optionTwoID = cardsChosenID[1];
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!');
        cards[optionOneID].setAttribute('src', 'images/white.png');
        cards[optionTwoID].setAttribute('src', 'images/white.png');
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneID].setAttribute('src', 'images/blank.png');
        cards[optionTwoID].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
    }
    cardsChosen = [];
    cardsChosenID = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You found all the cards!";
    }
  }

  // flip the cards
  function flipCard() {
    var cardID = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute('src', cardArray[cardID].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }
  };

  createBoard();
});
