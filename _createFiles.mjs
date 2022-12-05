import fs from 'fs';

const yearStart = 2015;
const yearEnd = 2022;

for (let year = yearStart; year <= yearEnd; year++) {
	let filePath = `./${year.toString()}`;

	if (!fs.existsSync(filePath)) fs.mkdirSync(filePath);

	for (let day = 1; day <= 25; day++) {

		const sDay = 'day' + day.toString().padStart(2, '0');
		const dayPath = `${filePath}/${sDay}`;

		if (!fs.existsSync(dayPath)) fs.mkdirSync(dayPath);

		if (!fs.existsSync(`${dayPath}/example.txt`)) 
			fs.writeFileSync(`${dayPath}/example.txt`, '', 'utf8');
		if (!fs.existsSync(`${dayPath}/input.txt`)) 
			fs.writeFileSync(`${dayPath}/input.txt`, '', 'utf8');
		if (!fs.existsSync(`${dayPath}/index.mjs`)) 
			fs.writeFileSync(`${dayPath}/index.mjs`, `// https://adventofcode.com/${year}/day/${day}
import { readFileSync } from 'fs'

const readFile = (filePath) => {
	const contents = readFileSync(filePath, 'utf-8');
	return contents.trim().split('\\n');
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

// getOutputPart1("${dayPath}/example.txt");
// getOutputPart2("${dayPath}/example.txt");
`, 'utf8');
		if (!fs.existsSync(`${dayPath}/index.spec.mjs`)) 
			fs.writeFileSync(`${dayPath}/index.spec.mjs`, `import { expect } from 'chai';
import { getOutputPart1, getOutputPart2 } from './index.mjs';

const fileName = '${dayPath}/input.txt';

describe('Advent ${year}, day ${day}', () => {
	describe('part 1', () => {
		const result = getOutputPart1(fileName);

		it('should work', () => {
			expect(result).to.equal(0);
		});
	});

	describe('part 2', () => {
		const result = getOutputPart2(fileName);

		it('should work', () => {
			expect(result).to.equal(0);
		});
	});
});`, 'utf8');
	}
}

console.log('👍');