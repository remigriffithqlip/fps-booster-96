// Default configuration settings
const defaultConfig = {
    resolution: '1920x1080',
    fpsLimit: 60,
    graphicsQuality: 'high',
    soundEffects: true,
    musicVolume: 80
};

// Load configuration from JSON file
function loadConfig(file) {
    return fetch(file)
        .then(response => response.json())
        .catch(() => ({}));
}

// Merge defaults with loaded config
function getConfig(userConfig) {
    return {...defaultConfig, ...userConfig};
}

// Exported function to get complete config
export async function loadCompleteConfig(configFile) {
    const userConfig = await loadConfig(configFile);
    return getConfig(userConfig);
};