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
export function setValueByPath (object: any, path: string, value: any): any {
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
export function setValuesAlongPath (object: any, path: string, values: any): any {
    path.split('.').reduce((acc, part) => {
        Object.keys(values).forEach((key) => {
            acc[part][key] = values[key];
        });

        return acc && acc[part];
    }, object);

    Object.keys(values).forEach((key) => {
        object[key] = values[key];
    });

    return object;
}
