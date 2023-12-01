import { expect } from 'chai';
import { getOutputPart1 } from './index.mjs';

const fileName = './2023/day01/input.txt';

describe('Advent 2023, day 1', () => {
	describe('part 1', () => {
		const result = getOutputPart1(fileName);

		it('should work', () => {
			expect(result).to.equal(53194);
		});
	});
});