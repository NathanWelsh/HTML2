"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Professor: Dr. Roger Webster
   Code: Nathan Welsh

   Filename: mt_calc.js

   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers

   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor

   calcKeys(e)
      Adds functions to key pressed within the calculator window 

   eraseChar(textStr)
      Erases the last character from the text string, textStr

   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/

window.onload = init;

// Variables

var AIisON = false;
var GameOver = false;
var ROW_SIZE = 3;
var COL_SIZE = 3;
var PlayerWon = false;
var whoisplaying = "X"
var PlayerWins = 0;
var AiWins = 0;

var gameGrid = [
    ['N', 'N', 'N'],
    ['N', 'N', 'N'],
    ['N', 'N', 'N']
];

var whoisplaying = "X"

function init() {
    var calcButtons = document.getElementsByClassName("calcButton");

    InitGameGrid();

    for (var i = 0; i < calcButtons.length; i++) {
        calcButtons[i].onclick = buttonClick;
    }
    whoisplaying = "X";
    GameOver = false;

    var mybutton = document.getElementById('aibutton');
    var src = mybutton.getAttribute("src");
    mybutton.setAttribute("src", "AION.jpeg");
    AIisON = true;
    document.getElementById("AIOnOff").innerHTML = "<h1>AI is ON</h1>";

    document.getElementById("WinningMsg").innerHTML = "<h1>Player Wins: 0 AI Wins: 0</h1>";

}

function buttonClick(e) {

    var buttonValue = e.target.value;

    if (buttonValue == "ResetButton") {
        ResetGame();
    }

    if (buttonValue == "AI") {
        if (AIisON == true) {
            e.currentTarget.setAttribute("src", "AIOFF.jpeg");
            AIisON = false;

            document.getElementById("AIonOff").innerHTML = "<h1>AI is OFF</h1>";
        }
        else {
            e.currentTarget.setAttribute("src", "AION.jpeg");
            AIisON = true;
            document.getElementById("AIonOff").innerHTML = "<h1>AI is On</h1>";
        }
    }

    if (GameOver) {
        return;
    }

    switch (buttonValue) {
        // Top Row

        case "00":
            if (gameGrid[0][0] == 'N') {
                AddXorO(0, 0, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;

        case "01":
            if (gameGrid[0][1] == 'N') {
                AddXorO(0, 1, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;

        case "02":
            if (gameGrid[0][2] == 'N') {
                AddXorO(0, 2, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;

        // Middle Row

        case "10":
            if (gameGrid[1][0] == 'N') {
                AddXorO(1, 0, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;

        case "11":
            if (gameGrid[1][1] == 'N') {
                AddXorO(1, 1, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;

        case "12":
            if (gameGrid[1][2] == 'N') {
                AddXorO(1, 2, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;

        // Bottom Row

        case "20":
            if (gameGrid[2][0] == 'N') {
                AddXorO(2, 0, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;

        case "21":
            if (gameGrid[2][1] == 'N') {
                AddXorO(2, 1, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;

        case "22":
            if (gameGrid[2][2] == 'N') {
                AddXorO(2, 2, whoisplaying);
                //GameOver = checkforWinner();
                if (whoisplaying == "X") {
                    e.currentTarget.setAttribute("src", "tictactoeX.png");
                    whoisplaying = "O"
                }
                else {
                    e.currentTarget.setAttribute("src", "tictactoeO.png");
                    whoisplaying = "X"
                }
                if (AIisON) {
                    PlayAI();
                }
            }
            else {
                window.alert("Spot Already Taken: " + buttonValue)
            }
            break;


        /*default:

            // window.alert("here button pressed: " + buttonValue)

            if (whoisplaying == "X")
            {
                e.currentTarget.setAttribute("src", "tictactoeX.png");
                whoisplaying = "O"

            }
            else{
                e.currentTarget.setAttribute("src", "tictactoeO.png");
                whoisplaying = "X"
            }
            break;  */
    }


}



/* ===================================================================== */

//-------------------------------------------------------------
// THIS RESETS ALL GRID CHARS TO START A NEW GAME
//-------------------------------------------------------------

function ResetGame(e) {
    InitGameGrid();
    whoisplaying = "X";
    GameOver = false;
    initGraphics();
}

//--------------------------------------------
// TIC TAC TOE DATA STRUCTURES CODE
//--------------------------------------------

function InitGameGrid() {
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {

            gameGrid[row][col] = 'N';
        }

    }
}

function AddXorO(row, col, isXorO) {
    gameGrid[row][col] = isXorO;// this sets the data grid for X O or N

}

function spacesRemain() {
    var x;
    var y;
    var stillDigitsLeft = false;
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {

            if (gameGrid[row][col] == 'N') {
                stillDigitsLeft = true;
            }
        }
    }
}

function checkforWinner() {
    var x = 0;
    var row = 0;
    var col = 0;
    var isDone = false;
    Boolean(isDone);
    PlayerWon = true; //assume it is until otherwise

    for (x = 0; x < 3; x++)
    {
        //--------------------------------------------
        // CHECKS ROWS
        //--------------------------------------------
        if (!gameGrid[x, 0].Equals('N'))
        {
            if (gameGrid[x, 0] == gameGrid[x, 1] && gameGrid[x, 0] == gameGrid[x, 2])
            {
                Boolean(isDone);
                if (gameGrid[x, 0].Equals('O'))
                {
                    PlayerWon = false;
                    AiWins++;
                    document.getElementById("WhoWon").innerHTML = "<h1>You lost!</h1>";
                    document.getElementById("WinningMsg").innerHTML = "<h1>Player wins : " + PlayerWins, "AI Opponent wins: " + AiWins, "</h1>";
                }
                else {
                    PlayerWon = true;
                    PlayerWins++;
                    document.getElementById("WhoWon").innerHTML = "<h1>You Win!</h1>";
                }
                return Boolean(isDone);
            }
        }

        //--------------------------------------------
        // CHECKS COLUMNS
        //--------------------------------------------
        if (!gameGrid[0, x].Equals('N'))
        {
            if (gameGrid[0, x] == gameGrid[1, x] && gameGrid[1, x] == gameGrid[2, x])
            {
                Boolean(isDone);
                if (gameGrid[0, x].Equals('O'))
                {
                    PlayerWon = false;
                }
                else {
                    PlayerWon = true;
                    document.getElementById("WhoWon").innerHTML = "<h1>You Win!</h1>";
                }
                Boolean(isDone);
            }
        }
    }

    //--------------------------------------------
    // CHECKS THE 2 DIAGONALS 
    //--------------------------------------------
    if (gameGrid[1, 1].Equals('N'))
    {
        //IF MIDDLE SPOT IS 'N' THEN CAN NOT HAVE A DIAGONAL WIN
    }
    else
    {   // TOP LEFT TO BOTTOM RIGHT
        if (gameGrid[0, 0] == gameGrid[1, 1] && gameGrid[0, 0] == gameGrid[2, 2])
        {
            Boolean(isDone);
            if (gameGrid[1, 1].Equals('O'))
            {
                PlayerWon = false;
                document.getElementById("WhoWon").innerHTML = "<h1>You Lost!</h1>";
            }
            else {
                PlayerWon = true;
                document.getElementById("WhoWon").innerHTML = "<h1>You Win!</h1>";
            }
            Boolean(isDone);
        }
        //TOP RIGHT TO BOTTOM LEFT
        if (gameGrid[0, 2] == gameGrid[1, 1] && gameGrid[0, 2] == gameGrid[2, 0])
        {
            Boolean(isDone);
            if (gameGrid[1, 1].Equals('O'))
            {
                PlayerWon = false;
                document.getElementById("WhoWon").innerHTML = "<h1>You Lost!</h1>";
            }
            else {
                PlayerWon = true;
                document.getElementById("WhoWon").innerHTML = "<h1>You Win!</h1>";
            }
            Boolean(isDone);
        }
    }
    Boolean(isDone);
}

//--------------------------------------------
// TIC TAC TOE AI CODE
//--------------------------------------------

function PlayAI() {
    var row = 0;
    var col = 0;
    var didmakemove = false;

    if (GameOver) {
        return;
    }
    else {
        didmakemove = RandomOpponentAIMove(); //OffensiveOpponentAI();

        if (didmakemove == false) {
            didmakemove = RandomOpponentAIMove(); //CheckDefensiveOpponentAI();
            if (didmakemove == false) {
                didmakemove = RandomOpponentAIMove();
            }
        }
        else {

        }

        if (didmakemove) {
            GameOver = checkforWinner();

            if (GameOver) {

            }
            whoisplaying = "X";
        }
    }
}

function doAIGraphics(row, col) {
    let myrow = row + '' + col;
    var mybutton = document.getElementById(myrow);
    var src = mybutton.getAttribute("src");
    mybutton.setAttribute("src", "tictactoeO.png");
    whoisplaying = "X";

}

function initGraphics() {
    var calcButtons = document.getElementsByClassName('calcButton');

    for (var i = 0; i < calcButtons.length; i++) {
        if (calcButtons[i].value == "resetbutton" || calcButtons[i].value == "AI") {

        }
        else {
            calcButtons[i].setAttribute("src", "tictactoeopenblur.png");
        }
    }

    document.getElementById("WhoWon").innerHTML = "<h1>Who Won?</h1>";
}

function CheckDefensiveOpponentAI() {
    var placementMade = false;
    var x;
    var y;

    var row = 0;
    var col = 0;
    var whoisplayingAI = 'O';
    var whoisnotplayingAI = 'X';
}

function OffensiveOpponentAI() {
    var placementMade = false;
    var x, y;
    var row = 0;
    var col = 0;
    var whoisplayingAI = 'O';

    //-------------------------------------------------------------
    // CHECK ROWS
    //-------------------------------------------------------------

    for (x = 0; x < 3; x++) {

        if (gameGrid[x][0] == whoisplayingAI && gameGrid[x][1] == whoisplayingAI && gameGrid[x][2] == 'N') {
            gameGrid[x][2] = whoisplayingAI;
            placementMade = true;
            row = x;
            col = 2;
            AddXorO(row, col, whoisplayingAI);
            doAIGraphics(row, col);

            return (placementMade);
        }
        else {
            if (gameGrid[x][0] == whoisplayingAI && gameGrid[x][2] == whoisplayingAI && gameGrid[x][1] == 'N') {
                gameGrid[x][1] = whoisplayingAI;
                placementMade = true;
                row = x;
                col = 1;
                AddXorO(row, col, whoisplayingAI);
                doAIGraphics(row, col);

                return (placementMade);
            }
            else {
                if (gameGrid[x][1] == whoisplayingAI && gameGrid[x][2] == whoisplayingAI && gameGrid[x][0] == 'N') {
                    gameGrid[x][0] = whoisplayingAI;
                    placementMade = true;
                    row = x;
                    col = 0;
                    AddXorO(row, col, whoisplayingAI);
                    doAIGraphics(row, col);

                    return (placementMade);
                }
            }
        }
    }//END FOR LOOP ROWS
}

function random(min, max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}

function RandomOpponentAIMove() {
    var x = 0;
    var y = 0;
    var row = 0;
    var col = 0;
    var placementMade = false;
    var count = 1;
    var whoisplayingAI = 'O';

    var numspacesleft = spacesRemain();
    if (numspacesleft == false) {
        return (placementMade);
    }

    if (gameGrid[1][1] == 'N') {
        placementMade = true;
        row = 1;
        col = 1;
        AddXorO(row, col, whoisplayingAI);
        doAIGraphics(row, col);
        return (placementMade);
    }

    var ran = random(0, 9);
    while (!placementMade) {
        var max = 2;
        var min = 0;
        var num = random(min, max);
        x = num;
        num = random(min, max);
        y = num;
        count = count + 1;

        if (ran > 5) {
            if (gameGrid[x][y] == 'N') {
                placementMade = true;
                row = x;
                col = y;
                AddXorO(row, col, whoisplayingAI);
                doAIGraphics(row, col);
                return (placementMade);
            }
        }
        else { // Corner Checker
            if ((x == 0 && y == 0) || (x == 0 && y == 2) || (x == 2 && y == 0) || (x == 2 && y == 2)) {
                if (gameGrid[x][y] == 'N') {
                    placementMade = true;
                    row = x;
                    col = y;
                    AddXorO(row, col, whoisplayingAI);
                    doAIGraphics(row, col);
                    return (placementMade);
                }
            }
            else {
                if (count > 5) { // If no corners are available
                    if (gameGrid[x][y] == 'N') {
                        placementMade = true;
                        row = x;
                        col = y;
                        AddXorO(row, col, whoisplayingAI);
                        doAIGraphics(row, col);
                        return (placementMade);
                    }
                }
            }
        }
    }
}