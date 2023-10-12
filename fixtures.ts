import { test as base, mergeTests } from '@playwright/test';
import { test as chTest } from '@chromaui/test-archiver';

export interface SomeConfig {
  isSomething?: boolean;
}
export type LoggingFixture = {
  logme: void;
}

export const partialLoggingFixture: Parameters<typeof base.extend<LoggingFixture>>[0] = {
  logme: async ({}, use, testInfo) => {
    console.log('fixture start!')

    await use();

    console.log('fixture end!')
  },
};

export const test = base.extend<SomeConfig & LoggingFixture>({
  ...partialLoggingFixture,
});

export const mergedTest = mergeTests(test, chTest);

export { expect } from '@playwright/test';