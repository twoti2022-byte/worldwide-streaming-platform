# API conventions

API responses use `{ success: true, data }` or `{ success: false, error: { code, message, requestId } }`. Routes must validate input, authenticate users where required, perform server-side authorization, and never expose stack traces or secrets.
