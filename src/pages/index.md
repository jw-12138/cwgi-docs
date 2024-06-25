---
layout: '../layouts/Page.astro'
showComments: true
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

- Fast to load (~ 23Kb gzipped)
- No Ads, Forever 🤝
- Much prettier than most comment systems out there
- Setup once, use in anywhere
- GitHub's natural abilities
  - XSS / Bots / Spam prevention
  - Easy notifications (webhook, email)
  - Easy management / moderation

## Installation

1. [GitHub App](/github-app) - _REQUIRED_, you need a GitHub App to authenticate users
2. [Server side](/server-side) - Optional, you need a back-end to handle GitHub API requests
3. [Client side](/client-side) - _PARTIAL_, you need to include the script and style in your blog

---
