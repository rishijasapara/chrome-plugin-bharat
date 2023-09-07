import './index.css'
import '../content/twitter-widgets.js'

const crx = 'create-chrome-ext'

document.querySelector('#app').innerHTML = `
<main>
<h3>Bharat 🇮🇳</h3>
<p>Automatically convert dropdown option on page load from India → Bharat</p>
<br>
<p class="thirteen-bold">Note: The option will still remain after Iceland, sorted by "I". Please scroll down or type "BH" when dropdown is focused.</p>
<br>
<a href="https://twitter.com/intent/tweet?button_hashtag=BharatDropdownPlugin&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet about #BharatDropdownPlugin</a>
<br>
<h6>v1.0</h6>
<a href="https://x.com/rishijasapara" target="_blank" class="thirteen-bold">Made in Bharat ❤️</a>
</main>
`