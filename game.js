function generateBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  const numbers = Array.from({length: 75}, (_, i) => i + 1).sort(() => Math.random() - 0.5).slice(0, 25);
  numbers.forEach((num, idx) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = num;
    cell.onclick = () => cell.classList.toggle("marked");
    board.appendChild(cell);
  });
}

generateBoard();