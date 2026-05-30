function retryOperation(fn, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attempt = (n) => {
            fn()
                .then(resolve)
                .catch((error) => {
                    if (n === 1) {
                        reject(error);
                        return;
                    }
                    setTimeout(() => attempt(n - 1), delay);
                });
        };
        attempt(retries);
    });
}

// Example usage:
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
}

retryOperation(fetchData, 5, 2000)
    .then(data => console.log(data))
    .catch(err => console.error('Operation failed:', err));