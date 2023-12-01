import { expect } from 'chai';
import { getOutputPart1, getOutputPart2 } from './index.mjs';

const fileName = './2023/day13/input.txt';

describe.skip('Advent 2023, day 13', () => {
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