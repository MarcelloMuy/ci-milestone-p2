

/**
 * Creates a new paragraph with the instructions and a button to reload the page
 */
function runInstructions() {
    let newP = document.createElement('p');
    newP.innerHTML = "This is the Instruction...";
    let instructionsDiv = document.getElementById('instructionsDiv');
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
    newForm.setAttribute('id', 'feedbackForm');
    newForm.setAttribute('method', 'POST')
    newForm.setAttribute('action', 'https://formdump.codeinstitute.net/');
    newForm.innerHTML = `
    <div>
        <h2 aria-label="Form Heading">Give Your Feedback</h2>
    </div>
    <div>
        <label for="fname">First Name:</label>
        <input id="fname" name="first_name" type="text" placeholder="Enter first name" aria-label="Enter first name" required>
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
    let feedbackDiv = document.getElementById('feedbackDiv');
    feedbackDiv.appendChild(newForm);

    let button = document.getElementById('feedback'); 
    button.remove();
    let submitButton = document.createElement('button');
    submitButton.innerHTML = "Submit";
    submitButton.setAttribute('type', 'submit');
    feedbackForm.appendChild(submitButton);
    let closeInstructions = document.createElement('button');
    closeInstructions.innerHTML = "X";
    feedbackForm.appendChild(closeInstructions);
    closeInstructions.setAttribute('onclick', 'reloadPage()');
}

/**
 * Reloads the page
 */
function reloadPage() {
    window.location.reload();
}
