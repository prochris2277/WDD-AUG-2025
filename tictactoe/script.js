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

let currenPlayerIndex = 0;

function handleSquareClick(clickedSquare) {
    if (clickedSquare.textContent !== "") {
        return;
    }

    const currenPlayer = players[currenPlayerIndex];
    clickedSquare.textContent = currenPlayer.symbol

    currenPlayerIndex = currenPlayerIndex === 0 ? 1 : 0;
}