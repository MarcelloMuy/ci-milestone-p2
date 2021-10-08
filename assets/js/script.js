

/**
 * Create a new paragraph with the instructions and a button to reload the page
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
 * Reloads the page
 */
function reloadPage() {
    window.location.reload();
}
