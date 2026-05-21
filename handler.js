class Handler {
    constructor(game) {
        this.game = game;
        this.state = 'initialized';
    }

    start() {
        this.state = 'running';
        this.game.run();
    }

    pause() {
        this.state = 'paused';
        this.game.pause();
    }

    resume() {
        this.state = 'running';
        this.game.resume();
    }

    stop() {
        this.state = 'stopped';
        this.game.stop();
    }

    getState() {
        return this.state;
    }
}

module.exports = Handler;