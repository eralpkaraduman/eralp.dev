+++
title = 'Projects'
date = 2026-07-20
description = 'Side projects I build and run on my own. Most are live, and most are open source.'
aliases = ['/showcase/']
noindex = true
[build]
  render = 'always'
  list = 'never'
+++

A few side projects I built start to finish, most of them on my own. Most are live, and most are open source.

## [Robot Painter](https://robot.eralp.dev)

A browser tool for designing a skin for a 3D delivery robot. Paint each side in a 2D editor with text, shapes, images, and colors, and watch it wrap onto the rotating model live.

Role: Solo

Tech: React, TypeScript, Three.js (react-three-fiber)

{{< video src="/videos/robot-painter.mp4" poster="/images/projects/robot-painter-poster.png" >}}

Live: [robot.eralp.dev](https://robot.eralp.dev)

## [LinkedFin](https://linkedfin.net)

A searchable database of where fish names come from, with no backend: the whole dataset is a SQLite file the browser loads and queries. Sharing a fish still gets a real link preview, a per-name Open Graph card built at the edge.

Role: Solo

Tech: React, TypeScript, SQLite-WASM, Cloudflare Pages and D1

{{< gallery images="/images/projects/linkedfin/species-rainbowwrasse-coris-julis.png,/images/projects/linkedfin/species-johndory-zeus-faber.png,/images/projects/linkedfin/name-cipura-progression.png,/images/projects/linkedfin/name-lufer-bluefish-progression.png" alts="Rainbow wrasse species page,John Dory species page,How the name cipura evolved,How the name lufer (bluefish) evolved" >}}

Every fish gets its own shareable preview card:

{{< gallery images="/images/projects/linkedfin/og-kefal-x.png,/images/projects/linkedfin/og-mirmir-x.png,/images/projects/linkedfin/og-kirjolohi-x.png,/images/projects/linkedfin/og-vatoz-x.png" alts="Link preview card for kefal,Link preview card for mirmir,Link preview card for kirjolohi,Link preview card for vatoz" >}}

Live: [linkedfin.net](https://linkedfin.net) · Source: [github.com/eralpkaraduman/LinkedFin](https://github.com/eralpkaraduman/LinkedFin)

## [Text Wallpaper](https://textwallpaper.com)

Turns any text into a simple phone wallpaper, right in the browser.

Role: Solo

Tech: JavaScript SPA, iOS (Cordova/WebView), AdMob

Around 3,000 monthly active users.

![A yellow-on-black text wallpaper on a phone](/images/projects/textwallpaper/mobile-04-yellow-on-black.png)

{{< gallery images="/images/projects/textwallpaper/flow-01-intro.png,/images/projects/textwallpaper/flow-03-text-entered.png,/images/projects/textwallpaper/flow-04-background-color-picker.png,/images/projects/textwallpaper/flow-08-text-size-control.png,/images/projects/textwallpaper/flow-13-download-popup.png" alts="Open the editor,Type any text,Pick a background color,Adjust text size,Save the wallpaper" >}}

Live: [textwallpaper.com](https://textwallpaper.com) · Source: [github.com/eralpkaraduman/text-wallpaper-generator](https://github.com/eralpkaraduman/text-wallpaper-generator)

## [Lego Radio](https://github.com/eralpkaraduman/lego-radio)

A LEGO Retro Radio set turned into a working internet radio. I gutted its fake sound brick and fit a Raspberry Pi, amp, and speaker inside, running radio software I wrote in Rust; a button behind the dial browses free web-radio stations and announces them with on-device text-to-speech.

Role: Solo

Tech: Rust, Raspberry Pi, embedded Linux

![The finished LEGO internet radio](/images/projects/legoradio/v1_8s.jpg)

![Inside: a Raspberry Pi, amp, and speaker packed into the LEGO shell](/images/projects/legoradio/v2_80s.jpg)

Source: [github.com/eralpkaraduman/lego-radio](https://github.com/eralpkaraduman/lego-radio) · Demo: [YouTube](https://www.youtube.com/watch?v=Mg7KIuxUpBU)

## [Rockmorse](https://superdamage.itch.io/rockmorse)

A game where an astronaut stranded on Mars arranges rocks into Morse code for passing satellites to read. Built for Ludum Dare, inspired by Andy Weir's The Martian.

Role: Built with artist [erenozel.art](https://erenozel.art)

Tech: game jam project (Ludum Dare)

![Rockmorse in-game screen: an Earth message and the Morse-code rock grid on Mars](/images/projects/rockmorse.png)

![Rockmorse intro comic: stranded on Mars, answering Earth by arranging rocks into Morse code](/images/projects/rockmorse-2.png)

![Rockmorse cutscene: a satellite passing over Mars carrying a new message](/images/projects/rockmorse-3.png)

Play: [superdamage.itch.io/rockmorse](https://superdamage.itch.io/rockmorse) · Source: [github.com/superdamage/LD30](https://github.com/superdamage/LD30)

## [Card Quest](https://card-quest.netlify.app)

A cross-platform single-player card game (Donsol) that runs on iOS, Android, and the web from a single codebase.

Role: Solo

Tech: React Native, react-native-web, TypeScript

![Card Quest gameplay on desktop web and Android from one codebase](/images/rnw1/game.png)

![Card Quest card gallery: a centered modal on desktop, a bottom sheet on mobile](/images/rnw1/cards.png)

Live: [card-quest.netlify.app](https://card-quest.netlify.app) · Source: [github.com/eralpkaraduman/card-quest](https://github.com/eralpkaraduman/card-quest) · Read the write-up: [React Native mobile and web code sharing](/posts/react-native-mobile-and-web-code-sharing/)

---

More about me: [CV](https://eralpkaraduman.github.io/cv/) · [GitHub](https://github.com/eralpkaraduman)
