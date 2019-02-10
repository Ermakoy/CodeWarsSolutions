function topThreeWords(text) {
    const words = text.match(/\w+[\w']*/g);
    if (!words) return [];
    const usage = {};
    words.forEach(word => {
        const lower = word.toLowerCase();
        const wasUsed = usage[lower] > 0;
        usage[lower] = wasUsed ? usage[lower] + 1 : 1;
    });
    return Object.entries(usage)
        .sort(([, a], [, b]) => (a > b ? -1 : a === b ? 0 : 1))
        .slice(0, 3)
        .map(([word]) => word);
}
