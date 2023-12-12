import { test as base, mergeTests } from '@playwright/test';
import { test as chTest, ChromaticConfig } from '@chromaui/test-archiver';

export const test = chTest.extend<ChromaticConfig & LoggingFixture>({
  ...partialLoggingFixture,
});

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

export const test = chTest.extend<ChromaticConfig & LoggingFixture>({
  ...partialLoggingFixture,
});

export const mergedTest = mergeTests(test, chTest);

export { expect } from '@playwright/test';