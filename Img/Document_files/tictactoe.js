let turn = true;
let clickedCount = 0;

function play(btn) {
    if (btn.innerText === "") { // Check if the button is empty before allowing a move
        btn.innerText = turn ? "X" : "O";
        btn.classList.add(turn ? "xbtn" : "obtn");
        btn.setAttribute("disabled", "disabled");

        turn = !turn; // Toggle the turn correctly
        clickedCount++;

        if (checkWin()) {
            gameActive = false;
            document.querySelector('.result-message').innerText = `Player ${currentPlayer} wins!`;
        } else if ([...cells].every(cell => cell.innerText !== '')) {
            gameActive = false;
            document.querySelector('.result-message').innerText = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        if (clickedCount >= 16) { // Change to 9 for a 3x3 board
            alert("Game over!!! It's a draw.");
        }
    }
}



function resetGame() {
    if (!confirm('Do you want to reset the game?')) {
        return;
    }

    let btns = document.getElementsByClassName('btn');

    for (const element of btns) {
        element.innerText = "";
        element.classList.remove("xbtn");
        element.classList.remove("obtn");
        element.removeAttribute("disabled");
    }

    turn = true;
    clickedCount = 0;

}
function checkWin() {
    // Check winning conditions and return true if a player wins
}
