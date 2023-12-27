document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("reset");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Fungsi untuk mengecek pemenang
    function checkWinner() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                cells[a].classList.add("winner");
                cells[b].classList.add("winner");
                cells[c].classList.add("winner");
                return true;
            }
        }

        if (gameBoard.every((cell) => cell !== "")) {
            return "draw";
        }

        return false;
    }

    // Fungsi untuk menghandle klik sel
    function handleCellClick(e) {
        const cell = e.target;
        const index = Array.from(cells).indexOf(cell);

        if (gameBoard[index] === "" && !checkWinner()) {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer);
            currentPlayer = currentPlayer === "X" ? "O" : "X";

            const winner = checkWinner();
            if (winner) {
                if (winner === "draw") {
                    alert("Permainan berakhir dengan hasil seri!");
                } else {
                    alert(`Player ${winner} menang!`);
                }
            }
        }
    }

    // Fungsi untuk mereset permainan
    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        cells.forEach((cell) => {
            cell.textContent = "";
            cell.classList.remove("X", "O", "winner");
        });
        currentPlayer = "X";
    }

    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
})