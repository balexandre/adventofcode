import { readFileSync } from 'fs'

const readFile = (filePath) => {
  const contents = readFileSync(filePath, 'utf-8');
  return contents.trim().split('\n');
}

export const getOutputPart1 = (fileName) => {
  const inputs = readFile(fileName);

  let HORIZONTAL = 0;
  let DEPTH = 0;

  inputs.forEach(input => {
    const [movement, units] = input.split(' ');
    const position = Number(units);


    if (movement === 'forward') HORIZONTAL += position;
    else if (movement === 'up') DEPTH -= position;
    else if (movement === 'down') DEPTH += position;
    else {
      throw new Error(movement)
    }
    console.log({movement, position, HORIZONTAL, DEPTH});
  });

  const result = HORIZONTAL * DEPTH;
  console.log({ HORIZONTAL, DEPTH, result });
  return result;
}

export const getOutputPart2 = (fileName) => {
  const inputs = readFile(fileName);

  let HORIZONTAL = 0;
  let DEPTH = 0;
  let AIM = 0;

  inputs.forEach(input => {
    const [movement, units] = input.split(' ');
    const position = Number(units);


    if (movement === 'forward') {
      HORIZONTAL += position;
      DEPTH += AIM * position;
    }
    else if (movement === 'up') AIM -= position;
    else if (movement === 'down') AIM += position;
    else {
      throw new Error(movement)
    }
    //console.log({movement, position, HORIZONTAL, DEPTH, AIM});
  });

  const result = HORIZONTAL * DEPTH;
  console.log({ HORIZONTAL, DEPTH, AIM, result });
  return result;
}

// getOutputPart1("./2021/day02/input.txt");
// getOutputPart2("./2021/day02/input.txt");