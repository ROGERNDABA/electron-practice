# Electron practice

I never thought making desktop applications could be this easy.🍃

# How to run

Just run `npm install` inside the project directory,
then run `npm start`.

# Rundown

## IPC renderer

Used for handling the javascript/jquery events
and normal js/jquery UI display on
the html side.

you need to...
`renderer.js`
```javascript
const {
    remote,
    ipcrenderer
} = require('electron');
```

then require on html side

```html
<script>
    $(document).ready(function () {
        require('./renderer.js');
    });
</script>
```
