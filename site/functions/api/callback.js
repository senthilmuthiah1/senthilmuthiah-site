// Step 2 of GitHub login: swaps GitHub's code for a token and hands it to the editor window.
function reply(origin, status, content) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  const html = `<!doctype html><html><body><script>
(function () {
  var message = ${JSON.stringify(message)};
  var allowed = ${JSON.stringify(origin)};
  function receive(e) {
    if (e.origin !== allowed) return;
    window.opener.postMessage(message, allowed);
    window.removeEventListener('message', receive, false);
  }
  window.addEventListener('message', receive, false);
  window.opener.postMessage('authorizing:github', allowed);
})();
</script><p>${status === 'success' ? 'Logged in. You can close this window.' : 'Login failed. Close this window and try again.'}</p></body></html>`;
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Set-Cookie': 'decap_oauth_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
    },
  });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookie = request.headers.get('Cookie') || '';
  const saved = (cookie.match(/(?:^|;\s*)decap_oauth_state=([^;]+)/) || [])[1];

  if (!code || !state || state !== saved) {
    return reply(url.origin, 'error', { message: 'Login session expired or invalid. Please try again.' });
  }

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'User-Agent': 'senthilmuthiah-site' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });
  const data = await res.json();

  if (!data.access_token) {
    return reply(url.origin, 'error', { message: data.error_description || 'GitHub did not return a token.' });
  }
  return reply(url.origin, 'success', { token: data.access_token, provider: 'github' });
}
