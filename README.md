# @xfuturum/is-font-installed

This package lets you check if a user has a given font installed (as if it was not clear from the name). A very scientific approach of rendering a string with a given font and comparing its width to a fallback is used. We assume you have Arial and Comic Sans MS installed. 


How to use:

```
import isFontInstalled from '@xfuturum/is-font-installed';

window.addEventListener('DOMContentLoaded',function () {
    console.log(isFontInstalled("Arial")); // outputs true
});

```

You can also check for the Cyrillic or Latin extended version of the font installed:

```
import { default as isFontInstalled, isFontInstalledCyrillic, isFontInstalledExtLat } from '@xfuturum/is-font-installed';

window.addEventListener('DOMContentLoaded',function () {
    console.log(isFontInstalled("Papyrus")); // outputs true
    console.log(isFontInstalledCyrillic("Papyrus")); // outputs false
});

```
