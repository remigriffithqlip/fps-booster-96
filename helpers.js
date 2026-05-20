// TypeScript-compatible type annotations

type Coordinates = {
    x: number;
    y: number;
};

type Color = {
    r: number;
    g: number;
    b: number;
};

/**
 * Calculates the distance between two points.
 * @param a - The first point as Coordinates.
 * @param b - The second point as Coordinates.
 * @returns The distance between the two points.
 */
function calculateDistance(a: Coordinates, b: Coordinates): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Generates a random color.
 * @returns A Color object with random RGB values.
 */
function generateRandomColor(): Color {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

/**
 * Clamps a value between a minimum and maximum.
 * @param value - The value to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The clamped value.
 */
function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

export { calculateDistance, generateRandomColor, clamp };