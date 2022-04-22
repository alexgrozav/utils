import { getValueByPath, setValueByPath } from '../index';

describe('Helpers', () => {
    describe('getValueByPath()', () => {
        const object = {
            id: '1',
            name: 'Richard Hendricks',
            address: {
                city: 'Palo Alto',
                state: 'California',
                country: 'United States'
            }
        };

        it('should return direct field from object', () => {
            const path = 'name';

            expect(getValueByPath(object, path)).toEqual(object.name);
        });

        it('should return nested field from object', () => {
            const path = 'address.country';

            expect(getValueByPath(object, path)).toEqual(object.address.country);
        });

        it('should return undefined if direct field does not exist', () => {
            const path = 'other';

            expect(getValueByPath(object, path)).toEqual(undefined);
        });

        it('should return undefined if nested field does not exist', () => {
            const path = 'address.other';

            expect(getValueByPath(object, path)).toEqual(undefined);
        });

        it('should return undefined if path does not exist', () => {
            const path = 'other.other';

            expect(getValueByPath(object, path)).toEqual(undefined);
        });
    });

    describe('setValueByPath()', () => {
        let object: Record<string, any>;

        beforeEach(() => {
            object = {
                id: '1',
                name: 'Richard Hendricks',
                address: {
                    city: 'Palo Alto',
                    state: 'California',
                    country: 'United States'
                }
            };
        });

        it('should set root path key', () => {
            const path = 'name';
            const value = 'John Doe';

            setValueByPath(object, path, value);
            expect(object.name).toEqual(value);
        });

        it('should set nested path key', () => {
            const path = 'address.city';
            const value = 'New York';

            setValueByPath(object, path, value);
            expect(object.address.city).toEqual(value);
        });

        it('should set nested path key and create object at path', () => {
            const path = 'other.path';
            const value = 'New York';

            setValueByPath(object, path, value);
            expect(object.other.path).toEqual(value);
        });
    });
});
