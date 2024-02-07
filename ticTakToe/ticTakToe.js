let player1 = "";
let player2 = "";
const resetPlayers = () =>
{
    player1 = prompt('Enter your name, to choose warrier O');
    player2 = prompt('Enter your name, to choose warrier X');
}
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
let isWinner = false;

const winningPattern = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => 
{
    turnO = true;
    count = 0;
    isWinner = false;
    enableBoxes();
    msgContainer.classList.add("hide");
    player1 = "";
    player2 = "";
    resetPlayers();
}

boxes.forEach((box) =>
{
    box.addEventListener("click",() =>
    {
        //console.log('Button was Clicked');  
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        isWinner = checkWinner();

        if(count === 9 && !isWinner)
        {
            drawGame();
        }
    })
})

const drawGame = () =>
{
    msg.innerText = `Arey yaar! Ye kya kar diya tumne!? \n ${player1} , ${player2} Khel khatam.. Draw.. Gaya..`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>
{
    msg.innerText = `Congratulations ${winner}! You Won!`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => 
{
    for(let pattern of winningPattern)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                if(pos1Val === 'O')
                {
                    showWinner(player1);
                    disableBoxes();
                    return true;
                }
                else
                {
                    showWinner(player2);
                    disableBoxes();
                    return true;
                }
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
resetPlayers();