export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true, message: "Server is online" });
    }

    return new Response("Server is online! Visit /health to check status.", {
      headers: { "content-type": "text/plain; charset=utf-8" }
    });
  }
};
