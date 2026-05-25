function calculateFps(frames: number, seconds: number): number {
    if (seconds <= 0) {
        throw new Error('Seconds must be greater than zero');
    }
    return Math.floor(frames / seconds);
}

function isFrameDrop(fps: number, threshold: number = 30): boolean {
    return fps < threshold;
}

function formatFps(fps: number): string {
    return `${fps} FPS`;
}

function averageFps(fpsArray: number[]): number {
    const total = fpsArray.reduce((acc, fps) => acc + fps, 0);
    return Math.floor(total / fpsArray.length);
}

export { calculateFps, isFrameDrop, formatFps, averageFps };