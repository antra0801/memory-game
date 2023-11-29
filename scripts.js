const cards = document.querySelectorAll('.memory-card');

let firstCard, secondCard;
let hasflippedcard = false;
let lockBoard = false;

// shuffle();

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;   
    // to prevent the lock on card after when it is double clicked

    this.classList.add('flip');

    if(!hasflippedcard){
        // first click
        hasflippedcard = true;
        firstCard = this;

        // console.log({hasflippedcard, firstCard});
        return;
    } 
        // second click
        secondCard = this;
        // console.log({firstCard, secondCard , hasflippedcard});

        // console.log(firstCard.dataset.framework);
        // console.log(secondCard.dataset.framework);

       checkForMatch();
}

function checkForMatch() {

    // let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    // isMatch ? disableCards() : unflipCards();   // teranry operator

    if(firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards();
    }else{
        unflipCards();
    }

}

function disableCards() {
    firstCard.removeEventListener('click' , flipCard);
    secondCardCard.removeEventListener('click' , flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() =>  {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;

        resetBoard();
         } , 1500);
}

function resetBoard() {
    [hasflippedcard , lockBoard] = [false, false];
    [firstCard , secondCard] = [null, null];
}

// function shuffle(){
//     cards.forEach(card => {
//         let randomPos = Math.floor(Math.random() * 12);
//         card.style.order = randomPos;
//     });
// }


cards.forEach(card => card.addEventListener('click', flipCard));