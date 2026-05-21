const handleError = (error) => {
    if (error instanceof TypeError) {
        console.error('Type Error: ', error.message);
    } else if (error instanceof ReferenceError) {
        console.error('Reference Error: ', error.message);
    } else if (error instanceof RangeError) {
        console.error('Range Error: ', error.message);
    } else {
        console.error('Unexpected Error: ', error.message);
    }
};

const executeWithErrorHandling = (fn) => {
    try {
        fn();
    } catch (error) {
        handleError(error);
    }
};

const validateInput = (input) => {
    if (input == null) {
        throw new TypeError('Input cannot be null or undefined');
    }
    if (typeof input !== 'number') {
        throw new TypeError('Input must be a number');
    }
    if (input < 0) {
        throw new RangeError('Input must be a positive number');
    }
};

const calculateFPS = (input) => {
    validateInput(input);
    return Math.floor(1000 / input);
};

export { executeWithErrorHandling, calculateFPS };