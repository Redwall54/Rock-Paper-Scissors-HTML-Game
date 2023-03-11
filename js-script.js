const playerChoice = document.querySelectorAll('button');

playerChoice.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e["target"]);
        counter(playRound(e.target["innerText"],getComputerChoice()));
        
    })
})

