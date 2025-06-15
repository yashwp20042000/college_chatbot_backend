
import { generateNlpResponse } from '../../services/nlpService';

describe('NLP Service', () => {
  test('responds to greetings', () => {
    expect(generateNlpResponse('hello')).toContain('Hello');
  });

  test('handles calculations', () => {
    expect(generateNlpResponse('2 + 2')).toContain('4');
    expect(generateNlpResponse('10 / 2')).toContain('5');
  });

  test('returns default response', () => {
    expect(generateNlpResponse('random text')).toContain('college assistant');
  });
});
