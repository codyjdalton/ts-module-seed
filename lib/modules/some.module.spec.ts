/**
 * some.module.spec
 */
import { expect } from 'chai';

import { SomeModuleInst } from './some.module';

describe('SomeModule', () => {

    it('should return default hello text', () => {

        expect(SomeModuleInst.message).to.equal('hello');
    });

    it('should allow setting the message text', () => {

        const testStr: string = 'some-test-str';

        SomeModuleInst.message = testStr;

        expect(SomeModuleInst.message).to.equal(testStr);
    });
});
