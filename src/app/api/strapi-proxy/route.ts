import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body to get endpoint and query params
    const { endpoint, queryParams } = await request.json();

    // Validate input
    if (!endpoint || !endpoint.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid endpoint format' },
        { status: 400 }
      );
    }

        // Build the URL with query parameters
    const url = new URL(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api${endpoint}`);

    // Add query parameters if they exist
    if (queryParams) {
      queryParams.forEach((param: {key: string, value: string}) => {
        url.searchParams.append(param.key, param.value);
      });
    }

    // Set headers including the secure API token
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
    };

    // Make the request to Strapi
    const res = await fetch(url.toString(), { headers });

    if (!res.ok) {
      // Forward Strapi error status
      return NextResponse.json(
        { error: `Strapi responded with: ${res.statusText}` },
        { status: res.status }
      );
    }

    // Return the Strapi response
    const data = await res.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error in strapi-proxy:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
