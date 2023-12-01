import { expect } from 'chai';
import { getOutputPart1 } from './index.mjs';

const fileName = './2015/day02/input.txt';

describe('Advent 2015, day 2', () => {
	describe('part 1', () => {
		const result = getOutputPart1(fileName);

		it('should work', () => {
			expect(result).to.equal(1588178);
		});
	});
});