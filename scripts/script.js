
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

const $game = $("#game")
//hide game board
$game.hide();
//Opening alert window
(function openingMessage (msg, gfg) {
    const confirmBox = $("#container");

    //trace message to container
    confirmBox.find(".message").html(msg);
    //call function
    confirmBox.find(".yes").unbind().click(function() {
        //show opening alert window
        confirmBox.show();
    });
    confirmBox.find(".yes").click(gfg);
    confirmBox.show();

    confirmBox.find(".no").unbind().click(function()
    {
        confirmBox.hide();
        $game.show()
    });
    confirmBox.find(".no").click(gfg);
    confirmBox.show();
})();
//change message to instructions

$(".yes").on("click", function () {
    $(".message").html(`<p>Player draws 1 card from the cat-path collection. This card will establish the first set of cats that the player must collect.</p><p>On each subsequent turn, player may do one of the following:</p><p><ul><li>- draw three pawprint cards</li><li>- deploy pawprint cards from the player's hand in order to claim pathways between cats</li><li>- draw new cat-path cards to collect more cats</li></ul></p><p>A winner is determined once one of the following conditions has been met:</p><ul><li>- all of the cats have been claimed</li><li>- all of the pawprint cards have been claimed and each player has played one final round</li></ul><p>The winner is determined based on a points system according to the distance between cats that the players are claiming. Cats that are further away from each other are worth more points. Players will gain additional points for completed cat-paths, and lose points for having cat-paths that are not completed by the end of the game.</p><br><button class="no">I've got this</button>`); 
    $("#container").find(".no").unbind().click(function()
    {
        $("#container").hide();
        $game.show()
    });
    })


$("#needHelp").on("click", function () {
    (function instructionsBox(msg, gfg) {
        var confirmBox = $("#container");
        $game.hide();
        /* Trace message to display */
        confirmBox.find(".message").text(msg);
            
        /* Calling function */
        confirmBox.find(".yes").unbind().click(function()
        {
            //hide message box
            confirmBox.hide();
        });
        confirmBox.find(".yes").click(gfg);
        confirmBox.show();
        })()
    // $("container").show();
    $(".message").html(`<p>Player draws 1 card from the cat-path collection. This card will establish the first set of cats that the player must collect.</p><p>On each subsequent turn, player may do one of the following:</p><p><ul><li>- draw three pawprint cards</li><li>- deploy pawprint cards from the player's hand in order to claim pathways between cats</li><li>- draw new cat-path cards to collect more cats</li></ul></p><p>A winner is determined once one of the following conditions has been met:</p><ul><li>- all of the cats have been claimed</li><li>- all of the pawprint cards have been claimed and each player has played one final round</li></ul><p>The winner is determined based on a points system according to the distance between cats that the players are claiming. Cats that are further away from each other are worth more points. Players will gain additional points for completed cat-paths, and lose points for having cat-paths that are not completed by the end of the game.</p><br><button class="no">I've got this</button>`); 
    $("#container").find(".no").unbind().click(function()
    {
        $("#container").hide();
        $game.show()
    });
    })


        // {
        //     (function noMoreCatPaths(msg, gfg) {
        //             var confirmBox = $("#noMoreCatPaths");
        //             $game.hide();
        //             /* Trace message to display */
        //             confirmBox.find(".noMoreCatPaths").text(msg);
                        
        //             /* Calling function */
        //             confirmBox.find(".ok").unbind().click(function()
        //             {
        //                 //hide message box
        //                 confirmBox.hide();
        //             });
        //             confirmBox.find(".ok").click(gfg);
        //             confirmBox.show();
        //         })();
        //     // $(".noMoreCatPaths").show();
        //     $(".noMoreCatPaths").html(`<p>There are no more cat path cards to draw! Get as many paths as you can before the game ends!</p><br><button class="no">Ok!</button>`); 
        //     $("#noMoreCatPaths").find(".no").unbind().click(function()
        //     {
        //         $("#noMoreCatPaths").hide();
        //         $game.show()
        //      });
        //     // alert("There are no more cat path cards to draw! Get as many paths as you can before the game ends!")
        // }

    


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
let pawPrintCards = 200;
//catPath objects that contain starting and ending nodes and images of cards
let $catPath1 = {node1: 9,
                node2: 3,
                img: `<img class="catPathCards" src="images/catpath1.png"></img>`,
                arrInd: 0};
let $catPath2 = {node1: 5,
    node2: 9,
    img: `<img class="catPathCards" src="images/catpath2.png"></img>`,
    arrInd: 1};
let $catPath3 = {node1: 1,
    node2: 6,
    img: `<img class="catPathCards" src="images/catpath3.png"></img>`,
    arrInd: 2};
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
    orangeImg: `<img class="pawPrintCards" src='images/orangepaw.png'>:`,
    brown: 0,
    brownID: $("#playerBrown"),
    brownImg: `<img class="pawPrintCards" src='images/brownpaw.png'>:`,
    black: 0,
    blackID: $("#playerBlack"),
    blackImg: `<img class="pawPrintCards" src='images/blackpaw.png'>:`,
    grey: 0,
    greyID: $("#playerGrey"),
    greyImg: `<img class="pawPrintCards" src='images/greypaw.png'>:`,
    white: 0,
    whiteID: $("#playerWhite"),
    whiteImg: `<img class="pawPrintCards" src='images/whitepaw.png'>:`,
};
//computer collected pawPrint cards, number and image
let computerPawPrints = {
    orange: 0,
    orangeID: $("#computerOrange"),
    orangeImg: `<img class="pawPrintCards" src='images/computerpaw.png'>:`,
    brown: 0,
    brownID: $("#computerBrown"),
    brownImg: `<img class="pawPrintCards" src='images/computerpaw.png'>:`,
    black: 0,
    blackID: $("#computerBlack"),
    blackImg: `<img class="pawPrintCards" src='images/computerpaw.png'>:`,
    grey: 0,
    greyID: $("#computerGrey"),
    greyImg: `<img class="pawPrintCards" src='images/computerpaw.png'>:`,
    white: 0,
    whiteID: $("#computerWhite"),
    whiteImg: `<img class="pawPrintCards" src='images/computerpaw.png'>:`,
};

//object representing all info about pawPrint pathways: 
//jQuery image, start node, end node, number of points/pawprint cards needed, color of pawprint cards needed, whether or not it's been claimed
const pawPrintPaths = {
$one: {
    $img: $(".one"),
    node1: 1,
    node2: 2,
    pawsNeeded: 7,
    color: "brown",
    clicked: false,
    player: 'onePlayer',
    computer:'oneComputer',
    id: "one"
},
$onea: {
    $img: $(".onea"),
    node1: 1,
    node2: 2,
    pawsNeeded: 7,
    color: "brown",
    clicked: false,
    player: 'oneaPlayer',
    computer:'oneaComputer',
    id: "one"
},
$two: {
    $img: $(".two"),
    node1: 2,
    node2: 3,
    pawsNeeded: 6,
    color: "grey",
    clicked: false,
    player: 'twoPlayer',
    computer:'twoComputer'
},
$three: {
    $img: $(".three"),
    node1: 3,
    node2: 4,
    pawsNeeded: 9,
    color: "white",
    clicked: false,
    player: 'threePlayer',
    computer:'threeComputer',
    id: "three"
},
$threea: {
    $img: $(".threea"),
    node1: 3,
    node2: 4,
    pawsNeeded: 9,
    color: "white",
    clicked: false,
    player: 'threeaPlayer',
    computer:'threeaComputer',
    id: "three"
},
// $threeb: {
//     $img: $(".threeb"),
//     node1: 3,
//     node2: 4,
//     pawsNeeded: 7,
//     color: "white",
//     clicked: false
// },
$four: {
    $img: $(".four"),
    node1: 1,
    node2: 5,
    pawsNeeded: 4,
    color: 'orange',
    clicked: false,
    player: 'fourPlayer',
    computer:'fourComputer'
},
$five: {
    $img: $(".five"),
    node1: 2,
    node2: 5,
    pawsNeeded: 5,
    color: "orange",
    clicked: false,
    player: 'fivePlayer',
    computer:'fiveComputer'
},
$six: {
    $img: $(".six"),
    node1: 2,
    node2: 6,
    pawsNeeded: 6,
    color: "black",
    clicked: false,
    player: 'sixPlayer',
    computer:'sixComputer'
},
$seven: {
    $img: $(".seven"),
    node1: 3,
    node2: 6,
    pawsNeeded: 3,
    color: "brown",
    clicked: false,
    player: 'sevenPlayer',
    computer:'sevenComputer'
},
$eight: {
    $img: $(".eight"),
    node1: 6,
    node2: 4,
    pawsNeeded: 6,
    color: 'grey',
    clicked: false,
    player: 'eightPlayer',
    computer:'eightComputer'
},
$nine: {
    $img: $(".nine"),
    node1: 1,
    node2: 7,
    pawsNeeded: 6,
    color: "white",
    clicked: false,
    player: 'ninePlayer',
    computer:'nineComputer'
},
$ten: {
    $img: $(".ten"),
    node1: 5,
    node2: 6,
    pawsNeeded: 6,
    color: "brown",
    clicked: false,
    player: 'tenPlayer',
    computer:'tenComputer'
},
$eleven: {
    $img: $(".eleven"),
    node1: 6,
    node2: 8,
    pawsNeeded: 3,
    color: "orange",
    clicked: false,
    player: 'elevenPlayer',
    computer:'elevenComputer'
},
// $twelve: {
//     $img: $(".twelve"),
//     node1: 6,
//     node2: 4,
//     pawsNeeded: 6,
//     color: 'grey',
//     clicked: false
// },
$thirteen: {
    $img: $(".thirteen"),
    node1: 7,
    node2: 5,
    pawsNeeded: 4,
    color: "black",
    clicked: false,
    player: 'thirteenPlayer',
    computer: 'thirteenComputer'
},
// $fourteen: {
//     $img: $(".fourteen"),
//     node1: 2,
//     node2: 3},
$fifteen: {
    $img: $(".fifteen"),
    node1: 5,
    node2: 8,
    pawsNeeded: 6,
    color: "grey",
    clicked: false,
    player: 'fifteenPlayer',
    computer:'fifteenComputer'
},
$sixteen: {
    $img: $(".sixteen"),
    node1: 4,
    node2: 9,
    pawsNeeded: 6,
    color: "orange",
    clicked: false,
    player: 'sixteenPlayer',
    computer:'sixteenComputer'
},
$seventeen: {
    $img: $(".seventeen"),
    node1: 8,
    node2: 9,
    pawsNeeded: 4,
    color: "white",
    clicked: false,
    player: 'seventeenPlayer',
    computer:'seventeenComputer'

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
    $('#computerScore').html(`${computerScore}`)
    playerScore = 0;
    $('#playerScore').html(`${playerScore}`);
    computerNodes.length=0;
    playerNodes.length=0;
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
    pawPrintCards = 200;
    $('#pawprintsRemaining').html(`${pawPrintCards} remaining`);
//empty player and computer catPaths
    playerCatPaths = [];
    computerCatPaths = [];
//set up available catPaths
    availableCatPaths = [$catPath1, $catPath2, $catPath3, $catPath4, $catPath5, $catPath6]
//set up new board
//clear computer's catPath cards
    $(".computerCatPaths").empty();
//clear player's pawPrint cards
    $(".playerCatPaths").empty();
//load resetted numbers for player cat paths
    $("#playerOrange").html(`<img class="pawPrintCards" src='images/orangepaw.png'>:${playerPawPrints.orange}`);
    $("#playerBlack").html(`<img class="pawPrintCards" src='images/blackpaw.png'>:${playerPawPrints.black}`);
    $("#playerGrey").html(`<img class="pawPrintCards" src='images/greypaw.png'>:${playerPawPrints.grey}`);
    $("#playerWhite").html(`<img class="pawPrintCards" src='images/whitepaw.png'>:${playerPawPrints.white}`);
    $("#playerBrown").html(`<img class="pawPrintCards" src='images/brownpaw.png'>:${playerPawPrints.brown}`);
//load resetted numbers for computer cat paths
    $("#computerOrange").html(`<img class="pawPrintCards" src='images/computerpaw.png'>:${computerPawPrints.orange}`);
    $("#computerBlack").html(`<img class="pawPrintCards" src='images/computerpaw.png'>:${computerPawPrints.black}`);
    $("#computerGrey").html(`<img class="pawPrintCards" src='images/computerpaw.png'>:${computerPawPrints.grey}`);
    $("#computerWhite").html(`<img class="pawPrintCards" src='images/computerpaw.png'>:${computerPawPrints.white}`);
    $("#computerBrown").html(`<img class="pawPrintCards" src='images/computerpaw.png'>:${computerPawPrints.brown}`);
//reset board visual
pawPrintPaths.$one.$img.html(`<img src="images/one.png"></img>`);
pawPrintPaths.$onea.$img.html(`<img src="images/onea.png"></img>`);
pawPrintPaths.$two.$img.html(`<img src="images/two.png"></img>`);
pawPrintPaths.$three.$img.html(`<img src="images/three.png"></img>`);
pawPrintPaths.$threea.$img.html(`<img src="images/threea.png"></img>`);
pawPrintPaths.$four.$img.html(`<img src="images/four.png"></img>`);
pawPrintPaths.$five.$img.html(`<img src="images/five.png"></img>`);
pawPrintPaths.$six.$img.html(`<img src="images/six.png"></img>`);
pawPrintPaths.$seven.$img.html(`<img src="images/seven.png"></img>`);
pawPrintPaths.$eight.$img.html(`<img src="images/eight.png"></img>`);
pawPrintPaths.$nine.$img.html(`<img src="images/nine.png"></img>`);
pawPrintPaths.$ten.$img.html(`<img src="images/ten.png"></img>`);
pawPrintPaths.$eleven.$img.html(`<img src="images/eleven.png"></img>`);
pawPrintPaths.$thirteen.$img.html(`<img src="images/thirteen.png"></img>`);
pawPrintPaths.$fifteen.$img.html(`<img src="images/fifteen.png"></img>`);
pawPrintPaths.$sixteen.$img.html(`<img src="images/sixteen.png"></img>`);
pawPrintPaths.$seventeen.$img.html(`<img src="images/seventeen.png"></img>`);

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
    if(pawPrintCards > 2 ){
    //random switch case to select a random pawprint card
        switch (Math.floor(Math.random() * 5)){
            case 0: 
                //adds paw card to player's pawPrints object
                player.orange ++;
                //adjust player's HTML to reflect accurate number
                player.orangeID.html(`${player["orangeImg"]}${player.orange}`);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
    
                break;
            case 1: 
                player.black ++;
                player.blackID.html(`${player["blackImg"]}${player.black}`);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
    
                break;
            case 2: 
                player.grey ++;
                player.greyID.html(`${player["greyImg"]}${player.grey}`);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
    
                break;
            case 3: 
                player.white ++;
                player.whiteID.html(`${player["whiteImg"]}${player.white}`);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
    
                break;
            case 4: 
                player.brown ++;
                player.brownID.html(`${player["brownImg"]}${player.brown}`);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
    
                break;
        }
    }
};

const addAnimatedPawPrint =  (player) => {
    //while there are pawprint cards left
    if(pawPrintCards > 2 ){
    //random switch case to select a random pawprint card
        switch (Math.floor(Math.random() * 5)){
            case 0: 
                //adds paw card to player's pawPrints object
                player.orange ++;
                //adjust player's HTML to reflect accurate number
                player.orangeID.html(`${player["orangeImg"]}${player.orange}`).hide().animate({height:'toggle'}, 1000);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
                break;
            case 1: 
                player.black ++;
                player.blackID.html(`${player["blackImg"]}${player.black}`).hide().animate({height:'toggle'}, 1000);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
                break;
            case 2: 
                player.grey ++;
                player.greyID.html(`${player["greyImg"]}${player.grey}`).hide().animate({height:'toggle'}, 1000);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
                break;
            case 3: 
                player.white ++;
                player.whiteID.html(`${player["whiteImg"]}${player.white}`).hide().animate({height:'toggle'}, 1000);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
                break;
            case 4: 
                player.brown ++;
                player.brownID.html(`${player["brownImg"]}${player.brown}`).hide().animate({height:'toggle'}, 1000);
                pawPrintCards--;
                $('.pawprints').html(`<h2>Pawprint<br>cards:</h2>
                <button><img id="pawprint" src="images/pawprint.png"></button>
                <h3 id="pawprintsRemaining">${pawPrintCards} remaining</h2>`);
                break;
        }
    }
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
            console.log(availableCatPaths);
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
        winTheGame();
        //runs if computer cat path array is empty (if computer has no cat paths yet)
        function isEmpty(o){
            for (let i in o) {
                if(o.hasOwnProperty(i)){
                    winTheGame();
                    return false;
                }
            }
            winTheGame();
            return true;
        }
        if (isEmpty(computerCatPaths)){

            //runs random cat path selection function
            selectCatPath();
            //pushes selected cat path to computer's cat path array
            computerCatPaths.push(currentCatPath);
            // console.log(`computer catpath ${computerCatPaths}`);
            //appends appropriate cat path image to game board
            $('.computerCatPaths').append(`<li><img class="catPathCards" src="images/computerCatPathCard.png"></li>`).hide().animate({height:'toggle'}, 1500);
            winTheGame();
 

        }
        else {
            //runs computer AI
            computerPlay();
        }
    }
    else {
        winTheGame();
        (function () {
            $("#noMoreCatPaths").find(".noCatPaths").unbind().click(function()
            {
                $("#noMoreCatPaths").hide();
                $game.show()
            });
            })();
        (function noMoreCatPaths(msg, gfg) {
            console.log("is this stupid function even running")
                var confirmBox = $("#noMoreCatPaths");
                $game.hide();
                /* Trace message to display */
                confirmBox.find(".noMoreCatPaths").html(msg);
                    
                /* Calling function */
                confirmBox.find(".ok").unbind().click(function()
                {
                    //hide message box
                    confirmBox.hide();
                });
                confirmBox.find(".ok").click(gfg);
                confirmBox.show();
            })();
        $("#noMoreCatPaths").show();
                $(".noMoreCatPaths").html(`<p>There are no more cat path cards to draw! Get as many paths as you can before the game ends!</p><br><button class="noCatPaths">Ok!</button>`); 
                $("#noMoreCatPaths").find(".noCatPaths").unbind().click(function()
                {
                    $("#noMoreCatPaths").hide();
                    $game.show()
                });
    }
})

//click that gives player pawprint cards
//adds computer cards right after player cards if computer has fewer than four cards of each color
$(".pawprints").on('click', () => {
    //add three pawprint cards to player array and status box
    // console.log(playerCatPaths)
    function isEmpty(object){
        for (let i in object) {
            if(object.hasOwnProperty(i)){
                winTheGame();
                return false;
            }
        }
        winTheGame();
        return true;
    }
    if (isEmpty(playerCatPaths)){
        // alert(`Begin by picking a cat-path card!`)
        (function () {
            $("#drawACatPath").find(".noCatPaths").unbind().click(function()
            {
                $("#drawACatPath").hide();
                $game.show()
            });
            })();
        (function noMoreCatPaths(msg, gfg) {
            console.log("is this stupid function even running")
                var confirmBox = $("#drawACatPath");
                $game.hide();
                /* Trace message to display */
                confirmBox.find(".drawACatPath").html(msg);
                    
                /* Calling function */
                confirmBox.find(".drawCatPath").unbind().click(function()
                {
                    //hide message box
                    confirmBox.hide();
                });
                confirmBox.find(".drawCatPath").click(gfg);
                confirmBox.show();
            })();
        $("#drawACatPath").show();
                $(".drawACatPath").html(`<p>Begin by picking a cat-path card!</p><br><button class="drawCatPath">Ok!</button>`); 
                $("#drawACatPath").find(".drawACatPath").unbind().click(function()
                {
                    $("#drawACatPath").hide();
                    $game.show()
                });
    }
    else if (pawPrintCards> 3){
        addPawPrint(playerPawPrints);
        addPawPrint(playerPawPrints);
        addPawPrint(playerPawPrints);
        // winTheGame();

            //runs computer AI
        computerPlay();
    }
    // }
        else if (pawPrintCards <= 2 && pawPrintCards > 0){
            (function () {
                $("#noMorePawPrints").find(".noPawPrints").unbind().click(function()
                {
                    $("#noMorePawPrints").hide();
                    $game.show()
                });
                })();
            (function noMorePawPrints(msg, gfg) {
                console.log("is this stupid function even running")
                    var confirmBox = $("#noMorePawPrints");
                    $game.hide();
                    /* Trace message to display */
                    confirmBox.find(".noMorePawPrints").html(msg);
                        
                    /* Calling function */
                    confirmBox.find(".ok").unbind().click(function()
                    {
                        //hide message box
                        confirmBox.hide();
                    });
                    confirmBox.find(".ok").click(gfg);
                    confirmBox.show();
                })();
            $("#noMorePawPrints").show();
                    $(".noMorePawPrints").html(`<p>There are not enough pawprint cards for you to draw. You can select one more cat-path before a winner is determined.</p><br><button class="noPawPrints">Ok!</button>`); 
                    $("#noMorePawPrints").find(".noPawPrints").unbind().click(function()
                    {
                        $("#noMorePawPrints").hide();
                        $game.show()
                    });

            pawPrintCards = 0;
        }
})


//runs on clicking pathway 
// $one.$img.on("click", () => {
//     console.log("testing")
// });

//Checks if player has enough pawprint cards to claim a pathway--collects the pathway if so
const checkPawPrints = (clickedObject) => {
         //color of the clicked path
         let clickedColor = clickedObject.color;
         //number of pawprints needed for the clicked path
         let pawsRequired = clickedObject.pawsNeeded;
         //if the player has enough pawprint cards to claim the path
         if(playerPawPrints[clickedColor] >= pawsRequired) {
             //if the path has not been claimed
             console.log("l;ine 704 clicked object: " + clickedObject["id"]);
             if(clickedObject["clicked"] === false){
                 if(clickedObject["id"] === "one" || clickedObject["id"] === "onea") {
                     //add pawsRequired score value to player's score
                     playerScore = playerScore + pawsRequired;
                     //send pawPrintPath's first node to player's collected Nodes
                     playerNodes.push(clickedObject.node1);
                     //send pawPrintPath's second node to player's collected Nodes
                     playerNodes.push(clickedObject.node2);
                     //update player score display
                     $('#playerScore').html(`${playerScore}`);
                     //remove cards used from player's collection
                     playerPawPrints[clickedColor] =playerPawPrints[clickedColor]- pawsRequired;
                     //update player card collection display
                     playerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/${clickedColor}paw.png'>:${playerPawPrints[clickedColor]}`);
                     //indicate path has been claimed and cannot be claimed again
                     pawPrintPaths["$one"]["clicked"] = true;
                     pawPrintPaths["$onea"]["clicked"] = true;
                     console.log(clickedObject.$img)
                     console.log(clickedObject.player)
                     pawPrintPaths["$one"]["$img"].html(`<img src="images/onePlayer.png"></img>`).hide().slideDown(2500);
                     pawPrintPaths["$onea"]["$img"].html(`<img src="images/oneaPlayer.png"></img>`).hide().slideDown(2500);
                     winTheGame();
            
                     //runs computer AI
                     computerPlay();
                 }
                 else if(clickedObject["id"] === "three" || clickedObject["id"] === "threea") {
                     //add pawsRequired score value to player's score
                     playerScore = playerScore + pawsRequired;
                     //send pawPrintPath's first node to player's collected Nodes
                     playerNodes.push(clickedObject.node1);
                     //send pawPrintPath's second node to player's collected Nodes
                     playerNodes.push(clickedObject.node2);
                     //update player score display
                     $('#playerScore').html(`${playerScore}`);
                     //remove cards used from player's collection
                     playerPawPrints[clickedColor] =playerPawPrints[clickedColor]- pawsRequired;
                     //update player card collection display
                     playerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/${clickedColor}paw.png'>:${playerPawPrints[clickedColor]}`);
                     //indicate path has been claimed and cannot be claimed again
                     pawPrintPaths["$three"]["clicked"] = true;
                     pawPrintPaths["$threea"]["clicked"] = true;
                     console.log(clickedObject.$img)
                     console.log(clickedObject.player)
                     pawPrintPaths["$three"]["$img"].html(`<img src="images/threePlayer.png"></img>`).hide().slideDown(2500);
                     pawPrintPaths["$threea"]["$img"].html(`<img src="images/threeaPlayer.png"></img>`).hide().slideDown(2500);
                     winTheGame();
            
                     //runs computer AI
                     computerPlay();
                 }
                 else{
                     //add pawsRequired score value to player's score
                     playerScore = playerScore + pawsRequired;
                     //send pawPrintPath's first node to player's collected Nodes
                     playerNodes.push(clickedObject.node1);
                     //send pawPrintPath's second node to player's collected Nodes
                     playerNodes.push(clickedObject.node2);
                     //update player score display
                     $('#playerScore').html(`${playerScore}`);
                     //remove cards used from player's collection
                     playerPawPrints[clickedColor] =playerPawPrints[clickedColor]- pawsRequired;
                     //update player card collection display
                     playerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/${clickedColor}paw.png'>:${playerPawPrints[clickedColor]}`);
                     //indicate path has been claimed and cannot be claimed again
                     clickedObject["clicked"] = true;
                     console.log(clickedObject.$img)
                     console.log(clickedObject.player)
                     clickedObject.$img.html(`<img src="images/${clickedObject.player}.png"></img>`).hide().slideDown(2500);
                    //  winTheGame();
                    //  return;
            
                     //runs computer AI
                     computerPlay();
                 }
         }
         else if (clickedObject["clicked"] === true) {
            winTheGame();
            (function () {
                $("#claimedPawPath").find(".okPawPath").unbind().click(function()
                {
                    $("#claimedPawPath").hide();
                    $game.show()
                });
                })();
            (function claimedPawPath(msg, gfg) {
                console.log("is this stupid function even running")
                    var confirmBox = $("#claimedPawPath");
                    $game.hide();
                    /* Trace message to display */
                    confirmBox.find(".claimedPawPath").html(msg);
                        
                    /* Calling function */
                    confirmBox.find(".ok").unbind().click(function()
                    {
                        //hide message box
                        confirmBox.hide();
                    });
                    confirmBox.find(".ok").click(gfg);
                    confirmBox.show();
                })();
            $("#claimedPawPath").show();
                    $(".claimedPawPath").html(`<p>That path has already been claimed. Please select a different path or draw paw print cards.</p><br><button class="okPawPath">Ok!</button>`); 
                    $("#claimedPawPath").find(".okPawPath").unbind().click(function()
                    {
                        $("#claimedPawPath").hide();
                        $game.show()
                    });

            // alert("That cat path has already been claimed!")}
         }
        }
         else {
            winTheGame();
             alert(`You do not have enough ${clickedColor} pawprint cards to collect that path! Keep collecting.`)
         }
    // }
};

const checkComputerPawPrints = (clickedObject) => {
    let clickedColor = clickedObject.color;
    let pawsRequired = clickedObject.pawsNeeded;
    if(computerPawPrints[clickedColor] >= pawsRequired) {
        if(clickedObject["id"] === "one" || clickedObject["id"] === "onea") {
            //add pawsRequired score value to computer's score
            computerScore = computerScore + pawsRequired;
            //send pawPrintPath's first node to computer's collected Nodes
            computerNodes.push(clickedObject.node1);
            //send pawPrintPath's second node to computer's collected Nodes
            computerNodes.push(clickedObject.node2);
            //update computer score display
            $('#computerScore').html(`${computerScore}`);
            //remove cards used from computer's collection
            computerPawPrints[clickedColor] =computerPawPrints[clickedColor]- pawsRequired;
            //update computer card collection display
            computerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/computerpaw.png'>:${computerPawPrints[clickedColor]}`).hide().animate({height:'toggle'}, 1000);
            //indicate path has been claimed and cannot be claimed again
            pawPrintPaths["$one"]["clicked"] = true;
            pawPrintPaths["$onea"]["clicked"] = true;
            console.log(clickedObject.$img)
            console.log(clickedObject.computer)
            pawPrintPaths["$one"]["$img"].html(`<img src="images/oneComputer.png"></img>`).hide().slideDown(2500);
            pawPrintPaths["$onea"]["$img"].html(`<img src="images/oneaComputer.png"></img>`).hide().slideDown(2500)
            winTheGame();
        }
        else if(clickedObject["id"] === "three" || clickedObject["id"] === "threea") {
            //add pawsRequired score value to computer's score
            computerScore = computerScore + pawsRequired;
            //send pawPrintPath's first node to computer's collected Nodes
            computerNodes.push(clickedObject.node1);
            //send pawPrintPath's second node to computer's collected Nodes
            computerNodes.push(clickedObject.node2);
            //update computer score display
            $('#computerScore').html(`${computerScore}`);
            //remove cards used from computer's collection
            computerPawPrints[clickedColor] =computerPawPrints[clickedColor]- pawsRequired;
            //update computer card collection display
            computerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/computerpaw.png'>:${computerPawPrints[clickedColor]}`).hide().animate({height:'toggle'}, 1000);
            //indicate path has been claimed and cannot be claimed again
            pawPrintPaths["$three"]["clicked"] = true;
            pawPrintPaths["$threea"]["clicked"] = true;
            console.log(clickedObject.$img)
            console.log(clickedObject.computer)
            pawPrintPaths["$three"]["$img"].html(`<img src="images/threeComputer.png"></img>`).hide().slideDown(2500);
            pawPrintPaths["$threea"]["$img"].html(`<img src="images/threeaComputer.png"></img>`).hide().slideDown(2500)
            winTheGame();
        }
        else{
            //add pawsRequired score value to computer's score
            computerScore = computerScore + pawsRequired;
            //send pawPrintPath's first node to computer's collected Nodes
            computerNodes.push(clickedObject.node1);
            //send pawPrintPath's second node to computer's collected Nodes
            computerNodes.push(clickedObject.node2);
            console.log("computer Nodes line 738" + computerNodes);
            //update computer score display
            $('#computerScore').html(`${computerScore}`);
            //remove cards used from computer's collection
            computerPawPrints[clickedColor] =computerPawPrints[clickedColor]- pawsRequired;
            //update computer card collection display
            computerPawPrints[`${clickedColor}ID`].html(`<img class="pawPrintCards" src='images/computerpaw.png'>:${computerPawPrints[clickedColor]}`).hide().animate({height:'toggle'}, 1000);
            //indicate path has been claimed and cannot be claimed again
            clickedObject["clicked"] = true;
            //changes pawpath image to computer claimed
            clickedObject.$img.html(`<img src="images/${clickedObject.computer}.png"></img>`).hide().slideDown(2500)
            winTheGame();
        }
    }
};

// for(let key2 in pawPrintPaths){
//     if([pawPrintPaths[key2]["clicked"]] === false) {
//         break;
//     }
//     else {
//         //click event for all pawprint paths
//         for(let key in pawPrintPaths) {
//             //upon clicking the pathway image
//             pawPrintPaths[key]["$img"].on("click", () => {
//                 //check if pathway has already been claimed
//                 if(pawPrintPaths[key]["clicked"] === false) {
//                     //if there are pawprint cards left
//                     if(pawPrintCards > 2){
//                     //runs function to trade cards for pathway
//                     checkPawPrints(pawPrintPaths[key]);
//                     }
//                     //if there aren't pawPrint cards left
//                     else{
//                         //announce the winner
//                         checkPawPrints(pawPrintPaths[key]);
//                         announceWinner();
//                     }

//                 }
//                 //if pathway has already been claimed
//                 else{
//                     //alert that pathway has already been claimed
//                     alert("This path has already been claimed! Please pick a different path");
//                 }
//             })
//         };
//     }
// }
const confirmAllPathClicks = () => {
    for(let key in pawPrintPaths){
        if (pawPrintPaths[key]["clicked"] === false){
            return;
        }
    }
    announceWinner();
};

//click event for all pawprint paths
for(let key in pawPrintPaths) {
    // confirmAllPathClicks();
    //upon clicking the pathway image
    pawPrintPaths[key]["$img"].on("click", () => {
        //check if pathway has already been claimed
        if(pawPrintPaths[key]["clicked"] === false) {
            //if there are pawprint cards left
            if(pawPrintCards > 2){
            //runs function to trade cards for pathway
            checkPawPrints(pawPrintPaths[key]);
            }
            //if there aren't pawPrint cards left
            else{
                //announce the winner
                checkPawPrints(pawPrintPaths[key]);
                announceWinner();
            }

        }
        //if pathway has already been claimed
        else{
            (function () {
                $("#claimedPawPath").find(".okPawPath").unbind().click(function()
                {
                    $("#claimedPawPath").hide();
                    $game.show()
                });
                })();
            (function claimedPawPath(msg, gfg) {
                console.log("is this stupid function even running")
                    var confirmBox = $("#claimedPawPath");
                    $game.hide();
                    /* Trace message to display */
                    confirmBox.find(".claimedPawPath").html(msg);
                        
                    /* Calling function */
                    confirmBox.find(".ok").unbind().click(function()
                    {
                        //hide message box
                        confirmBox.hide();
                    });
                    confirmBox.find(".ok").click(gfg);
                    confirmBox.show();
                })();
            $("#claimedPawPath").show();
                    $(".claimedPawPath").html(`<p>That path has already been claimed. Please select a different path or draw paw print cards.</p><br><button class="okPawPath">Ok!</button>`); 
                    $("#claimedPawPath").find(".okPawPath").unbind().click(function()
                    {
                        $("#claimedPawPath").hide();
                        $game.show()
                    });
        }
    })
};


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
    N[2].add(N[5]);
    N[2].add(N[6]);
    N[3].add(N[2]);
    N[3].add(N[4]);
    N[3].add(N[6]);
    N[4].add(N[3]);
    N[4].add(N[6]);
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
    //push node to array twice to ensure both sides of path are covered--will remove beginning and ending node repeats later
    path.push(node.val);
    path.push(node.val);
    // console.log("Current Path", path);
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
    validPaths.length = 0;
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
    for(i=0; i<playerPathOptions[0].length; i++){
    playerPathOptions[0][i].shift();
    playerPathOptions[0][i].pop();
    }
}
const logComputerWinningCatPaths = () => {
    //empty out computerPathOptions
    computerPathOptions.length = 0;
    // console.log(computerPathOptions);
    //run winning combos function with computer's path's arrays
    collateWinningCatPaths(computerCatPaths);
    //sort computer potential winning paths from shortest to longest
    //so computer will attempt to acquire the shortest path
    validPaths.sort(function (a,b){
        if(a.length>b.length) return 1;
        if(a.length<b.length) return -1;
        return 0;
    });
    //push potential computer winning paths to the computerPathOptions array
    computerPathOptions.push(validPaths);
    for(i=0; i<computerPathOptions[0].length; i++){
        computerPathOptions[0][i].shift();
        computerPathOptions[0][i].pop();
        // console.log(computerPathOptions);
        // computerPathOptions.length = 0;
        // console.log(computerPathOptions.length);
        // console.log(computerPathOptions[0].length)
        }
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
/*    logComputerWinningCatPaths();
    let hasAllElems = true;
    for(i=0; i<computerPathOptions[0].length; i++){
        if(computerPathOptions[0][i].every(elem => computerNodes.includes(elem))){
            computerScore = computerScore + 20;
            $('#computerScore').html(`${computerScore}`);
            hasAllElems = true;
            break;
        }
        else {
            hasAllElems = false;
        }
    }
    if (hasAllElems === false){*/

// const checkNodes = () => {
//     if (computerCheckNodes[j] === computerPathOptions[0][i][k]){
//         console.log("this is the path option pre splice" + computerPathOptions[0][i]);
//         console.log("computernode pre splice" + computerCheckNodes);
//         console.log("this node matches" + computerCheckNodes[j]);
//         //slice it from the path options
//         computerPathOptions[0][i].splice(k,1);
//         //slice it from the computerNodes
//         computerCheckNodes.splice(j,1)
//         console.log("computerNodes post splice" + computerCheckNodes)
//         console.log("path options post splice" + computerPathOptions[0][i]);
// }
// }
 
function containsAll(target, toTest) {
    const dictionary = {}

    target.forEach(element => {
        if (dictionary[element] === undefined) {
            dictionary[element] = 1;
            return;
        }
        dictionary[element]++;
    });


    toTest.forEach(element => {
        if (dictionary[element] !== undefined)
            dictionary[element]--;
    })

    for (let key in dictionary) {
        if (dictionary[key] > 0) return false;
    }

    return true;
}
//computerPathOptions[0]
//compare computerPathOptions[0] nodes to pawPrintPaths nodes. If a pawPrint path has two of the nodes from that array, 
//and the computer has the correct number of the correct color of pawprint cards, claim that path.
const computerPlay = () => {
    logComputerWinningCatPaths();
    //load computer's potential winning arrays
    if (computerPawPrints.orange < 4 && computerPawPrints.black < 4 && computerPawPrints.grey < 4 && computerPawPrints.white < 4 && computerPawPrints.brown < 4){
        //add three pawprint cards to computer array and status box, if computer doesn't have enough pawprints to pick a path
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
        winTheGame();
        return;
        }
    else {
    // logComputerWinningCatPaths();
    let hasAllElems = true;
    let computerCheckNodes = [];
    for(i=0; i<2; i++){
        //as long as the computer has catPaths
        if(computerPathOptions[0][i] != undefined){
            //if the computer has achieved its cat path
            if(containsAll(computerPathOptions[0][i], computerNodes)){
                //remove that catpath from the computer's list
                computerCatPaths.shift();
                //if there are cat paths available, select a new cat path
                    if(availableCatPaths.length > 0){
                    //select a new cat path 
                        selectCatPath();
                    //append new cat path to computer's list
                        computerCatPaths.push(currentCatPath)
                    //append appropriate cat path image to game board
                        $('.computerCatPaths').append(`<li><img class="catPathCards" src="images/computerCatPathCard.png"></li>`).hide().animate({height:'toggle'}, 1000);
                        hasAllElems = true;
                        winTheGame();
                        return;
                    }
                //if there aren't catPaths available, computer selects the first pawPrint path that it can
                    else{                  
                        for (let key in pawPrintPaths){
                            if((pawPrintPaths[key]["clicked"] === false && (computerPawPrints[pawPrintPaths[key]["color"]]) > pawPrintPaths[key]["pawsRequired"])) {
                                checkComputerPawPrints(pawPrintPaths[key]["$img"]);
                                console.log("line 1401 is grabbing pawprint paths");
                                winTheGame();
                                break;
                            }
                        }
                        //if the computer can't select a pawPrint path, it acquires pawPrint cards
                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
                        winTheGame();
                        return;
                    }
            }
            else {
                hasAllElems = false;
            }
        }
        //if the computer does not have a cat path
        else{
            //if there are cat paths available
            if(availableCatPaths.length > 0){
                //select a new cat path 
                    selectCatPath();
                //append new cat path to computer's list
                    computerCatPaths.push(currentCatPath)
                //append appropriate cat path image to game board
                    $('.computerCatPaths').append(`<li><img class="catPathCards" src="images/computerCatPathCard.png"></li>`).hide().animate({height:'toggle'}, 1000);
                    hasAllElems = true;
                    winTheGame();
                    return;
                }
            else if(availableCatPaths.length<0) {
                //if there are not cat paths available computer selects the first pawPrint path
                for (let key in pawPrintPaths){
                    if((pawPrintPaths[key]["clicked"] === false && (computerPawPrints[pawPrintPaths[key]["color"]]) > pawPrintPaths[key]["pawsNeeded"])) {
                        checkComputerPawPrints(pawPrintPaths[key]["$img"]);
                        console.log("line 1436 is grabbing pawprint paths");
                        winTheGame();
                        return;
                    }
                }
                //if the computer cannot select a pawprint path, it draws cards
                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
                winTheGame();
                return;
            }
        }
        }
    // }
    // console.log("computer nodes line 1021" + computerNodes)
    computerCheckNodes.push(computerNodes);
    // console.log("computer check nodes line 1023" + computerCheckNodes);
    let computerPathOptionsFiltered=[];
    //check if computer node matches potential path; delete from computer node if so
    //for the computer path options
    for(i=0; i<3; i++){
        //and for the computer nodes
        for(j=0; j<computerCheckNodes[j]; j++){
            //limiting the computer path options to the first three possibilities
            for(k=0; k<computerPathOptions[0][i].length; k++){
            //if computerNodes value is the same as catPathOptions value
                if (computerCheckNodes[j] === computerPathOptions[0][i][k]){
                    //slice it from the path options
                    computerPathOptions[0][i].splice(k,1);
                    //slice it from the computerNodes
                    computerCheckNodes.splice(j,1)
                }
            }
        }
    }
       
    if (hasAllElems === false){
    // if(computerPawPrints)
    // let computerPotentialPaths = [];
    //if a potential winning array does not contain the nodes the computer has already acquired, 
    //delete it from the computer's potential winning array
    //if the computer has already acquired pawPrintPaths...
    if(computerNodes.length > 0){
        for(i=0; i<3; i++){
            console.log("computerNodes 1082: " + computerNodes)
            //loop over the already acquired computer pawprint paths
            for(j=0; j<computerNodes.length; j++){
                console.log("computerNodes 1085: " + computerNodes)
                //if the computer path option does not include the existing computer nodes...
                //if (computerPathOptions[0][i].every(elem => computerNodes.includes)){
                 if(containsAll(computerPathOptions[0][i], computerNodes)){

                    //push that path options to the filtered path list
                    computerPathOptionsFiltered.push(computerPathOptions[0][i])
                    // console.log("computerPathOptionsFiltered 1092: " + computerPathOptionsFiltered)
                } 
            }
        }
        if(computerPathOptionsFiltered[0] != undefined){
        for(let key in pawPrintPaths){
            //loop over the two three computer potential winning options
            for(i=0; i<3; i++){
                console.log("1105 computer path options filtered: " + computerPathOptionsFiltered[0][i])
                //if the required node to collect a pawPrintPath matches a node of the computer path options...
                for(k=0; k<computerPathOptionsFiltered[0][i].length; k++){
                    //if node1 for the pawPrintPath equals the computer path option
                    if(pawPrintPaths[key].node1 === computerPathOptionsFiltered[0][i][k]){
                        //loop again over the computer path options
                        for(j=0; j<computerPathOptionsFiltered[0][i].length; j++){
                            //if the second required node to collect a pawPrintPath matches a node of the computer path options
                            if (pawPrintPaths[key].node2 === computerPathOptionsFiltered[0][i][j]){
                                //if the computer has enough pawPrints of the right color to claim that path...
                                    if(pawPrintPaths[key]["clicked"] === false){
                                        if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
                                            checkComputerPawPrints(pawPrintPaths[key])
                                            console.log("line 1510 is grabbing pawprint paths");
                                            winTheGame();
                                            return;
                                        }
                                        // else {
                                        //     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                                        //     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                                        //     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
                                 
                                        //     return;
                                        // }
                                    }
                                    }
                        
                            }
                        }
                    }
                } 
            }
            for(let key in pawPrintPaths){
                //loop over the first three computer potential winning options
                for(i=0; i<3; i++){
                    console.log("1105 computer path options filtered: " + computerPathOptionsFiltered[0][i])
                    //if the required node to collect a pawPrintPath matches a node of the computer path options...
                    for(k=0; k<computerPathOptionsFiltered[0][i].length; k++){
                        //if node1 for the pawPrintPath equals the computer path option
                        if(pawPrintPaths[key].node1 === computerPathOptionsFiltered[0][i][k]){
                            //loop again over the computer path options
                            for(j=0; j<computerPathOptionsFiltered[0][i].length; j++){
                                //if the second required node to collect a pawPrintPath matches a node of the computer path options
                                if (pawPrintPaths[key].node2 === computerPathOptionsFiltered[0][i][j]){
                                    //if the computer has enough pawPrints of the right color to claim that path...
                                        if(pawPrintPaths[key]["clicked"] === false){
                                            if(computerPawPrints[pawPrintPaths[key]["color"]] < pawPrintPaths[key]["pawsNeeded"]) {
                                                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                                                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                                                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
                                                console.log("line 1547 is drawing pawprint cards");
                                                winTheGame();
                                                return;
                                            }
                                            // else {
                                            //     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                                            //     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                                            //     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
                                     
                                            //     return;
                                            // }
                                        }
                                        }
                            
                                }
                            }
                        }
                    } 
                }
            
            console.log("trying line 1358")
            for(let key in pawPrintPaths){
                if(pawPrintPaths[key]["clicked"] === false && computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
                    // console.log(pawPrintPaths[key]["clicked"]);
                    // console.log(computerPawPrints[pawPrintPaths][key]["color"])
                    // console.log(pawPrintPaths[key]["pawsNeeded"])
                        checkComputerPawPrints(pawPrintPaths[key])
                        console.log("line 1560 is grabbing pawprint paths");
                        winTheGame();
                        return;
                    }
            }
            setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
            setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
            setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
            winTheGame();
            return;
        }
    }   
   
    //loop over pawPrintPaths
    for(let key in pawPrintPaths){
        //loop over the first three computer potential winning options
        for(i=0; i<3; i++){
            console.log(computerPathOptions[0][i])
            //if the required node to collect a pawPrintPath matches a node of the computer path options...
            for(k=0; k<computerPathOptions[0][i].length; k++){
                console.log(computerPathOptions[0][i])
                //if node1 for the pawPrintPath equals the computer path option
                if(pawPrintPaths[key].node1 === computerPathOptions[0][i][k]){
                    //loop again over the computer path options
                    for(j=0; j<computerPathOptions[0][i].length; j++){
                        //if the second required node to collect a pawPrintPath matches a node of the computer path options
                        if (pawPrintPaths[key].node2 === computerPathOptions[0][i][j]){
                            //if the computer has enough pawPrints of the right color to claim that path...
                            if(pawPrintPaths[key]["clicked"] === false){
                                if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
                                    console.log(pawPrintPaths[key])
                                    checkComputerPawPrints(pawPrintPaths[key])
                                    console.log("line 1594 is grabbing pawprint paths");
                                    winTheGame();
                                    return;
                                }
                                
                                }
                            }
                        }
                    }
                }
            }
        }
        for(let key in pawPrintPaths){
            //loop over the first three computer potential winning options
            for(i=0; i<3; i++){
                console.log(computerPathOptions[0][i])
                //if the required node to collect a pawPrintPath matches a node of the computer path options...
                for(k=0; k<computerPathOptions[0][i].length; k++){
                    console.log(computerPathOptions[0][i])
                    //if node1 for the pawPrintPath equals the computer path option
                    if(pawPrintPaths[key].node1 === computerPathOptions[0][i][k]){
                        //loop again over the computer path options
                        for(j=0; j<computerPathOptions[0][i].length; j++){
                            //if the second required node to collect a pawPrintPath matches a node of the computer path options
                            if (pawPrintPaths[key].node2 === computerPathOptions[0][i][j]){
                                //if the computer has enough pawPrints of the right color to claim that path...
                                if(pawPrintPaths[key]["clicked"] === false){
                                    if(computerPawPrints[pawPrintPaths[key]["color"]] < pawPrintPaths[key]["pawsNeeded"]) {
                                        console.log("line 1606 is giving out cards yay")
                                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
                                        winTheGame();
                                        return;
                                    }
                                    
                                    }
                                }
                            }
                        }
                    }
                }
            }
        for(key in pawPrintPaths){
            if(pawPrintPaths[key]["clicked"] === false){
                if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
                    checkComputerPawPrints(pawPrintPaths[key]);
                    winTheGame();
                    return;
                }
            }
        }
        {
        console.log("line 1652 is giving out cards yay")
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
        winTheGame();
        return;
    }
    const isClicked = (element) => {
        element["clicked"] === true
    }
 



    console.log("line 1399 is giving out cards")
//     if(availableCatPaths.length > 0) {
//         selectCatPath();
//         //append new cat path to computer's list
//         computerCatPaths.push(currentCatPath)
//         //append appropriate cat path image to game board
//         $('.computerCatPaths').append(`<li><img class="catPathCards" src="images/computerCatPathCard.png"></li>`).hide().animate({height:'toggle'}, 1000);
//         hasAllElems = true;
//         return;
//     }
//     else{
//     for(let key in pawPrintPaths){
//         if(pawPrintPaths[key]["clicked"] === false){
//             if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
//                 console.log(pawPrintPaths[key])
//                 checkComputerPawPrints(pawPrintPaths[key])
//                 return;
//             }
//         }
//     }
// }
    setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
    setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
    setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
    winTheGame();
    return;
// //if computer does not perform any of the previous functions, it will claim a random cat path if it has enough cards
//     for (let key in pawPrintPaths) {
//         if(pawPrintPaths[key]["clicked"] === false){
//             // console.log("paws available" + computerPawPrints[pawPrintPaths[key]["color"]])
//             // console.log("paws needed" + pawPrintPaths[key]["pawsNeeded"])
//             if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
//             console.log(pawPrintPaths[key])
//             checkComputerPawPrints(pawPrintPaths[key])
//             return;
//             }
//         }
//     }
// //or it will draw pawprint cards
//     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
//     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
//     setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);



    }  
    //check if someone has won
    winTheGame();
    }
    //looping through the first three cat path winning options
    // for(i=0; i<2; i++){
    //     //if the computer has completed all of its cat paths
    //     if(computerPathOptions[0][i] === 0){
    //     //     //if the computer has achieved its cat paths
    //         if(containsAll(computerPathOptions[0][i], computerNodes)){
    //             for(let key in pawPrintPaths){
    //                 if(pawPrintPaths[key]["clicked"] === false){
    //                     if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
    //                         console.log(pawPrintPaths[key])
    //                         checkComputerPawPrints(pawPrintPaths[key])
    //                         return;
    //                     }
    //                 }
    //             }
    //          }
    //     }
    //     else {
    //         for(let key in pawPrintPaths){
    //             if(pawPrintPaths[key]["clicked"] === false){
    //                 if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
    //                     console.log(pawPrintPaths[key])
    //                     checkComputerPawPrints(pawPrintPaths[key])
    //                     return;
    //                 }
    //             }
    //         }
    //     }
    // }
    //logComputerWinningCatPaths();
    if(computerCatPaths.length === 0 && availableCatPaths.length === 0){
        console.log("1455 conditional is running")
        for(let key in pawPrintPaths){
            if(pawPrintPaths[key]["clicked"] === false){
                if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
                    console.log(pawPrintPaths[key])
                    checkComputerPawPrints(pawPrintPaths[key])
                    winTheGame();
                    return;
                }
            }
        }
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
        winTheGame();
        return;
    }
    // for(let key in pawPrintPaths){
    //     if(pawPrintPaths[key]["clicked"] === false){
    //         if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
    //             console.log(pawPrintPaths[key])
    //             checkComputerPawPrints(pawPrintPaths[key])
    //             return;
    //         }
    //     }
    // }
    // setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
    // setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
    // setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
    // winTheGame();
    

}





$("#feedback").on('click', () => {announceWinner()});



//compare playerPaths to player potential winning paths, assign points based on whether player achieved all paths picked
// const checkPlayerWinningPaths = () => {
//     //collate winning cat paths, put in array for use
//     logPlayerWinningCatPaths();
//     let hasAllElems = true;
//     //compare player array to potential winning arrays
//     for(i=0; i<playerPathOptions[0].length; i++){
//         //if player array includes all the values in one of potential winning arrays...
//         //if(playerPathOptions[0][i].every(elem => playerNodes.includes(elem))){
//         if(containsAll(playerPathOptions[0][i], playerNodes)){
//             console.log("player got all its paths line 1824: " + playerScore)
//             //add 20 points to player score
//             playerScore = playerScore + 10;
//             console.log("player after score adjustment line 1827: " + playerScore)
//             //update player score on gameboard
//             $('#playerScore').html(`${playerScore}`);
//             //prevent score reduction
//             hasAllElems = true;
//             break;
//         }
//         else {
//             hasAllElems = false;
//         }
//     }
//     //if player did not succeed at all cat paths...
//     if (hasAllElems === false){
//         console.log("player did not get all its paths line 1840: " + playerScore)
//         //reduce score by 20 points
//         playerScore = playerScore - 10;
//         console.log("player score after adjustment line 1843: " + playerScore)
//         //update player score on gameboard
//         $('#playerScore').html(`${playerScore}`);
//         return;
//     }
// }
const checkPlayerWinningPaths = () => {
    let hasAllElems = true;
    for(let key in pawPrintPaths) {
        if (pawPrintPaths[key]["clicked"] === false){
            break;
        }
        else{
        console.log("is checkPlayerWinningPaths running more than once")
        //collate winning cat paths, put in array for use
        logPlayerWinningCatPaths();
        
        //compare player array to potential winning arrays
        for(i=0; i<playerPathOptions[0].length; i++){
            //if player array includes all the values in one of potential winning arrays...
            //if(playerPathOptions[0][i].every(elem => playerNodes.includes(elem))){
            if(containsAll(playerPathOptions[0][i], playerNodes)){
                console.log("player got all its paths line 1824: " + playerScore)
                hasAllElems = true;
                break;
            }
            else {
                hasAllElems = false;
            }
        }}
    }
    
    if(hasAllElems === true) {
        playerScore = playerScore + 10;
        console.log("player after score adjustment line 1827: " + playerScore)
        //update player score on gameboard
        $('#playerScore').html(`${playerScore}`);
        return;
    }
    else if (hasAllElems === false) {
        //reduce score by 20 points
        playerScore = playerScore - 10;
        console.log("player score after adjustment line 1843: " + playerScore)
//update player score on gameboard
        $('#playerScore').html(`${playerScore}`);
        return;
    }
}

const checkComputerWinningPaths = () => {
    console.log("is checkComputerWinningPaths running more than once")
    //collate winning cat paths, put in array for use
    logComputerWinningCatPaths();
    let hasAllElems;
    //compare player array to potential winning arrays
    for(i=0; i<computerPathOptions[0].length; i++){
        //if player array includes all the values in one of potential winning arrays...
        //if(playerPathOptions[0][i].every(elem => playerNodes.includes(elem))){
        if(containsAll(computerPathOptions[0][i], computerNodes)){
            console.log("computer got all its paths line 1824: " + computerScore)
            hasAllElems = true;
            break;
        }
        else {
            hasAllElems = false;
        }
    }
    if(hasAllElems === true) {
        console.log("computer score before adjustment 1904: " + computerScore)
        computerScore = computerScore + 10;
        console.log("computer after score adjustment line 1827: " + computerScore)
        //update computer score on gameboard
        $('#computerScore').html(`${computerScore}`);
        return;
    }
    else if (hasAllElems === false) {
        //reduce score by 20 points
        console.log("computer score before adjustment 1912: " + computerScore)
        computerScore = computerScore - 10;
        console.log("computer score after adjustment line 1843: " + computerScore)
//update computer score on gameboard
        $('#computerScore').html(`${computerScore}`);
        return;
    }
}

// //same as playerWinningPaths
// const checkComputerWinningPaths = () => {
//     logComputerWinningCatPaths();
//     let hasAllElems = true;
//     for(i=0; i<computerPathOptions[0].length; i++){
//         console.log("computer points line 1849: " + computerScore)
//         //if(computerPathOptions[0][i].every(elem => computerNodes.includes(elem))){
//         if(containsAll(computerPathOptions[0][i], computerNodes)){
//             console.log("computer points computer got all it's paths line 1853: " + computerScore)
//             computerScore = computerScore + 10;
//             console.log("computer points after score adjustment line 1855: " + computerScore)
//             $('#computerScore').html(`${computerScore}`);
//             hasAllElems = true;
//             break;
//         }
//         else {
//             hasAllElems = false;
//         }
//     }
//     if (hasAllElems === false){
//         console.log("computer did not get all its paths line 1865: " +  computerScore)
//         computerScore = computerScore - 10;
//         console.log("computer score after score adjustment line 1867: " + computerScore)
//         $('#computerScore').html(`${computerScore}`);
//         return;
//     }
// }
//winner announcement
const announceWinner = () => {
    console.log("is announceWinner running more than once")
    //check if player got all cat paths
    checkPlayerWinningPaths();
    //check if computer got all cat paths
    checkComputerWinningPaths();
    //decide winners and announce
    setTimeout(() => {
    if (playerScore > computerScore) {
        $game.hide();
        (function declareWinner (msg, gfg) {
            const confirmBox = $("#declarePlayerWinner");
        
            //trace message to container
            confirmBox.find(".declareWinner").html(msg);
            //call function
            confirmBox.find(".yesDeclareWinner").unbind().click(function() {
                //show opening alert window
                confirmBox.hide();
                setUpGame();
                $game.show();
            });
            confirmBox.find(".yesDeclareWinner").click(gfg);
            confirmBox.show();
        
            confirmBox.find(".noDeclareWinner").unbind().click(function()
            {
                confirmBox.hide();
                $game.show()
            });
            confirmBox.find(".noDeclareWinner").click(gfg);
            confirmBox.show();
        })();
        return;
        // alert("Congratulations! You've collected all your cats and beaten the computer!")
    }
    else if (computerScore > playerScore) {
        $game.hide();
        (function declareWinner (msg, gfg) {
            const confirmBox = $("#declareComputerWinner");
        
            //trace message to container
            confirmBox.find(".declareWinner").html(msg);
            //call function
            confirmBox.find(".yesDeclareWinner").unbind().click(function() {
                //show opening alert window
                confirmBox.hide();
                setUpGame();
                $game.show();
            });
            confirmBox.find(".yesDeclareWinner").click(gfg);
            confirmBox.show();
        
            confirmBox.find(".noDeclareWinner").unbind().click(function()
            {
                confirmBox.hide();
                $game.show()
            });
            confirmBox.find(".noDeclareWinner").click(gfg);
            confirmBox.show();
        })();
        return;
        //change declareWinner to instructions
        
        // $(".yesDeclareWinner").on("click", function () {
        //     $(".declareWinner").html(`<p>Oh no! The computer won!</p><br><button class="yesDeclareWinner">Play again</button><button class="noDeclareWinner">View my gameboard</button>`); 
        //     $("#declareComputerWinner").find(".noDeclareWinner").unbind().click(function()
        //     {
        //         $("#declareWinner").hide();
        //         setUpGame();
        //         $game.show()
        //     });
        //     })
        // alert("Oh no! The computer won!")
    }
    else {
        $game.hide();
        (function declareWinner (msg, gfg) {
            const confirmBox = $("#declareTie");
        
            //trace message to container
            confirmBox.find(".declareWinner").html(msg);
            //call function
            confirmBox.find(".yesDeclareWinner").unbind().click(function() {
                //show opening alert window
                confirmBox.hide();
                setUpGame();
                $game.show();
            });
            confirmBox.find(".yesDeclareWinner").click(gfg);
            confirmBox.show();
        
            confirmBox.find(".noDeclareWinner").unbind().click(function()
            {
                confirmBox.hide();
                $game.show()
            });
            confirmBox.find(".noDeclareWinner").click(gfg);
            confirmBox.show();
        })();
        //change declareWinner to instructions
        
        // $(".yesDeclareWinner").on("click", function () {
        //     $(".declareWinner").html(`<p>You and the computer tied!</p><br><button class="yesDeclareWinner">Play again</button><button class="noDeclareWinner">View my gameboard</button>`); 
        //     $("#declareWinner").find(".noDeclareWinner").unbind().click(function()
        //     {
        //         $("#declareWinner").hide();
        //         setUpGame();
        //         $game.show()
        //     });
        //     })
        }
    }, 2000)
    return;
    // } alert("You and the computer tied!");
}
//determine who won the game if all of the pawprint paths are claimed
const winTheGame = () => { 
    for(let key in pawPrintPaths){
        if(pawPrintPaths[key]["clicked"] === false) {
            return;}
}
$("#restart").text("Play again");
console.log("is winTheGame running more than once");
announceWinner();
return;
};