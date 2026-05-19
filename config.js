const fs = require('fs');
const path = require('path');

class ConfigLoader {
    constructor(defaults) {
        this.defaults = defaults;
        this.config = { ...defaults };
    }

    loadConfig(filename) {
        const filePath = path.resolve(__dirname, filename);
        if (fs.existsSync(filePath)) {
            const fileConfig = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            this.config = { ...this.defaults, ...fileConfig };
        }
    }

    get(key) {
        return this.config[key];
    }
}

module.exports = ConfigLoader;
