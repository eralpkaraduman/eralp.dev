+++
title = 'Projects'
date = 2026-07-20
description = 'Side projects I build and run on my own. Most are live, and most are open source.'
aliases = ['/showcase/']
+++

A few side projects I built start to finish, most of them on my own. Most are live, and most are open source.

## [Robot Painter](https://robot.eralp.dev)

A browser tool for designing a skin for a 3D delivery robot. Paint each side in a 2D editor with text, shapes, images, and colors, tune the lighting and animations from a live control panel, and watch it wrap onto the rotating model.

Tech: React, TypeScript, Three.js (react-three-fiber), blender

{{< gallery images="/images/projects/robotpainter/skin-skaupat.png,/images/projects/robotpainter/skin-foodora.png,/images/projects/robotpainter/editor-foodora.png,/videos/rp-leva-controls.mp4,/videos/rp-base-color-lid.mp4,/videos/rp-robot-animation.mp4,/videos/rp-click-wheels.mp4,/videos/rp-blender.mp4" alts="A finished skin rendered on the 3D robot,A foodora skin rendered on the 3D robot,Editing a side in the 2D editor with the text and color controls,Wiring the model to a live control panel,Changing the base color and opening the lid from the controls,The finished skin animating on the model,Moving the wheels by clicking them,Animating the model in Blender" >}}

Live: [robot.eralp.dev](https://robot.eralp.dev)

## [LinkedFin](https://linkedfin.net)

A searchable entymology database of where fish names come from. It is a fully static React site on Cloudflare Pages with no backend or API: the entire dataset ships as a single SQLite file that the browser loads and queries in place with SQLite-WASM.

Tech: React, TypeScript, SQLite-WASM, Cloudflare Pages Functions

Browse a fish across languages, with its size-based name progression.

A static single-page app normally cannot show per-page link previews, since crawlers do not run its JavaScript. So the previews are built at the edge instead: a Cloudflare Pages Function injects each page's Open Graph tags, and a second function generates the preview image itself on the fly, drawing the fish name onto the card as the request comes in. The last image below is one such card, shown on X.

{{< gallery images="/images/projects/linkedfin/search-overview.png,/images/projects/linkedfin/species-octopus.png,/images/projects/linkedfin/species-gilthead-sparus-aurata.png,/images/projects/linkedfin/name-cipura-progression.png,/images/projects/linkedfin/name-lufer-bluefish-progression.png,/images/projects/linkedfin/og-in-platform-x.png" alts="The searchable table of fish names by language region and species,Octopus species page,The gilthead seabream with its ten regional names,How the name cipura evolved,How the name lufer (bluefish) evolved,An auto-generated preview card as posted on X" >}}

Live: [linkedfin.net](https://linkedfin.net) · Source: [github.com/eralpkaraduman/LinkedFin](https://github.com/eralpkaraduman/LinkedFin)

## [Text Wallpaper](https://textwallpaper.com)

Turns any text into a simple wallpaper, right in the browser, on desktop and mobile. Pick the colors and size, then save the image.

Tech: JavaScript SPA, iOS (Cordova/WebView), AdMob

Around 3,000 monthly active users.

{{< gallery images="/images/projects/textwallpaper/intro.gif,/images/projects/textwallpaper/m-colorpicker.png,/images/projects/textwallpaper/m-todo.png,/images/projects/textwallpaper/m-download.png,/images/projects/textwallpaper/m-yellow-black.png,/images/projects/textwallpaper/m-navy-light.png" alts="The editor in action,Picking a background color from the palette,A to-do list saved as a wallpaper,The save dialog with the finished wallpaper,A laptop asset tag, yellow on black,A laptop asset tag, navy on off-white" >}}

Live: [textwallpaper.com](https://textwallpaper.com) · Source: [github.com/eralpkaraduman/text-wallpaper-generator](https://github.com/eralpkaraduman/text-wallpaper-generator)

## [Lego Radio](https://github.com/eralpkaraduman/lego-radio)

A LEGO Retro Radio set turned into a working internet radio. I gutted its fake sound brick and fit a Raspberry Pi, amp, and speaker inside, running radio software I wrote in Rust; a button behind the dial browses free web-radio stations and announces them with on-device text-to-speech.

Tech: Rust, Raspberry Pi, embedded Linux

{{< gallery images="/images/projects/legoradio/front.jpg,/images/projects/legoradio/assembly.jpg,/images/projects/legoradio/electronics.jpg,/videos/lego-radio-demo.mp4,/videos/lego-button-test.mp4,/videos/lego-demo-tiktok.mp4" alts="The finished LEGO internet radio,Inside the shell: a Raspberry Pi, audio amp SHIM, and speaker wired in,The electronics on the bench: a Raspberry Pi with an audio amp SHIM driving a speaker,The finished radio playing internet stations,Testing the hardware button that changes stations,A short demo of the radio in use" >}}

Source: [github.com/eralpkaraduman/lego-radio](https://github.com/eralpkaraduman/lego-radio)

## [Rockmorse](https://superdamage.itch.io/rockmorse)

A game where an astronaut stranded on Mars arranges rocks into Morse code for passing satellites to read. Built for Ludum Dare, inspired by Andy Weir's The Martian.

Built with artist [erenozel.art](https://erenozel.art)

Tech: Unity

{{< gallery images="/images/projects/rockmorse-pushing.jpg,/images/projects/rockmorse.png,/images/projects/rockmorse-2.png,/images/projects/rockmorse-3.png" alts="The astronaut dragging a rock into a Morse row,In-game screen: an Earth message and the Morse-code rock grid,Intro comic: stranded on Mars, answering by Morse code,Cutscene: a satellite passing over Mars" >}}

Play: [superdamage.itch.io/rockmorse](https://superdamage.itch.io/rockmorse) · Source: [github.com/superdamage/LD30](https://github.com/superdamage/LD30)

## [Card Quest](https://card-quest.netlify.app)

A cross-platform single-player card game (Donsol) that runs on iOS, Android, and the web from a single codebase.

Tech: React Native, react-native-web, TypeScript

{{< gallery images="/images/rnw1/game.png,/images/rnw1/cards.png" alts="Gameplay on desktop web and Android from one codebase,Card gallery: a modal on desktop, a bottom sheet on mobile" >}}

Live: [card-quest.netlify.app](https://card-quest.netlify.app) · Source: [github.com/eralpkaraduman/card-quest](https://github.com/eralpkaraduman/card-quest) · Read the write-up: [React Native mobile and web code sharing](/posts/react-native-mobile-and-web-code-sharing/)

---

More about me: [Home](/) · [CV](https://eralpkaraduman.github.io/cv/) · [GitHub](https://github.com/eralpkaraduman)
