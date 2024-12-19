/** Utility constant to make the calculation faster */
const DP_UNIT = 100 / 960;

/**
 * Calculate automatically a size in ViewportWidth
 * @param size The size in dp
 * @return The viewport width transformed size
 */
export const dp = (size: number) => (size * DP_UNIT).toFixed(10) + 'vw';
