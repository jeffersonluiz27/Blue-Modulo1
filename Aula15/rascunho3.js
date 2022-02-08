const prompt = require('prompt-sync')();

let roundCount = 1;

while (true) {
  let playerDmgRandom = getRandomIntInclusive(playerDmgMin, playerDmgMax);
  let opponentDmgRandom = getRandomIntInclusive(opponentDmgMin, opponentDmgMax);

  let playerDmg = playerDmgRandom;
  let opponentDmg = opponentDmgRandom;

  playerDefense = playerDefense - opponentDmg;
  opponentDefense = opponentDefense - playerDmg;

  console.log(`\n\tROUND ${roundCount}
  
\tYou attack your opponent's argument for ${playerDmg} damage.
\tYour opponent attacks your argument for ${opponentDmg} damage.

\tYour defense:    ${playerDefense}
\tYour opponent's: ${opponentDefense}\n`);

  roundCount++;

  prompt(`    Press ENTER for next round `);

  if (playerDefense <= 0 || opponentDefense <= 0) {
    console.log(`\n    Oh, it looks like that was the last round...`);
    prompt(`    Press ENTER for results `);
    break;
  }
}

console.clear();

if (playerDefense > opponentDefense) {
  console.log(
    `\n[WIN] You carried yourself well. The positive attributes you have shown throughout this journey have earned you the title of Supreme Ruler. Congratulations.\n`
  );
} else if (playerDefense < opponentDefense) {
  console.log(
    `\n[LOSE] Your choices in life have led to your inevitable defeat.\n`
  );
} else if (playerDefense == opponentDefense) {
  console.log(
    `\n[DRAW] Neither you nor your opponent were able to convince the people that you are fit to rule... The search for a new leader continues.\n`
  );
}
