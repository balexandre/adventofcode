// https://adventofcode.com/2015/day/2
import { readFileSync } from 'fs'

const readFile = (filePath) => {
	const contents = readFileSync(filePath, 'utf-8');
	return contents.trim().split('\n');
}

const calculatePaperLength = (line) => {
	// 2*l*w + 2*w*h + 2*h*l
	// 2x3x4 --> length l, width w, and height h
	const [l, w, h] = line.split('x');
	const ll = parseInt(l, 10);
	const ww = parseInt(w, 10);
	const hh = parseInt(h, 10);

	const lll = ll * ww;
	const www = ww * hh;
	const hhh = hh * ll;

	// the area of the smallest side
	const intArray = [lll, www, hhh];
	const minArea = Math.min(...intArray);

	// console.log(`${line} l_${ll} w_${ww} h_${hh}-> 2x${ll * ww} + 2x${ww * hh} + 2x${hh * ll} + ${ll * ww}`);
	const total = (2 * lll) + (2 * www) + (2 * hhh) + minArea;
	return total;
}

export const getOutputPart1 = (fileName) => {
	const inputs = readFile(fileName);
	let result = 0;
	
	for (let i = 0; i < inputs.length; i += 1) {
		var subTotal = calculatePaperLength(inputs[i]);
		// console.log({ i: i+1, subTotal, result });
		result += parseInt(subTotal);
	}
	// console.log({ result });
	return result;
}

getOutputPart1("./2015/day02/example.txt"); // 1588178
