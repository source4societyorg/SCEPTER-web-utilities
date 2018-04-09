export async function getConfiguration(key, configurationPath) {
  const configuration = await import(configurationPath);
  const stage = process.env.NODE_ENV;
  return configuration.environments[stage][key];
}
