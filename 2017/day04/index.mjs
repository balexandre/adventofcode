// https://adventofcode.com/2017/day/4
import { readFileSync } from 'fs'

const readFile = (filePath) => {
	const contents = readFileSync(filePath, 'utf-8');
	return contents.trim().split('\n');
}

export const getOutputPart1 = (fileName) => {
	const inputs = readFile(fileName);
	let result = 0;
	
	// console.log({ result });
	return result;
}

export const getOutputPart2 = (fileName) => {
	const inputs = readFile(fileName);
	let result = 0;
	
	// console.log({ result });
	return result;
}

// getOutputPart1("./2017/day04/example.txt");
// getOutputPart2("./2017/day04/example.txt");
