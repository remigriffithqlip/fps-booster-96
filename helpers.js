const fetchWithRetry = async (url, options = {}, retries = 3, delay = 1000) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        if (retries > 0) {
            await new Promise(res => setTimeout(res, delay));
            return fetchWithRetry(url, options, retries - 1, delay);
        }
        throw error;
    }
};

const postWithRetry = async (url, data, retries = 3) => {
    return await fetchWithRetry(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }, retries);
};

export { fetchWithRetry, postWithRetry };