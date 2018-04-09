import { getConfiguration } from '../src/configuration';

test('getConfiguration retrieves the proper setting from the web based configuration setup', (done) => {
  async function test() {
    expect(await getConfiguration('GTM', '../tests/configuration.json')).toEqual('mockGTM');
    done();
  }
  test();
});
