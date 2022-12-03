import { readFileSync } from 'fs'

const readFile = (filePath) => {
  const contents = readFileSync(filePath, 'utf-8');
  return contents.trim().split('\n');
}

const getOutput = (fileName) => {
  const inputs = readFile(fileName);
  let mainTotals = 0;
  let elfTotal = 0;
  const elfsTotals = [];
  
  inputs.forEach(input => {
    if (!input) {
      elfsTotals.push(elfTotal);
      elfTotal = 0;
    }
    else {
      elfTotal += Number(input);
      mainTotals += Number(input);
    }
  });
  elfsTotals.push(elfTotal);
  elfsTotals.sort((a, b) => b - a);

  // part 2: 69836, 69796, 68336
  const topThreeElfs = [elfsTotals[0], elfsTotals[1], elfsTotals[2]];
  const topThreeElfsTotal = topThreeElfs.reduce((prev, input) => prev += input);

  console.log({ mainTotals, topThreeElfs, topThreeElfsTotal, elfsTotals: elfsTotals.sort((a, b) => b - a)});
}

getOutput("./day01/input.txt");