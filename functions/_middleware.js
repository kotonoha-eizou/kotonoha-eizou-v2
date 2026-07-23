export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'hitotoki-eizou.pages.dev') {
    url.hostname = 'hitotoki-eizou.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
