export function toSnakeCase(string: string): string {
    return string.replace(
        /(-([a-zA-Z])|[A-Z])/g,
        (match, p0, p1) => '_' + (p1 || p0).toLowerCase()
    );
}
