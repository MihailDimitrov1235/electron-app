/* eslint import/prefer-default-export: off */
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
  const parsedUrl = new URL(url);
  const fragment = parsedUrl.hash.slice(1);
  const params = new URLSearchParams(fragment);
  const accessToken = params.get('access_token');
  return accessToken;
}
