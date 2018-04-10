import mediaQuery from '../src/mediaQuery';

test('mediaQuery will select the choice depending on the window size', () => {
  window.matchMedia = (query) => query === 'somequery';
  expect(mediaQuery(['choice1'])).toEqual('choice1');
  expect(mediaQuery(['choice1', 'choice2'], ['somequery'])).toEqual('choice2');
  expect(mediaQuery(['choice1', 'choice2'], ['nonmatching'])).toEqual('choice1');
});
