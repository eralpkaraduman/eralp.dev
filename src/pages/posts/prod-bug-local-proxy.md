---
layout: "../../layouts/BlogPost.astro"
title: "Fixing production bugs on local environment using a proxy."
description: "Fixing production bugs on local environment using a proxy."
publishDate: "31 Jan 2021"
---

Say you have an app that reads json from an API, renders some UI. And you have a specific API endpoint that crashes the UI on production. This was exactly the case couple days ago in our project, there are several ways to fix this, and I chose to use a proxy to fix it on my local environment.

I saved the API response that crashes the UI to a file on my computer. Installed [Proxyman](https://proxyman.io) (other alternatives as [Charles](https://www.charlesproxy.com/) or [mitmproxy](https://mitmproxy.org) are good too). Routed my browser traffic through the proxy. Setup a rule in proxy so that when I go to `localhost/api/aResourceThatWorksFine` it would capture it. Then, instead of asking my local api server, it would return the response I saved. The file contains the response from `production/api/theResourceThatCrashes`. The term for this kind of rule in [Proxyman](https://proxyman.io) is [Map Local](https://docs.proxyman.io/advanced-features/map-local). This way, I was able to investigate the issue with little hassle. Without for example moving the production database to my local environment.

Couple gotchas were that if your server sends a `Date` header. You need to remove it from the response you saved to the file proxy reads. Since it will be the same and behind every time proxy returns it, browsers don’t like it. Other header you might need to change is `Access-Control-Allow-Origin`. Make sure it has your localhost uri as value or just set it to `*`.
