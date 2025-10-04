// Create a players array containing 2 objects, one representing each player

const players = [
    {
        name: "Amaewhule",
        symbol: "X"
    },
    {
        name: "Promise",
        symbol: "O"
    }
]

// Display each player's name in the appropriate element in the page
document.getElementById("p1-name").textContent = players[0].name
document.getElementById("p2-name").textContent = players[1].name

let currentPlayerIndex = 0;

function handleSquareClick(clickedSquare) {
    if (clickedSquare.textContent !== "") {
        return;
    }

    const currentPlayer = players[currentPlayerIndex];
    clickedSquare.textContent = currentPlayer.symbol

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
}
const winCase = [
    [sq1,sq2,sq3],
    [sq4,sq5,sq6],
    [sq7,sq8,sq9],
    [sq1,sq4,sq7],
    [sq2,sq5,sq8],
    [sq3,sq6,sq9],
    [sq1,sq5,sq9],
    [sq3,sq5,sq7],
]

if(players.symbol === winCase) {
    console.log("player"+ player.symbol +"wins")
} else {
    console.log("No winner")
}