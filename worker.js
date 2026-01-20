const VERCEL_APP = 'bactermfinder-tfjs.vercel.app';
const PROXY_PATH = '/projects/bactermfinder/app';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith(PROXY_PATH)) {
      const targetPath = url.pathname.replace(PROXY_PATH, '');
      const targetUrl = `https://${VERCEL_APP}${targetPath}${url.search}`;

      const response = await fetch(targetUrl, request);

      const newResponse = new Response(response.body, response);

      newResponse.headers.set('X-Proxy-By', 'Cloudflare Worker');
      newResponse.headers.set('Access-Control-Allow-Origin', '*');

      return newResponse;
    }

    return fetch(request);
  }
};
