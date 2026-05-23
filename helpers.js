function optimizePerformance(resources) {
    const optimizedResources = resources.map(resource => {
        return {
            ...resource,
            renderPriority: calculateRenderPriority(resource)
        };
    });
    return optimizedResources.sort((a, b) => a.renderPriority - b.renderPriority);
}

function calculateRenderPriority(resource) {
    if (resource.type === 'texture') return 1;
    if (resource.type === 'model') return 2;
    if (resource.type === 'sound') return 3;
    return 4;
}

function preloadResources(resources) {
    const promises = resources.map(resource => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = resource.src;
            img.onload = () => resolve(resource);
        });
    });
    return Promise.all(promises);
}

export { optimizePerformance, preloadResources };