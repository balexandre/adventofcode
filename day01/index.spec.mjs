import { expect } from 'chai';
import { getOutput } from './index.mjs';

const fileName = './day01/input.txt';

describe('Advent day 02', () => {
	let result;
	before(() => {
		result = getOutput(fileName);
	});

	describe('part 1', () => {
		it('should work', () => {
			expect(result.mainTotals).to.equal(11510256);
		});
	});

	describe('part 2', () => {
		it('should work', () => {
			expect(result.topThreeElfsTotal).to.equal(207968);
		});
	});
});
