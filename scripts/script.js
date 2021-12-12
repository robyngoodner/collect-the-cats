
// import "nes.css/css/nes.min.css";
//https://nostalgic-css.github.io/NES.css/
//https://animate.style/
/*
NOTE: Work on MVP first!!!!!
Your game must meet these requirements:

- **HAVE ITS OWN REPO, under YOUR Github account!!!! NOT on Enterprise. YOUR PERSONAL GITHUB!! This way it can be a portfolio piece for you. Raise your hand if you understand this requirement as it is for your benefit!**
- **Git 20+ commits.** Commit early, commit often. Tell a story with your commits. Give us a narrative. Paint us a lil picture of your process. Each message should give a clear idea what you changed and should also be appropriate for anyone to see - because we, and hiring managers, and also everyone else - can and will see them!
- **Include [Wireframes](https://careerfoundry.com/en/blog/ux-design/what-is-a-wireframe-guide/) and [User Stories](https://www.notion.so/Planning-Design-UX-UI-Resources-929171f9da454a08a130df82d8579484) in the README**
- Render a game in the browser
- Include separate HTML / CSS / JavaScript files
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **JavaScript or jQuery** for **DOM manipulation**
- Use **semantic markup** for HTML and CSS (adhere to best practices, clean, well organized code)
- Be reasonably complex

LAST PRIORITIES:
- Animations
- Report feedback form
- look of overlapping computer cards

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
catPaths = [catPath1, catPath2, catPath3, catPath4, catPath5, catPath6]

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
$setUpGame {
    sets up game board
    sets scores to zero
    Puts all cards in places
    put
}

instructionsPopUP {
    Pops up insructions in alert window
    Play game button
}

addPawPrints {
    adds pawprints to appropriate pawprints object
        if computer has pawprints already. only display the back of one
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
    jquery id=#pawprint
}

computerGetPawPrints(){
    same as player but with Math.random()
    if computer has pawprints already. only display the back of one (display overlapping? fancy)
    jquery id=#pawprint
}

playerGetCatPaths(){
    take catpaths off a click event
    add to playerCatPaths array
    jquery id=#catpath
    each catpath has 1 variable linked to a picture
    using variable takes it out of the array
}


computerGetCatPaths() {
    same as player but with Math.random()
    if computer has catpaths already, only display the back of one (display overlapping? fancy)
    jquery id=#catpath
}

collectCatPaths() {
    switch case
    adds catPaths to appropriate player's catPaths object
}

API/API integration:
    cats assigned to specific numbers--all cat cards are numbered with corresponding positions on board
*/

//initializing variables
let playerScore = 0;
let computerScore = 0;
let playerCatPaths = [];
let computerCatPaths = [];
let catPaths = [catPath1, catPath2, catPath3, catPath4, catPath5, catPath6]
let playerPawPrints = {
    red: 0,
    blue: 0,
    purple: 0,
    green: 0,
    yellow: 0,
    pink: 0
};
let computerPawPrints = {
    red: 0,
    blue: 0,
    purple: 0,
    green: 0,
    yellow: 0,
    pink: 0
};

//reset game function
const setUpGame = () => {
//set scores to 0
    computerScore = 0;
    $('#computerScore').text(`${computerScore}`)
    playerScore = 0;
    $('#playerScore').text(`${playerScore}`);
//empty pawPrints
    playerPawPrints = {
        red: 0,
        blue: 0,
        purple: 0,
        green: 0,
        yellow: 0,
        pink: 0
    };
    computerPawPrints = {
        red: 0,
        blue: 0,
        purple: 0,
        green: 0,
        yellow: 0,
        pink: 0
    };
//empty player and computer catPaths
    playerCatPaths = [];
    computerCatPaths = [];
//set up available catPaths
    catPaths = [catPath1, catPath2, catPath3, catPath4, catPath5, catPath6]
//set up new board

};

//reset game button
$('#restart').on('click', () => {
    // window.confirm("Are you sure you'd like to restart?")
    if(confirm("Are you sure you'd like to restart your game?")) {
    setUpGame();
    }
    else {
        return;
    }
})

//instructions popup
$('#needHelp').on('click', () => {
    alert(`Player will choose 2 cards out of the cat collection. These two cards will establish the first set of cats that the player must collect. 

    On each subsequent turn, player may do one of the following:
    - choose three paw cards
    - deploy paw cards from the player's hand in order to claim pathways between cats
    - choose new cat cards to collect more cats
    
    A winner is determined once one of the following conditions has been met:
    - all of the cats have been claimed
    - all of the paw cards have been claimed and each player has played one final round
    
    The winner is determined based on a points system according to the distance between cats that the players are claiming.`)
})

const playerAddPawPrints = () => {
    //adds pawprints to appropriate pawprints object
    playerPawPrints.forEach((key, value) => {
        if (clickedItem.id === key) {
            value =+ 1;
        }


    })
}

