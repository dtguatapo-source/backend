import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getJwtSecret } from './jwt.config';

describe('JWT secret configuration (S1)', () => {
  const original = process.env.JWT_SECRET;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.JWT_SECRET;
    } else {
      process.env.JWT_SECRET = original;
    }
  });

  it('throws an explicit error when JWT_SECRET is missing', () => {
    delete process.env.JWT_SECRET;

    expect(() => getJwtSecret()).toThrow(
      'JWT_SECRET is not configured. Define it in the environment or .env file.',
    );
  });

  it('returns the configured secret', () => {
    process.env.JWT_SECRET = 'test-secret';

    expect(getJwtSecret()).toBe('test-secret');
  });

  it('does not keep the hardcoded fallback in auth.module.ts', () => {
    const source = readFileSync(
      join(process.cwd(), 'src/auth/auth.module.ts'),
      'utf8',
    );

    expect(source).not.toContain('llave_secreta_para_desarrollo');
  });
});
