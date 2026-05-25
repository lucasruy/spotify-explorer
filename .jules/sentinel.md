## 2025-05-25 - Prevent API error leakage to the client
**Vulnerability:** Upstream API error details and exceptions were exposed directly to the client in Next.js JSON responses.
**Learning:** Returning `details: await response.text()` or `error.message` from `NextResponse.json` can expose sensitive internal configurations, external API details, or stack traces if unhandled.
**Prevention:** Catch external API errors, log them locally using `console.error()`, and return a sanitized, generic error message (e.g. "An unexpected error occurred") to the client.
