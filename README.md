# Dynamic README

Code powering the animated chat bubble README on my [GitHub profile](https://github.com/chrissantamaria)

## Acknowledgements

This is (very heavily) developed based on the hard work of [Jason Long](https://github.com/jasonlong)! Seriously - most of the styling is directly from his implementation. Go give [his project](https://github.com/jasonlong/jasonlong) a ⭐

## Architecture

The README is loading a specially-crafted SVG with some inlined CSS for the animations. This SVG is generated on the fly using CloudFlare Workers for lightning fast response times.

Under the hood, it's using:

- [Preact](https://preactjs.com) for rendering
- [Goober](https://goober.js.org) for tiny CSS-in-JS styling
- [ESBuild](https://esbuild.github.io) for ridiculously fast builds

## Usage

To run this yourself locally, you'll first need to set up [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) from CloudFlare. This will give you a local dev server and handle deployment.

```bash
yarn global add @cloudflare/wrangler
wrangler login
```

Obtain a key from [Weather API](https://www.weatherapi.com/) (free tier allows 1,000,000 requests / month).

Copy `wrangler.template.toml` to a new `wrangler.toml` file and fill with your `account_id` and `WEATHER_API_KEY`.

Install dependencies:

```bash
yarn
```

Then, start up the dev server:

```bash
wrangler dev
```

To deploy to a public Worker:

```bash
wrangler publish
```

# Todo:

- [ ] Map weather data to visually-friendly emoji
- [ ] Add error monitoring (Slack? Sentry?) to deployed Worker
- [ ] Fix Goober `keyframes` not properly injecting
