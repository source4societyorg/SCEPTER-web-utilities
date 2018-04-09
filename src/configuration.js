
export function getConfigurationByKey(key, configuration, environment) {
  return configuration.environments[environment][key];
}

export async function loadConfiguration(configurationPath) {
  const configuration = await import(configurationPath);
  return configuration;
}

