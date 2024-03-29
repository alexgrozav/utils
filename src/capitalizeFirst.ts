/**
 * Capitalize first letter of a string
 *
 * @param string
 * @returns {string}
 */
export function capitalizeFirst(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
