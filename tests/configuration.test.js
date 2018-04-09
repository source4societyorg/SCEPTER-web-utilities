import { loadConfiguration, getConfigurationByKey } from '../src/configuration';


test('getConfigurationByKey retrieves the proper setting from the web based configuration setup after being loaded', (done) => {
  async function test() {
    const configuration = await loadConfiguration('../tests/configuration.json');
    expect(getConfigurationByKey('GTM', configuration)).toEqual('mockGTM');
    done();
  }
  test();
});
