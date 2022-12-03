import { readFileSync } from 'fs';

const readFile = (filePath) => {
  const contents = readFileSync(filePath, 'utf-8');
  return contents.trim().split('\n');
}

const variablesMap = new Map([
  ['A', 'ROCK'],
  ['B', 'PAPER'],
  ['C', 'SCISSORS'],
  ['X', 'ROCK'],
  ['Y', 'PAPER'],
  ['Z', 'SCISSORS'],
]);
const variablesMap2 = new Map([
  ['Y', 3],
  ['X', 0],
  ['Z', 6],
]);
const variablesPoint = new Map([
  ['ROCK', 1],
  ['PAPER', 2],
  ['SCISSORS', 3],
]);

const getRoundTotalPart2 = (player1move, player2outcome) => {
  // draw, lost, win points
  let total = variablesMap2.get(player2outcome);

  // lost
  if (player2outcome == 'X') {
    if (player1move == 'ROCK') return total + variablesPoint.get('SCISSORS');
    if (player1move == 'PAPER') return total + variablesPoint.get('ROCK');
    if (player1move == 'SCISSORS') return total + variablesPoint.get('PAPER');
  }
  // draw
  if (player2outcome == 'Y') {
    return total + variablesPoint.get(player1move);
  }
  // win
  if (player2outcome == 'Z') {
    if (player1move == 'ROCK') return total + variablesPoint.get('PAPER');
    if (player1move == 'PAPER') return total + variablesPoint.get('SCISSORS');
    if (player1move == 'SCISSORS') return total + variablesPoint.get('ROCK');
  }
}
const getRoundTotalPart1 = (player1move, player2move) => {
  // 1 for Rock, 2 for Paper, and 3 for Scissors
  let total = variablesPoint.get(player2move);

  // draw
  if (player1move == player2move)
    return total + 3;

  // win
  if (
    (player1move == 'ROCK' && player2move == 'PAPER') ||
    (player1move == 'PAPER' && player2move == 'SCISSORS') ||
    (player1move == 'SCISSORS' && player2move == 'ROCK')
  )
    return total + 6;

  // lost
  return total;
}

export const getOutputPart2 = (fileName, getRoundTotalFn) => {
  const inputs = readFile(fileName);
  const totals = [];

  inputs.forEach(input => {
    const player1move = variablesMap.get(input[0]);
    const player2move = input[2];
    const total = getRoundTotalPart2(player1move, player2move);

    totals.push(total);
    //console.log({ player1move, player2move, total });
  });
  const totalGame = totals.reduce((prev, input) => prev + input);
  console.log({ totalGame });
  return totalGame;
}
export const getOutputPart1 = (fileName) => {
  const inputs = readFile(fileName);
  const totals = [];

  inputs.forEach(input => {
    const player1move = variablesMap.get(input[0]);
    const player2move = variablesMap.get(input[2]);
    const total = getRoundTotalPart1(player1move, player2move);

    totals.push(total);
    //console.log({ player1move, player2move, total });
  });
  const totalGame = totals.reduce((prev, input) => prev + input);
  console.log({ totalGame });
  return totalGame;
}

getOutputPart1("./day02/input.txt");
getOutputPart2("./day02/input.txt");