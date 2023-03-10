export function toCamelCase(string: string): string {
    return string.replace(/[-_]([a-z0-9])/g, (match, p) => p.toUpperCase());
}
