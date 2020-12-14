### Planning Story
12/8 - Set up project and github repo.
     - Sign up, sign in, change password and sign out functionality built
     - text-align: center added to scss
     - added `New Game` button (with no functionality yet)

12/9 - Built tic tac toe grid in html/scss
     - Created separate view state for gameplay
     - added return to menu button
     - made some styling adjustments
     - Succesfully got boxes to display an 'X' or 'O' if clicked, but still getting a console.log error for event properties.
     - Made it so you can't click on occupied boxes
     - Turn box updates to say whose turn it is
     - Enlarged sizes of X's and O's

12/10 - Succesfully got PATCH requests to api for updating the game as boxes were clicked on
      - Added winning combinations
      - Message-display shows the player who won

12/11 - added tie game functionality
      - Got game to toggle away after someone wins so it can't be clicked
      - Returning to menu and starting a new game works now
      - Check game history now calculates the number of games played succesfully.
12/13 - Styling frontend
      - Fixed sizing issues with game board
      - Added background to boxes
### User Stories
- As a user, I want to sign in so that I can play the game
- As a user, I want to be able to sign out of the game
- As a user, I want to be able to click on the board
- As a user, I want to see the number of games I've played
- As a user, I want to know who's turn it is while playing
- As a user, I don't want to be able to click on spaces that are unavailable
- As a user, I don't want to refresh the entire page to start a new game
- As a user, I want my user data to be private

### Technologies Used
HTML/CSS
Bootstrap
JavaScript
JQuery

### Unsolved Problems
- Background should animate

### Wireframes
- Link to updated tic tac toe wireframe: https://imgur.com/a/JOpdvcc (12/8)
