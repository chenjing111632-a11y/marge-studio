/**
 * Build a Payhip product page URL.
 */
export function getPayhipProductUrl(productId: string): string {
  return `https://payhip.com/b/${productId}`;
}

/**
 * Build a direct Payhip checkout URL (skips product page, goes to cart).
 */
export function getPayhipCheckoutUrl(productId: string): string {
  return `https://payhip.com/buy?link=${productId}`;
}

/**
 * Build the Payhip store URL.
 */
export function getPayhipStoreUrl(storeSlug: string): string {
  return `https://payhip.com/${storeSlug}`;
}
