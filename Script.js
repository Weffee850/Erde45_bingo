const bingoCard = document.getElementById('bingo-card');
const drawnNumberDisplay = document.getElementById('drawn-number');
const generateButton = document.getElementById('generate-number');

let numbersDrawn = [];
let bingoNumbers = [];

function generateBingoCard() {
  let cardNumbers = [];
  while (cardNumbers.length < 25) {
    let num = Math.floor(Math.random() * 75) + 1;
    if (!cardNumbers.includes(num)) cardNumbers.push(num);
  }

  cardNumbers[12] = 'FREE';

  cardNumbers.forEach((num, index) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = num;
    cell.dataset.number = num;
    if (num === 'FREE') {
      cell.classList.add('marked');
    }
    bingoCard.appendChild(cell);
  });

  bingoNumbers = [...Array(75).keys()].map(n => n + 1);
}

function drawNumber() {
  if (bingoNumbers.length === 0) {
    drawnNumberDisplay.textContent = "All numbers drawn!";
    return;
  }

  const index = Math.floor(Math.random() * bingoNumbers.length);
  const number = bingoNumbers.splice(index, 1)[0];
  numbersDrawn.push(number);
  drawnNumberDisplay.textContent = Number Drawn: ${number};

  document.querySelectorAll('.cell').forEach(cell => {
    if (parseInt(cell.dataset.number) === number) {
      cell.classList.add('marked');
    }
  });
}

generateBingoCard();
generateButton.addEventListener('click', drawNumber)
