export function calculateFps(frames: number, time: number): number {
    return (frames / time) * 1000;
}

export function isHighPerformanceDevice(grade: string): boolean {
    const highPerformanceGrades = ['A', 'A+', 'S'];
    return highPerformanceGrades.includes(grade);
}

export function optimizeSettings(settings: Record<string, any>): Record<string, any> {
    const optimizedSettings = { ...settings };
    if (optimizedSettings.resolution > 1080) {
        optimizedSettings.resolution = 1080;
    }
    if (optimizedSettings.quality === 'ultra') {
        optimizedSettings.quality = 'high';
    }
    return optimizedSettings;
}

/**
 * Calculates the average FPS
 * @param fpsArray - Array of FPS values
 * @returns Average FPS as a number
 */
export function averageFps(fpsArray: number[]): number {
    const total = fpsArray.reduce((sum, fps) => sum + fps, 0);
    return total / fpsArray.length;
}

/**
 * Resets performance metrics to default values
 * @returns Default metrics object
 */
export function resetPerformanceMetrics(): { fps: number; resolution: string; quality: string } {
    return {
        fps: 60,
        resolution: '1920x1080',
        quality: 'high'
    };
}
