function calculateFps(frames, time) {
    return frames / (time / 1000);
}

function formatFps(fps) {
    return fps.toFixed(2) + ' FPS';
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function isPowerOfTwo(x) {
    return (x & (x - 1)) === 0 && x > 0;
}

function requestAnimationFramePolyfill() {
    return window.requestAnimationFrame || function(callback) {
        return setTimeout(callback, 1000 / 60);
    };
}

export { calculateFps, formatFps, clamp, isPowerOfTwo, requestAnimationFramePolyfill };