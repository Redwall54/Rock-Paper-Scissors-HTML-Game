const playerChoice = document.querySelectorAll('button');

playerChoice.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e["target"]);
        playRound(e.target["innerText"],getComputerChoice());
        
    })
})