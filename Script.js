
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to  the displayed update array
/*function updateGrid() {
    // Clear existing grid items
    gridContainer1.innerHTML = '';

    // Display the Player updated array
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const gridItem1 = document.createElement('div');
            gridItem1.classList.add('grid-item1');
            gridItem1.textContent = PlayerSolbd[i][j];
            gridContainer1.appendChild(gridItem1);
        }
    }

    // Display the Bot updated array 
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const gridItem2 = document.createElement('div');
            gridItem2.classList.add('grid-item1');
            gridItem2.textContent = BotSolbd[i][j];
            gridContainer1.appendChild(gridItem2);
        }
    }
}
function resetgame(){
    playAgain.addEventListener('click', () => {
        location.reload();
        Options.style.display = 'flex';
        Gamecontent.style.display = 'none';
        PlayerCont.style.display = 'none';
        BotContent.style.display = 'none';
        fonthide1.style.display = 'none';
        fonthide2.style.display = 'none';
        playAgain.style.display = 'none';
    });
}*/
function checkWinner1(turn){
    let TotalSum = 0;
    let bothboard = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    if(turn == 1){
        for(let i = 0; i < 5; i++){
            for (let j = 0; j < 5; j++) {
            bothboard[i][j] = PlayerSolbd[i][j];
            TotalSum = TotalPlayerSum;
            }
        }
    }
    else if(turn == 2){
        for(let i = 0; i < 5; i++){
            for (let j = 0; j < 5; j++) {
            bothboard[i][j] = BotSolbd[i][j];
            TotalSum = TotalBotSum;
            }
        }
    }
    if(row1){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[0][j];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            row1 = false;
        }
    }
    if(row2){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[1][j];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            row2 = false;
        }
    }
    if(row3){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[2][j];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            row3 = false;
        }
    }
    if(row4){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[3][j];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            row4 = false;
        }
    }
    if(row5){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[4][j];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            row5 = false;
        }
    }
    if(col1){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[j][0];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            col1 = false;
        }
    }
    if(col2){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[j][1];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            col2 = false;
        }
    }
    if(col3){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[j][2];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            col3 = false;
        }
    }
    if(col4){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[j][3];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            col4 = false;
        }
    }
    if(col5){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[j][4];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            col5 = false;
        }
    }
    if(diag1){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[j][j];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            diag1 = false;
        }
    }
    if(diag2){
        PlayerSum=0;
        for(let j = 0;j < 5; j++){
            PlayerSum += bothboard[j][4-j];
        }
        if(PlayerSum == 5){
            TotalSum += 1;
            diag2 = false;
        }
    }
    
    if(turn == 1){
        TotalPlayerSum = TotalSum;
    }
    else if (turn == 2){
        TotalBotSum = TotalSum;
    }
    if(TotalPlayerSum == 5){
        wordContainer.innerHTML = 'You win!';
        return true;
    }
    if (TotalBotSum == 5){
        wordContainer.innerHTML = 'Bot win!';
        return true;
    }
    
    return false;
    
}
function checkWinner(){
    // check player board
    for(let i = 0; i < 5; i++){
        PlayerSum=0;
        for(let j =0; j < 5; j++){
            PlayerSum += PlayerSolbd[i][j];
            if(PlayerSum == 5){
                var word = "You win!";
                wordContainer.innerHTML = word;
                return true;
            }
        }
    }
    for(let i = 0; i < 5; i++){
        PlayerSum=0;
        for(let j =0; j < 5; j++){
            PlayerSum += PlayerSolbd[j][i];
            if(PlayerSum == 5){
                var word = "You win!";
                wordContainer.innerHTML = word;
                return true;
            }
        }
    }
    PlayerSum=0;
    for(let i = 0; i < 5; i++){
        PlayerSum += PlayerSolbd[i][i];
        if(PlayerSum == 5){
            var word = "You win!";
            wordContainer.innerHTML = word;
            return true;
        }
    }
    PlayerSum=0;
    for(let i = 0; i < 5; i++){
        PlayerSum += PlayerSolbd[i][4-i];
        if(PlayerSum == 5){
            var word = "You win!";
            wordContainer.innerHTML = word;
            return true;
        }
    }
    // check bot board
    for(let i = 0; i < 5; i++){
        BotSum=0;
        for(let j =0; j < 5; j++){
            BotSum += BotSolbd[i][j];
            if(BotSum == 5){
                var word = "Bot win!";
                wordContainer.innerHTML = word;
                return true;
            }
        }
    }
    for(let i = 0; i < 5; i++){
        BotSum=0;
        for(let j =0; j < 5; j++){
            BotSum += BotSolbd[j][i];
            if(BotSum == 5){
                var word = "Bot win!";
                wordContainer.innerHTML = word;
                return true;
            }
        }
    }
    BotSum=0;
    for(let i = 0; i < 5; i++){
        BotSum += BotSolbd[i][i];
        if(BotSum == 5){
            var word = "Bot win!";
            wordContainer.innerHTML = word;
            return true;
        }
    }
    BotSum=0;
    for(let i = 0; i < 5; i++){
        BotSum += BotSolbd[i][4-i];
        if(BotSum == 5){
            var word = "Bot win!";
            wordContainer.innerHTML = word;
            return true;
        }
    }
}
// add value in both board solution
function addValueP(value){
    let k = 0, j = 0;
    for(let i = 0; i < 25; i++){
        if(playerBoard[i] == value){
            if(i >= 20 && i <= 24){
                k = 4;
                j = i - 20;
                PlayerSolbd[k][j] = 1;
            }
            else if(i >= 15 && i <= 19){
                k = 3;
                j = i - 15;
                PlayerSolbd[k][j] = 1;
            }
            else if(i >= 10 && i <= 14) {
                k = 2;
                j = i - 10;
                PlayerSolbd[k][j] = 1;
            }
            else if(i >= 5 && i <= 9){
                k = 1;
                j = i - 5;
                PlayerSolbd[k][j] = 1;
            }
            else if(i >= 0 && i <= 4){
                k = 0;
                j = i;
                PlayerSolbd[k][j] = 1;
            }
        }
    }
    if( levelOption == 3){
        win = checkWinner1(1);
    }
    else{
        win = checkWinner();
    }
}
function addValueB(value){
    let k = 0, j = 0;
    for(let i = 0; i < 25; i++){
        if(BotBoard[i] == value){
            if(i >= 20 && i <= 24){
                k = 4;
                j = i - 20;
                BotSolbd[k][j] = 1;
            }
            else if(i >= 15 && i <= 19){
                k = 3;
                j = i - 15;
               BotSolbd[k][j] = 1;
            }
            else if(i >= 10 && i <= 14) {
                k = 2;
                j = i - 10;
                BotSolbd[k][j] = 1;
            }
            else if(i >= 5 && i <= 9){
                k = 1;
                j = i - 5;
                BotSolbd[k][j] = 1;
            }
            else if(i >= 0 && i <= 4){
                k = 0;
                j = i;
                BotSolbd[k][j] = 1;
            }
        }
    }
    if(levelOption == 3){
        win = checkWinner1(2);
    }
    else{
        win = checkWinner();
    }
  //updateGrid();
}

function MatchBotNum(x,y){
    let k, value;
    k= (x * 5)+ y;
    value = BotBoard[k];
    return value;
}
//bot brain
function botturn(){
    let exits = true;
    let RowSum = 0,ColSum = 0,DiagnolSum = 0,RevDiaSum = 0,randomNumber = 0;
    // for checking if it is making 4
    for(let i = 0; i < 5; i++){
        RowSum = 0;
        for(let j =0; j < 5; j++){
            RowSum += BotSolbd[i][j];
        }
        if(RowSum == 4 && ( levelOption == 3 || levelOption == 2 )){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[i][j] == 0){
                    BotSolbd[i][j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(i,j);
                    break;
                }
            }
        }
        if(!exits){ 
            break; 
        }
        
        ColSum = 0;
        for(let j =0; j < 5; j++){
            ColSum += BotSolbd[j][i];
        }
        if(ColSum == 4 && ( levelOption == 3 || levelOption == 2 )){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][i] == 0){
                    BotSolbd[j][i] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,i);
                    break;
                }
            }
        }
        if(!exits){ break; }
    }
    if(exits){
        DiagnolSum = 0;
        for(let j =0; j < 5; j++){
            DiagnolSum += BotSolbd[j][j];
        }
        if(DiagnolSum == 4 && ( levelOption == 3 || levelOption == 2 )){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][j] == 0){
                    BotSolbd[j][j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,j);
                    break;
                }
            }
        }
        
        RevDiaSum = 0;
        for(let j =0; j < 5; j++){
            RevDiaSum += BotSolbd[j][4-j];
        }
        if(RevDiaSum == 4 && ( levelOption == 3 || levelOption == 2 )){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][4-j] == 0){
                    BotSolbd[j][4-j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,4-j);
                    break;
                }
            }
        }
    }
    // for checking if it is making 3
    if(exits){
        for(let i = 0; i < 5; i++){
        
            RowSum = 0;
            for(let j =0; j < 5; j++){
                RowSum += BotSolbd[i][j];
            }
            if(RowSum == 3 && ( levelOption == 3 || levelOption == 2 ) ){
                for(let j = 0; j < 5; j++){
                    if(BotSolbd[i][j] == 0){
                        BotSolbd[i][j] = 1;
                        exits = false;
                        randomNumber= MatchBotNum(i,j);
                        break;
                    }
                }
            }
            if(!exits){ break; }
        
            ColSum = 0;
            for(let j =0; j < 5; j++){
                ColSum += BotSolbd[j][i];
            }
            if(ColSum == 3 && (levelOption == 3 || levelOption == 2 )){
                for(let j = 0; j < 5; j++){
                    if(BotSolbd[j][i] == 0){
                        BotSolbd[j][i] = 1;
                        exits = false;
                       randomNumber= MatchBotNum(j,i);
                       break;
                    }
                }
            }
            if(!exits){ break; }
        }
    }
    if(exits){
        
        DiagnolSum = 0;
        for(let j =0; j < 5; j++){
            DiagnolSum += BotSolbd[j][j];
        }
        if(DiagnolSum == 3 && (levelOption == 3 || levelOption == 2 ) ){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][j] == 0){
                    BotSolbd[j][j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,j);
                    break;
                }
            }
        }
        
        RevDiaSum = 0;
        for(let j =0; j < 5; j++){
            RevDiaSum += BotSolbd[j][4-j];
        }
        if(RevDiaSum == 3 && (levelOption == 3 || levelOption == 2 )){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][4-j] == 0){
                    BotSolbd[j][4-j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,4-j);
                    break;
                }
            }
        }
        
    }
    // for checking if it is making 2
    if(exits){
        for(let i = 0; i < 5; i++){
        
            RowSum = 0;
            for(let j =0; j < 5; j++){
                RowSum += BotSolbd[i][j];
            }
            if(RowSum == 2 && (levelOption == 3 || levelOption == 2 || levelOption == 1) ){
                for(let j = 0; j < 5; j++){
                    if(BotSolbd[i][j] == 0){
                        BotSolbd[i][j] = 1;
                       exits = false;
                       randomNumber= MatchBotNum(i,j);
                        break;
                    }
                }
            }
            if(!exits){ break; }
        
            ColSum = 0;
            for(let j =0; j < 5; j++){
            ColSum += BotSolbd[j][i];
            }
            if(ColSum == 2 && (levelOption == 3 || levelOption == 2 || levelOption == 1) ){
                for(let j = 0; j < 5; j++){
                    if(BotSolbd[j][i] == 0){
                        BotSolbd[j][i] = 1;
                        exits = false;
                        randomNumber= MatchBotNum(j,i);
                        break;
                    }
                }
            }
            if(!exits){ break; }
        }
    }
    if(exits){
        DiagnolSum = 0;
        for(let j =0; j < 5; j++){
            DiagnolSum += BotSolbd[j][j];
        }
        if(DiagnolSum == 2 && (levelOption == 3 || levelOption == 2 || levelOption == 1) ){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][j] == 0){
                    BotSolbd[j][j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,j);
                    break;
                }
            }
        }
        
        RevDiaSum = 0;
        for(let j =0; j < 5; j++){
            RevDiaSum += BotSolbd[j][4-j];
        }
        if(RevDiaSum == 2 && (levelOption == 3 || levelOption == 2 || levelOption == 1) ){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][4-j] == 0){
                    BotSolbd[j][4-j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,4-j);
                    break;
                }
            }
        }
        
    }
    // for checking if it is making 1
    if(exits){
        for(let i = 0; i < 5; i++){
        
            RowSum = 0;
            for(let j =0; j < 5; j++){
                RowSum += BotSolbd[i][j];
             }
            if(RowSum == 1 && (levelOption == 3 || levelOption == 2 || levelOption == 1) ){
                for(let j = 0; j < 5; j++){
                    if(BotSolbd[i][j] == 0){
                        BotSolbd[i][j] = 1;
                        exits = false;
                        randomNumber= MatchBotNum(i,j);
                        break;
                    }
                }
            }
            if(!exits){ break; }
        
            ColSum = 0;
            for(let j =0; j < 5; j++){
                ColSum += BotSolbd[j][i];
            }
            if(ColSum == 1 && (levelOption == 3 || levelOption == 2 || levelOption == 1) ){
                for(let j = 0; j < 5; j++){
                    if(BotSolbd[j][i] == 0){
                        BotSolbd[j][i] = 1;
                        exits = false;
                        randomNumber= MatchBotNum(j,i);
                        break;
                    }
                }
            }
            if(!exits){ break; }
        }
    }
    if(exits){
        DiagnolSum = 0;
        for(let j =0; j < 5; j++){
            DiagnolSum += BotSolbd[j][j];
        }
        if(DiagnolSum == 1 && (levelOption == 3 || levelOption == 2 || levelOption == 1) ){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][j] == 0){
                    BotSolbd[j][j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,j);
                    break;
                }
            }
        }
        
        RevDiaSum = 0;
        for(let j =0; j < 5; j++){
                RevDiaSum += BotSolbd[j][4-j];
        }
        if(RevDiaSum == 1 && (levelOption == 3 || levelOption == 2 || levelOption == 1) ){
            for(let j = 0; j < 5; j++){
                if(BotSolbd[j][4-j] == 0){
                    BotSolbd[j][4-j] = 1;
                    exits = false;
                    randomNumber= MatchBotNum(j,4-j);
                    break;
                }
            }
        }
    }

    if(!exits){ 
        UsedNumber.push(randomNumber);
        document.getElementById("BotNum").innerHTML = randomNumber;
        addValueB(randomNumber);
    }
    if(exits && ( levelOption == 3 || levelOption == 2 )){
        if(BotSolbd[2][2] == 0){
            BotSolbd[2][2] = 1;
            randomNumber = BotBoard[12];
            UsedNumber.push(randomNumber);
            document.getElementById("BotNum").innerHTML = randomNumber;
            addValueB(randomNumber);
            exits = false;
        }
    }
    // for taking random number 
    if(exits && levelOption == 1){
        let whilecheck = true;
        while(whilecheck){
           let check= true;
            const randomNumber1 = Math.floor(Math.random() * 25) + 1;
            for(let i = 0; i < UsedNumber.length; i++){
                if(UsedNumber[i] == randomNumber1)
                {
                    check = false;
                    break;
                }
            }
            if(check){
                UsedNumber.push(randomNumber1);
                document.getElementById("BotNum").innerHTML = randomNumber1;
                addValueB(randomNumber1);
                whilecheck = false;
            }
        }
    }
}

//display cut image 
function displayImageAtPosition(src, x, y) {
    const image = new Image();
    image.src = src;
    image.style.left = x - 20 + 'px';
    image.style.top = y - 20 + 'px';
    // Append the image to the container
    const container = document.getElementById('imageContainer');
    container.appendChild(image);
}

/********************* VARIABLES *********************/

// Create an board for player and bot 
const playerBoard = Array.from({ length: 25 }, (_, i) => i + 1); // filled with 1 to 25 number in ascending order
const BotBoard = Array.from({ length: 25 }, (_, i) => i + 1);  // filled with 1 to 25 number in ascending order
let UsedNumber = []; 
let UsedPyNumber = []; 
//const UsedNumber = Array(25).fill(0); //filled with zero element
//const BotSolbd = Array(25).fill(0);  //filled with zero element
let PlayerSolbd = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
let BotSolbd = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
let PlayerSum;
let BotSum;

let TotalPlayerSum = 0;
let TotalBotSum = 0;
let win = false, row1 = true, row2 = true, row3 = true, row4 = true, row5 = true;
let diag1 = true, diag2 = true, col1 = true, col2 = true, col3 = true, col4 = true, col5 = true;
let turn;
var wordContainer = document.getElementById("wordContainer");
var wordContainer1 = document.getElementById("wordContainer1");
let levelOption;
// Shuffle the element randomly
shuffleArray(playerBoard);
shuffleArray(BotBoard);

// Get the grid container element
const gridContainer = document.getElementById('grid-container');

// Display player board by Creating and appending grid items with shuffled numbers
//const gridContainer1 = document.getElementById('grid-container1');
for (let i = 0; i < 25; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const number = playerBoard[i];
    gridItem.style.backgroundImage = `url(images/${number}.png)`;
    
    gridContainer.appendChild(gridItem);
}
/*for (let i = 0; i < 25; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const number = BotBoard[i];
    gridItem.style.backgroundImage = `url(images/${number}.png)`;
    
    gridContainer1.appendChild(gridItem);
}
// Display Bot board by Creating and appending grid items with shuffled numbers
/*for (let i = 0; i < 25; i++) {
    const gridItem3 = document.createElement('div');
    gridItem3.classList.add('grid-item');
    const number = BotBoard[i];
    gridItem3.style.backgroundImage = `url(images/${number}.png)`;
    
    gridContainer.appendChild(gridItem3);
}
const gridContainer1 = document.getElementById('grid-container1');
*/
const crossLine = document.getElementById('cross-line');


let starter = Math.floor(Math.random() * 2) + 1;
// Display bot board by Creating and appending grid items with shuffled numbers
//updateGrid();

// Get all the grid items
const gridItems = document.querySelectorAll('.grid-item');

// Get the clicked-number element
const clickedNumber = document.getElementById('clicked-number');

// Add a click event listener to each grid item



gridItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Get the clicked number
        if(!win){
            wordContainer.innerHTML = ' ';
            const backgroundImage = item.style.backgroundImage;
            const clickedNum = parseInt(backgroundImage.match(/\d+/)[0]);

            const clickX = item.offsetLeft + item.offsetWidth / 2;
            const clickY = item.offsetTop + item.offsetHeight / 2;
            // Display the cross-line
            //const crossLine = document.querySelector('.cross-line');
            //crossLine.style.display = 'block';

            // Position the cross-line over the clicked grid item
            //crossLine.style.top = item.offsetTop + 'px';
            //crossLine.style.left = item.offsetLeft + 'px';
            // Display the cross-line
            displayImageAtPosition('images/Cut.png', clickX, clickY);
            //crossLine.style.display = 'block';
            
            //document.getElementById("clickXValue").textContent = `Click X: ${clickX}px`;
            //document.getElementById("clickYValue").textContent = `Click Y: ${clickY}px`;
            
            // Display the clicked number below the grid
            //clickedNumber.textContent = `You clicked on number ${clickedNum}`;

            let checkValue = true;
            for(let i = 0; i < UsedPyNumber.length; i++){
                if(UsedPyNumber[i] == clickedNum){
                    checkValue = false;
                    break;
                }
            }
            if(checkValue){
                for(let i = 0; i < UsedNumber.length; i++){
                    if(UsedNumber[i] == clickedNum){
                        UsedPyNumber.push(clickedNum);
                        addValueP(clickedNum);
                        checkValue = false;
                        break;
                    }
                }
            }
            /*let check = true;
            for(let i = 0; i < UsedNumber.length; i++){
                if(UsedNumber[i] == clickedNum)
                {
                    check = false;
                    break;                  
                }
            }*/
            if(checkValue){
                UsedNumber.push(clickedNum);
                UsedPyNumber.push(clickedNum);
                document.getElementById("PlayerNum").innerHTML = clickedNum;
                addValueP(clickedNum);
                addValueB(clickedNum);
                botturn();
            }
        }  
        
    });
});
// Get the grid container and cross-line element
//const gridContainer = document.getElementById('grid-container');

document.addEventListener('DOMContentLoaded', function(){
const startGame = document.getElementById('start-button');
const playAgain = document.getElementById('reset-button');
const rulesButton = document.getElementById('rule-button');
const gamerules = document.getElementById('GameRules');
const rulegoback = document.getElementById('RGoBack-button');
const Optiongoback = document.getElementById('OGoBack-button');
const Options = document.getElementById('level');
const Gamecontent = document.getElementById('grid-container');
const PlayerCont = document.getElementById('PlayerNum');
const BotContent = document.getElementById('BotNum');
const fonthide1 = document.getElementById('fonthide1');
const fonthide2 = document.getElementById('fonthide2');
const levelEasy = document.getElementById('Easy');
const levelMedium = document.getElementById('Medium');
const levelHard = document.getElementById('Hard');

//for easy level
levelEasy.addEventListener('click', () => {
    //console.log('Button clicked');
    Options.style.display = 'none';
    Gamecontent.style.display = 'grid';
    PlayerCont.style.display = 'flex';
    BotContent.style.display = 'flex';
    fonthide1.style.display = 'block';
    fonthide2.style.display = 'block';
    playAgain.style.display = 'block';
    levelOption = 1;
    if(starter == 2){
        botturn();
        wordContainer.innerHTML = 'Bot started the Match';
    } else {
        wordContainer.innerHTML = 'Click on any number to start the match!';
    }
});

//for medium level
levelMedium.addEventListener('click', () => {
    //console.log('Button clicked');
    Options.style.display = 'none';
    Gamecontent.style.display = 'grid';
    PlayerCont.style.display = 'flex';
    BotContent.style.display = 'flex';
    fonthide1.style.display = 'block';
    fonthide2.style.display = 'block';
    playAgain.style.display = 'block';
    levelOption = 2;
    if(starter == 2){
        botturn();
        wordContainer.innerHTML = 'Bot started the Match';
    } else {
        wordContainer.innerHTML = 'Click on any number to start the match!';
    }
});

//for hard level
levelHard.addEventListener('click', () => {
    //console.log('Button clicked');
    Options.style.display = 'none';
    Gamecontent.style.display = 'grid';
    PlayerCont.style.display = 'flex';
    BotContent.style.display = 'flex';
    fonthide1.style.display = 'block';
    fonthide2.style.display = 'block';
    playAgain.style.display = 'block';
    levelOption = 3;
    if(starter == 2){
        botturn();
        wordContainer.innerHTML = 'Bot started the Match';
    } else {
        wordContainer.innerHTML = 'Click on any number to start the match!';
    }
});
playAgain.addEventListener('click', () => {
    location.reload();
});

// for going back
Optiongoback.addEventListener('click', () => {
    //console.log('Button clicked');
    startGame.style.display = 'flex';
    rulesButton.style.display = 'flex';
    Options.style.display = 'none';
    
    
});
rulegoback.addEventListener('click', () => {
    //console.log('Button clicked');
    startGame.style.display = 'flex';
    rulesButton.style.display = 'flex';
    gamerules.style.display = 'none';
    
    
});
//for game rules
rulesButton.addEventListener('click', () => {
    //console.log('Button clicked');
    startGame.style.display = 'none';
    rulesButton.style.display = 'none';
    gamerules.style.display = 'flex';
    
});

// start to level page
startGame.addEventListener('click', () => {
    //console.log('Button clicked');
    startGame.style.display = 'none';
    rulesButton.style.display = 'none';
    Options.style.display = 'flex';
    
});
});
