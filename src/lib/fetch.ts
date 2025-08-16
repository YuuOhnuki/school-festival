let BASE_URL = process.env.VERCEL_URL;
if (process.env.NODE_ENV == 'development') BASE_URL = 'http://localhost:3000';

export async function getData(url: string, headers = {}) {
    const response = await fetch(`${BASE_URL}/${url}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    });
    return response.json();
}
