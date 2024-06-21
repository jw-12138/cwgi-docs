---
layout: '../layouts/Page.astro'
---

CWGI is an open-source blog comment system based on GitHub Issues with minimalism in mind.

```html
<!-- index.html -->
<link rel="stylesheet" href="https://cwgi-cli.jw1.dev/style.css">
<div id="cwgi_box"></div>
<script src="https://cwgi-cli.jw1.dev/cwgi.iife.js"></script>
```

```js
// index.js
_CWGI.init()
```

## Features

- Fast to load (~ 25Kb after gzip)
- Naturally came with GitHub
  - XSS free
  - Easy notifications
  - Easy management / moderation

## Installation

1. [GitHub App](/github-app) - _REQUIRED_
2. [Server side](/server-side) - Optional
3. [Client side](/client-side) - _PARTIAL_
