class PerformanceOptimizer {
    constructor() {
        this.lastFrameTime = 0;
        this.frameInterval = 16; // Roughly 60 FPS
    }

    requestAnimationFrame(callback) {
        const currentTime = performance.now();
        if (currentTime - this.lastFrameTime >= this.frameInterval) {
            this.lastFrameTime = currentTime;
            callback();
        }
        window.requestAnimationFrame(() => this.requestAnimationFrame(callback));
    }

    optimize(gameLoop) {
        this.requestAnimationFrame(gameLoop);
    }
}

export default new PerformanceOptimizer();