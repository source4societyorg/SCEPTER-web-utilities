
export function getConfigurationByKey(key, configuration) {
  const stage = process.env.NODE_ENV;
  return configuration.environments[stage][key];
}

export async function loadConfiguration(configurationPath) {
  const configuration = await import(configurationPath);
  return configuration;
}

