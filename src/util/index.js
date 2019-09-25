export const isBrowser = typeof window !== `undefined`;

export function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
