// Tic-tac-toe Game
// Write a function determines the winner of a game. Return null is noone win
// Sample Input: [["x", "x", "x"], 
//                [".", "o", "o"], 
//                [".", ".", "o"]]
// Sample Output: "x", can be "o" or null as well
// Assume the input is always valid: 3x3 board, no 2 winner case, no invalid input.


function tictacktoePickWinner(arr) {
    const winningPattern = [
        [[0,0],[0,1],[0,2]],
        [[0,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]]
    ]
    
    let win = false;
    let winner = "x";
    const pattern = winningPattern;
 
    // arr[pattern[0][0][0]][pattern[0][0][1]] = "x"
    // arr[pattern[0][1][0]][pattern[0][1][1]] = "x"
    // arr[pattern[0][2][0]][pattern[0][2][1]] = "x"

    // arr[pattern[1][0][0]][pattern[1][0][1]] = "x"
    // arr[pattern[1][1][0]][pattern[1][1][1]] = "x"
    // arr[pattern[1][2][0]][pattern[1][2][1]] = "x"

    // arr[pattern[2][0][0]][pattern[2][0][1]] = "x"
    // arr[pattern[2][1][0]][pattern[2][1][1]] = "x"
    // arr[pattern[2][2][0]][pattern[2][2][1]] = "x"

    // arr[pattern[3][0][0]][pattern[3][0][1]] = "x"
    // arr[pattern[3][1][0]][pattern[3][1][1]] = "x"
    // arr[pattern[3][2][0]][pattern[3][2][1]] = "x"
    
    for (let i = 0; i < winningPattern.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[pattern[i][j][0]][pattern[i][j][1]] === "x") {
                count++;
            }
        }
        if (count === arr.length) {
            win = true;
        }
    }

    return win;
}


const input =[["x", "x", "x"], 
               [".", ".", "o"], 
               [".", ".", "o"]]
console.log(tictacktoePickWinner(input))