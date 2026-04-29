export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'emd-meilleur-cafe-aux-champignons.pages.dev') {
    url.hostname = 'meilleur-cafe-aux-champignons.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
