---
home: true
navbar: false
sidebar: false
meta:
  - name: "og:description"
    content: Opengraph description
  - name: description
    content: Replace default description in config.js
sitemap:
  exclude: false
  changefreq: hourly
heroImage: /hero.png
heroText: ESA
tagline: Entretien des Systèmes Aérolique
pageClass: front
actionText: Nos Services →
actionLink: /docs/
features:
- title: One-click Deploy
  details: Use the ”Deploy to Netlify“ button below to create a new VuePress installation with one simple click. Get my wonderful VuePress theme for free.
- title: Github
  details: You need a Github and a Netlify account. Otherwise the Deploy Button doesn't work.
- title: Netlify
  details: The “Deploy to Netlify” button helps users deploy new sites from templates with one single click on Netlify.
footer: ESA Grand Ouest | Copyright © 2019-present Him and Her

---


## One-click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/stephendltg/vuepress-deploy)


For more information, see [Him & Her](https://himandher.me)

{{$page.title}}

<div class="highlighted">
    <TextMagic/>
</div>
<img :src="$withBase('/logo.png')" alt="foo">
