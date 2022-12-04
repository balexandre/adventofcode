import { expect } from 'chai';
import { getOutputPart1, getOutputPart2 } from './index.mjs';

const fileName = './2022/day09/input.txt';

describe('Advent 2022, day 9', () => {
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
});