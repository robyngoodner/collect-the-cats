
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


Functions:



checkPawPrints (player) {
    if playerPawprints contains the same number of that color paw print as required;
    Assign player points
    Turn pawprints to player color
    disable pawprints from being clicked
    take away correct number of player pawprint cards
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



computer play:
for loop that cycles through cat paths and winning options and randomly selects one

Winning pathways:
catPath3 (black cat--> brown head):
(1 && 1a && ((5 && ((10 && 11) || (15))) || (6 && ((11) || (10 && 15))) || (2 && ((7 && ((11) || (12 && 16 && 17))) || (3 && 3a && 3b && ((8) || (12) || (16)))) )))


all available pathways:
const $three = $("#three") + $("#threea") + $("#threeb")
const $one = $("one") + $("#onea")
const $two = $("#two")
const $three = $("#three")
const $four = $("#four")
const $five = $("five")
const $six = $("#six")
const $seven = $("#seven")
const $eight = $("#eight")
const $nine = $("#nine")
const $ten = $("#ten")
const $eleven = $("#eleven")
const $twelve = $("twelve")
const $thirteen = $("#thirteen")
const $fourteen = $("#fourteen")
const $fifteen = $("#fifteen")
const $sixteen = $("#sixteen")
const $seventeen = $("#seventeen")

black cat to orange head:
($one || ($four" && $five)
black cat to white head:
($nine && $thirteen) || $four
orange head to brown cat:
$two || ($six && $seven)
orange head to grey head:
($two && $seven) || $six || ($five && $ten)
orange head to white head:
$five
white head to brown head:
$fifteen || ($ten && $eleven)
white head to gray head:
$ten || ($fifteen && $eleven)
brown cat to orange cat:
$three || $eight || ($even && $twelve
grey head to orange cat:
$twelve || ($eleven && $seventeen && $sixteen) || ($seven && (eight || $three)
grey head to black head:
($eleven && $seventeen) || ($twelve && sixteen)
brown head to grey head:
$eleven || ($seventeen && $sixteen && $twelve)







*/

//initializing variables
let playerScore = 0;
let computerScore = 0;
//  NOTE: turn catpaths into objects. key is catpath, value is false until cat path has been acquired, then turns to true
let playerCatPaths = {};
let computerCatPaths = {};
let currentCatPath;
let $catPath1 = `<img src="images/catpath1.png"></img>`;
let $catPath2 = `<img src="images/catpath2.png"></img>`;
let $catPath3 = `<img src="images/catpath3.png"></img>`;
let $catPath4 = `<img src="images/catpath4.png"></img>`;
let $catPath5 = `<img src="images/catpath5.png"></img>`;
let $catPath6 = `<img src="images/catpath6.png"></img>`;
let availableCatPaths = [$catPath1, $catPath2, $catPath3, $catPath4, $catPath5, $catPath6];
let playerPawPrints = {
    orange: 0,
    orangeID: $("#playerOrange"),
    brown: 0,
    brownID: $("#playerBrown"),
    black: 0,
    blackID: $("#playerBlack"),
    grey: 0,
    greyID: $("#playerGrey"),
    white: 0,
    whiteID: $("#playerWhite")
};
let computerPawPrints = {
    orange: 0,
    orangeID: $("#computerOrange"),
    brown: 0,
    brownID: $("#computerBrown"),
    black: 0,
    blackID: $("#computerBlack"),
    grey: 0,
    greyID: $("#computerGrey"),
    white: 0,
    whiteID: $("#computerWhite")
};

const $one = {$img1: $("#one")};
const $two = {$img2: $("#two")};
const $three = {$img3: $("#three")};
const $threea = {$img3a: $("#threea")};
const $threeb = {$img3b: $("#threeb")};
const $four = {$img4: $("#four")};
const $five = {$img5: $("five")};
const $six = {$img6: $("#six")};
const $seven = {$img7: $("#seven")};
const $eight = {$img8: $("#eight")};
const $nine = {$img9: $("#nine")};
const $ten = {$img10: $("#ten")};
const $eleven = {$img11: $("#eleven")};
const $twelve = {$img12: $("twelve")};
const $thirteen = {$img13: $("#thirteen")};
const $fourteen = {$img14: $("#fourteen")};
const $fifteen = {$img15: $("#fifteen")};
const $sixteen = {$img16: $("#sixteen")};
const $seventeen = {$img17: $("#seventeen")};

// $setUpGame {
//     sets up game board
//     sets scores to zero
//     Puts all cards in places
//     put
// }
//reset game function
const setUpGame = () => {
//set scores to 0
    computerScore = 0;
    $('#computerScore').html(`Computer score: <br>${computerScore}`)
    playerScore = 0;
    $('#playerScore').html(`Player score: <br>${playerScore}`);
//empty player pawPrints
    playerPawPrints.orange = 0;
    playerPawPrints.brown = 0;
    playerPawPrints.black = 0;
    playerPawPrints.grey = 0;
    playerPawPrints.white = 0;
//empty computer pawPrints
    computerPawPrints.orange = 0;
    computerPawPrints.brown = 0;
    computerPawPrints.black = 0;
    computerPawPrints.grey = 0;
    computerPawPrints.white = 0; 
    
//empty player and computer catPaths
    playerCatPaths = [];
    computerCatPaths = [];
//set up available catPaths
    catPaths = [$catPath1, $catPath2, $catPath3, $catPath4, $catPath5, $catPath6]
//set up new board
//clear computer's catPath cards
    $(".computerCatPaths").empty();
//clear player's pawPrint cards
    $(".playerCatPaths").empty();
//load resetted numbers for player cat paths
    $("#playerOrange").html(`<img class="pawPrintCards" src='images/orangepaw.png'> : ${playerPawPrints.orange}`);
    $("#playerBlack").html(`<img class="pawPrintCards" src='images/blackpaw.png'> : ${playerPawPrints.black}`);
    $("#playerGrey").html(`<img class="pawPrintCards" src='images/greypaw.png'> : ${playerPawPrints.grey}`);
    $("#playerWhite").html(`<img class="pawPrintCards" src='images/whitepaw.png'> : ${playerPawPrints.white}`);
    $("#playerBrown").html(`<img class="pawPrintCards" src='images/brownpaw.png'> : ${playerPawPrints.brown}`);
//load resetted numbers for computer cat paths
    $("#computerOrange").html(`<img class="pawPrintCards" src='images/orangepaw.png'> : ${computerPawPrints.orange}`);
    $("#computerBlack").html(`<img class="pawPrintCards" src='images/blackpaw.png'> : ${computerPawPrints.black}`);
    $("#computerGrey").html(`<img class="pawPrintCards" src='images/greypaw.png'> : ${computerPawPrints.grey}`);
    $("#computerWhite").html(`<img class="pawPrintCards" src='images/whitepaw.png'> : ${computerPawPrints.white}`);
    $("#computerBrown").html(`<img class="pawPrintCards" src='images/brownpaw.png'> : ${computerPawPrints.brown}`);
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
// instructionsPopUP {
//     Pops up insructions in alert window
//     Play game button
// }
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



// addPawPrints {
//     adds pawprints to appropriate pawprints object
//         if computer has pawprints already. only display the back of one
// }
//declare paw variables as list items with images (to be appended to player/computer uls)
const $playerPawPrints = $('.playerPawPrints');
const $computerPawPrints = $('.computerPawPrints');

//adds Paw Print cards to player or computer stash
const addPawPrint =  (player) => {
    //random switch case
    switch (Math.floor(Math.random() * 5)){
        case 0: 
            //adds paw card to player's pawPrints object
            player.orange = player.orange+ 1;
            //adjust player's HTML to reflect accurate number
            player.orangeID.html(`<img class="pawPrintCards" src='images/orangepaw.png'> : ${player.orange}`);
            break;
        case 1: 
            player.black = player.black+ 1;
            player.blackID.html(`<img class="pawPrintCards" src='images/blackpaw.png'> : ${player.black}`);
            break;
        case 2: 
            player.grey = player.grey+ 1;
            player.greyID.html(`<img class="pawPrintCards" src='images/greypaw.png'> : ${player.grey}`);
            break;
        case 3: 
            player.white = player.white+ 1;
            player.whiteID.html(`<img class="pawPrintCards" src='images/whitepaw.png'> : ${player.white}`);
            break;
        case 4: 
            player.brown = player.brown+ 1;
            player.brownID.html(`<img class="pawPrintCards" src='images/brownpaw.png'> : ${player.brown}`);
            break;
    }
};

// collectCatPaths() {
//     switch case
//     adds catPaths to appropriate player's catPaths object
// }
//NOTE: FIX CAT PATHS. 3 AND 6 ARE THE SAME
const selectCatPath = () => {
    let randomNumber = Math.floor(Math.random() * (availableCatPaths.length));
    for(i=0; i<availableCatPaths.length; i++) {
        //selects random number
        console.log(randomNumber);
        //assigned catpath card to random number
        if (i === randomNumber){
            currentCatPath = availableCatPaths[i];
            //removed catpath card from cat path array
            availableCatPaths.splice(i,1);
            break;
        }
    }
}
//upon click of catpath card, adds player catpath. Adds computer catpath if computer has no cat paths
$('#catpath').on('click', () => {
    if (availableCatPaths.length != 0){
    //runs random cat path selection function
    console.log(`availableCatPaths before ${availableCatPaths}`);
    selectCatPath();
    console.log(`availableCatPaths after ${availableCatPaths}`);
    //pushes selected cat path to player's cat path array
    playerCatPaths.currentCatPath = true;
    console.log(`playerCatPaths ${playerCatPaths}`)

    //appends appropriate cat path image to game board
    $('.playerCatPaths').append(`<li>${currentCatPath}</li>`);
    //runs if computer cat path array is empty (if computer has no cat paths yet)
    function isEmpty(o){
        for (let i in o) {
            if(o.hasOwnProperty(i)){
                return false;
            }
        }
        return true;
    }
    if (isEmpty(computerCatPaths)){
        //runs random cat path selection function
        selectCatPath();
        //pushes selected cat path to computer's cat path array
        computerCatPaths.currentCatPath = true;
        console.log(`computer catpath ${computerCatPaths}`);
        //appends appropriate cat path image to game board
        $('.computerCatPaths').append(`<li>${currentCatPath}</li>`);
    }
}
})
//adds computer cards right after player cards if computer has fewer than four cards of each color
$("#pawprint").on('click', () => {
    //add three pawprint cards to player array and status box
    console.log(playerCatPaths)
    function isEmpty(o){
        for (let i in o) {
            if(o.hasOwnProperty(i)){
                return false;
            }
        }
        return true;
    }
    if (isEmpty(playerCatPaths)){
        alert(`Begin by picking a cat-path card!`)
    }
    addPawPrint(playerPawPrints);
    addPawPrint(playerPawPrints);
    addPawPrint(playerPawPrints);
    if (computerPawPrints.orange < 4 && computerPawPrints.black < 4 && computerPawPrints.grey < 4 && computerPawPrints.white < 4 && computerPawPrints.brown < 4){
    //add three pawprint cards to computer array and status box, if computer doesn't have enough pawprints to pick a path
    addPawPrint(computerPawPrints);
    addPawPrint(computerPawPrints);
    addPawPrint(computerPawPrints);
//add an alert that indicates it's the player's turn? Or just a status bar of whose turn it is?
}})