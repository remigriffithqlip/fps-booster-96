const fs = require('fs');
const path = require('path');

const defaultConfig = {
    resolution: '1920x1080',
    fps: 60,
    volume: 100,
    graphics: 'high'
};

function loadConfig(filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
        const fileConfig = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        return { ...defaultConfig, ...fileConfig };
    }
    return defaultConfig;
}

module.exports = { loadConfig };