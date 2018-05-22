/**
 * some.module
 * @description Example module
 *
 * Usage:
 * new SomeModule().message or
 * SomeModuleInst.message
 */
export class SomeModule {

    /**
     * @property {string} messageText - example text
     * Usage:
     * this.messageTest
     */
    private messageText: string = 'hello';

    /**
     * @function message (get)
     */
    get message(): string {
        return this.messageText;
    }

    /**
     * @function message (set)
     */
    set message(val: string) {
        this.messageText = val;
    }
}

export const SomeModuleInst: SomeModule = new SomeModule();
