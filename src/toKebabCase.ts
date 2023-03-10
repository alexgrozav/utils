export function toKebabCase(string: string): string {
    return string.replace(
        /(_([a-zA-Z])|[A-Z])/g,
        (match, p0, p1) => '-' + (p1 || p0).toLowerCase()
    );
}
