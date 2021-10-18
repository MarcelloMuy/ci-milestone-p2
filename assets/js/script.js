/**
 * Array of colours (Computer)
 */
let aiSequence = [];

/**
 * Array of colours (User)
 */
let userSequence = [];

/**
 * A way to check if the game has started 
 */
let started = false;

/**
 * A way to check if it is the user round
 */
let userRoundToClick = false;

/**
 * Store rounds
 */
let round = "0";

/**
 * Tracks if the instructions content have been generated
 */
let instructions = false;

/**
 * Tracks if the feedback form have been generated
 */
let feedbackForm = false;

/**
 * Tracks wrong answer
 */
let wrongAnswer = false;

/**
 * Creates a new paragraph with the instructions and a button to hide the content
 */
function runInstructions() {
    let instructionsDiv = document.getElementById('instructions-div');
    let button = document.getElementById('instructions');

    if (!instructions) {
        let closeInstructions = document.createElement('button');
        let newP = document.createElement('div');
        newP.setAttribute('id', 'newP');
        newP.innerHTML = `
        <p>Press play to start. Simon will give the first signal. Repeat the signal by pressing the same colour.</p>
        <p>Simon will duplicate the first signal and add one. Repeat these two signals by pressing the same colours in order.</p>
        <p>Simon will duplicate these first two signals and add one.</p>
        <p>After the 4th round Simon will automatically speed up.</p>
        <p>Finish 10 rounds to win the game</p>` 
        
        instructionsDiv.appendChild(newP);
        closeInstructions.setAttribute('id', 'close-instructions');
        closeInstructions.innerHTML = "Close";
        closeInstructions.setAttribute('onclick', 'hideContent()');
        instructionsDiv.appendChild(closeInstructions);
        button.style.display = 'none';    
        instructions = true;
    } else {
        let div = document.getElementById('newP');
        div.style.display = 'inline';
        let closeInstructions = document.getElementById('close-instructions');
        closeInstructions.style.display = 'inline';
        let button = document.getElementById('instructions'); 
        button.style.display = 'none';
    }
}
/**
 * Creates a form when the feedback button is clicked
 * Creates a submit button
 * Creates a button to reload the page
 * 
 */
function runFeedback() {
    let feedbackDiv = document.getElementById('feedback-div');
    let button = document.getElementById('feedback'); 
    
    if (!feedbackForm) {
        let newForm = document.createElement('form');
        newForm.setAttribute('id', 'feedback-form');
        newForm.setAttribute('method', 'POST')
        newForm.setAttribute('action', 'https://formdump.codeinstitute.net/');
        newForm.innerHTML = `
        <div>
            <h2 aria-label="Form Heading">Give Your Feedback</h2>
        </div>
        <div>
            <label for="fname">First Name:</label>
            <input id="fname" name="fname" type="text" placeholder="Enter first name" aria-label="Enter first name" required>
        </div>
        <div>
            <label for="lname">Last Name:</label>
            <input id="lname" name="lname" type="text" placeholder="Enter last name" aria-label="Enter last name" required>
        </div>
        <div>
            <label for="email">Email Adress:</label>
            <input type="email" id="email" name="email_address" placeholder="Enter e-mail" aria-label="Enter e-mail" required>       
        </div>
        <div>
            <label for="feedback"></label>
            <textarea id="feedback" name="feedback" placeholder="Your feedback..." rows="10" cols="38" aria-label="Enter text here" required></textarea>
        </div>` 
    
        feedbackDiv.appendChild(newForm);
        button.style.display = 'none';

        let submitButton = document.createElement('button');
        submitButton.innerHTML = "Submit";
        submitButton.setAttribute('type', 'submit');
        newForm.appendChild(submitButton);
        let closeFeedback = document.createElement('button');
        closeFeedback.setAttribute('id', 'close-feedback')
        closeFeedback.innerHTML = "Close";
        newForm.appendChild(closeFeedback);
        closeFeedback.setAttribute('onclick', 'hideForm()');
        feedbackForm = true;
    } else {
        let form = document.getElementById('feedback-form');
        form.style.display = 'inline';
        let closeFeedback = document.getElementById('close-feedback');
        closeFeedback.style.display = 'inline';
        let button = document.getElementById('feedback'); 
        button.style.display = 'none';
    }
}

/**
 * Function to hide the feedback form
 */
function hideForm() {
    let form = document.getElementById('feedback-form');
    form.style.display = 'none';
    let closeFeedback = document.getElementById('close-feedback');
    closeFeedback.style.display = 'none';
    let button = document.getElementById('feedback'); 
    button.style.display = 'inline';
}

/**
 * function to hide the instructions content
 */
function hideContent() {
    let div = document.getElementById('newP');
    div.style.display = 'none';
    let closeInstructions = document.getElementById('close-instructions');
    closeInstructions.style.display = 'none';
    let button = document.getElementById('instructions'); 
    button.style.display = 'inline';
}

/**
 * Reloads the page
 */
function reloadPage() {
    window.location.reload();
}

/**
 * function to run the game
 */
function runGame() {
    if (!started) {
        let newRound = document.getElementById('round');
        newRound.innerHTML = round;
        playAiSequence();
        started = true;
    }
}

/**
 * Generates a random number between 1 and 4
 */
 function newColour() {
    let colour = Math.floor(Math.random() * 4 + 1);
    aiSequence.push("option" + colour);
}

/**
 * Can be called in other functions in order to set a time to wait
 * before executing next line of code
 */
 function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve,milliseconds));
 }

 /**
 * Display the round number
 */
function displayRound() {
    document.getElementById('round').innerHTML = round;
}

/**
 * Set user sequence array to empty
 * Set userRoundToClick to false
 * Increase round by 1 and display it
 * Loops through the colours array and flashes the computer sequence
 * Increases the game speed after round 4
 * Set userRoundToClick to true after sequence is done and call function to give listeners to buttons
 */ 
async function playAiSequence() {
    userSequence = [];
    userRoundToClick = false;
    round++;
    displayRound();
    newColour();
    for (let i = 0; i < aiSequence.length; i++) {
        if (round >= 5) {
            await sleep(350);
        } else {
            await sleep(700);
        }
        let flashing = document.getElementById(aiSequence[i]);
        if (flashing.id == 'option1') {
            playAudio();
            flashing.style.backgroundColor = 'white'
            if (round >= 5) {
                await sleep(350);
            } else {
                await sleep(700);
            }
            flashing.style.backgroundColor = 'yellow'
        } else if (flashing.id == 'option2') {
            playAudio();
            flashing.style.backgroundColor = 'white'
            if (round >= 5) {
                await sleep(350);
            } else {
                await sleep(700);
            }
            flashing.style.backgroundColor = 'blue'
        } else if (flashing.id == 'option3') {
            playAudio();
            flashing.style.backgroundColor = 'white'
            if (round >= 5) {
                await sleep(350);
            } else {
                await sleep(700);
            }
            flashing.style.backgroundColor = 'green'
        }else if (flashing.id == 'option4') {
            playAudio();
            flashing.style.backgroundColor = 'white'
            if (round >= 5) {
                await sleep(350);
            } else {
                await sleep(700);
            }
            flashing.style.backgroundColor = 'red'
        }
    }
    userRoundToClick = true;
    giveAlistener();
 } 

/**
 * Loops through the board game and add a listener to each button
 * when userRoundToClick is true, else removes listeners.
 */
function giveAlistener() {
    let allButtons = document.getElementsByClassName('board-button');

    if (userRoundToClick == true) {
        for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', userRound);
        }
    } else if (userRoundToClick == false) {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].removeEventListener('click', userRound);
            }
    }   
}

/**
 * if userRoundToClick true,
 * listens to the buttons being clicked, flashes and push buttons id to array.
 * calls A function to check the answers 
 */
async function userRound(event) {
    if (userRoundToClick == true) {
        if (this.id == 'option1') {
            playAudio();
            userRoundToClick = false; // Prevents user from clicking while flashing
            giveAlistener();
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(350);
            this.style.backgroundColor = 'yellow'
            userRoundToClick = true; // Allows user to click again 
            giveAlistener();
        } else if (this.id == 'option2') {
            playAudio();
            userRoundToClick = false;
            giveAlistener();
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(350);
            this.style.backgroundColor = 'blue'
            userRoundToClick = true;
            giveAlistener();
        } else if (this.id == 'option3') {
            playAudio();
            userRoundToClick = false;
            giveAlistener();
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(350);
            this.style.backgroundColor = 'green'
            userRoundToClick = true;
            giveAlistener();
        }else if (this.id == 'option4') {
            playAudio();
            userRoundToClick = false;
            giveAlistener();
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(350);
            this.style.backgroundColor = 'red'
            userRoundToClick = true;
            giveAlistener();
        }
        
        checkAnswer(userSequence.length - 1);
    }
}

 /**
  * Checks if the user clicked option matches the computer sequence
  * Checks if user sequence has the same length as computer sequence
  * Checks if user won the game 
  * Alerts the user if given the wrong answer
  */
async function checkAnswer(currentRound) {
    if (aiSequence[currentRound] === userSequence[currentRound]) {
        if (userSequence.length === aiSequence.length) {
            if (round == 10) {
                winGame();
            } else {
                setTimeout(function() {
                    playAiSequence();
                }, 1000);
            }
        } 
    } else {
        wrongAnswer = true;
        playAudio();
        let boardArea = document.getElementById('board-area');
        boardArea.style.backgroundColor = 'red';
        await sleep(1000);
        boardArea.style.backgroundColor = 'black';

        restartGame();
    }
}

/**
 * Sets display to none of major areas of game
 * Create and display winning message
 * Create and display a winning img
 * Create and Diplay button to reload the page
 */
function winGame() {
    let boardArea = document.getElementById('board-area');
    let roundArea = document.getElementById('round-area');
    let controlArea = document.getElementById('control-area');
    boardArea.style.display = 'none';
    roundArea.style.display = 'none';
    controlArea.style.display = 'none';

    let winAlert = document.createElement('div');

    let winMessage = document.createElement('h2');
    winMessage.innerText = "Well done, you beat the game!";
    winAlert.appendChild(winMessage);

    let restartButton = document.createElement('button');
    restartButton.innerHTML = "Restart game"
    restartButton.addEventListener('click', reloadPage);
    winAlert.appendChild(restartButton);

    let winImage = document.createElement('img');
    winImage.src = './assets/images/win-image.png';
    winAlert.appendChild(winImage);

    let body = document.getElementsByTagName('body');
    body[0].appendChild(winAlert);
}

/**
 * plays a sound effect 
 */
function playAudio() {
    let audio = document.getElementById('sound-effect');
    let audio2 = document.getElementById('sound-effect2');
    let audio3 = document.getElementById('sound-effect3');
    if (userRoundToClick) {
        audio.play();
    } else if (wrongAnswer == true) {
        audio3.play();
    } else if (!userRoundToClick) {
        audio2.play();
    }
}

/**
 * Restart the game by Setting parameters to default state
 */
function restartGame() {
    aiSequence = []
    round = 0;
    displayRound();
    userRoundToClick = false;
    started = false;
    wrongAnswer = false;
}
