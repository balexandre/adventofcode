import { readFileSync } from 'fs'

const readFile = (filePath) => {
  const contents = readFileSync(filePath, 'utf-8');
  return contents.trim().split('\n');
}

const findDuplicates = (first, second, third) => {
	const firstArray = first.split('');
	const secondArray = second.split('');
	const thirdArray = third ? third.split('') : [];

	//console.log({firstArray, secondArray, thirdArray})

	for (let i = 0; i < firstArray.length; i++) {
		let letter1 = firstArray[i];

		for (let x = 0; x < secondArray.length; x++) {
			let letter2 = secondArray[x];

			if (third) {
				for (let z = 0; z < thirdArray.length; z++) {
					let letter3 = thirdArray[z];
					if (letter1 == letter2 && letter2 == letter3) return letter1;
				}
			}
			else {
				if (letter1 == letter2) return letter1;
			}
		}
	}
}

const getPriority = (duplicate) => {
	const priorityInt = duplicate.charCodeAt(0);
	const priority = priorityInt - (priorityInt <= 90 ? 38 : 96);

	return priority;
	//console.log({ rucksack, firstCompartment, secondCompartment, duplicate, priorityInt, a: 'a'.charCodeAt(0), z: 'z'.charCodeAt(0), AA: 'A'.charCodeAt(0), ZZ: 'Z'.charCodeAt(0), priority });
}

export const getOutputPart1 = (fileName) => {
	const inputs = readFile(fileName);
	let total = 0;
	inputs.forEach(rucksack => {
		const firstCompartment = rucksack.substr(0, rucksack.length / 2);
		const secondCompartment = rucksack.replace(firstCompartment, '');

		const duplicate = findDuplicates(firstCompartment, secondCompartment);
		const priority = getPriority(duplicate);
		total += priority;
	});
	console.log({ total });
	return total;
}

export const getOutputPart2 = (fileName) => {
	const inputs = readFile(fileName);
	let total = 0;
	for (let a = 0; a < inputs.length; a += 3) {
		const rucksack1 = inputs[a + 0];
		const rucksack2 = inputs[a + 1];
		const rucksack3 = inputs[a + 2];
		//console.log({ a });

		const duplicate = findDuplicates(rucksack1, rucksack2, rucksack3);
		const priority = getPriority(duplicate);
		//console.log({ rucksack1, rucksack2, rucksack3, duplicate, priority });
		total += priority;
	}
	console.log({ total });
	return total;
}

// getOutputPart1("./2022/day03/input.txt");
// getOutputPart2("./2022/day03/input.txt");