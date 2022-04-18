/**
 * Get a deeply nested value based on a given path string
 *
 * @param object
 * @param path
 * @returns {T}
 */
export function getValueByPath (object: any, path: string): any {
    return path.split('.').reduce((acc, part) => {
        return acc && acc[part];
    }, object);
}

/**
 * Set a deeply nested value based on a given path string
 *
 * @param object
 * @param path
 * @param key
 * @param value
 * @returns {T}
 */
export function setValueByPath<T = Record<string, any>> (object: T, path: string, value: any): T {
    const parts = path.split('.');
    const key = parts.pop();
    const target = parts.length > 0 ? getValueByPath(object, parts.join('.')) : object;

    if (target && key) {
        target[key] = value;
    }

    return object;
}

/**
 * Set a deeply nested value along given path string
 *
 * @param object
 * @param path
 * @param values
 * @returns {T}
 */
export function setValuesAlongPath<T = Record<string, any>> (object: T, path: string, values: any): T {
    const parts = path.split('.');

    parts.reduce((acc, part) => {
        Object.keys(values).forEach((key) => {
            acc[part][key] = values[key];
        });

        return acc && acc[part];
    }, object as Record<string, any>);

    Object.keys(values).forEach((key) => {
        (object as Record<string, any>)[key] = values[key];
    });

    return object;
}
