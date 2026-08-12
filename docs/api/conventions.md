# API Conventions

API responses use a safe envelope:

```json
{ "success": false, "error": { "code": "ERROR_CODE", "message": "Safe message", "requestId": "..." } }
```

Do not expose stack traces, tokens, passwords, infrastructure details, or secrets in API responses.

Only `/api/health` is implemented in Module 01.
