import loadImage from '../src/loadImage';

test('loadImage returns the proper url string for web', () => {
  expect(loadImage('mockImage')).toEqual('/mockImage');
});
