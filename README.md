
# Simon Game Project

## Introduction
  Welcome to my second milestone project which focuses on the JavaScript language. This project is a browser version of the retro game Simon. 
  Simon is a memory game where the program flashes a series of lights and requires a user to repeat the sequence. 
  If the user succeeds, the series becomes progressively longer and more complex. 
  The game is over if the user fails to repeat the correct pattern or if the user complete 10 rounds, winning the game.

  A live version of the game can be found [here](https://marcellomuy.github.io/ci-milestone-p2/).

  ![website preview](assets/images/responsive-snip.png)

## Table of Contents
[1. User experience (ux) design:](#ux)
  - [User Goals:](#user-goals)
  - [Typography:](#typography)
  - [Site skeleton:](#site-skeleton)

[2. Features](#features)

[3.Technologies used](#technologies-used)

[4.Testing](#testing)

[5.Bugs](#bugs)

[6.Deployment](#deployment)

[7.Credit](#Credit)

  <a name="ux"></a>
# 1. User experience (UX) design
  [Go to the top](#table-of-contents)
  
  This website was designed to be simple and easy to navigate with large buttons, clear text and high contrast between colours. Instructions buttons were added to guide the user on how to play the game. It also contains a feedback button giving the user the ability to contact the creator of the game.

  <a name="user-goals"></a>
## 1.1 User Goals
  [Go to the top](#table-of-contents)

  As a user I expect:
  * A website that is responsive to different screens sizes.
  * Clear instructions on how to play. 
  * Ability to restart the game at any time.
  * Be able to check which round I am on.
  * Be able to navigate the game without reloading the page.
  * A game that increases the speed after few rounds.
  * An option to play with no sound.

 <a name="typography"></a>
## 1.2 Typography
  [Go to the top](#table-of-contents)
  
  Two fonts were used for this design. 'Press Start 2p'  for logo and Montserrat for the other elements, Sans Serif was used as a backup font in both cases.

 <a name="wireframes"></a>
## 1.3 Site Skeleton
  [Go to the top](#table-of-contents)

  [balsamiq](https://balsamiq.com/) was used to create the wireframes for the website.

  The website consists of only one page with the content of buttons generated using JavaScript.
  
  The mobile version wireframes are presented below.

  <a name="game-screen"></a>
### Game Screen:
  ![Mobile Version](./assets/images/wireframe-game-screen.png)

  <a name="instruction-screen"></a>
### Instructions Screen:
  ![Mobile Version](./assets/images/wireframe-instructions-screen.png)

  <a name="feedback-screen"></a>
### Feedback Screen:
  ![Mobile Version](./assets/images/wireframe-feedback-screen.png)

  The website consists of only one page with the content of buttons generated using JavaScript.
  The only difference between the mobile and desktop versions is that on desktop a container is added around the game and a gif image is added as a background. The game, buttons and content are displayed in the same format as the mobile version.
  
  The desktop version wireframe is presented below.
  
  <a name="desktop-game-screen"></a>
### Desktop Game Screen:
  ![Mobile Version](./assets/images/wireframe-desktop-screen.png)

  <a name="features"></a>
# 2. Features
  [Go to the top](#table-of-contents)
  
  <a name="game-screen-ui"></a>
## Game screen:
  - The logo is placed in the top centre of the page. On small screens the two words are displayed in different lines and on larger screens they are displayed on the same line.
  - Under the logo there is an instructions button, a feedback button, and a play button.
  - The three buttons are placed in the centre of the page and each one on a different line. All three buttons have the same style properties to keep the page consistent.

### Mobile:
  ![Game screen preview mobile](./assets/images/game-screen-mobile.png)

### Desktop:
  ![Game screen preview desktop](./assets/images/game-screen-desktop.png)
  
### Instructions button:
  ![Instructions button preview](./assets/images/instructions-gif.gif)

  - When clicked, the instructions button generates paragraphs containing the instructions of the game and a close button. It will also hide itself from the page displaying only the content. 
  - The paragraphs were created using template literals.
  - The close button has the same styling of the other buttons of the page, but it is smaller. When clicked, the close button will hide all the content including itself and will unhide the instructions button. 
  - If the instructions button is clicked a second time it will skip the process of generating new content and unhide the content already created.

### Feedback button:
  ![Feedback button preview](./assets/images/feedback-gif.gif)  

  - The feedback button works in a similar way as the instructions button but will generate a form instead of paragraphs.
  - The form has three inputs, first name, last name and email and a text area for the feedback.
  - All the inputs have the required attribute on, a place holder, labels, and aria-labels.
  - Under the text area there are two buttons - one for submit and one for close. The close button works the same way as the instructions close button hiding and unhiding the content. 
  - The submit button will submit the form and the code institute form dump is displayed.

### Play button:
  ![Play button preview](./assets/images/play-gif.gif)

  - The third button is the play button. When clicked it will start the game and will also change itself into a restart button.
  - When the restart button is clicked it sets the game parameters to default and turns itself back into the play button. 
  - The game is then ready to be played again.


### Rounds counter and mute icon:
  ![Rounds counter and mute preview](./assets/images/rounds-counter-and-mute-icon-gif.gif)

  - Under the buttons we have the rounds counter which keeps track of which round in the game is being played. 
  - It is justified aligned to the page, with a margin left. 
  - On the right side of the rounds counter we have a volume icon that works as a button, muting the page when clicked and unmuting when clicked again. 
  - The icon will change to represent the mute and unmuted state. 
  - The page starts with the audio option set to on.







