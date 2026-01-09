// Shared Validation Utilities

/**
 * Validates if a string is a valid URL
 * Accepts URLs with or without protocol (e.g., https://example.com, www.example.com, example.com)
 */
export const isValidUrl = (url: string): boolean => {
  if (!url) return false;
  
  // Try with protocol first
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    // Try adding https:// prefix for URLs like www.example.com or example.com
    try {
      const parsed = new URL('https://' + url);
      return parsed.hostname.includes('.');
    } catch {
      return false;
    }
  }
};

/**
 * Validates if a string is a valid email address
 */
export const isValidEmail = (email: string): boolean => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Checks if a value is non-empty (trimmed)
 */
export const isRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Validation helper that returns undefined if valid, error message if invalid
 * Useful for form field error props
 */
export const getUrlError = (url: string): string | undefined => {
  if (!url) return undefined; // Don't show error for empty
  return isValidUrl(url) ? undefined : "Please enter a valid URL (e.g., www.example.com)";
};

export const getEmailError = (email: string): string | undefined => {
  if (!email) return undefined; // Don't show error for empty
  return isValidEmail(email) ? undefined : "Please enter a valid email address";
};
