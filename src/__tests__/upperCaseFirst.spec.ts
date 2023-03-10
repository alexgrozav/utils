import { upperCaseFirst } from '../index';

describe('Helpers', () => {
    describe('upperCaseFirst()', () => {
        it('should convert first character of string to uppercase', () => {
            expect(upperCaseFirst('example')).toEqual('Example');
        });
    });
});
