'use client';

/**
 * Fetch data from Strapi API (client-side) through server proxy
 * This approach keeps the API token secure by making authenticated requests
 * through our own Next.js API route instead of directly to Strapi
 */
export async function fetchFromStrapiClient(
  endpoint: string,
  queryParams: { key: string; value: string }[],
) {
  try {
    // Instead of direct Strapi request, call our proxy API
    const res = await fetch('/api/strapi-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        endpoint,
        queryParams
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || `Failed to fetch from Strapi: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching from Strapi client:', error);
    throw error;
  }
}

/**
 * Get any Strapi content with custom query parameters (client-side)
 */
export async function getStrapiContentClient(
  endpoint: string,
  queryParams: { key: string; value: string }[],
) {
  return fetchFromStrapiClient(endpoint, queryParams);
}
