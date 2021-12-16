
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






computer play:
for loop that cycles through cat paths and winning options and randomly selects one OR
Claims the first path it has the cards for that is in its cat path
Do with nodes..cry
grab nodes from cat path
grab nodes from array of potential winning scenarios
check cards
etc


*/

//initializing variables
//scores
let playerScore = 0;
let computerScore = 0;
//arrays that contain drawn CatPaths
let playerCatPaths = [];
let computerCatPaths = [];
//arrays that contain claimed catPaths
let playerNodes = [];
let computerNodes = [];
//maybe not used rn?
let currentCatPath;
//starting number of pawPrint cards
let pawPrintCards = 100;
//catPath objects that contain starting and ending nodes and images of cards
let $catPath1 = {node1: 9,
                node2: 3,
                img: `<img class="catPathCards" src="images/catpath1.png"></img>`,
                arrInd : 0};
let $catPath2 = {node1: 5,
    node2: 9,
    img: `<img class="catPathCards" src="images/catpath2.png"></img>`,
    arrInd : 1};
let $catPath3 = {node1: 1,
    node2: 6,
    img: `<img class="catPathCards" src="images/catpath3.png"></img>`,
    arrInd : 2};
let $catPath4 = {node1: 2,
    node2: 7,
    img: `<img class="catPathCards" src="images/catpath4.png"></img>`,
    arrInd: 3}
let $catPath5 = {node1: 4,
    node2: 2,
    img: `<img class="catPathCards" src="images/catpath5.png"></img>`,
    arrInd: 4};
let $catPath6 = {node1: 1,
    node2: 8,
    img: `<img class="catPathCards" src="images/catpath6.png"></img>`,
    arrInd: 5};

    //player collected pawPrint cards, number and image
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
//computer collected pawPrint cards, number and image
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

//object representing all info about pawPrint pathways: 
//jQuery image, start node, end node, number of points/pawprint cards needed, color of pawprint cards needed, whether or not it's been claimed
const pawPrintPaths = {
$one : {
    $img: $("#one"),
    node1: 1,
    node2: 2,
    pawsNeeded: 6,
    color: "brown",
    clicked: false
},
$two : {
    $img: $("#two"),
    node1: 2,
    node2: 3,
    pawsNeeded: 6,
    color: "grey",
    clicked: false
},
$three : {
    $img: $("#three"),
    node1: 3,
    node2: 4,
    pawsNeeded: 7,
    color: "white",
    clicked: false
},
$threea : {
    $img: $("#threea"),
    node1: 3,
    node2: 4,
    pawsNeeded: 7,
    color: "white",
    clicked: false
},
$threeb : {
    $img: $("#threeb"),
    node1: 3,
    node2: 4,
    pawsNeeded: 7,
    color: "white",
    clicked: false
},
$four : {
    $img: $("#four"),
    node1: 1,
    node2: 5,
    pawsNeeded: 4,
    color: 'orange',
    clicked: false
},
$five : {
    $img: $("#five"),
    node1: 2,
    node2: 5,
    pawsNeeded: 4,
    color: "orange",
    clicked: false
},
$six : {
    $img: $("#six"),
    node1: 2,
    node2: 6,
    pawsNeeded: 6,
    color: "black",
    clicked: false
},
$seven : {
    $img: $("#seven"),
    node1: 3,
    node2: 6,
    pawsNeeded: 2,
    color: "brown",
    clicked: false
},
// $eight : {
//     $img: $("#eight"),
//     node1: 3,
//     node2: 4,
//     pawsNeeded: 5,
//     color: 'black',
//     clicked: false
// },
$nine : {
    $img: $("#nine"),
    node1: 1,
    node2: 7,
    pawsNeeded: 4,
    color: "white",
    clicked: false
},
$ten : {
    $img: $("#ten"),
    node1: 5,
    node2: 6,
    pawsNeeded: 6,
    color: "brown",
    clicked: false
},
$eleven : {
    $img: $("#eleven"),
    node1: 6,
    node2: 8,
    pawsNeeded: 3,
    color: "orange",
    clicked: false
},
$twelve : {
    $img: $("#twelve"),
    node1: 6,
    node2: 4,
    pawsNeeded: 6,
    color: 'grey',
    clicked: false
},
$thirteen : {
    $img: $("#thirteen"),
    node1: 7,
    node2: 5,
    pawsNeeded: 5,
    color: "black",
    clicked: false
},
// $fourteen : {
//     $img: $("#fourteen"),
//     node1: 2,
//     node2: 3},
$fifteen : {
    $img: $("#fifteen"),
    node1: 5,
    node2: 8,
    pawsNeeded: 6,
    color: "grey",
    clicked: false
},
$sixteen : {
    $img: $("#sixteen"),
    node1: 4,
    node2: 9,
    pawsNeeded: 5,
    color: "orange",
    clicked: false
},
$seventeen : {
    $img: $("#seventeen"),
    node1: 8,
    node2: 9,
    pawsNeeded: 5,
    color: "white",
    clicked: false

}
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
    for(let key in pawPrintPaths) {
        if(pawPrintPaths.hasOwnProperty(key)) {
            pawPrintPaths[key]["clicked"]= false;
        }
    };
    validPaths.length=0;
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
let availableCatPaths = [$catPath1, $catPath2, $catPath3, $catPath4, $catPath5, $catPath6];
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
//click that gives player pawprint cards
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
        alert("Your turn!");
//add an alert that indicates it's the player's turn? Or just a status bar of whose turn it is?
        }
        else {};
    }
    else (alert(`There are not enough pawprint cards for you to draw! You can select one more cat-path before a winner is determined.`))
})


//runs on clicking pathway 
// $one.$img.on("click", () => {
//     console.log("testing")
// });

//Checks if player has enough pawprint cards to claim a pathway--collects the pathway if so
const checkPawPrints = (clickedObject) => {
    let clickedColor = clickedObject.color;
    let pawsRequired = clickedObject.pawsNeeded;
    if(playerPawPrints[clickedColor] >= pawsRequired) {
        //add pawsRequired score value to player's score
        playerScore = playerScore + pawsRequired;
        //send pawPrintPath's first node to player's collected Nodes
        playerNodes.push(clickedObject.node1);
        //send pawPrintPath's second node to player's collected Nodes
        playerNodes.push(clickedObject.node2);
        //update player score display
        $('#playerScore').html(`Player score: <br>${playerScore}`);
        //remove cards used from player's collection
        playerPawPrints[clickedColor] =playerPawPrints[clickedColor]- pawsRequired;
        //update player card collection display
        playerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/${clickedColor}paw.png'> : ${playerPawPrints[clickedColor]}`);
        //indicate path has been claimed and cannot be claimed again
        clickedObject["clicked"] = true;
    }
    else {
        alert(`You do not have enough ${clickedColor} pawprint cards to collect that path! Keep collecting.`)
    }
};

// const checkComputerPawPrints = (clickedObject) => {
//     let clickedColor = clickedObject.color;
//     let pawsRequired = clickedObject.pawsNeeded;
//     if(computerPawPrints[clickedColor] >= pawsRequired) {
//         //add pawsRequired score value to computer's score
//         computerScore = computerScore + pawsRequired;
//         //send pawPrintPath's first node to computer's collected Nodes
//         computerNodes.push(clickedObject.node1);
//         //send pawPrintPath's second node to computer's collected Nodes
//         computerNodes.push(clickedObject.node2);
//         //update computer score display
//         $('#computerScore').html(`Computer score: <br>${computerScore}`);
//         //remove cards used from computer's collection
//         computerPawPrints[clickedColor] =computerPawPrints[clickedColor]- pawsRequired;
//         //update computer card collection display
//         computerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/${clickedColor}paw.png'> : ${computerPawPrints[clickedColor]}`);
//         //indicate path has been claimed and cannot be claimed again
//         clickedObject["clicked"] = true;
//     }
//     else {
//         alert(`You do not have enough ${clickedColor} pawprint cards to collect that path! Keep collecting.`)
//     }
// };

//click events for all paths
// pawPrintPaths.$one.$img.on("click", () => {
//     //checks if it has previously been clicked
//     if(pawPrintPaths.$one.clicked === false) {
//         //runs path claiming function
//         checkPawPrints(pawPrintPaths.$one);
//         //changes status to clicked
//         pawPrintPaths.$one.clicked = true;
//     }
//      else{
//         alert("This path has already been claimed! Please pick a different path");
//     }});
//click event for all pathways
// let claimCatPath = () => {
for(let key in pawPrintPaths) {
    //upon clicking the pathway image
    pawPrintPaths[key]["$img"].on("click", () => {
        //check if pathway has already been claimed
        if(pawPrintPaths[key]["clicked"] === false) {
            //runs function to trade cards for pathway
            checkPawPrints(pawPrintPaths[key]);

        }
        //if pathway has already been claimed
        else{
            //alert that pathway has already been claimed
            alert("This path has already been claimed! Please pick a different path");
        }
    })
};
// }

//node-child function setup for graphic
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
//grab potential winning combination for each of the catpaths in a player's catPath object
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
    //empty out playerPathOptions
    playerPathOptions.length = 0;
//run winning combos function with player's cat paths
    collateWinningCatPaths(playerCatPaths);
    //push potential player winning paths to the playerPathOptions array
    playerPathOptions.push(validPaths);
}
const logComputerWinningCatPaths = () => {
    //empty out computerPathOptions
    computerPathOptions.length = 0;
    //run winning combos function with computer's path's arrays
    collateWinningCatPaths(computerCatPaths);
    //push potential computer winning paths to the computerPathOptions array
    computerPathOptions.push(validPaths);
}

// computer play:
// for loop that cycles through cat paths and winning options and randomly selects one OR
// Claims the first path it has the cards for that is in its cat path
// Do with nodes..cry
// grab nodes from cat path
// grab nodes from array of potential winning scenarios
// check cards
// etc
// computerCatPaths = []
//computerPathOptions[0]
//compare computerPathOptions[0] nodes to pawPrintPaths nodes. If a pawPrint path has two of the nodes from that array, 
//and the computer has the correct number of the correct color of pawprint cards, claim that path.
const computerPlay = () => {
    // if(computerPawPrints)
    //load computer's potential winning arrays
    logComputerWinningCatPaths();
    let computerPotentialPaths = [];
    //if a potential winning array does not contain the nodes the computer has already acquired, 
    //delete it from the computer's potential winning array
    //if the computer has already acquired pawPrintPaths...
    if(computerNodes.length > 0){
        console.log(computerNodes);
        //loop over the potential winning computer paths
        for(i=0; i<computerPathOptions[0].length; i++){
            //loop over the already acquired computer pawprint paths
            for(j=0; j<computerNodes.length; j++){
                //if the computer path option does not include the existing computer nodes...
                if (!computerPathOptions[0][i].includes(computerNodes[j])){
                    //remove that path option
                    computerPathOptions[0][i].slice(i, 1)
                }
            }
        }
    }
    //loop over pawPrintPaths
    console.log('at least computerPLay function is working');
    for(let key in pawPrintPaths){
        // console.log('for loop on line 766 is running')
        // console.log(computerPathOptions[0]);
        //loop over computer potential winning options
        for(i=0; i<computerPathOptions[0].length; i++){
            // console.log('for loop on line 769 is running');
            //if the required node to collect a pawPrintPath matches a node of the computer path options...
            // console.log(pawPrintPaths[key].node1);
            // console.log(computerPathOptions[0][i])
            for(k=0; k<computerPathOptions[0][i].length; k++){
                // console.log(computerPathOptions[0][i][k])
                if(pawPrintPaths[key].node1 === computerPathOptions[0][i][k]){
                    // console.log(pawPrintPaths[key].node1)
                    // console.log(computerPathOptions[0][i][k]);
                    //loop again over the computer path options
                    for(j=0; j<computerPathOptions[0][i].length; j++){
                        //if the second required node to collect a pawPrintPath matches a node of the computer path options
                        if (pawPrintPaths[key].node2 === computerPathOptions[0][i][j]){
                            // console.log(pawPrintPaths[key].node2)
                            //if the computer has enough pawPrints of the right color to claim that path...
                            console.log("pawPrint cards needed" + pawPrintPaths[key].pawsNeeded)
                            console.log("pawPrint cards computer has: " + computerPawPrints[pawPrintPaths[key]["color"]])
                            if((pawPrintPaths[key].pawsNeeded) >= (computerPawPrints[pawPrintPaths[key]["color"]])){
                                // claim the pawPrintPath
                                addPawPrint(computerPawPrints);
                                addPawPrint(computerPawPrints);
                                addPawPrint(computerPawPrints);
                                return;
                            }
                            else 
                            {
                                // checkComputerPawPrints(pawPrintPaths[key])
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
}

$("#feedback").on('click', () => {computerPlay()});



//compare playerPaths to player potential winning paths, assign points based on whether player achieved all paths picked
const checkPlayerWinningPaths = () => {
    //collate winning cat paths, put in array for use
    logPlayerWinningCatPaths();
    //remove duplicates
    let playerNodesUnique = [...new Set(playerNodes)];
    let hasAllElems = true;
    //compare player array to potential winning arrays
    for(i=0; i<playerPathOptions[0].length; i++){
        //if player array includes all the values in one of potential winning arrays...
        if(playerPathOptions[0][i].every(elem => playerNodesUnique.includes(elem))){
            //add 20 points to player score
            playerScore = playerScore + 20;
            //update player score on gameboard
            $('#playerScore').html(`Player score: <br>${playerScore}`);
            //prevent score reduction
            hasAllElems = true;
            break;
        }
        else {
            hasAllElems = false;
        }
    }
    //if player did not succeed at all cat paths...
    if (hasAllElems === false){
        //reduce score by 20 points
        playerScore = playerScore - 20;
        //update player score on gameboard
        $('#playerScore').html(`Player score: <br>${playerScore}`);
    }
}
//same as playerWinningPaths
const checkComputerWinningPaths = () => {
    logComputerWinningCatPaths();
    let computerNodesUnique = [...new Set(computerNodes)];
    let hasAllElems = true;
    for(i=0; i<computerPathOptions[0].length; i++){
        if(computerPathOptions[0][i].every(elem => computerNodesUnique.includes(elem))){
            computerScore = computerScore + 20;
            $('#computerScore').html(`Computer score: <br>${computerScore}`);
            hasAllElems = true;
            break;
        }
        else {
            hasAllElems = false;
        }
    }
    if (hasAllElems === false){
        computerScore = computerScore - 20;
        $('#computerScore').html(`Computer score: <br>${computerScore}`);
    }
}

