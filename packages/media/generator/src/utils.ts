/**
 * Get the hash value of a string
 * @param str The string to get the hash from
 * @returns The hash of the string
 */
export const getStringHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

/**
 * Normalize a hashed value
 * @param hash The hash to normalize
 * @param min The minimum for normalizing
 * @param max The maximum for normalizing
 * @returns The normalize hash
 */
export const normalizeHash = (hash: number, min: number, max: number): number => {
  return Math.floor((hash % (max - min)) + min);
}

/**
 * Generate a HSL color based on the username
 * @param username The name of the user
 * @returns The corresponding color
 */
export const generateHSL = (username: string): string => {
  const hash = getStringHash(username);
  const h = normalizeHash(hash, 0, 360);
  const s = normalizeHash(hash, 50, 75); // Saturation range
  const l = normalizeHash(hash, 25, 60); // Lightness range
  return `hsl(${h}, ${s}%, ${l}%)`;
}