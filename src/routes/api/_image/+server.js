import { createRequestHandler } from '@urami/core'
import { PUBLIC_BASE_URL } from '$env/static/public';

const handler = createRequestHandler({
    remoteDomains: ['localhost', 'www.jimmymostovoi.com'],
    //avif: true
})

export const GET = event => handler(event.request)