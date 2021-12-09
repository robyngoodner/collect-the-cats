/*
NOTE: Work on MVP first!!!!!

Player will choose 2 cards out of the cat collection. These two cards will establish the first set of cats that the 
player must collect. 

On each subsequent turn, player may do one of the following:
- choose three paw cards
- deploy paw cards from the player's hand in order to claim pathways between cats
- choose new cat cards to collect more cats

A winner is determined once one of the following conditions has been met:
- all of the cats have been claimed
- all of the paw cards have been claimed and each player has played one final round

The winner is determined based on a points system according to the distance between cats that the players are claiming. 
Cats that are further away from each other are worth more points.

Step-by-step gameplay breakdown:
- Popup of game title: "Collect the Cats"
    Buttons: Play Game, Instructions, Report Feedback
    Upon Instructions:
        Popup with instructions
        Buttons: Play Game, Report Feedback
    Upon Play Game:
        Title goes to top of board, board sets up. First pop up: "Please select two cat-path cards"
        Cat path cards title/cards div gets bigger until clicked?
        Cat path cards flip over to be seen and animate to bottom right
        Two unseen cat path cards animate to bottom left, using Math.random() to choose
        Second pop up: "Please select three pawprint cards"
        Pawprint cards title/cards div gets bigger until clicked?
        Pawprint cards flip over to be seen and animate to bottom right
        Three unseen cat path cards animate to bottom left, using Math.random() to choose
        Third pop up: "Collect paw print cards until you have enough to begin to collect your cat paths"
        Player chooses pawprint cards and alternates with computer until one of them can collect a cat path
        Computer logic collects cat paths as soon as possible
        Player clicks on a cat path to select it
        Player can get additional cat paths at any time
        Computer logic collects cat paths in twos once it completes its first two

Variables:
playerPoints = #
computerPoints = #
playerCatPaths = []
computerCatPaths = []

Objects:
playerPawPrints {
    red: 3,
    blue: 4,
    etc
}
computerPawPrints {
    same setup as playerPawPrints
}

Functions:
$playGame {
    sets up game board
    sets scores to zero
    Puts all cards in places
    put
}

$instructionsPopUP {
    Pops up insructions in alert window
    Play game button
}

addPawPrints {
    adds pawprints to appropriate pawprints object
}

checkPawPrints (player) {
    if playerPawprints contains the same number of that color paw print as required;
    Assign player points
    Turn pawprints to player color
    disable pawprints from being clicked
    take away correct number of player pawprint cards
}


playerGetPawPrints(){
    take pawprints off a click event
    add to correct playerPawPrints object
    animate pawprints to player pawprint area (bottom right)
}

computerGetPawPrints(){
    same as player but with Math.random()
}

playerGetCatPaths(){
    take catpaths off a click event
    add to playerCatPaths array
}


computerGetCatPaths() {
    same as player but with Math.random()
}

API/API integration:
    cats assigned to specific numbers--all cat cards are numbered with corresponding positions on board
*/