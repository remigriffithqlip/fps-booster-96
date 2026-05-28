const fs = require('fs');
const path = require('path');

const defaultConfig = {
    resolution: '1920x1080',
    framerate: 60,
    quality: 'high',
    vsync: false
};

function loadConfig(configPath) {
    const fullPath = path.resolve(configPath);
    if (fs.existsSync(fullPath)) {
        const userConfig = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        return {...defaultConfig, ...userConfig};
    }
    return defaultConfig;
}

module.exports = { loadConfig };