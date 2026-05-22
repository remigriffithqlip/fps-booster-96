function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function lerp(start, end, fraction) {
    return start + (end - start) * fraction;
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function isGamepadConnected(index) {
    return navigator.getGamepads()[index] !== null;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

export { clamp, lerp, randomInRange, distance, isGamepadConnected, formatTime };