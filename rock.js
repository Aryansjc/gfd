function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = { rock: '✊', paper: '✋', scissors: '✌️' };
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('player-choice').textContent = emojis[playerChoice];
  document.getElementById('computer-choice').textContent = emojis[computerChoice];

  const resultMessage = determineWinner(playerChoice, computerChoice);

  document.getElementById('message').textContent = `You chose ${playerChoice}, computer chose ${computerChoice}.`;
  document.getElementById('result').textContent = resultMessage;

  changeBackground(resultMessage);

  playSound(resultMessage);
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  }

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "You win! 🎉";
  } else {
    return "You lose! 😢";
  }
}

function changeBackground(resultMessage) {
  const body = document.body;

  if (resultMessage === "You win! 🎉") {
    body.className = "win-background";
  } else if (resultMessage === "You lose! 😢") {
    body.className = "lose-background"; 
  } else {
    body.className = "neutral-background"; 
  }
}

function playSound(resultMessage) {
  const winSound = new Audio('win.mp3');
  const loseSound = new Audio('lose.mp3');
  const drawSound = new Audio('draw.mp3');

  if (resultMessage === "You win! 🎉") {
    winSound.play();
  } else if (resultMessage === "You lose! 😢") {
    loseSound.play();
  } else {
    drawSound.play();
  }
}

