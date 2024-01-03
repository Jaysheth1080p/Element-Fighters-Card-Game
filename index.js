

let landcards = [
  { name: "Artful Ant", atk: 1, imageUrl: "images/Land 1.png" },
  { name: "Comic Cat", atk: 2, imageUrl: "images/Land 2.png" },
    { name: "Domestic Dog", atk: 3, imageUrl: "images/Land 3.png" },
    { name: "Running Rabbit", atk: 4, imageUrl: "images/Land 4.png" },
    { name: "Playful pig", atk: 5, imageUrl: "images/Land 5.png" },
    { name: "Prowling Puma", atk: 6, imageUrl: "images/Land 6.png" },
    { name: "Agitated Ape", atk: 7, imageUrl: "images/Land 7.png" },
    { name: "Rampaging Rhino", atk: 8, imageUrl: "images/Land 8.png" },
    { name: "Dangerous Dinosaur", atk: 9, imageUrl: "images/Land 9.png" },
    { name: "Legendary Lion", atk: 10, imageUrl: "images/Land 10.png" },
 
];

let seacards = [
  { name: "Primitive Plankton", atk: 1, imageUrl: "images/Sea 1.png" },
  { name: "Soaking Sponge", atk: 2, imageUrl: "images/Sea 2.png" },
    { name: "Jolting Jellyfish", atk: 3, imageUrl: "images/Sea 3.png" },
    { name: "Crawling Crab", atk: 4, imageUrl: "images/Sea 4.png" },
    { name: "Boastful Bass", atk: 5, imageUrl: "images/Sea 5.png" },
    { name: "Sledding Seal", atk: 6, imageUrl: "images/Sea 6.png" },
    { name: "Delightful Dolphin", atk: 7, imageUrl: "images/Sea 7.png" },
    { name: "Seething Shark", atk: 8, imageUrl: "images/Sea 8.png" },
    { name: "Whopping Whale", atk: 9, imageUrl: "images/Sea 9.png" },
    { name: "Eldritch Entity", atk: 10, imageUrl: "images/Sea 10.png" },
  
];

let skycards = [
  { name: "Flying Flea", atk: 1, imageUrl: "images/Sky 1.png" },
  { name: "Pecking Pidgeon", atk: 2, imageUrl: "images/Sky 2.png" },
    { name: "Resting Rooster", atk: 3, imageUrl: "images/Sky 3.png" },
    { name: "Parroting Parrot", atk: 4, imageUrl: "images/Sky 4.png" },
    { name: "Tropical Toucan", atk: 5, imageUrl: "images/Sky 5.png" },
    { name: "Polar Penguin", atk: 6, imageUrl: "images/Sky 6.png" },
    { name: "Vicious Vulture", atk: 7, imageUrl: "images/Sky 7.png" },
    { name: "Elusive Eagle", atk: 8, imageUrl: "images/Sky 8.png" },
    { name: "Growling Gargoyle", atk: 9, imageUrl: "images/Sky 9.png" },
    { name: "Divine Dragon", atk: 10, imageUrl: "images/Sky 10.png" },

];

let totalcards = [...landcards, ...seacards, ...skycards];

let playerTokens = 0;
let opponentTokens = 0;

function assignTokens(outcome) {
  if (outcome === "You Win") {
    playerTokens++;
  } else if (outcome === "Opponent Wins") {
    opponentTokens++;
  }

  // Update the token display in the HTML
  document.getElementById("myTokens").textContent = `Player Tokens: ${playerTokens}`;
  document.getElementById("yourTokens").textContent = `Opponent Tokens: ${opponentTokens}`;

  // Check if a player has reached 5 tokens
  if (playerTokens === 5) {
    document.getElementById("victoryScreen").innerHTML = "Game Set! You Win";
    stopGame();
  } else if (opponentTokens === 5) {
    document.getElementById("victoryScreen").innerHTML = "Game Set! Opponent Win";
    stopGame();
  }
}

// Draw
drawButton.addEventListener("click", function() {
  let yourDraw = Math.floor(Math.random() * totalcards.length);
  let opponentsDraw = Math.floor(Math.random() * totalcards.length);

  const yourCard = totalcards[yourDraw];
  const opponentsCard = totalcards[opponentsDraw];

  stageEl.innerHTML = `<img src="${yourCard.imageUrl}" alt="${yourCard.name}" /> vs <img src="${opponentsCard.imageUrl}" alt="${opponentsCard.name}" />`;

  if (yourCard.atk > opponentsCard.atk) {
    resultEl.textContent = "You Win a Token!";
    assignTokens("You Win");
  } else if (opponentsCard.atk > yourCard.atk) {
    resultEl.textContent = "Opponent Wins a Token!";
    assignTokens("Opponent Wins");
  } else {
    resultEl.textContent = "It's a Tie";
  }
});

function resetGame() {
  // Reset tokens
  playerTokens = 0;
  opponentTokens = 0;
  
  // Clear the stage and result
  stageEl.textContent = "";
  resultEl.textContent = "";
  
  // Update token display in the HTML
  document.getElementById("myTokens").textContent = "Player Tokens: 0";
  document.getElementById("yourTokens").textContent = "Opponent Tokens: 0";
  
  // Clear the victory screen
  document.getElementById("victoryScreen").innerHTML = "";
  
  // Enable the draw button
  drawButton.disabled = false;
}

function stopGame() {
  // Disable the draw button
  drawButton.disabled = true;
}

resetButton.addEventListener("click", resetGame);
