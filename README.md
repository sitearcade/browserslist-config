# @sitearcade/browserslist-config-arcade

Our browserslist config.

## Installation

1. `npm i -D @sitearcade/browserslist-config-arcade`
2. Add to `package.json`:

```json
{
  "browserslist": [
    "extends @sitearcade/browserslist-config-arcade"
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
