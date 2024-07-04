/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export function getAccessTokenFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const hashParams = new URLSearchParams(urlObj.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    return accessToken;
  } catch (error) {
    console.error('Error parsing access token from URL:', error);
    return null;
  }
}
