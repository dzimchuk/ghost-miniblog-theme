# ghost-miniblog-theme
Miniblog.Core theme ported to Ghost


## Live reloading when developing a theme

If you're developing or updating a theme it may be useful to have Ghost automatically pick up changes as you copy your updated theme files to `content/themes/{your theme name}` directory. You can use [nodemon](https://github.com/remy/nodemon) to accomplish that.

```
npm install -g nodemon@latest

nodemon current/index.js --watch content/themes/ghost-miniblog-theme --ext hbs,js,css
```
