/**
 * Utility function to create a provider RegExp base on the name
 * @param providerName The name of the provider (e.g: tmdb)
 * @returns The RegExp for the provider
 */
const createProvider = (providerName: string) => RegExp(`\{(?<source>${providerName})-(?<id>[0-9a-zA-Z]+)\}`);

/** Create the RegExp rules for each providers */
export const PROVIDERS_EXPS = {
  'tmdb': createProvider('tmdb'),
  'imdb': createProvider('imdb'),
  'tvdb': createProvider('tvdb')
};

/** Utility type */
export type ProviderSource = keyof typeof PROVIDERS_EXPS;
