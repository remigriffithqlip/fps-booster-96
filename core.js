// type annotations for TypeScript
/**
 * Initialize game settings.
 *
 * @param {Object} settings - Game configuration settings.
 * @param {number} settings.fps - Desired frames per second.
 * @param {boolean} settings.highQuality - Render high-quality graphics.
 */
function initGame(settings) {
    const defaultSettings = { fps: 60, highQuality: false };
    const gameSettings = { ...defaultSettings, ...settings };

    setupGraphics(gameSettings.highQuality);
    setFpsLimit(gameSettings.fps);
}

/**
 * Setup graphics quality based on user preference.
 *
 * @param {boolean} highQuality - Flag to enable high-quality graphics.
 */
function setupGraphics(highQuality) {
    if (highQuality) {
        console.log('High-quality graphics enabled.');
    } else {
        console.log('Low-quality graphics enabled.');
    }
}

/**
 * Set frame rate limit.
 *
 * @param {number} fps - The desired frames per second for the game.
 */
function setFpsLimit(fps) {
    if (fps < 30) {
        console.warn('FPS is set below optimal level.');
    }
    console.log(`Game running at ${fps} FPS.`);
}

export { initGame };