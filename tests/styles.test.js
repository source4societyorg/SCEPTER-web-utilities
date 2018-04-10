import { percentOfViewWidth, percentOfViewHeight } from '../src/styles';

test('percentOfViewWidth and percentOfViewHeight will return a string with viewport units attached', () => {
  expect(percentOfViewWidth(100)).toEqual('100vw');
  expect(percentOfViewHeight(100).toEqal('100vh'));
});
