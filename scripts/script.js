
// import "nes.css/css/nes.min.css";
//https://nostalgic-css.github.io/NES.css/
//https://animate.style/
/*

- Report feedback form

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
    $(".message").html(`<p>Player draws 1 card from the cat-path collection. This card will establish the first set of cats that the player must collect.</p><p>On each subsequent turn, player may do one of the following:</p><p><ul><li>- draw three pawprint cards</li><li>- deploy pawprint cards from the player's hand in order to claim pathways between cats</li><li>- draw new cat-path cards to collect more cats</li></ul></p><p>A winner is determined once one of the following conditions has been met:</p><ul><li>- all of the cats have been claimed</li><li>- all of the pawprint cards have been claimed and each player has played one final round</li></ul><p>The winner is determined based on a points system according to the distance between cats that the players are claiming. Cats that are further away from each other are worth more points. Players will gain additional points for completed cat-paths, and lose points for having cat-paths that are not completed by the end of the game.</p><br><button class="no nes-btn is-primary">I've got this</button>`); 
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
    $(".message").html(`<p>Player draws 1 card from the cat-path collection. This card will establish the first set of cats that the player must collect.</p><p>On each subsequent turn, player may do one of the following:</p><p><ul><li>- draw three pawprint cards</li><li>- deploy pawprint cards from the player's hand in order to claim pathways between cats</li><li>- draw new cat-path cards to collect more cats</li></ul></p><p>A winner is determined once one of the following conditions has been met:</p><ul><li>- all of the cats have been claimed</li><li>- all of the pawprint cards have been claimed and each player has played one final round</li></ul><p>The winner is determined based on a points system according to the distance between cats that the players are claiming. Cats that are further away from each other are worth more points. Players will gain additional points for completed cat-paths, and lose points for having cat-paths that are not completed by the end of the game.</p><br><button class="no nes-btn is-primary">I've got this</button>`); 
    $("#container").find(".no").unbind().click(function()
    {
        $("#container").hide();
        $game.show()
    });
    })


    


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
    $game.hide();
    (function openingMessage (msg, gfg) {
        const confirmBox = $("#reset");
    
        //trace message to reset
        confirmBox.find(".reset").html(msg);
        //call function
        confirmBox.find(".yesReset").unbind().click(function() {
            //show opening alert window
            confirmBox.hide();
            setUpGame();
            $game.show();
        });
        confirmBox.find(".yesReset").click(gfg);
        confirmBox.show();
    
        confirmBox.find(".noReset").unbind().click(function()
        {
            confirmBox.hide();
            $game.show()
        });
        confirmBox.find(".noReset").click(gfg);
        confirmBox.show();
    })();
})


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


let availableCatPaths = [$catPath1, $catPath2, $catPath3, $catPath4, $catPath5, $catPath6];
const selectCatPath = () => {
    let randomNumber = Math.floor(Math.random() * (availableCatPaths.length));
    for(i=0; i<availableCatPaths.length; i++) {
        //selects random number
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
        selectCatPath();
        //pushes selected cat path to player's cat path array
        playerCatPaths.push(currentCatPath);
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
            //appends appropriate cat path image to game board
            $('.computerCatPaths').append(`<li><img class="catPathCards" src="images/computerCatPathCard.png"></li>`).hide().animate({height:'toggle'}, 1500);
 

        }
        else {
            //runs computer AI
            computerPlay();
        }
    }
    else {
        (function () {
            $("#noMoreCatPaths").find(".noCatPaths").unbind().click(function()
            {
                $("#noMoreCatPaths").hide();
                $game.show()
            });
            })();
        (function noMoreCatPaths(msg, gfg) {
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
                $(".noMoreCatPaths").html(`<p>There are no more cat path cards to draw! Get as many paths as you can before the game ends!</p><br><button class="noCatPaths nes-btn is-primary">Ok!</button>`); 
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
    function isEmpty(object){
        for (let i in object) {
            if(object.hasOwnProperty(i)){
                return false;
            }
        }
        return true;
    }
    if (isEmpty(playerCatPaths)){
        (function () {
            $("#drawACatPath").find(".noCatPaths").unbind().click(function()
            {
                $("#drawACatPath").hide();
                $game.show()
            });
            })();
        (function noMoreCatPaths(msg, gfg) {
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
                $(".drawACatPath").html(`<p>Begin by picking a cat-path card!</p><br><button class="drawCatPath nes-btn is-primary">Ok!</button>`); 
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
                $(".noMorePawPrints").html(`<p>There are not enough pawprint cards for you to draw. You can select one more cat-path before a winner is determined.</p><br><button class="noPawPrints nes-btn is-primary">Ok!</button>`); 
                $("#noMorePawPrints").find(".noPawPrints").unbind().click(function()
                {
                    $("#noMorePawPrints").hide();
                    $game.show()
                });

        pawPrintCards = 0;
    }
    winTheGame();
})


//Checks if player has enough pawprint cards to claim a pathway--collects the pathway if so
const checkPawPrints = (clickedObject) => {
         //color of the clicked path
         let clickedColor = clickedObject.color;
         //number of pawprints needed for the clicked path
         let pawsRequired = clickedObject.pawsNeeded;
         //if the player has enough pawprint cards to claim the path
         if(playerPawPrints[clickedColor] >= pawsRequired) {
             //if the path has not been claimed
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
                     pawPrintPaths["$one"]["$img"].html(`<img src="images/onePlayer.png"></img>`).hide().slideDown(2500);
                     pawPrintPaths["$onea"]["$img"].html(`<img src="images/oneaPlayer.png"></img>`).hide().slideDown(2500);
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
                     pawPrintPaths["$three"]["$img"].html(`<img src="images/threePlayer.png"></img>`).hide().slideDown(2500);
                     pawPrintPaths["$threea"]["$img"].html(`<img src="images/threeaPlayer.png"></img>`).hide().slideDown(2500);
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
                     clickedObject.$img.html(`<img src="images/${clickedObject.player}.png"></img>`).hide().slideDown(2500);
                     //runs computer AI
                     computerPlay();
                 }
         }
         else if (clickedObject["clicked"] === true) {
            (function () {
                $("#claimedPawPath").find(".okPawPath").unbind().click(function()
                {
                    $("#claimedPawPath").hide();
                    $game.show()
                });
                })();
            (function claimedPawPath(msg, gfg) {
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
                    $(".claimedPawPath").html(`<p>That path has already been claimed. Please select a different path or draw paw print cards.</p><br><button class="okPawPath nes-btn is-primary">Ok!</button>`); 
                    $("#claimedPawPath").find(".okPawPath").unbind().click(function()
                    {
                        $("#claimedPawPath").hide();
                        $game.show()
                    });
        }
    }
         else {
            (function () {
                $("#notEnoughPaws").find(".okNotEnoughPaws").unbind().click(function()
                {
                    $("#notEnoughPaws").hide();
                    $game.show()
                });
                })();
            (function notEnoughPaws(msg, gfg) {
                    var confirmBox = $("#notEnoughPaws");
                    $game.hide();
                    /* Trace message to display */
                    confirmBox.find(".notEnoughPaws").html(msg);
                    /* Calling function */
                    confirmBox.find(".ok").unbind().click(function()
                    {
                        //hide message box
                        confirmBox.hide();
                    });
                    confirmBox.find(".ok").click(gfg);
                    confirmBox.show();
                })();
            $("#notEnoughPaws").show();
                    $(".notEnoughPaws").html(`<p>You do not have enough ${clickedColor} pawprint cards to collect that path! Keep collecting.</p><br><button class="okNotEnoughPaws nes-btn is-primary">Ok!</button>`); 
                    $("#notEnoughPaws").find(".okNotEnoughPaws").unbind().click(function()
                    {
                        $("#notEnoughPaws").hide();
                        $game.show()
                    });
         }
    winTheGame();
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
            pawPrintPaths["$one"]["$img"].html(`<img src="images/oneComputer.png"></img>`).hide().slideDown(2500);
            pawPrintPaths["$onea"]["$img"].html(`<img src="images/oneaComputer.png"></img>`).hide().slideDown(2500)
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
            pawPrintPaths["$three"]["$img"].html(`<img src="images/threeComputer.png"></img>`).hide().slideDown(2500);
            pawPrintPaths["$threea"]["$img"].html(`<img src="images/threeaComputer.png"></img>`).hide().slideDown(2500)
        }
        else{
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
            clickedObject["clicked"] = true;
            //changes pawpath image to computer claimed
            clickedObject.$img.html(`<img src="images/${clickedObject.computer}.png"></img>`).hide().slideDown(2500)
        }
    }
};

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
                    $(".claimedPawPath").html(`<p>That path has already been claimed. Please select a different path or draw paw print cards.</p><br><button class="okPawPath nes-btn is-primary">Ok!</button>`); 
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
const validPaths = [];
path = [];
function traverse(node, destination, path) {
    if(node === undefined){
        node = RootNode;
    }
    if(path === undefined){
        path = [];
    }
    path.push(node.val);
    path.push(node.val);
    if(node.val === destination){
        validPaths.push(clone(path));
        return;
    }
    node.childs.forEach(x => {
        if(path.indexOf(x.val) === -1){
            let newPath = clone(path);
            traverse(x, destination, newPath);
        }
    });
}

//run through and log in validPaths the potential winning pathways of a player's catPath cards
//parameter takes individual's catPaths array
let playerPathOptions=[];
let computerPathOptions=[]
//grab potential winning combination for each of the catpaths in a player's catPath object
const collateWinningCatPaths = (whoseCatPaths) => {
    validPaths.length = 0;
    for(i=0; i<whoseCatPaths.length; i++) {
        traverse(N[whoseCatPaths[i].node1], whoseCatPaths[i].node2);
    }
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
        }
}
 
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
                        return;
                    }
                //if there aren't catPaths available, computer selects the first pawPrint path that it can
                    else{                  
                        for (let key in pawPrintPaths){
                            if((pawPrintPaths[key]["clicked"] === false && (computerPawPrints[pawPrintPaths[key]["color"]]) > pawPrintPaths[key]["pawsRequired"])) {
                                checkComputerPawPrints(pawPrintPaths[key]["$img"]);
                                break;
                            }
                        }
                        //if the computer can't select a pawPrint path, it acquires pawPrint cards
                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
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
                    return;
                }
            else if(availableCatPaths.length<0) {
                //if there are not cat paths available computer selects the first pawPrint path
                for (let key in pawPrintPaths){
                    if((pawPrintPaths[key]["clicked"] === false && (computerPawPrints[pawPrintPaths[key]["color"]]) > pawPrintPaths[key]["pawsNeeded"])) {
                        checkComputerPawPrints(pawPrintPaths[key]["$img"]);
                        return;
                    }
                }
                //if the computer cannot select a pawprint path, it draws cards
                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
                return;
            }
        }
        }
    computerCheckNodes.push(computerNodes);
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
            //loop over the already acquired computer pawprint paths
            for(j=0; j<computerNodes.length; j++){
                //if the computer path option does not include the existing computer nodes...
                //if (computerPathOptions[0][i].every(elem => computerNodes.includes)){
                 if(containsAll(computerPathOptions[0][i], computerNodes)){
                    //push that path options to the filtered path list
                    computerPathOptionsFiltered.push(computerPathOptions[0][i])
                } 
            }
        }
        if(computerPathOptionsFiltered[0] != undefined){
        for(let key in pawPrintPaths){
            //loop over the two three computer potential winning options
            for(i=0; i<3; i++){
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
                if(pawPrintPaths[key]["clicked"] === false && computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
                        checkComputerPawPrints(pawPrintPaths[key])
                        return;
                    }
            }
            setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
            setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
            setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
            return;
        }
    }   
   
    //loop over pawPrintPaths
    for(let key in pawPrintPaths){
        //loop over the first three computer potential winning options
        for(i=0; i<3; i++){
            //if the required node to collect a pawPrintPath matches a node of the computer path options...
            for(k=0; k<computerPathOptions[0][i].length; k++){
                //if node1 for the pawPrintPath equals the computer path option
                if(pawPrintPaths[key].node1 === computerPathOptions[0][i][k]){
                    //loop again over the computer path options
                    for(j=0; j<computerPathOptions[0][i].length; j++){
                        //if the second required node to collect a pawPrintPath matches a node of the computer path options
                        if (pawPrintPaths[key].node2 === computerPathOptions[0][i][j]){
                            //if the computer has enough pawPrints of the right color to claim that path...
                            if(pawPrintPaths[key]["clicked"] === false){
                                if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
                                    checkComputerPawPrints(pawPrintPaths[key])
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
                //if the required node to collect a pawPrintPath matches a node of the computer path options...
                for(k=0; k<computerPathOptions[0][i].length; k++){
                    //if node1 for the pawPrintPath equals the computer path option
                    if(pawPrintPaths[key].node1 === computerPathOptions[0][i][k]){
                        //loop again over the computer path options
                        for(j=0; j<computerPathOptions[0][i].length; j++){
                            //if the second required node to collect a pawPrintPath matches a node of the computer path options
                            if (pawPrintPaths[key].node2 === computerPathOptions[0][i][j]){
                                //if the computer has enough pawPrints of the right color to claim that path...
                                if(pawPrintPaths[key]["clicked"] === false){
                                    if(computerPawPrints[pawPrintPaths[key]["color"]] < pawPrintPaths[key]["pawsNeeded"]) {
                                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
                                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
                                        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
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
                    return;
                }
            }
        }
        {
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
        return;
    }
    const isClicked = (element) => {
        element["clicked"] === true
    }
    setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
    setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
    setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
    return;
    }  
    //check if someone has won
    }
    if(computerCatPaths.length === 0 && availableCatPaths.length === 0){
        for(let key in pawPrintPaths){
            if(pawPrintPaths[key]["clicked"] === false){
                if(computerPawPrints[pawPrintPaths[key]["color"]] >= pawPrintPaths[key]["pawsNeeded"]) {
                    checkComputerPawPrints(pawPrintPaths[key])
                    return;
                }
            }
        }
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 500);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1000);
        setTimeout(() => {addAnimatedPawPrint(computerPawPrints);}, 1500);
        return;
    }  
    winTheGame(); 
    return;
}


 $("#feedback").on('click', () => {
     $game.hide()
     $('.feedback').show();


     (function showFeedback(msg, gfg) {
        var confirmBox = $(".feedback");
        $game.hide();
        /* Trace message to display */
        confirmBox.find(".feedback").html(msg);
        /* Calling function */
        confirmBox.find(".submit").unbind().click(function()
        {
            //hide message box
            confirmBox.hide();
            $game.show()
        });
        confirmBox.find(".ok").click(gfg);
        confirmBox.show();
    })();
 });

const checkPlayerWinningPaths = () => {
    let hasAllElems;
    for(let key in pawPrintPaths) {
        if (pawPrintPaths[key]["clicked"] === false){
            break;
        }
        else{
        //collate winning cat paths, put in array for use
        logPlayerWinningCatPaths();
        //compare player array to potential winning arrays
        for(i=0; i<playerPathOptions[0].length; i++){
            //if player array includes all the values in one of potential winning arrays...
            if(containsAll(playerPathOptions[0][i], playerNodes)){
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
        //update player score on gameboard
        $('#playerScore').html(`${playerScore}`);
        return;
    }
    else if (hasAllElems === false) {
        //reduce score by 20 points
        playerScore = playerScore - 10;
//update player score on gameboard
        $('#playerScore').html(`${playerScore}`);
        return;
    }
}

const checkComputerWinningPaths = () => {
    //collate winning cat paths, put in array for use
    logComputerWinningCatPaths();
    let hasAllElems;
    //compare player array to potential winning arrays
    for(i=0; i<computerPathOptions[0].length; i++){
        //if player array includes all the values in one of potential winning arrays...
        if(containsAll(computerPathOptions[0][i], computerNodes)){
            hasAllElems = true;
            break;
        }
        else {
            hasAllElems = false;
        }
    }
    if(hasAllElems === true) {
        computerScore = computerScore + 10;
        //update computer score on gameboard
        $('#computerScore').html(`${computerScore}`);
        return;
    }
    else if (hasAllElems === false) {
        //reduce score by 20 points
        computerScore = computerScore - 10;
//update computer score on gameboard
        $('#computerScore').html(`${computerScore}`);
        return;
    }
}

//winner announcement
const announceWinner = () => {
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
        }
    }, 2000)
    return;
}
//determine who won the game if all of the pawprint paths are claimed
const winTheGame = () => { 
    for(let key in pawPrintPaths){
        if(pawPrintPaths[key]["clicked"] === false) {
            return;}
}
$("#restart").text("Play again");
announceWinner();
return;
};