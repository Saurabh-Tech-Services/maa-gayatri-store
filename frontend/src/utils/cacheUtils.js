import axios from 'axios';

/**
 * Validates that cached/fetched data is valid JSON and not an HTML SPA fallback
 */
const isValidApiData = (data) => {
  if (data === null || data === undefined) return false;
  if (typeof data === 'string') {
    const trimmed = data.trim();
    if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html') || trimmed.startsWith('<')) {
      return false;
    }
  }
  return true;
};

/**
 * Fetch data with caching support
 * @param {string} url - API endpoint to fetch from
 * @param {string} cacheName - Unique name for the cache entry
 * @param {number} expiryTime - Cache expiry time in milliseconds (default: 5 min)
 * @returns {Promise<any>} - The fetched or cached data
 */
export const fetchWithCache = async (url, cacheName, expiryTime = 300000) => {
  const cacheKey = `cache_${cacheName}`;
  
  // Check if data exists in cache and is not expired
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    try {
      const parsed = JSON.parse(cachedData);
      if (parsed && isValidApiData(parsed.data) && (Date.now() - parsed.timestamp < expiryTime)) {
        return parsed.data;
      } else {
        localStorage.removeItem(cacheKey);
      }
    } catch (e) {
      localStorage.removeItem(cacheKey);
    }
  }
  
  // Fetch fresh data
  console.log(`Fetching fresh data for ${cacheName}`);
  const response = await axios.get(url);
  const data = response.data;
  
  // If the server returned HTML (Vercel rewrite fallback) instead of JSON
  if (!isValidApiData(data)) {
    throw new Error(`API returned HTML instead of JSON for ${url}. Check VITE_API_BASE_URL.`);
  }
  
  // Store valid data in cache
  try {
    localStorage.setItem(
      cacheKey, 
      JSON.stringify({
        data,
        timestamp: Date.now()
      })
    );
  } catch (e) {
    console.warn('Failed to save to cache:', e);
  }
  
  return data;
};

/**
 * Clear a specific cache entry
 * @param {string} cacheName - Name of cache to clear
 */
export const clearCache = (cacheName) => {
  localStorage.removeItem(`cache_${cacheName}`);
};

/**
 * Clear all cached data
 */
export const clearAllCache = () => {
  Object.keys(localStorage)
    .filter(key => key.startsWith('cache_'))
    .forEach(key => localStorage.removeItem(key));
};
