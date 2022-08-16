// GLOBAL OBJECTS
const threeDartFinishes = {
    170: 'T20 T20 Bull',
    167: 'T20 T19 Bull',
    164: 'T20 T18 Bull',
    161: 'T20 T17 Bull',
    160: 'T20 T20 D20',
    158: 'T20 T20 D19',
    157: 'T20 T19 D20',
    156: 'T20 T20 D18',
    155: 'T20 T19 D19',
    154: 'T20 T18 D20',
    153: 'T20 T19 D18',
    152: 'T20 T20 D16',
    151: 'T20 T17 D20',
    150: 'T20 T18 D18',
    149: 'T20 T19 D16',
    148: 'T20 T16 D20',
    147: 'T20 T17 D18',
    146: 'T20 T18 D16',
    145: 'T20 T15 D20',
    144: 'T20 T20 D12',
    143: 'T20 T17 D16',
    142: 'T20 T14 D20',
    141: 'T20 T19 D12',
    140: 'T20 T16 D16',
    139: 'T19 T14 D20',
    138: 'T20 T18 D12',
    137: 'T19 T16 D16',
    136: 'T20 T20 D8',
    135: 'T20 T17 D12',
    134: 'T20 T14 D16',
    133: 'T20 T19 D8',
    132: 'T20 T16 D12',
    131: 'T20 T13 D16',
    130: 'T20 T20 D5',
    129: 'T19 T16 D12',
    128: 'T18 T14 D16',
    127: 'T20 T17 D8',
    126: 'T19 T19 D6',
    125: '25 T20 D20',
    124: 'T20 T16 D8',
    123: 'T19 T16 D9',
    122: 'T18 T20 D4',
    121: 'T17 T10 D20',
    120: 'T20 20 D20',
    119: 'T19 T10 D16',
    118: 'T20 18 D20',
    117: 'T20 17 D20',
    116: 'T20 16 D20',
    115: 'T20 15 D20',
    114: 'T20 14 D20',
    113: 'T20 13 D20',
    112: 'T20 12 D20',
    111: 'T20 19 D16',
    110: 'T20 18 D16',
    109: 'T19 20 D16',
    108: 'T20 16 D20',
    107: 'T19 18 D20',
    106: 'T20 14 D20',
    105: 'T19 16 D20',
    104: 'T18 18 D20',
    103: 'T20 3 D20',
    102: 'T20 10 D20',
    101: 'T20 1 D16',
    99: 'T19 10 D16'
}

const twoDartFinishes = {
    100: 'T20 D20',
    98: 'T20 D19',
    97: 'T19 D20',
    96: 'T20 D18',
    95: 'T19 D19',
    94: 'T18 D20',
    93: 'T19 D18',
    92: 'T20 D16',
    91: 'T17 D20',
    90: 'T20 D15',
    89: 'T19 D16',
    88: 'T16 D20',
    87: 'T17 D18',
    86: 'T18 D16',
    85: 'T15 D20',
    84: 'T20 D12',
    83: 'T17 D16',
    82: 'T14 D20',
    81: 'T19 D12',
    80: 'T20 D10',
    79: 'T19 D11',
    78: 'T18 D12',
    77: 'T19 D10',
    76: 'T20 D8',
    75: 'T17 D12',
    74: 'T14 D16',
    73: 'T19 D8',
    72: 'T16 D12',
    71: 'T13 D16',
    70: 'T10 D20',
    69: 'T15 D12',
    68: 'T20 D4',
    67: 'T17 D8',
    66: 'T10 D18',
    65: 'T19 D4',
    64: 'T16 D8',
    63: 'T13 D12',
    62: 'T10 D16',
    61: 'T15 D8',
    60: '20 D20',
    59: '19 D20',
    58: '18 D20',
    57: '17 D20',
    56: '16 D20',
    55: '15 D20',
    54: '14 D20',
    53: '13 D20',
    52: '12 D20',
    51: '11 D20',
    50: '10 D20',
    49: '9 D20',
    48: '8 D20',
    47: '15 D16',
    46: '6 D20',
    45: '13 D16',
    44: '12 D16',
    43: '11 D16',
    42: '10 D16',
    41: '9 D16',
    39: '7 D16',
    37: '5 D16',
    35: '3 D16',
    33: '17 D8',
    31: '15 D8',
    29: '13 D8',
    27: '19 D4',
    25: '9 D8',
    23: '7 D8',
    21: '13 D4',
    19: '11 D4',
    17: '9 D4',
    15: '7 D4',
    13: '5 D4',
    11: '3 D4',
    9: '1 D4',
    7: '3 D2',
    5: '1 D2',
    3: '1 D1'
}

const oneDartFinishes = {
    40: 'D20',
    38: 'D19',
    36: 'D18',
    34: 'D17',
    32: 'D16',
    30: 'D15',
    28: 'D14',
    26: 'D13',
    24: 'D12',
    22: 'D11',
    20: 'D10',
    18: 'D9',
    16: 'D8',
    14: 'D7',
    12: 'D6',
    10: 'D5',
    8: 'D4',
    6: 'D3',
    4: 'D2',
    2: 'D1'
}

// GLOBAL ARRAYS
const impossibleScores = [
    179,
    178,
    176,
    175,
    173,
    172,
    169,
    166,
    163
]

const impossibleFinishes = [
    169,
    168,
    166,
    165,
    163,
    162,
    159
]

let playerOneScoreList = [];
let playerTwoScoreList = [];

let playerOneScoreListInLeg = [];
let playerTwoScoreListInLeg = [];

// GLOBAL GAME POINTS PICKED
let pointsPicked = 501;

// GLOBAL NUMBER OF LEGS
let numberOfLegs = 1;

// GLOBAL NUMBER OF SETS
let numberOfSets = 1;

// GLOBAL PLAYERS' LEGS
let playerOneLegs = 0;
let playerTwoLegs = 0;

// GLOBAL PLAYERS' SETS
let playerOneSets = 0;
let playerTwoSets = 0;

// GLOBAL LEGS TOTAL
let legsTotalAmount = 0;
let legsTotalAmountInSet = 0;

// GLOBAL SETS TOTAL
let setsTotalAmount = 0;

// GLOBAL SCORES
let playerOneScore = 501;
let playerTwoScore = 501;

// GLOBAL AVERAGE VALUE
let average = 0;

// GLOBAL AVERAGES
let playerOneAverage = 0;
let playerTwoAverage = 0;

// GLOBAL DARTS THROWN
let playerOneDartsTotal = 0;
let playerTwoDartsTotal = 0;

// GLOBAL DARTS THROWN IN LEG
let playerOneDartsTotalInLeg = 0;
let playerTwoDartsTotalInLeg = 0;

// GLOBAL NUMBER STATS
let playerOneBestTurn = 0;
let playerOneSixtyPlus = 0;
let playerOneOneHundredPlus = 0;
let playerOneOneFortyPlus = 0;
let playerOneOneEightys = 0;

let playerTwoBestTurn = 0;
let playerTwoSixtyPlus = 0;
let playerTwoOneHundredPlus = 0;
let playerTwoOneFortyPlus = 0;
let playerTwoOneEightys = 0;

// GLOBAL NAME TO EDIT
let nameToEdit = '';

// SELECTORS
const playerOneScoreValue = document.querySelector('.player-one-score');
const playerTwoScoreValue = document.querySelector('.player-two-score');
const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
const scoreInput = document.querySelector('.score-input');
const keys = document.querySelector('.keys');
const submitBtn = document.querySelector('.submit-btn');
const backspaceBtn = document.querySelector('.backspace');
const bustBtn = document.querySelector('.bust');
const previousScores = document.querySelector('.previous-scores-container');
const turnAvgOne = document.querySelector('.turn-average-one');
const turnAvgTwo = document.querySelector('.turn-average-two');
const dartsInLegOne = document.querySelector('.darts-in-leg-one');
const dartsInLegTwo = document.querySelector('.darts-in-leg-two');
const playerOneLegsTotal = document.querySelector('.legs-won-one');
const playerTwoLegsTotal = document.querySelector('.legs-won-two');
const playerOneSetsTotal = document.querySelector('.sets-won-one');
const playerTwoSetsTotal = document.querySelector('.sets-won-two');
const firstToAmountLegs = document.querySelector('.first-to-amount-legs');
const firstToAmountSets = document.querySelector('.first-to-amount-sets');
const checkoutOne = document.querySelector('.checkout-one');
const checkoutTwo = document.querySelector('.checkout-two');
const gameOverPage = document.querySelector('.game-over-page');
const playAgainBtn = document.querySelector('.play-again-btn');
const gameStatsBtn = document.querySelector('.game-stats-btn');
const winnerMessage = document.querySelector('.winner');
const statsPage = document.querySelector('.stats-page');
const threeOOneBtn = document.querySelector('.three-o-one');
const fiveOOneBtn = document.querySelector('.five-o-one');
const homePageScore = document.querySelector('.home-page-score');
const startGameBtn = document.querySelector('.start-game-btn');
const homePage = document.querySelector('.home-page');
const homeBtn = document.querySelector('.home-btn');
const legBtns = document.querySelectorAll('.leg-btn');
const numberOfLegsValue = document.querySelector('.number-of-legs');
const setBtns = document.querySelectorAll('.set-btn');
const numberOfSetsValue = document.querySelector('.number-of-sets');
const numberOfDartsPage = document.querySelector('.number-of-darts-page');
const numberOfDartsBtns = document.querySelectorAll('.number-of-darts');
const invalidInputPage = document.querySelector('.invalid-input-page');
const invalidInputBtn = document.querySelector('.invalid-input-btn');
const quitMatchBtn = document.querySelector('.quit-btn');
const quitMatchConfirmBtn = document.querySelector('.quit-match-confirm-btn');
const quitMatchDenyBtn = document.querySelector('.quit-match-deny-btn');
const areYouSurePage = document.querySelector('.are-you-sure-page');
const editBtns = document.querySelectorAll('.edit-name-btn');
const editNamePage = document.querySelector('.edit-name-page');
const editNameInput = document.querySelector('.edit-name-input');
const editNameConfirmBtn = document.querySelector('.edit-name-confirm-btn');
const playerOneNames = document.querySelectorAll('.player-one-name');
const playerTwoNames = document.querySelectorAll('.player-two-name');

// EVENT LISTENERS
// 301 button
threeOOneBtn.addEventListener('click', function() {
    pointsPicked = 301;
    playerOneScore = pointsPicked;
    playerTwoScore = pointsPicked;
    homePageScore.textContent = `${pointsPicked}`;
    playerOneScoreValue.textContent = `${pointsPicked}`;
    playerTwoScoreValue.textContent = `${pointsPicked}`;
})

// 501 button
fiveOOneBtn.addEventListener('click', function() {
    pointsPicked = 501;
    playerOneScore = pointsPicked;
    playerTwoScore = pointsPicked;
    homePageScore.textContent = `${pointsPicked}`;
    playerOneScoreValue.textContent = `${pointsPicked}`;
    playerTwoScoreValue.textContent = `${pointsPicked}`;
})

// leg buttons
legBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (e.currentTarget.classList.contains('add')) {
            numberOfLegs++;
            numberOfLegsValue.textContent = numberOfLegs;
        } else {
            if (numberOfLegs === 1) return;
            numberOfLegs--;
            numberOfLegsValue.textContent = numberOfLegs;
        }
    })
})

// set buttons
setBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (e.currentTarget.classList.contains('add')) {
            numberOfSets++;
            numberOfSetsValue.textContent = numberOfSets;
        } else {
            if (numberOfSets === 1) return;
            numberOfSets--;
            numberOfSetsValue.textContent = numberOfSets;
        }
    })
})

// edit buttons
editBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        nameToEdit = e.currentTarget.id;
        editNamePage.classList.remove('hidden');
        console.log(nameToEdit);
    })
})

// edit name submit button
editNameConfirmBtn.addEventListener('click', function() {
    if (nameToEdit === 'edit-name-player-one-btn') {
        playerOneNames.forEach(name => {
            name.textContent = editNameInput.value;
        })
        editNamePage.classList.add('hidden');
        editNameInput.value = '';
    }
    if (nameToEdit === 'edit-name-player-two-btn') {
        playerTwoNames.forEach(name => {
            name.textContent = editNameInput.value;
        })
        editNamePage.classList.add('hidden');
        editNameInput.value = '';
    }
})

// start game button
startGameBtn.addEventListener('click', function() {
    homePage.classList.add('hidden');
    quitBtnBgColor();
    firstToAmountLegs.textContent = numberOfLegs;
    firstToAmountSets.textContent = numberOfSets;
})

// home button
homeBtn.addEventListener('click', function() {
    newGame();
    homePage.classList.remove('hidden');
});

// number of darts buttons
numberOfDartsBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (e.currentTarget.classList.contains('one-dart') && playerTwo.classList.contains('active')) {
            playerOneDartsTotal -= 2;
        }
        if (e.currentTarget.classList.contains('two-darts') && playerTwo.classList.contains('active')) {
            playerOneDartsTotal -= 1;
        }
        if (e.currentTarget.classList.contains('three-darts') && playerTwo.classList.contains('active')) {
            playerOneDartsTotal += 0;
        }

        if (e.currentTarget.classList.contains('one-dart') && playerOne.classList.contains('active')) {
            playerTwoDartsTotal -= 2;
        }
        if (e.currentTarget.classList.contains('two-darts') && playerOne.classList.contains('active')) {
            playerTwoDartsTotal -= 1;
        }
        if (e.currentTarget.classList.contains('three-darts') && playerOne.classList.contains('active')) {
            playerTwoDartsTotal += 0;
        }

        numberOfDartsPage.classList.add('hidden');
    })
})

//keypad
keys.addEventListener('click', function(e) {
    if (e.currentTarget === e.target) {
        return;
    }
    if (e.target.classList.contains('number')) {
        const key = e.target;
        const keyValue = key.textContent;
        scoreInput.textContent += keyValue;
    }
})

//backspace
backspaceBtn.addEventListener('click', function() {
    scoreInput.textContent = scoreInput.textContent.slice(0, -1);
})

//bust
bustBtn.addEventListener('click', function() {
    if (playerOne.classList.contains('active')) {

        ///////// PREVIOUS SCORES PRODUCTION ///////////
        previousScores.innerHTML = '';
        playerOneScoreList.unshift(0);
        playerOneScoreListInLeg.unshift(0);
        previousScoresProducer(playerOneScoreListInLeg, playerTwoScoreListInLeg);

        ///////// AVERAGE SCORE PRODUCTION ///////////
        setAverage(playerOneScoreList, turnAvgOne);
        playerOneAverage = average;

        ///////// ADD TOTAL DARTS ///////////
        playerOneDartsTotal += 3;
        playerOneDartsTotalInLeg +=3;
        // dartsInLegOne.textContent = playerOneDartsTotalInLeg;

        ///////// RESET SCORE INPUT VALUE ///////////
        scoreInput.textContent = '';

    } else if (playerTwo.classList.contains('active')) {

        ///////// PREVIOUS SCORES PRODUCTION ///////////
        previousScores.innerHTML = '';
        playerTwoScoreList.unshift(0);
        playerTwoScoreListInLeg.unshift(0);
        previousScoresProducer(playerOneScoreListInLeg, playerTwoScoreListInLeg);

        ///////// AVERAGE SCORE PRODUCTION ///////////
        setAverage(playerTwoScoreList, turnAvgTwo);
        playerTwoAverage = average;

        ///////// ADD TOTAL DARTS ///////////
        playerTwoDartsTotal += 3;
        playerTwoDartsTotalInLeg +=3;
        // dartsInLegTwo.textContent = playerTwoDartsTotalInLeg;

        ///////// RESET SCORE INPUT VALUE ///////////
        scoreInput.textContent = '';
    }

    playerOne.classList.toggle('active');
    playerTwo.classList.toggle('active');

    quitBtnBgColor();
})

//game stats button
gameStatsBtn.addEventListener('click', function() {
    console.log(playerOneAverage);
    console.log(playerTwoAverage);
    // show stats page
    statsPage.classList.remove('hidden');

    // set stats page html
    let playerOneAvgDartsInLeg = playerOneDartsTotal / legsTotalAmount;
    let playerTwoAvgDartsInLeg = playerTwoDartsTotal / legsTotalAmount;
    playerOneAvgDartsInLeg = playerOneAvgDartsInLeg.toFixed(2);
    playerTwoAvgDartsInLeg = playerTwoAvgDartsInLeg.toFixed(2);
    statsPage.innerHTML = `<header class="stats-header flex">
                                <button class="close-stats-btn">
                                    <i class="fa fa-window-close"></i>
                                </button>
                                <h2 class="stats-heading">Statistics</h2>
                            </header>
                            <h3 class="stats-player-heading stats-player-one-heading">${playerOneNames[0].textContent}</h3>
                            <ul class="player-stats">
                                <li class="player-stat flex">
                                    <p>Throws:</p>
                                    <p class="stat">${playerOneDartsTotal}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>Avg. throws per leg:</p>
                                    <p class="stat">${playerOneAvgDartsInLeg}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>Avg. score:</p>
                                    <p class="stat">${playerOneAverage}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>Best turn:</p>
                                    <p class="stat">${playerOneBestTurn}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>60+</p>
                                    <p class="stat">${playerOneSixtyPlus}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>100+</p>
                                    <p class="stat">${playerOneOneHundredPlus}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>140+</p>
                                    <p class="stat">${playerOneOneFortyPlus}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>180</p>
                                    <p class="stat">${playerOneOneEightys}</p>
                                </li>
                            </ul>
                            <h3 class="stats-player-heading stats-player-two-heading">${playerTwoNames[0].textContent}</h3>
                            <ul class="player-stats">
                                <li class="player-stat flex">
                                    <p>Throws:</p>
                                    <p class="stat">${playerTwoDartsTotal}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>Avg. throws per leg:</p>
                                    <p class="stat">${playerTwoAvgDartsInLeg}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>Avg. score:</p>
                                    <p class="stat">${playerTwoAverage}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>Best turn:</p>
                                    <p class="stat">${playerTwoBestTurn}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>60+</p>
                                    <p class="stat">${playerTwoSixtyPlus}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>100+</p>
                                    <p class="stat">${playerTwoOneHundredPlus}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>140+</p>
                                    <p class="stat">${playerTwoOneFortyPlus}</p>
                                </li>
                                <li class="player-stat flex">
                                    <p>180</p>
                                    <p class="stat">${playerTwoOneEightys}</p>
                                </li>
                            </ul>`

    //game stats button close
    const closeStatsBtn = document.querySelector('.close-stats-btn');
    closeStatsBtn.addEventListener('click', function() {
        statsPage.classList.add('hidden');
    })
})

//play again button
playAgainBtn.addEventListener('click', function() {
    newGame();
    quitBtnBgColor();
});

//invalid input button
invalidInputBtn.addEventListener('click', function() {
    invalidInputPage.classList.add('hidden');
});

//quit match button
quitMatchBtn.addEventListener('click', function() {
    areYouSurePage.classList.remove('hidden');
})

//quit match confirm button
quitMatchConfirmBtn.addEventListener('click', function() {
    newGame();
    areYouSurePage.classList.add('hidden');
    homePage.classList.remove('hidden');
})

//quit match deny button
quitMatchDenyBtn.addEventListener('click', function() {
    areYouSurePage.classList.add('hidden');
})

//submit
submitBtn.addEventListener('click', function() {

    let scoreInputValue;

    // do not allow impossible scores
    for (let i = 0; i < impossibleScores.length; i++) {
        if (parseInt(scoreInput.textContent) > 180 || parseInt(scoreInput.textContent) === impossibleScores[i]) {
            scoreInput.textContent = '';
            invalidInputPage.classList.remove('hidden');
            return;
        }
    }

    // do not allow empty input
    // &&
    // sets scoreInputValue
    if (scoreInput.textContent.length === 0) {
        invalidInputPage.classList.remove('hidden');
        return;
    } else {
        scoreInputValue = parseInt(scoreInput.textContent);
    }


    /////////
    ///////// CHANGE SCORES WHEN PLAYER 1 ACTIVE ///////////
    /////////
    if (playerOne.classList.contains('active')) {

        // do not allow impossible finishes
        for (let i = 0; i < impossibleFinishes.length; i++) {
            if (parseInt(scoreInput.textContent) === impossibleFinishes[i] && playerOneScore < 170) {
                scoreInput.textContent = '';
                invalidInputPage.classList.remove('hidden');
                return;
            }
        }
        // do not allow minus global score
        if (playerOneScore - parseInt(scoreInput.textContent) < 0) {
            scoreInput.textContent = '';
            invalidInputPage.classList.remove('hidden');
            return;
        }
        // do not allow 1 remaining global score
        if (playerOneScore - parseInt(scoreInput.textContent) === 1) {
            scoreInput.textContent = '';
            invalidInputPage.classList.remove('hidden');
            return;
        }

        // reset previous scores container html
        previousScores.innerHTML = '';

        // calculate remaining score
        const newScore = playerOneScore - scoreInputValue;
        const screenScore = playerOne.querySelector('p');
        // change score on screen
        screenScore.textContent = newScore;
        // change score in global variable
        playerOneScore = newScore;
        // toggle active class
        playerOne.classList.toggle('active');
        playerTwo.classList.toggle('active');
        // reset score input value
        scoreInput.textContent = '';



        /////////
        ///////// PREVIOUS SCORES PRODUCTION ///////////
        /////////

        // add score to score list array
        playerOneScoreList.unshift(scoreInputValue);
        playerOneScoreListInLeg.unshift(scoreInputValue);

        previousScoresProducer(playerOneScoreListInLeg, playerTwoScoreListInLeg);      
        

        /////////
        ///////// AVERAGE SCORE PRODUCTION ///////////
        /////////

        setAverage(playerOneScoreList, turnAvgOne);

        playerOneAverage = average;


        /////////
        ///////// POSSIBLE CHECKOUTS CONTAINER PRODUCTION ///////////
        /////////
        bestPossibleCheckout(playerOneScore, checkoutOne);        

        // add total darts thrown
        playerOneDartsTotal += 3;
        playerOneDartsTotalInLeg += 3;
        // dartsInLegOne.textContent = playerOneDartsTotalInLeg;


        /////////
        ///////// DEALING WITH WHEN 0 IS REACHED ///////////
        /////////
        if (playerOneScore === 0) {

            playerOneLegs++;
            playerOneLegsTotal.textContent = playerOneLegs;
            legsTotalAmount++;
            legsTotalAmountInSet++;


            /////////
            ///////// accounting for sets ///////////
            /////////
            if (playerOneLegs === numberOfLegs && numberOfSets > 1) {
                setsTotalAmount++;
                playerOneSets++;
                playerOneSetsTotal.textContent = playerOneSets;
                playerOneLegs = 0;
                playerOneLegsTotal.textContent = 0;
                playerTwoLegs = 0;
                playerTwoLegsTotal.textContent = 0;
                resetLeg();
                numberOfDartsPage.classList.remove('hidden');
                gameOverPage.classList.add('hidden');

                if (setsTotalAmount % 2 !== 0) {
                    playerOne.classList.remove('active');
                    playerTwo.classList.add('active');
                } else {
                    playerOne.classList.add('active');
                    playerTwo.classList.remove('active');
                }

                legsTotalAmountInSet = 0;

                // if total sets amount is reached
                if (playerOneSets === numberOfSets) {

                    numberOfDartsPage.classList.remove('hidden');
                    gameOverPage.classList.remove('hidden');
                    winnerMessage.textContent = `${playerOneNames[0].textContent} wins!`;

                    setStats(playerOneScoreList, playerTwoScoreList);
                }
            }
            /////////
            ///////// accounting for legs ///////////
            /////////
            else if (playerOneLegs === numberOfLegs) {

                numberOfDartsPage.classList.remove('hidden');
                gameOverPage.classList.remove('hidden');
                winnerMessage.textContent = `${playerOneNames[0].textContent} wins!`;

                setStats(playerOneScoreList, playerTwoScoreList);

            } else if (playerOneLegs !== numberOfLegs) {
                numberOfDartsPage.classList.remove('hidden');
                resetLeg();

                console.log(legsTotalAmount);

                if (setsTotalAmount % 2 === 0) {
                    if (legsTotalAmountInSet % 2 !== 0) {
                        playerOne.classList.remove('active');
                        playerTwo.classList.add('active');
                    } else {
                        playerOne.classList.add('active');
                        playerTwo.classList.remove('active');
                    }
                } else {
                    if (legsTotalAmountInSet % 2 !== 0) {
                        playerOne.classList.add('active');
                        playerTwo.classList.remove('active');
                    } else {
                        playerOne.classList.remove('active');
                        playerTwo.classList.add('active');
                    }
                }
            }
        }

    }


    /////////
    ///////// CHANGE SCORES WHEN PLAYER 2 ACTIVE ///////////
    ///////// 
    else if (playerTwo.classList.contains('active')) {

        // do not allow impossible finishes
        for (let i = 0; i < impossibleFinishes.length; i++) {
            if (parseInt(scoreInput.textContent) === impossibleFinishes[i] && playerTwoScore < 170) {
                scoreInput.textContent = '';
                invalidInputPage.classList.remove('hidden');
                return;
            }
        }
        // do not allow minus global score
        if (playerTwoScore - parseInt(scoreInput.textContent) < 0) {
            scoreInput.textContent = '';
            invalidInputPage.classList.remove('hidden');
            return;
        }
        // do not allow 1 remaining global score
        if (playerTwoScore - parseInt(scoreInput.textContent) === 1) {
            scoreInput.textContent = '';
            invalidInputPage.classList.remove('hidden');
            return;
        }

        // reset previous scores container html
        previousScores.innerHTML = '';
        
        // calculate remaining score
        const screenScore = playerTwo.querySelector('p');
        const newScore = playerTwoScore - scoreInputValue;
        // change score on screen
        screenScore.textContent = newScore;
        // change score in global variable
        playerTwoScore = newScore;
        // toggle active class
        playerOne.classList.toggle('active');
        playerTwo.classList.toggle('active');
        // reset score input
        scoreInput.textContent = '';


        /////////
        ///////// PREVIOUS SCORES PRODUCTION ///////////
        /////////

        // add score to score list array
        playerTwoScoreList.unshift(scoreInputValue);
        playerTwoScoreListInLeg.unshift(scoreInputValue);
        
        previousScoresProducer(playerOneScoreListInLeg, playerTwoScoreListInLeg);


        /////////
        ///////// AVERAGE SCORE PRODUCTION ///////////
        /////////

        setAverage(playerTwoScoreList, turnAvgTwo);

        playerTwoAverage = average;
        

        /////////
        ///////// POSSIBLE CHECKOUTS CONTAINER PRODUCTION ///////////
        /////////
        bestPossibleCheckout(playerTwoScore, checkoutTwo); 

        // add total darts thrown
        playerTwoDartsTotal += 3;
        playerTwoDartsTotalInLeg += 3;
        // dartsInLegTwo.textContent = playerTwoDartsTotalInLeg;

        /////////
        ///////// DEALING WITH WHEN 0 IS REACHED ///////////
        /////////
        if (playerTwoScore === 0) {

            playerTwoLegs++;
            playerTwoLegsTotal.textContent = playerTwoLegs;
            legsTotalAmount++;
            legsTotalAmountInSet++;

            /////////
            ///////// accounting for sets ///////////
            /////////
            if (playerTwoLegs === numberOfLegs && numberOfSets > 1) {
                setsTotalAmount++;
                playerTwoSets++;
                playerTwoSetsTotal.textContent = playerTwoSets;
                playerOneLegs = 0;
                playerOneLegsTotal.textContent = 0;
                playerTwoLegs = 0;
                playerTwoLegsTotal.textContent = 0;
                resetLeg();
                numberOfDartsPage.classList.remove('hidden');
                gameOverPage.classList.add('hidden');

                if (setsTotalAmount % 2 !== 0) {
                    playerOne.classList.remove('active');
                    playerTwo.classList.add('active');
                } else {
                    playerOne.classList.add('active');
                    playerTwo.classList.remove('active');
                }

                legsTotalAmountInSet = 0;

                // if total sets amount is reached
                if (playerTwoSets === numberOfSets) {

                    numberOfDartsPage.classList.remove('hidden');
                    gameOverPage.classList.remove('hidden');
                    winnerMessage.textContent = `${playerTwoNames[0].textContent} wins!`;

                    setStats(playerOneScoreList, playerTwoScoreList);
                }
            } 
            /////////
            ///////// accounting for legs ///////////
            /////////
            else if (playerTwoLegs === numberOfLegs) {

                numberOfDartsPage.classList.remove('hidden');
                gameOverPage.classList.remove('hidden');
                winnerMessage.textContent = `${playerTwoNames[0].textContent} wins!`;

                setStats(playerOneScoreList, playerTwoScoreList);

            } else {
                numberOfDartsPage.classList.remove('hidden');
                resetLeg();

                console.log(legsTotalAmount);

                if (setsTotalAmount % 2 === 0) {
                    if (legsTotalAmountInSet % 2 !== 0) {
                        playerOne.classList.remove('active');
                        playerTwo.classList.add('active');
                    } else {
                        playerOne.classList.add('active');
                        playerTwo.classList.remove('active');
                    }
                } else {
                    if (legsTotalAmountInSet % 2 !== 0) {
                        playerOne.classList.add('active');
                        playerTwo.classList.remove('active');
                    } else {
                        playerOne.classList.remove('active');
                        playerTwo.classList.add('active');
                    }
                }
            }
        }
    }

    // change quit button background color when certain player active
    quitBtnBgColor();

    // if (playerOne.classList.contains('active')) {
    //     quitMatchBtn.style.backgroundColor = 'hsl( var(--color-primary), 0.5 )';
    // } else {
    //     quitMatchBtn.style.backgroundColor = 'hsl( var(--color-accent), 0.5 )';
    // }
})

// FUNCTIONS
function newGame() {

    playerOne.classList.add('active');
    playerTwo.classList.remove('active');
    gameOverPage.classList.add('hidden');
    statsPage.classList.add('hidden');

    playerOneScoreList = [];
    playerOneScoreListInLeg = [];
    playerOneScore = pointsPicked;
    playerOneAverage = 0;
    playerOneDartsTotal = 0;
    playerOneDartsTotalInLeg = 0;
    playerOneBestTurn = 0;
    playerOneSixtyPlus = 0;
    playerOneOneHundredPlus = 0;
    playerOneOneFortyPlus = 0;
    playerOneOneEightys = 0;

    playerTwoScoreList = [];
    playerTwoScoreListInLeg = [];
    playerTwoScore = pointsPicked;
    playerTwoAverage = 0;
    playerTwoDartsTotal = 0;
    playerTwoDartsTotalInLeg = 0;
    playerTwoBestTurn = 0;
    playerTwoSixtyPlus = 0;
    playerTwoOneHundredPlus = 0;
    playerTwoOneFortyPlus = 0;
    playerTwoOneEightys = 0;

    

    previousScores.innerHTML = '';

    scoreInput.textContent = '';

    playerOneScoreValue.textContent = pointsPicked;
    turnAvgOne.textContent = 0;
    // dartsInLegOne.textContent = 0;
    checkoutOne.textContent = '';

    playerTwoScoreValue.textContent = pointsPicked;
    turnAvgTwo.textContent = 0;
    // dartsInLegTwo.textContent = 0;
    checkoutTwo.textContent = '';

    playerOneLegs = 0;
    playerTwoLegs = 0;
    playerOneLegsTotal.textContent = 0;
    playerTwoLegsTotal.textContent = 0;

    playerOneSets = 0;
    playerTwoSets = 0;
    playerOneSetsTotal.textContent = 0;
    playerTwoSetsTotal.textContent = 0;

    legsTotalAmount = 0;
    legsTotalAmountInSet = 0;
    setsTotalAmount = 0;

    numberOfLegs = 1;
    numberOfLegsValue.textContent = numberOfLegs;
    numberOfSets = 1;
    numberOfSetsValue.textContent = numberOfSets;
}

function resetLeg() {
    playerOneScore = pointsPicked;
    playerTwoScore = pointsPicked;
    playerOneScoreValue.textContent = `${pointsPicked}`;
    playerTwoScoreValue.textContent = `${pointsPicked}`;

    playerOneDartsTotalInLeg = 0;
    playerTwoDartsTotalInLeg = 0;
    // dartsInLegOne.textContent = 0;
    // dartsInLegTwo.textContent = 0;

    previousScores.innerHTML = '';
    checkoutOne.textContent = '';
    checkoutTwo.textContent = '';

    playerOneScoreListInLeg = [];
    playerTwoScoreListInLeg = [];
}

function bestPossibleCheckout(playerScore, checkoutDiv) {
    for (let key in oneDartFinishes) {
        if (playerScore === parseInt(key)) {
            checkoutDiv.textContent = oneDartFinishes[key];
        }
    }
    for (let key in twoDartFinishes) {
        if (playerScore === parseInt(key)) {
            checkoutDiv.textContent = twoDartFinishes[key];
        }
    }
    for (let key in threeDartFinishes) {
        if (playerScore === parseInt(key)) {
            checkoutDiv.textContent = threeDartFinishes[key];
        }
    }
}

function previousScoresProducer(playerOneScoreListInLeg, playerTwoScoreListInLeg) {

    // convert player 1 array scores to html divs 
    const playerOneScoreListHtml = playerOneScoreListInLeg.map(score => {
        return score = `<div class="previous-score">${score}</div>`;
    })
    // create divOne element
    const divOne = document.createElement('div');
    divOne.classList.add('previous-scores');
    divOne.classList.add('flex-col');
    divOne.classList.add('even-cols');
    divOne.classList.add('center-item');
    // add html scores to divOne
    playerOneScoreListHtml.map(html => {
        divOne.innerHTML += html;
    })

    // convert player 2 array scores to html divs 
    const playerTwoScoreListHtml = playerTwoScoreListInLeg.map(score => {
        return score = `<div class="previous-score">${score}</div>`;
    })
    // create divTwo element
    const divTwo = document.createElement('div');
    divTwo.classList.add('previous-scores');
    divTwo.classList.add('flex-col');
    divTwo.classList.add('even-cols');
    divTwo.classList.add('center-item');
    // add html scores to divTwo
    playerTwoScoreListHtml.map(html => {
        divTwo.innerHTML += html;
    })

    // add divOne & divTwo html into previous scores container
    previousScores.appendChild(divOne);
    previousScores.appendChild(divTwo);
}

function setAverage(playerScoreList, turnAvg) {
    let total = 0;
    average = 0;
    for (let i = 0; i < playerScoreList.length; i++) {
        total += playerScoreList[i];
    }
    average = total / playerScoreList.length;
    average = average.toFixed(2);
    turnAvg.textContent = average;
}

function setStats(playerOneScoreList, playerTwoScoreList) {
    // get player 1 game number stats
    for (let i = 0; i < playerOneScoreList.length; i++) {
        if (playerOneScoreList[i] > playerOneBestTurn) {
            playerOneBestTurn = playerOneScoreList[i];
        }
    }
    playerOneScoreList.forEach(score => {
        if (score >= 60 && score < 100) {
            playerOneSixtyPlus++;
        }
        if (score >= 100 && score < 140) {
            playerOneOneHundredPlus++;
        }
        if (score >= 140 && score < 180) {
            playerOneOneFortyPlus++;
        }
        if (score === 180) {
            playerOneOneEightys++;
        }
    })

    // get player 2 game number stats
    for (let i = 0; i < playerTwoScoreList.length; i++) {
        if (playerTwoScoreList[i] > playerTwoBestTurn) {
            playerTwoBestTurn = playerTwoScoreList[i];
        }
    }
    playerTwoScoreList.forEach(score => {
        if (score >= 60 && score < 100) {
            playerTwoSixtyPlus++;
        }
        if (score >= 100 && score < 140) {
            playerTwoOneHundredPlus++;
        }
        if (score >= 140 && score < 180) {
            playerTwoOneFortyPlus++;
        }
        if (score === 180) {
            playerTwoOneEightys++;
        }
    })
}

function quitBtnBgColor() {
    if (playerOne.classList.contains('active')) {
        quitMatchBtn.style.backgroundColor = 'hsl( var(--color-primary), 0.5 )';
    } else {
        quitMatchBtn.style.backgroundColor = 'hsl( var(--color-accent), 0.5 )';
    }
}
