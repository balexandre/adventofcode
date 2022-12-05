import { readFileSync } from 'fs'

const readFile = (filePath) => {
  const contents = readFileSync(filePath, 'utf-8');
  return contents.trim().split('\n');
}

export const getOutputPart1 = (fileName) => {
  const inputs = readFile(fileName);
  let result = 0;
  inputs.reduce((prev, input) => {
    result += Number(prev) < Number(input) ? 1 : 0;
    return input;
  });
  // console.log({ result });
  return result;
}

export const getOutputPart2 = (fileName) => {
  const inputs = readFile(fileName);
  const previousMeasurements = [];
  let currentMeasure = 0;
  let result = 0;

  let column = 0;

  for (let i = 0; i < inputs.length; i++) {
    currentMeasure = Number(inputs[i]);
    if (!previousMeasurements[i]) previousMeasurements[i] = [0, 0, 0, 0];

    if (column == 0) {
      previousMeasurements[i][0] = currentMeasure;
      previousMeasurements[i][1] = 0;
      previousMeasurements[i][2] = i == 0 ? 0 : currentMeasure;
      previousMeasurements[i][3] = i == 0 ? 0 : currentMeasure;
    }
    else if (column == 1) {
      previousMeasurements[i][0] = currentMeasure;
      previousMeasurements[i][1] = currentMeasure;
      previousMeasurements[i][2] = 0;
      previousMeasurements[i][3] = i == 1 ? 0 : currentMeasure;
    }
    else if (column == 2) {
      previousMeasurements[i][0] = currentMeasure;
      previousMeasurements[i][1] = currentMeasure;
      previousMeasurements[i][2] = currentMeasure;
      previousMeasurements[i][3] = 0;
    }
    else if (column == 3) {
      previousMeasurements[i][0] = 0;
      previousMeasurements[i][1] = currentMeasure;
      previousMeasurements[i][2] = currentMeasure;
      previousMeasurements[i][3] = currentMeasure;
    }

    // reset
    if (column > 0 && column % 3 == 0) column = -1;
    column++;
  };

  const sums = []; let letter = 65; column = 0;
  for (let i = 0; i < previousMeasurements.length; i++) {
    let letterPosition = String.fromCharCode(letter + i);

    if (previousMeasurements[i + 2]) {
      sums.push(previousMeasurements[i][column] + previousMeasurements[i + 1][column] + previousMeasurements[i + 2][column]);
    }

    if (column > 0 && column % 3 == 0) column = -1;
    column++;
  }

  for (let i = 1; i < sums.length; i++) {
    result += sums[i - 1] < sums[i] ? 1 : 0;
  }
  // console.log({ result });
  return result;
}

getOutputPart1("./2021/day01/input.txt");
getOutputPart2("./2021/day01/input.txt");