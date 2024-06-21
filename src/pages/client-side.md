---
layout: '../layouts/Page.astro'
---

Client side code is built with Solid.js and TailwindCSS, so the size of the bundle is relatively small (~ 25Kb). The code is available on [GitHub](https://github.com/jw-12138/cwgi-cli).

## How to use?

There are two ways to use the client side code, one is to use the pre-built bundle, and the other is to build the bundle yourself.

### Use the pre-built bundle

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

Or, we can use the **ES module** version:

```html
<!-- index.html -->
<link rel="stylesheet" href="https://cwgi-cli.jw1.dev/style.css">
<div id="cwgi_box"></div>
```

```js
// index.js

// you can use it just like this or download it to your project and import it
import {init} from 'https://cwgi-cli.jw1.dev/cwgi.js'

init()
```

### Build the bundle yourself

1. Fork the repo: [jw-12138/cwgi-cli](https://github.com/jw-12138/cwgi-cli)
2. Go to Cloudflare Dashboard **->** Workers & Pages **->** Create, Switch to Pages tab, and click `Connect to Git`.
3. Choose the repository you just forked (should be named as `cwgi-cli`), and click `Begin Setup`.
4. Choose `Vue` as the framework preset (the code is written in solid tho, but it doesn't matter), and click `Save and Deploy`.

When the deployment is done, you should be able to get a URL like `https://cwgi-cli.workers.dev`, and you can replace the URL in the pre-built bundle with this one.

Also, remember to set a custom domain for this worker in order to use it in the main land China.

## Functions and options

As you can see that there is only one function in the client side code, `init`, the parameters are listed below:

```ts
interface CWGI_Options {
  darkMode?: boolean,
  proxy?: string,
  owner: string,
  repo: string,
  clientId: string
}

declare function init(githubIssueId: number, options: CWGI_Options)
```

- `githubIssueId`, _REQUIRED_, the ID of the issue that you want to display.
- Options:
  - `darkMode`, optional, whether to use dark mode, set to `undefined` to use auto dark mode (prefers-color-scheme), set to `true` to enforce dark mode, and vice versa.
  - `proxy`, optional, the URL of the previously deployed Cloudflare worker, if you don't specify this, all the requests will be sent to the GitHub API directly.
  - `owner`, _REQUIRED_ the owner of the repository.
  - `repo`, _REQUIRED_ the repository name.
  - `clientId`, _REQUIRED_ the client ID of the GitHub App.

## Use in SPAs

Just call the `init` function again when the route changes, the function will automatically remove the previous instance and create a new one.

```js
// router.js
import {init} from 'cwgi'
import {useRoute} from 'vue-router'

const route = useRoute()

route.afterEach(() => {
  init()
})
```

## Programmatic dark mode

Just like in SPAs, you can call the `init` function with the `darkMode` option.

```js
// index.js
import {init} from 'cwgi'

init(1, {darkMode: true})
```
