// https://adventofcode.com/2024/day/1
import { readFileSync } from 'fs'

const readFile = (filePath) => {
	const contents = readFileSync(filePath, 'utf-8');
	return contents.trim().split('\n');
}

export const getOutputPart1 = (fileName) => {
	const inputs = readFile(fileName);
	let result = 0;

	const listA = [];
	const listB = [];
	const len = inputs.length;
	
    for (let line of inputs) {
		const [a, b] = line.split('   ');
		listA.push(parseInt(a));
		listB.push(parseInt(b));
    }

	for (let i = 0; i < len; i++) {
		const a = Math.min(...listA);
		const b = Math.min(...listB);
		const distance = a - b;
		
		result += Math.abs(distance);

		// remove
		listA.splice(listA.indexOf(a), 1);
		listB.splice(listB.indexOf(b), 1);
	}
	
	console.log({ result, len, listA, listB });
	return result;
}

export const getOutputPart2 = (fileName) => {
	const inputs = readFile(fileName);
	let result = 0;

	const listA = [];
	const listB = [];
	const len = inputs.length;
	
    for (let line of inputs) {
		const [a, b] = line.split('   ');
		listA.push(parseInt(a));
		listB.push(parseInt(b));
    }

	for (let i = 0; i < len; i++) {
		const a = listA[i];
		const b = listB.filter((x) => x === a).length;
		const distance = a * b;
		
		result += Math.abs(distance);
	}
	
	console.log({ result, len });
}

// getOutputPart1("./2024/day01/input.txt");
// getOutputPart2("./2024/day01/input.txt");
