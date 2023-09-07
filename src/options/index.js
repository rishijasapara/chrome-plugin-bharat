import './index.css'
import '../content/twitter-widgets.js'

const crx = 'create-chrome-ext'
document.querySelector('#app').innerHTML = `
  <main>
  <h3>Settings</h3>
  <br>
  <p>There are no settings for this Chrome Extension. Dropdown selections are automatically changed to Bharat 🇮🇳.</p>
  <p>If you would want to disable the functionality, kindly uninstall the plugin. Jai Hind 🇮🇳</p>
  <br><br>
  <a href="https://twitter.com/intent/tweet?button_hashtag=BharatDropdownPlugin&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet about #BharatDropdownPlugin</a>
  <br>
  <h6>v1.0</h6>
  <a href="https://x.com/rishijasapara" target="_blank" class="thirteen-bold">Made in Bharat ❤️</a>
  </main>
`