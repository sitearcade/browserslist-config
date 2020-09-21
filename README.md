# @sitearcade/browserslist-config

Our browserslist config.

## Installation

1. `npm i -D @sitearcade/browserslist-config`
2. Add to `package.json`:

```json
{
  "browserslist": [
    "extends @sitearcade/browserslist-config"
  ]
}
```

## Environment config

```js
const env =
  process.env.BROWSERSLIST_ENV ||
  process.env.NODE_ENV ||
  'development';
```
