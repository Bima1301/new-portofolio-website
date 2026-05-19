/**
 * Public folder files are NOT watched by Fast Refresh.
 * In dev, append cache-bust query so browser picks up replaced images after refresh.
 */
export function publicAsset(path: string) {
  if (process.env.NODE_ENV !== "development") return path;
  const bust = process.env.NEXT_PUBLIC_DEV_CACHE_BUST ?? "1";
  return `${path}?v=${bust}`;
}
