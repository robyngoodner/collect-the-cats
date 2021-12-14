
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
- hide computer cards
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







 

playerGetCatPaths(){
    take catpaths off a click event
    add to playerCatPaths array
    jquery id=#catpath
    each catpath has 1 variable linked to a picture
    using variable takes it out of the array
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
let playerCatPaths = [];
let computerCatPaths = [];
let playerNodes = [];
let computerNodes = [];
let currentCatPath;
let pawPrintCards = 100;
let $catPath1 = {node1: 9,
                node2: 3,
                img: `<img class="catPathCards" src="images/catpath1.png"></img>`};
let $catPath2 = {node1: 5,
    node2: 9,
    img: `<img class="catPathCards" src="images/catpath2.png"></img>`};
let $catPath3 = {node1: 1,
    node2: 6,
    img: `<img class="catPathCards" src="images/catpath3.png"></img>`};
let $catPath4 = {node1: 2,
    node2: 7,
    img: `<img class="catPathCards" src="images/catpath4.png"></img>`};
let $catPath5 = {node1: 4,
    node2: 2,
    img: `<img class="catPathCards" src="images/catpath5.png"></img>`};
let $catPath6 = {node1: 1,
    node2: 8,
    img: `<img class="catPathCards" src="images/catpath6.png"></img>`};
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

// const catPath1 = ["I", "C"];
// const catPath2 = ["E", "I"];
// const catPath3 = ["A", "F"];
// const catPath4 = ["B", "G"];
// const catPath5 = ["D", "B"];
// const catPath6 = ["A", "H"];


const $one = {
    $img: $("#one"),
    node1: 1,
    node2: 2,
    pawsNeeded: 6,
    color: "brown"
};
const $two = {
    $img: $("#two"),
    node1: 2,
    node2: 3,
    pawsNeeded: 6,
    color: "grey"
};
const $three = {
    $img: $("#three"),
    node1: 3,
    node2: 4,
    pawsNeeded: 7,
    color: "white"
};
const $threea = {
    $img: $("#threea"),
    node1: 3,
    node2: 4,
    pawsNeeded: 7,
    color: "white"
};
const $threeb = {
    $img: $("#threeb"),
    node1: 3,
    node2: 4,
    pawsNeeded: 7,
    color: "white"
};
const $four = {
    $img: $("#four"),
    node1: 1,
    node2: 5,
    pawsNeeded: 4,
    color: 'orange'
};
const $five = {
    $img: $("five"),
    node1: 2,
    node2: 5,
    pawsNeeded: 4,
    color: "orange"
};
const $six = {
    $img: $("#six"),
    node1: 2,
    node2: 6,
    pawsNeeded: 6,
    color: "black"
};
const $seven = {
    $img: $("#seven"),
    node1: 3,
    node2: 6,
    pawsNeeded: 2,
    color: "brown"
};
const $eight = {
    $img: $("#eight"),
    node1: 3,
    node2: 4,
    pawsNeeded: 5,
    color: 'black'
};
const $nine = {
    $img: $("#nine"),
    node1: 1,
    node2: 7,
    pawsNeeded: 4,
    color: "white"
};
const $ten = {
    $img: $("#ten"),
    node1: 5,
    node2: 6,
    pawsNeeded: 6,
    color: "brown"
};
const $eleven = {
    $img: $("#eleven"),
    node1: 6,
    node2: 8,
    pawsNeeded: 3,
    color: "orange"
};
const $twelve = {
    $img: $("#twelve"),
    node1: 6,
    node2: 4,
    pawsNeeded: 6,
    color: 'grey'
};
const $thirteen = {
    $img: $("#thirteen"),
    node1: 7,
    node2: 5,
    pawsNeeded: 5,
    color: "black"
};
// const $fourteen = {
//     $img: $("#fourteen"),
//     node1: 2,
//     node2: 3};
const $fifteen = {
    $img: $("#fifteen"),
    node1: 5,
    node2: 8,
    pawsNeeded: 6,
    color: "grey"
};
const $sixteen = {
    $img: $("#sixteen"),
    node1: 4,
    node2: 9,
    pawsNeeded: 5,
    color: "orange"
};
const $seventeen = {
    $img: $("#seventeen"),
    node1: 8,
    node2: 9,
    pawsNeeded: 5,
    color: "white"

};

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
//refill pawPrintCards stash
    pawPrintCards = 100;
    $('#pawprintsRemaining').html(`Pawprint<br>cards left: ${pawPrintCards}`);
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
//set 'clicked' status for game board back to false
    for(let key in clicked) {
        if(clicked.hasOwnProperty(key)) {
            clicked[key]= false;
        }
    };
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
    //while there are pawprint cards left
    if(pawPrintCards >=0 ){
    //random switch case to select a random pawprint card
        switch (Math.floor(Math.random() * 5)){
            case 0: 
                //adds paw card to player's pawPrints object
                player.orange ++;
                //adjust player's HTML to reflect accurate number
                player.orangeID.html(`<img class="pawPrintCards" src='images/orangepaw.png'> : ${player.orange}`);
                pawPrintCards--;
                $('#pawprintsRemaining').html(`Pawprint<br>cards left: ${pawPrintCards}`);
                break;
            case 1: 
                player.black ++;
                player.blackID.html(`<img class="pawPrintCards" src='images/blackpaw.png'> : ${player.black}`);
                pawPrintCards--;
                $('#pawprintsRemaining').html(`Pawprint<br>cards left: ${pawPrintCards}`);
                break;
            case 2: 
                player.grey ++;
                player.greyID.html(`<img class="pawPrintCards" src='images/greypaw.png'> : ${player.grey}`);
                pawPrintCards--;
                $('#pawprintsRemaining').html(`Pawprint<br>cards left: ${pawPrintCards}`);
                break;
            case 3: 
                player.white ++;
                player.whiteID.html(`<img class="pawPrintCards" src='images/whitepaw.png'> : ${player.white}`);
                pawPrintCards--;
                $('#pawprintsRemaining').html(`Pawprint<br>cards left: ${pawPrintCards}`);
                break;
            case 4: 
                player.brown ++;
                player.brownID.html(`<img class="pawPrintCards" src='images/brownpaw.png'> : ${player.brown}`);
                pawPrintCards--;
                $('#pawprintsRemaining').html(`Pawprint<br>cards left: ${pawPrintCards}`);
                break;
        }
    }
    else(alert(`There are no more pawprint cards left! You can select one more cat-path before a winner is determined.`))
};

// collectCatPaths() {
//     switch case
//     adds catPaths to appropriate player's catPaths object
// }
// let $catPath1 = {node1: 9,
//     node2: 3,
//     img: `<img class="catPathCards" src="images/catpath1.png"></img>`};
const selectCatPath = () => {
    let randomNumber = Math.floor(Math.random() * (availableCatPaths.length));
    for(i=0; i<availableCatPaths.length; i++) {
        //selects random number
        // console.log(randomNumber);
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
    // console.log(`availableCatPaths before ${availableCatPaths}`);
    selectCatPath();
    // console.log(`availableCatPaths after ${availableCatPaths}`);
    //pushes selected cat path to player's cat path array
    playerCatPaths.push(currentCatPath);
    // console.log(`playerCatPaths ${playerCatPaths}`)

    //appends appropriate cat path image to game board
    $('.playerCatPaths').append(`<li>${currentCatPath.img}</li>`);
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
        computerCatPaths.push(currentCatPath);
        // console.log(`computer catpath ${computerCatPaths}`);
        //appends appropriate cat path image to game board
        $('.computerCatPaths').append(`<li>${currentCatPath.img}</li>`);
    }
}
})

//adds computer cards right after player cards if computer has fewer than four cards of each color
$("#pawprint").on('click', () => {
    //add three pawprint cards to player array and status box
    // console.log(playerCatPaths)
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
    else if (pawPrintCards> 3){
        addPawPrint(playerPawPrints);
        addPawPrint(playerPawPrints);
        addPawPrint(playerPawPrints);
        if (computerPawPrints.orange < 4 && computerPawPrints.black < 4 && computerPawPrints.grey < 4 && computerPawPrints.white < 4 && computerPawPrints.brown < 4){
        //add three pawprint cards to computer array and status box, if computer doesn't have enough pawprints to pick a path
        addPawPrint(computerPawPrints);
        addPawPrint(computerPawPrints);
        addPawPrint(computerPawPrints);
//add an alert that indicates it's the player's turn? Or just a status bar of whose turn it is?
        }
    }
    else (alert(`There are not enough pawprint cards for you to draw! You can select one more cat-path before a winner is determined.`))
})

// checkPawPrints (player) {
//     if playerPawprints contains the same number of that color paw print as required;
//     Assign player points
//     Turn pawprints to player color
//     disable pawprints from being clicked
//     take away correct number of player pawprint cards
// }
//runs on clicking pathway 
// $one.$img.on("click", () => {
//     console.log("testing")
// });
//create pawprint values for each pawprint section
// const $one = {
//     $img: $("#one"),
//     node1: 1,
//     node2: 2,
//     pawsNeeded: 6,
//     color: "brown"
// };
// let playerPawPrints = {
//     orange: 0,
//     orangeID: $("#playerOrange"),
//     brown: 0,
//     brownID: $("#playerBrown"),
//     black: 0,
//     blackID: $("#playerBlack"),
//     grey: 0,
//     greyID: $("#playerGrey"),
//     white: 0,
//     whiteID: $("#playerWhite")
// };

const checkPawPrints = (clickedObject) => {
    let clickedColor = clickedObject.color;
    // console.log(clickedColor)
    let pawsRequired = clickedObject.pawsNeeded;
    // console.log("paws required" + pawsRequired)
    // console.log("clicked color number" + playerPawPrints[clickedColor])
    if(playerPawPrints[clickedColor] >= pawsRequired) {
        playerScore =+ pawsRequired;
        playerNodes.push(clickedObject.node1);
        playerNodes.push(clickedObject.node2);
        $('#playerScore').html(`Player score: <br>${playerScore}`);
        playerPawPrints[clickedColor] =playerPawPrints[clickedColor]- pawsRequired;
        playerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/${clickedColor}paw.png'> : ${playerPawPrints[clickedColor]}`);
    }
    else {
        alert(`You do not have enough ${clickedColor} pawprint cards to collect that path! Keep collecting.`)
    }
};
//click status of pathways
let clicked = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
    fifteen: false,
    sixteen: false,
    seventeen: false,
}

//click events for all paths
$one.$img.on("click", () => {
    //checks if it has previously been clicked
    if(clicked.one === false) {
        //runs path claiming function
        checkPawPrints($one);
        //changes status to clicked
        clicked.one = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});

$two.$img.on("click", () => {
    if(clicked.two === false) {
        checkPawPrints($two);
        clicked.two = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$three.$img.on("click", () => {
    if(clicked.three === false) {
        checkPawPrints($three);
        clicked.three = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$threea.$img.on("click", () => {
    if(clicked.three === false) {
        checkPawPrints($threeb);
        clicked.three = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$four.$img.on("click", () => {
    if(clicked.four === false) {
        checkPawPrints($four);
        clicked.four = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$five.$img.on("click", () => {
    if(clicked.five === false) {
        checkPawPrints($five);
        clicked.five = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$six.$img.on("click", () => {
    if(clicked.six === false) {
        checkPawPrints($six);
        clicked.six = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$seven.$img.on("click", () => {
    if(clicked.seven === false) {
        checkPawPrints($seven);
        clicked.seven = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$eight.$img.on("click", () => {
    if(clicked.eight === false) {
        checkPawPrints($eight);
        clicked.eight = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$nine.$img.on("click", () => {
    if(clicked.nine === false) {
        checkPawPrints($nine);
        clicked.nine = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$ten.$img.on("click", () => {
    if(clicked.ten === false) {
        checkPawPrints($ten);
        clicked.ten = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$eleven.$img.on("click", () => {
    if(clicked.eleven === false) {
        checkPawPrints($eleven);
        clicked.eleven = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$twelve.$img.on("click", () => {
    if(clicked.twelve === false) {
        checkPawPrints($twelve);
        clicked.twelve = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$thirteen.$img.on("click", () => {
    if(clicked.thirteen === false) {
        checkPawPrints($thirteen);
        clicked.thirteen = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$fifteen.$img.on("click", () => {
    if(clicked.fifteen === false) {
        checkPawPrints($fifteen);
        clicked.fifteen = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$sixteen.$img.on("click", () => {
    if(clicked.sixteen === false) {
        checkPawPrints($sixteen);
        clicked.sixteen = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});
$seventeen.$img.on("click", () => {
    if(clicked.seventeen === false) {
        checkPawPrints($seventeen);
        clicked.seventeen = true;
    }
     else{
        alert("This path has already been claimed! Please pick a different path");
    }});


function Node(val){
    this.val = val;
    this.childs = [];
}
Node.prototype.add = function(N) {
    this.childs.push(N)
}
let N = [];
for(i=1; i<=9; i++) {
    N[i] = new Node (i);
}

function generateGraph() {
    const N = [];
    for(i=1; i<=9; i++){
        N[i] = new Node(i);
    }
    N[1].add(N[2]);
    N[1].add(N[5]);
    N[1].add(N[7]);
    N[2].add(N[1]);
    N[2].add(N[3]);
    N[2].add(N[4]);
    N[2].add(N[6]);
    N[3].add(N[2]);
    N[3].add(N[4]);
    N[3].add(N[4]);
    N[3].add(N[6]);
    N[4].add(N[3]);
    N[4].add(N[3]);
    N[4].add(N[7]);
    N[4].add(N[9]);
    N[5].add(N[1]);
    N[5].add(N[2]);
    N[5].add(N[6]);
    N[5].add(N[7]);
    N[5].add(N[8]);
    N[6].add(N[2]);
    N[6].add(N[3]);
    N[6].add(N[4]);
    N[6].add(N[5]);
    N[6].add(N[8]);
    N[7].add(N[1]);
    N[7].add(N[5]);
    N[8].add(N[5]);
    N[8].add(N[6]);
    N[8].add(N[9]);
    N[9].add(N[4]);
    N[9].add(N[8]);
    return N;
}

N = generateGraph();
let RootNode = N[1];

function clone(A) {
    return JSON.parse(JSON.stringify(A));
}
// console.log(N[1]);
const validPaths = [];
path = [];
function traverse(node, destination, path) {
    if(node === undefined){
        node = RootNode;
    }
    if(path === undefined){
        path = [];
    }
    // if(destination === undefined){
    //     destination = 9;
    // }
    // console.log(path)
    path.push(node.val);
    //console.log("Current Path", path);
    if(node.val === destination){
        //console.log("Found Valid", path);
        validPaths.push(clone(path));
        return;
    }
    // console.log(node.childs);
    node.childs.forEach(x => {
        if(path.indexOf(x.val) === -1){
            let newPath = clone(path);
            traverse(x, destination, newPath);
        }
    });
}
//to get winning conditions, call traverse(N[*], destination) with * being starting node number and destination being the second node number. Call twice, swapping the nodes
// console.log(validPaths);
// let $catPath1 = {node1: 9,
//     node2: 3,
//     img: `<img class="catPathCards" src="images/catpath1.png"></img>`};
//ex: traverse(playerCatPaths[0].node1, playerCatPaths[0].node2)

//run through and log in validPaths the potential winning pathways of a player's catPath cards
//parameter takes individual's catPaths array
let playerPathOptions=[];
let computerPathOptions=[]
const collateWinningCatPaths = (whoseCatPaths) => {
    // console.log(whoseCatPaths)
    for(i=0; i<whoseCatPaths.length; i++) {
        // console.log(whoseCatPaths[i].node1)
        // console.log(whoseCatPaths[i].node2)
        traverse(N[whoseCatPaths[i].node1], whoseCatPaths[i].node2);
    }
    // console.log(validPaths);
 
}

   //check contents of validPaths against player's paths array

const logPlayerWinningCatPaths = () => {
    collateWinningCatPaths(playerCatPaths);
    playerPathOptions.push(validPaths);
    console.log(playerPathOptions);
}
const logComputerWinningCatPaths = () => {
    collateWinningCatPaths(computerCatPaths);
    computerPathOptions.push(validPaths);
    console.log(computerPathOptions)
}
$("#feedback").on('click', () => {logPlayerWinningCatPaths(), logComputerWinningCatPaths()});

//winning paths are logged by node: 5 --> 1
//have to put in an array, somehow get in the right order, and delete the extras
//get clicked paths after the game is done?
//do they have to be in order? Or can you just confirm that there are duplicates 
//(run a loop twice seeing if it contains it), and if there are duplicates of each node in the winning array, then you have that path
//except you don't need duplicates of the first and last node of the array.
//check if array contains first and last node--delete those if they exist. 
//Run a loop twice deleting a value if if matches a winning array. The array should be empty under winning conditions
//second loop written with i--?