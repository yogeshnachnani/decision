# `decision-maker`

At times, I use the world's entropy to help me make trivial decisions of life.
I used to rely on random.org, but thought random number generation was a great use case for trying out [cloudflare workers](https://developers.cloudflare.com/workers/)

## Getting Started

* You'll need [Wrangler](https://github.com/cloudflare/wrangler) and a [Cloudflare account](https://dash.cloudflare.com). Documentation can be found [here](https://developers.cloudflare.com/workers/cli-wrangler/install-update).
* Open `wrangler.toml` and fill out `account_id` , `zone_id` and `route`. Follow steps 6 & 7 of [this guide](https://developers.cloudflare.com/workers/get-started/guide#6-preview-your-project)

### Developing

* [`src/index.ts`](./src/index.ts) calls the request handler in [`src/handler.ts`](./src/handler.ts), and will return the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

* `wrangler dev` to try out your worker on your local machine

### 👀 Previewing and Publishing

* `wrangler publish` to deploy  the worker to your cloudlare account. Follow Step 8 of [this guide](https://developers.cloudflare.com/workers/get-started/guide#8-publish-your-project)

## Credits

This worker was generated using the helpful [workers-typescript-template](https://github.com/cloudflare/workers-typescript-template) by cloudflare.
