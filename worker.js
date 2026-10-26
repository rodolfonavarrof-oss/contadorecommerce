// Redirige www.contadorecommerce.cl a contadorecommerce.cl (301) y sirve el resto del sitio estático.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.contadorecommerce.cl') {
      url.hostname = 'contadorecommerce.cl';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
