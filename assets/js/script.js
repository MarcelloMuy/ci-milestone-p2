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


let computerRound = false;

/**
 * Store rounds
 */
let round = "0";

/**
 * Creates a new paragraph with the instructions and a button to reload the page
 */
function runInstructions() {
    let newP = document.createElement('p');
    newP.innerHTML = "This is the Instruction...";
    let instructionsDiv = document.getElementById('instructions-div');
    instructionsDiv.appendChild(newP);
    let button = document.getElementById('instructions'); 
    button.remove();
    let closeInstructions = document.createElement('button');
    closeInstructions.innerHTML = "X";
    instructionsDiv.appendChild(closeInstructions);
    closeInstructions.setAttribute('onclick', 'reloadPage()');
}

/**
 * Creates a form when the feedback button is clicked
 * Creates a submit button
 * Creates a button to reload the page
 * 
 */
function runFeedback() {
    let newForm = document.createElement('form');
    newForm.setAttribute('id', 'feedback-form');
    newForm.setAttribute('method', 'POST')
    newForm.setAttribute('action', 'https://formdump.codeinstitute.net/');
    newForm.addEventListener('submit', handleSubmit);
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
        <textarea id="feedback" name="feedback" placeholder="Your feedback..." rows="10" cols="38" aria-label="Enter text here"></textarea>
    </div>` 
    let feedbackDiv = document.getElementById('feedback-div');
    feedbackDiv.appendChild(newForm);

    let button = document.getElementById('feedback'); 
    button.remove();
    let submitButton = document.createElement('button');
    submitButton.innerHTML = "Submit";
    submitButton.setAttribute('type', 'submit');
    newForm.appendChild(submitButton);
    let closeFeedback = document.createElement('button');
    closeFeedback.innerHTML = "X";
    newForm.appendChild(closeFeedback);
    closeFeedback.setAttribute('onclick', 'reloadPage()');
}

/**
 * Handle the submit event of the form
 * Display a pop up interacting with the user
 * Call a function to submit the form after the user have closed the feedback Popup
 * It was designed this way so the popup and the code institute form dump could be visualized separately   
 */
function handleSubmit(event) {
    event.preventDefault();
    
    let newForm = document.getElementById('feedback-form');
    
    let fname = newForm.elements['fname'].value;
    let lname = newForm.elements['lname'].value;
    let message =`
    <p> Hi ${fname} ${lname}! Thank you for your feedback.</p>`
    let feedbackPopup = document.getElementById('feedback-popup');
    feedbackPopup.innerHTML = message;
    let closeFeedbackPopup = document.createElement('button');
    closeFeedbackPopup.innerHTML = "X";
    closeFeedbackPopup.setAttribute('onclick', 'formSubmit()')
    feedbackPopup.appendChild(closeFeedbackPopup);
    let fullForm = document.getElementById('feedback-div');
    fullForm.style.display = "none";
}

/**
 * Submit the feedback form
 * Will be called when the user close the feedback Popup
 */
function formSubmit() {
    let newForm = document.getElementById('feedback-form');
    newForm.submit();
}

/**
 * Reloads the page
 */
function reloadPage() {
    window.location.reload();
}

function runGame() {
    if (!started) {
        let newRound = document.getElementById('round');
        newRound.innerHTML = round;
        playAiSequence();
        started = true;
    }
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
            userRoundToClick = false; // Prevents user from clicking while flashing
            giveAlistener();
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(700);
            this.style.backgroundColor = 'yellow'
            userRoundToClick = true; // Allows user to click again 
            giveAlistener();
        } else if (this.id == 'option2') {
            userRoundToClick = false;
            giveAlistener();
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(700);
            this.style.backgroundColor = 'blue'
            userRoundToClick = true;
            giveAlistener();
        } else if (this.id == 'option3') {
            userRoundToClick = false;
            giveAlistener();
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(700);
            this.style.backgroundColor = 'green'
            userRoundToClick = true;
            giveAlistener();
        }else if (this.id == 'option4') {
            userRoundToClick = false;
            giveAlistener();
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(700);
            this.style.backgroundColor = 'red'
            userRoundToClick = true;
            giveAlistener();
        }
        
        checkAnswer(userSequence.length - 1);
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
 * Set user sequence array to empty
 * Set userRoundToClick to false
 * Increase round by 1 and display it
 * Loops through the colours array and flashes the computer sequence
 * Set userRoundToClick to true after sequence is done and call function to give listeners to buttons
 */ 
async function playAiSequence() {
    userSequence = [];
    userRoundToClick = false;
    round++;
    displayRound();
    newColour();
    for (let i = 0; i < aiSequence.length; i++) {
        await sleep(700);
        let flashing = document.getElementById(aiSequence[i]);
        if (flashing.id == 'option1') {
            flashing.style.backgroundColor = 'white'
            await sleep(700);
            flashing.style.backgroundColor = 'yellow'
        } else if (flashing.id == 'option2') {
            flashing.style.backgroundColor = 'white'
            await sleep(700);
            flashing.style.backgroundColor = 'blue'
        } else if (flashing.id == 'option3') {
            flashing.style.backgroundColor = 'white'
            await sleep(700);
            flashing.style.backgroundColor = 'green'
        }else if (flashing.id == 'option4') {
            flashing.style.backgroundColor = 'white'
            await sleep(700);
            flashing.style.backgroundColor = 'red'
        }
    }
    userRoundToClick = true;
    giveAlistener();
 } 
/**
 * Display the round number
 */
function displayRound() {
    document.getElementById('round').innerHTML = round;
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
    restartButton.innerHTML = "X"
    restartButton.addEventListener('click', reloadPage);
    winAlert.appendChild(restartButton);

    let body = document.getElementsByTagName('body');
    body[0].appendChild(winAlert);
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
}
