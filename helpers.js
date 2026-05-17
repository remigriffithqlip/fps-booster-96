function validateInput(input) {
    if (typeof input !== 'number') {
        throw new Error('Input must be a number.');
    }
    if (input < 0 || input > 100) {
        throw new Error('Input must be between 0 and 100.');
    }
    return true;
}

function safeDivision(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error('Denominator cannot be zero.');
        }
        return numerator / denominator;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

function handleGameConfig(config) {
    if (!config || typeof config !== 'object') {
        throw new Error('Invalid configuration object.');
    }
    return {
        resolution: config.resolution || '1920x1080',
        fpsLimit: config.fpsLimit || 60
    };
}

module.exports = { validateInput, safeDivision, handleGameConfig };