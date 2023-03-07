import { assert, createTestSuite } from './utils';

const [test, xtest] = createTestSuite('My app');

test.before(() => {});
test.after(() => {});

test('Create a test that fails and fix it', () => {
    assert(false, 'should be true');
});

xtest('Leave a test for later', () => {
    assert.fail();
});