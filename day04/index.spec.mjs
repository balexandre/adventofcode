import { expect } from 'chai';
import { getOutputPart1, getOutputPart2 } from './index.mjs';

const fileName = './day04/input.txt';

describe('Advent day 04', () => {
	describe('part 1', () => {
		const result = getOutputPart1(fileName);

		it('should work', () => {
			expect(result).to.equal(562);
		});
	});

	describe('part 2', () => {
		const result = getOutputPart2(fileName);

		it('should work', () => {
			expect(result).to.equal(924);
		});
	});
});
