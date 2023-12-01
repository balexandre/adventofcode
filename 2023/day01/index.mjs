// https://adventofcode.com/2023/day/1
import { readFileSync } from 'fs'

const readFile = (filePath) => {
	const contents = readFileSync(filePath, 'utf-8');
	return contents.trim().split('\n');
}

const getLineTotal = (line) => {
    var allNumbersInLine = line.match(/\d+/g);
    var subTotal = 0;

    if (allNumbersInLine.length === 1 && allNumbersInLine[0].length === 1) {
        // "7" --> "77"
        var firstLetter = allNumbersInLine[0].substring(0, 1);
        subTotal = parseInt(`${firstLetter}${firstLetter}`);
    } else {
        var firstLetter = allNumbersInLine[0].substring(0, 1);
        var lastLetter = allNumbersInLine.slice(-1)[0].slice(-1);

        subTotal = parseInt(`${firstLetter}${lastLetter}`);
    }
    return subTotal;
}

export const getOutputPart1 = (fileName) => {
	const inputs = readFile(fileName);
	let result = 0;
	
    for (let line of inputs) {
        var subTotal = getLineTotal(line);
        result += parseInt(subTotal);
        // console.log(line, subTotal, result);
    }
	return result;
}

getOutputPart1("./2023/day01/input.txt");
