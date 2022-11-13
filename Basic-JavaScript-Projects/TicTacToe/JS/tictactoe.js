//This variable keeps trackof whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOorO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of the selectedSquares array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activeplayer is equal to 'X', the X.png is placed in HTML
            select.style.backgroundImage = 'url("Images/x.png")';
            //Active player may only be 'x' or '0',or 'if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in the HTML
            select.style.backgroundImage = 'url("Images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is "X" chang it to '0'
            activePlayer = 'O';
            //If active player is anything other than 'X'
        } else {
            //Change activePlayer to 'X'
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./Media/place.mp3');
        //This condition check to see if it is the computers turn.
        if (activePlayer === 'O') {
            //This function disables clicking for computers turn.
            disableClick();
            //This function waits 1sec before the computer place and image and enables click.
            setTimeout(function () {computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results in a random square being selectedby the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep tyring if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOorO(pickASquare)) {
                //This line calls the function.
                placeXOorO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the conditions is met.
function checkWinConditions() {
    // X 0, 1, 2 conditions.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine (50, 100, 558, 100)}
    // X 3, 4, 5 conditions.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine (50, 304, 558, 304)}
    // X 6, 7, 8 conditions.
    else if (arrayIncludes('6X', '7x', '8X')) { drawWinLine (50, 508, 558, 508)}
    // X 0, 3, 6 conditions.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine (100, 50, 100, 558)}
    // X 1, 4, 7 conditions.
    else if (arrayIncludes('1x', '4x', '7x')) { drawWinLine (304, 50, 304, 558)}
    // X 2, 5, 8 conditions.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine (508, 50, 508, 558)}
    // X 6, 4, 2 conditions.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine (100, 508, 510, 90)}
    // X 0, 4, 8 conditions.
    else if (arrayIncludes('0X', '4x', '8x')) { drawWinLine (100, 100, 520, 520)} 
    // O 0, 1, 2 conditions.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine (50, 100, 558, 100)}
    // O 3, 4, 5 conditions.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine (50, 304, 558, 508)}
    // O 6, 7, 8 conditions.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine (50, 508, 558, 508)}
    // O 0, 3, 6 conditions.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine (100, 50, 100, 558)}
    // O 1, 4, 7 conditions.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine (304, 50, 304, 558)}
    // O 2, 5, 8 conditions.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine (508, 50, 508, 558)}
    // O 6, 4, 2 conditions.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    // O 0, 4, 8 conditions.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}
    // This condition checks for a tie. If none of the above conditions are met and
    // 9 squares are selected the code executes.
    else if (selectedSquares >= 9) {
        //This function plays the tie game sounds.
        audio('./Media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500);
    }
    // This function checks if an array includes 3 strings. It is used to check for
    // each wind condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our rray then
        //ture is returned and our else if condition executes the drawLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
 }

 //This function makes our body element temporarily unclickable.
 function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This make our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
 }

 //This function takes a string parameter of the path you set earlier for
 //placement sound ('./Media/place.mp3')
 function audio(audioURL) {
    //We create a new audio object and we pass the paht as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
 }

 //This function utilizes HTML canvas to draw win lines.
 function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //this line gives us the access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a line's x axis is.
    let x1 = coordX1,
        //this line indicates where the start of a line's y axis is.
        y1 = coordY1,
        //This line indicates where the end of a line's x axis is.
        x2 = coordX2,
        //this line indicates where the end of a lines's y axis is.
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //this variable stores temporary y axis data we update in our animation loop.
        y = y1;
    //This function interacts with the canvas.
    function animateLineDrawing() {
        //this variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path.
        c.beginPath();
        //This method moves us to a starting point in our line.
        c.moveTo(x1,y1);
        //this method indicates the end point in our line.
        c.lineTo(x, y);
        //This method sets the width of our line.
        c.lineWidth = 10;
        //this method sets the color of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //This method draws everthing we laid out above.
        c.stroke();
        //this condition checks if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            //This condition adds 10 to the prevoius end x endpoint.
            if (x < x2) { x += 10;}
            //this condition adds 10 to the previous end y endpoint.
            if (y < y2) { y += 10;}
            //This condition is similar to the one above.
            //this is necessary for the 6, 4, 2 win conditions.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This condition is similar to the one above.
        //this is necessary for the 6, 4, 2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10;}
            if (y > y2) { y -= 10;}
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //This function clears our canvas after our win line is drawn.
    function clear() {
        //this line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while the win sounds is playing.
    disableClick();
    //this line plays the win sounds.
    audio('./Media/winGame.mp3');
    //This line calls our main animation loop.
    animateLineDrawing();
    //this line waits 1 second. Then, cleas canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
 }

 //This funcion resets the game in the event of a tie or a win.
 function resetGame() {
    //this for loop iterates through each HTMO square element.
    for (let i = 0; 1 < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can star over.
    selectedSquares = [];
 }