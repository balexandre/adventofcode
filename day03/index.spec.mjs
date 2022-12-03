import { expect } from 'chai';
import { getOutputPart1, getOutputPart2 } from './index.mjs';

const fileName = './day03/input.txt';

describe('Advent day 03', () => {
	describe('part 1', () => {
		const result = getOutputPart1(fileName);

		it('should work', () => {
			expect(result).to.equal(8088);
		});
	});

	describe('part 2', () => {
		const result = getOutputPart2(fileName);

		it('should work', () => {
			expect(result).to.equal(2522);
		});
	});
});
