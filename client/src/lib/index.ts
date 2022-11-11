/**
 * A video configuration.
 */
type Config = {
  device: string;
  format: string;
  resolution: [number, number];
  interval: [number, number];
  rotation: 0 | 90 | 180 | 270;
  v4l2Controls: Record<string, string>;
};

/**
 * A map of device paths to `Option` arrays.
 */
type Capabilities = Record<string, Record<string, Resolution[]>>;
type Resolution = {
  resolution: [number, number];
  intervals: [number, number][];
};

/**
 * Gets the current JSON web token stored in the 'token' cookie.
 *
 * @returns The current JWT
 */
const getToken = (): string | null => {
  const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
  if (match) {
    return match[2];
  } else {
    return null;
  }
};

/**
 * Clears the current 'token' cookie, logging the user out.
 */
const clearToken = () => {
  document.cookie = 'token=; Max-Age=0';
};

export type { Config, Capabilities, Resolution };
export { getToken, clearToken };
