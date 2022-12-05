import { readFileSync } from 'fs'

const readFile = (filePath) => {
	const contents = readFileSync(filePath, 'utf-8');
	return contents.trim().split('\n');
};

const getRange = (range) => {
	const [start, end] = range.split('-');
	const inBetween = [];
	for (let i = Number(start); i <= Number(end); i++) {
		inBetween.push(i);
	}
	return inBetween;
};

const getInputPairs = (inputs) => {
	const pairs = [];
	inputs.forEach(input => {
		const [first, second] = input.split(',');
		pairs.push({
			first, second, firstRange: getRange(first), secondRange: getRange(second)
		});
	});
	return pairs;
};

const hasFullyContainAssignments = (currentAssign) => {
	const includeInFirstRange = currentAssign.firstRange.every(value => currentAssign.secondRange.includes(value));
	const includeInSecondRange = currentAssign.secondRange.every(value => currentAssign.firstRange.includes(value));
	//console.log({ currentAssign, includeInFirstRange, includeInSecondRange });
	return includeInFirstRange || includeInSecondRange;
};

const hasPartiallyContainAssignments = (currentAssign) => {
	const includeInFirstRange = currentAssign.firstRange.some(value => currentAssign.secondRange.includes(value));
	const includeInSecondRange = currentAssign.secondRange.some(value => currentAssign.firstRange.includes(value));
	//console.log({ currentAssign, includeInFirstRange, includeInSecondRange });
	return includeInFirstRange || includeInSecondRange;
};

export const getOutputPart1 = (fileName) => {
	const inputs = readFile(fileName);
	const pairs = getInputPairs(inputs);
	let containPairs = 0;

	pairs.forEach(input => {
		containPairs += hasFullyContainAssignments(input) ? 1 : 0;
	});
	
	// ({ containPairs });
	return containPairs;
};

export const getOutputPart2 = (fileName) => {
	const inputs = readFile(fileName);
	const pairs = getInputPairs(inputs);
	let containPairs = 0;

	pairs.forEach(input => {
		containPairs += hasPartiallyContainAssignments(input) ? 1 : 0;
	});
	
	// console.log({ containPairs });
	return containPairs;
};

getOutputPart1("./2022/day04/input.txt");
getOutputPart2("./2022/day04/input.txt");
