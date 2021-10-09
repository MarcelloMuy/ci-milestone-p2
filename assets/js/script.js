

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
