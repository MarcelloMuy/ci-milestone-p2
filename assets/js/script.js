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

    if (userRoundToClick = true) {
        for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', userRound);
        }
    } else {
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
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(700);
            this.style.backgroundColor = 'yellow'
        } else if (this.id == 'option2') {
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(700);
            this.style.backgroundColor = 'blue'
        } else if (this.id == 'option3') {
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(700);
            this.style.backgroundColor = 'green'
        }else if (this.id == 'option4') {
            userSequence.push(this.id);
            this.style.backgroundColor = 'white'
            await sleep(700);
            this.style.backgroundColor = 'red'
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
 * Loops through the colours array and flashes the computer sequence
 * Set userRoundToClick to true after sequence is done and call function to give listeners to buttons
 */ 
async function playAiSequence() {
    userSequence = [];
    userRoundToClick = false;
    round++;
    document.getElementById('round').innerHTML = round;
    newColour();
    for (let i = 0; i < aiSequence.length; i++) {
        await sleep(700);
        let flashing = document.getElementById(aiSequence[i]);
        console.log(flashing);
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
  * Check if the user clicked option matches the computer sequence
  * Check if user sequence has the same length as computer sequence 
  * Alerts the user if given the wrong answer
  */
async function checkAnswer(currentRound) {
    if (aiSequence[currentRound] === userSequence[currentRound]) {
        if (userSequence.length === aiSequence.length) {
            setTimeout(function() {
                playAiSequence();
            }, 1000);
        } 
    } else {
    let boardArea = document.getElementsByClassName('board-area')[0];
    boardArea.style.backgroundColor = 'red';
    await sleep(1000);
    boardArea.style.backgroundColor = 'black';
    }
}
