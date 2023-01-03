# Hugo Ava Theme

<div align="center">
  <img src="https://raw.githubusercontent.com/jmau111/hugo-theme-ava/main/images/screenshot2.png" alt="" width="100%">

[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/jmau111/hugo-theme-ava/blob/main/LICENSE)
[![release](https://img.shields.io/github/release/jmau111/hugo-theme-ava.svg)](https://github.com/jmau111/hugo-theme-ava/releases/latest)
[![release date](https://img.shields.io/github/release-date/jmau111/hugo-theme-ava.svg)](https://github.com/jmau111/hugo-theme-ava/releases)
[![release feed](https://img.shields.io/badge/release-feed-yellow)](https://github.com/jmau111/hugo-theme-ava/releases.atom)

</div>

[See online demo](https://demos.julien-maury.dev/hugo-theme-ava/)

## Installation

### Install Hugo

Follow [the official installation guide](https://gohugo.io/getting-started/installing/)

**You need the extended version**

### Create a new Hugo site

```
hugo new site my-site
```

This will create a fresh Hugo site in the folder `my-site`.

### Install theme with Git

Clone this repo into the themes folder
```
cd my-site
git clone https://github.com/jmau111/hugo-theme-ava.git themes/hugo-theme-ava
```

### Copy example content

You can use contents generated for the demo:

```
cp -a themes/hugo-theme-ava/exampleSite/. .
```

### Change colors

Feel free to change colors for both light and dark mode. See `themes/hugo-theme-ava/assets/scss/_mode_light.scss` or `themes/hugo-theme-ava/assets/scss/_mode_dark.scss`.

You can customize other CSS variables in `themes/hugo-theme-ava/assets/scss/_variables.scss`

### Don't forget to change the favicon

You don't have to remove the one set in the theme but ensure you replace the one in the `/static/` folder at the root or your project.

### humans.txt

I've included the `humans.txt` file cause I care about this file. You can put your name in it or replace this entire file in your `/static/` folder at the root of the project:

### Using the config.toml

Copy the `config.toml` file into the root folder of your Hugo site, then you can modify the copy.

## Run Hugo

Run dev server:

```
hugo server
```

Then you can go to [`localhost:1313`](http://localhost:1313).

Build:

```
hugo
```

## Configuration

### Change baseURL

```
baseURL = "https://www.mysite.com/"
```

Ensure you use a trailing slash.

### Google Analytics

Add you google analytics ID to the `config.toml`

```
// config.toml
[params]
  ga_id="UA-XXXXXXXX-X"
```

### Menu

You can edit and add main menu links in the `config.toml` under `[[menu.main]]`

### Images

You can set a default image in `config.toml`:

```
  [params.meta_tags]
          meta_og_image = "https://raw.githubusercontent.com/jmau111/hugo-theme-ava/main/images/default.jpeg"
```

You can customize per each post in the front matter:

```md
image: "/images/mangoose.jpeg"
```


If you don't set anything then the theme display the default image "https://raw.githubusercontent.com/jmau111/hugo-theme-ava/main/images/default.jpeg".

## Comments

There's now a custom Disqus partial. Please be aware this is not the most privacy-focused solution on the market.

To enable it, edit the Site variable `disqus` in the `config.toml` and replace "xxxxxxx" by your Disqus handle. Otherwise, nothing will be loaded.

## TODO

A lot of stuff, including:

* i18n
* more shortcodes
* author box 

But still, it's not a multi-purpose theme.

## License

You're welcome to fork this, but keep the license MIT please. 
