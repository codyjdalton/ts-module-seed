/**
 * some.service
 */
import { expect } from 'chai';
import { Injector } from 'super-injector';

import { SomeService } from './some.service';

describe('Service: SomeService', () => {

    let someService: SomeService;

    beforeEach(() => {
        someService = Injector.resolve(SomeService);
    });

    it('should default message to hello', () => {

        expect(someService.message).to.equal('hello');
    });
});
