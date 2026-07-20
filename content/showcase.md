+++
title = 'Selected Projects'
date = 2026-07-20
description = 'A few things I have built on my own.'
[build]
  render = 'always'
  list = 'never'
+++

A few side projects I built on my own, start to finish. Each one is live and open source. Screenshots to come; this is a text-only draft for now.

## [LinkedFin](https://linkedfin.net)

A multilingual database of fish-name etymologies, built as a single-page app with no backend. The whole dataset ships as a SQLite file that the browser loads and queries entirely client-side through the official SQLite WASM build, with Kysely for queries and Fuse.js for fuzzy search, so all searching and browsing happen in the frontend with no server or API.

The tricky part was per-page link previews, which a JavaScript-only SPA normally cannot have because crawlers do not run the client code. I solved it with a Cloudflare Pages Function that injects per-page Open Graph and Twitter meta tags using HTMLRewriter, plus a separate function that renders the preview image at the edge.

Stack: React 19, TanStack (Start, Router, Query), TypeScript, SQLite-WASM, Kysely, Fuse.js, Cloudflare Pages, Pages Functions and D1, Vite, Tailwind.

Live: [linkedfin.net](https://linkedfin.net) · Source: [github.com/eralpkaraduman/LinkedFin](https://github.com/eralpkaraduman/LinkedFin)

## [Text Wallpaper](https://textwallpaper.com)

A single-page app for turning text into simple phone wallpapers. It has kept a steady audience of around 3,000 monthly active users. I later shipped an iOS version that wraps the web app in a WebView and integrates the AdMob and Facebook Ads SDKs for monetization.

Stack: JavaScript SPA, iOS wrapper (Cordova/WebView), AdMob, Facebook Ads.

Live: [textwallpaper.com](https://textwallpaper.com) · Source: [github.com/eralpkaraduman/text-wallpaper-generator](https://github.com/eralpkaraduman/text-wallpaper-generator)

## [Card Quest](https://card-quest.netlify.app)

An open-source single-player card game (Donsol) that runs on iOS, Android, and the web from one React Native codebase. I built it to work out practical code sharing between React Native and React on the web.

It runs two bundlers in a single project, Metro for native and Webpack for web with `react-native` aliased to `react-native-web`, and splits platform-specific code by `.native.ts` and `.web.ts` file suffixes while keeping everything else shared. The game logic is decoupled from React entirely as plain TypeScript and bound to the UI through a context provider and hook, with platform-native navigation (react-navigation on mobile, react-router-dom on web) hidden behind shared link and screen abstractions. I wrote up the details in [a blog post](https://eralp.dev/posts/react-native-mobile-and-web-code-sharing/).

Stack: React Native, react-native-web, TypeScript, Metro and Webpack, styled-components, react-navigation, react-router-dom.

Live: [card-quest.netlify.app](https://card-quest.netlify.app) · Source: [github.com/eralpkaraduman/card-quest](https://github.com/eralpkaraduman/card-quest) · Write-up: [React Native mobile and web code sharing](https://eralp.dev/posts/react-native-mobile-and-web-code-sharing/)

## [Rockmorse](https://superdamage.itch.io/rockmorse)

Super Damage Games is my handle for game jams and experimental side projects. The one I point people to is Rockmorse: an astronaut stranded on Mars, with only one-way communication to Earth, arranges Martian rocks into Morse code for passing satellites to read his replies. I built it for Ludum Dare and open-sourced it, inspired by Andy Weir's The Martian.

Stack: game jam project (Ludum Dare).

Play: [superdamage.itch.io/rockmorse](https://superdamage.itch.io/rockmorse)
