import { readFileSync } from 'fs'

// https://adventofcode.com/2015/day/1
const readFile = (filePath) => {
	const contents = readFileSync(filePath, 'utf-8');
	return contents.trim();
}

export const getOutputPart1 = (fileName) => {
	const inputs = readFile(fileName);
	let result = 0;

	inputs.split('').forEach(input => {
		result += input === '(' ? 1 : -1;
	});
	// console.log({ result });
	return result;
}

export const getOutputPart2 = (fileName) => {
	const inputs = readFile(fileName);
	const inputsChars = inputs.split('');
	let result = 0, i = 0;

	for (i = 0; i < inputsChars.length; i++) {
		const entry = inputsChars[i];
		result += entry === '(' ? 1 : -1;
		if (result === -1) break;
	};

	// console.log({ result: i+1 });
	return i + 1;
}


// getOutputPart1("./2015/day01/input.txt");
// getOutputPart2("./2015/day01/input.txt");
