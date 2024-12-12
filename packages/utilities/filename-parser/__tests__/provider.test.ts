/** Dependencies */
import { PROVIDERS_EXPS } from '../src/provider';

/** Test the regular expressions of the providers */
describe('Providers RegExp', () => {
  /** Basic tests with the tmdb provider */
  it('TMDB should returns an id', () => {
    const execution = PROVIDERS_EXPS.tmdb.exec('Your Name. {tmdb-5555}');

    expect(execution).not.toBeNull();
    expect(execution?.groups?.source).toEqual('tmdb');
    expect(execution?.groups?.id).toEqual('5555');
  });

  /** Test when no providers are passed */
  it('Should be not found', () => {
    const execution = PROVIDERS_EXPS.tmdb.exec('Your Name.');

    expect(execution).toBeNull();
  });
});
