/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

export const API_CONFIG = {
  BASE_URL: 'https://obbaramarket-backend.onrender.com/api/ObbaraMarket',
  TIMEOUT_MS: 15000,
  
  ENDPOINTS: {
    LOGIN: '/login',
    REFRESH: '/refresh-token',
  },
} as const;

export const getApiUrl = (endpoint: keyof typeof API_CONFIG.ENDPOINTS) => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`;
};
