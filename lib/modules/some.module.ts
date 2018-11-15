/**
 * some.module
 * @description Example module
 *
 * Usage:
 * new SomeModule().message or
 * SomeModuleInst.message
 */
import { Injectable, Injector } from 'super-injector';
import { SomeService } from './services/some.service';
/**
 * Class Declaration
 */
@Injectable() // <-- injects dependencies, add dependencies to constructor
export class SomeModule {

    /**
     * @property {string} messageText - example text
     * Usage:
     * this.messageText
     */
    private messageText: string = '';

    constructor(private someService: SomeService) {
        this.messageText = this.someService.message;
    }

    /**
     * @function message (get)
     * @return {string} - the message
     */
    get message(): string {
        return this.messageText;
    }

    /**
     * @function message (set)
     * @return {void} - set the message
     */
    set message(val: string) {
        this.messageText = val;
    }
}

export const SomeModuleInst: SomeModule = Injector.resolve(SomeModule);
